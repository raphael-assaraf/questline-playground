## Filmed previews with questline

This repo is connected to questline. Every pull request gets a Vercel
preview deployment. The questline fleet films the preview in its own
cloud Chrome, outside any agent process, and posts the film on the
pull request: a GIF, a watch link, and the console and network
evidence from the take. Nothing records on this machine.

The loop after a UI change:

1. Push a branch and open a pull request (`gh pr create`).
2. Wait for the questline comment. It lands about three minutes after
   the Vercel preview is ready. Poll with
   `gh pr view <number> --comments`.
3. Give the user the watch link and the GIF from the comment.

To film a URL with no pull request: install the CLI
(`curl -fsSL https://app.questline.ai/install.sh | sh`) and run
`qa film <url> --brief "<changelog line>"`. The first run opens a
browser once so the human can approve the machine; that click is
theirs, so wait for it. The command prints the watch link and saves a
poster file. Reply with both.

Rules:

- One pull request per subject. One film per deployment; do not
  re-trigger a film for the same commit.
- The film shows the deployed app. Confirm the preview builds before
  you promise a film.
- Film briefs and session titles are changelog lines ("worker service
  reports up"). No hype words.
- Do not submit forms that create, change, or delete server data
  unless the user grants it.
