---
name: record-demo
description: Film a browser session of this app with questline and publish it. Use after shipping a UI change, before opening the pull request.
---

# Record a demo with questline

The recorder films a headless Chrome from outside this process; the
record cannot be edited from here. If `qa` is missing:
`curl -fsSL https://app.questline.ai/install.sh | sh`.

1. Serve the app: `python3 -m http.server 8899` (background).
2. Start the recorder (background):
   `qa watch http://localhost:8899 --out recordings/<slug> --title "<changelog line>"`
3. Wait 6 s. Drive the recorded Chrome with Playwright over
   `connect_over_cdp("http://localhost:9223")`. Move the mouse in 20+
   steps, pause 2 s after each click and navigation, 4 s on the last
   screen. Name chapters with
   `page.evaluate("l => window.__qaMark && window.__qaMark(l)", "<label>")`.
4. Stop: `touch recordings/<slug>/stop`. The film renders on stop; wait
   for `report.html` to appear.
5. Publish: `qa push recordings/<slug>` (prints the watch URL and the
   embed markdown). Post to the PR: `qa pr recordings/<slug>`.

After push, show the user `recordings/<slug>/poster.jpg` plus the watch
URL (chats embed images; most do not embed video).

Rules: questline is self-contained, install no other skills or
extensions for it; stop the take the moment the flow ends (an unstopped
take multiplies the render); a film with zero clicks proves nothing, so
click the change; verify the flow works before recording; re-record a
failed take; never stage the DOM; titles are changelog lines with no
hype words.
