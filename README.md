# questline playground

A small status page for testing the questline recorder inside coding
agents. The repo is connected to questline and Vercel: every pull
request gets a preview deployment, the questline fleet films the
preview in the cloud, and the film lands on the pull request as a
comment. No recorder runs on the test machine.

Each tool reads its own config from this repo: Claude Code the skill
in `.claude/skills/`, Cursor the rule in `.cursor/rules/`, Codex
`AGENTS.md` plus `.codex/config.toml`.

## The test, same in every tool

Open this repo in the tool and ask:

> Change the worker service to up in app.js and open a pull request.
> questline films the preview and posts the film on the pull request.
> Give me the film link when it lands.

Watch for: whether the agent finds the loop in the repo instructions,
the minutes from the ask to the film comment, whether the agent polls
the pull request for the comment or forgets it, and where it misreads
the instructions. One pull request per attempt.

## The loop the agent follows

1. Change the code.
2. Push a branch and open a pull request.
3. Vercel builds the preview. The questline fleet films it and posts
   the film on the pull request, about three minutes after the
   preview is ready.

## Film a URL without a pull request

    curl -fsSL https://app.questline.ai/install.sh | sh   # once
    qa login                                              # once
    qa film <url> --brief "<changelog line>"
