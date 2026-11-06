---
title: Discord Music Bot (Python + Lavalink)
description: A self-hosted Discord music bot with queues, per-user playlists and per-server settings. It runs in a locked-down Docker container and deploys from GitHub Actions.
date: 2020-11-15
featured: true
repo: https://github.com/RobertAndion/Discord_Music_Bot
tags: [Python, discord.py, Lavalink, Docker, GitHub Actions, pytest]
---

A music bot for Discord voice channels that I first wrote in 2020 and still maintain. It streams audio through
[Lavalink](https://github.com/lavalink-devs/Lavalink) and is organized as discord.py cogs.

## Features

- Play, queue, skip, shuffle, loop (song or queue), search with a pick-from-five menu, and per-server play history.
- Per-user playlists that the owner can back up: the bot DMs a zip of them on request.
- Per-server volume (0–200%) with isolated settings and history for each guild.
- Resilient track loading, with exponential-backoff retries, a per-source circuit breaker and fallback between sources.

## Running it

- A Docker image starts Lavalink, waits for it to be healthy, then launches the bot. The container runs read-only,
  drops all capabilities, enforces no-new-privileges and has CPU/memory limits.
- GitHub Actions lints and tests every pull request. Pushes to main deploy over SSH to a server, where they rebuild the
  image and restart the container. Secrets live in GitHub, never in the repo.
