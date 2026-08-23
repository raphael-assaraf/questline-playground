# questline playground

A small status page for testing the questline recorder inside coding
agents. Each tool reads its own config from this repo: Claude Code the
skill in `.claude/skills/`, Cursor the rule in `.cursor/rules/`, Codex
`AGENTS.md` plus `.codex/config.toml`.

## Setup, once per machine

    curl -fsSL https://app.questline.ai/install.sh | sh
    qa login

## The test, same in every tool

Open this repo in the tool and ask:

> Change the worker service to up in app.js, then record a short film
> of the change and post it: serve the app, film it with questline,
> and give me the watch link.

Watch for: what the tool asks before running commands, whether it finds
the recording instructions on its own, whether the film appears at the
watch link, and how long the whole loop takes. One recording per
attempt; note where the agent misread the instructions.

## Serve by hand

    python3 -m http.server 8899
