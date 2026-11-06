---
title: JukeBot (Node.js Discord music bot)
description: A Discord music bot written in Node.js that plays audio in voice channels, with a paged queue and per-user playlists.
date: 2021-05-11
featured: true
repo: https://github.com/RobertAndion/DiscordMusicBot
tags: [Node.js, discord.js, yt-dlp, FFmpeg, Jest, Docker]
---

A JavaScript take on my [Python music bot](/projects/discord-music-bot-python/), built on discord.js v14 and
`@discordjs/voice`, with yt-dlp and FFmpeg handling audio.

## Features

- Play by search term or URL, with a paged queue, skip (one or several), pause/resume, shuffle and clear.
- Per-user playlists: build them from the current song or the whole queue, then rename, edit, play, export or import them as JSON.
- Commands go through a single command handler, with Jest unit tests for the handler and the audio layer.
- A Dockerfile and host start-up script for running it as a long-lived service.
