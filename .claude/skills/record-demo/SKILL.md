---
name: record-demo
description: Get a filmed demo of a change in this app. Open a pull request; the questline fleet films the preview deployment and posts the film on the pull request.
---

# Filmed previews with questline

This repo is connected to questline. Every pull request gets a Vercel
preview deployment. The questline fleet films the preview in its own
cloud Chrome, outside this process, and posts the film on the pull
request: a GIF, a watch link, and the console and network evidence
from the take. Nothing records on this machine.

The loop after a UI change:

1. Push a branch and open a pull request (`gh pr create`).
2. Wait for the questline comment. It lands about three minutes after
   the Vercel preview is ready. Poll with
   `gh pr view <number> --comments`.
3. Show the user the watch link and the GIF from the comment.

To film a URL with no pull request: install the CLI once
(`curl -fsSL https://app.questline.ai/install.sh | sh`, then
`qa login`) and run `qa film <url> --brief "<changelog line>"`. It
prints the watch link when the film is ready.

Rules:

- One pull request per subject. One film per deployment; do not
  re-trigger a film for the same commit.
- The film shows the deployed app. Confirm the preview builds before
  you promise a film.
- Film briefs and session titles are changelog lines ("worker service
  reports up"). No hype words.
- Do not submit forms that create, change, or delete server data
  unless the user grants it.
