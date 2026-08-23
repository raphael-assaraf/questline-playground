## Filmed sessions with questline

questline is a recorder. If the `qa` command is missing, install
it: `curl -fsSL https://app.questline.ai/install.sh | sh`. It films a headless Chrome from outside the
agent process, so the driver cannot edit the record. The film shows the
cursor track and a strip of the console and network events.

Film after you change the UI, before you open the pull request.

1. Start the recorder:
   `qa watch <url> --out recordings/<slug>`
2. Wait 6 s. Drive the recorded Chrome on port 9223 with Playwright:
   `connect_over_cdp("http://localhost:9223")`. Move the mouse in 20
   steps or more. Pause 2 s after each click and each navigation, and
   4 s on the last screen.
3. Stop the recording: `touch recordings/<slug>/stop`. The film renders
   on stop.
4. Publish: `qa push recordings/<slug>`. It prints the session URL.
   The user runs `qa login` once before the first publish.
5. Post the film to the pull request: `qa pr recordings/<slug>`.

Rules:

- Verify the flow works before you record. Re-record a failed take.
- Every subject gets a new recording and a new session id.
- QA films are evidence. Do not stage the DOM in them.
- Do not submit forms that create, change, or delete server data
  unless the user grants it.
- Session titles and notes are noun phrases or changelog lines
  ("New: bulk export"). No slogans, no hype words.
