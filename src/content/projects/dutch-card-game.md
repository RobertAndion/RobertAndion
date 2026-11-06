---
title: Dutch — online multiplayer card game
description: A real-time web version of the card game Dutch (a Cambio/Cabo variant). Play against AI bots or friends, with accounts, Elo ranking and a live lobby.
date: 2026-10-06
featured: true
private: true
url: https://dutch.robertandion.com
tags: [Java 21, Spring Boot 3, WebSocket, React, TypeScript, SQLite, Docker]
---

Dutch is a memory-and-bluffing card game. I built a full online version and run it myself at
[dutch.robertandion.com](https://dutch.robertandion.com). The source is private, but the game is live and free to play.

## What it does

- **Play solo or with friends:** 1–3 AI bots at Easy or Hard difficulty, or up to four people at a table. A lobby
  lets you create and join tables, optionally password-protected.
- **Real-time play:** a server-authoritative game over WebSockets. Clients only ever see what their player is
  allowed to see, so face-down cards never leak to the browser.
- **Accounts and ranking:** play as a guest or sign up. A table where everyone is signed in counts as ranked, using pairwise
  Elo, card-themed rank tiers, a leaderboard and public profiles.
- **Social:** friends, a "who's online" strip showing what people are playing, table invites and share links.
- **Configurable rules:** every disputed house rule is a config flag rather than a hard-coded choice.

## How it's built

- **Server:** Java 21 and Spring Boot 3. A pure rules engine is kept apart from the transport. It's surrounded by bots, WebSocket and REST
  APIs, rooms and lobby, and a social layer, with SQLite storage and nightly backups.
- **Client:** React, TypeScript, Vite and Framer Motion for card animations.
- **Testing:** engine unit tests plus a 10,000-game fuzz run, statistical bot tests, server integration tests, a
  scan that checks outbound messages for leaked hidden cards, a 50-room load test, and Playwright end-to-end tests
  against a real server.
- **Ops:** Docker Compose behind Caddy on a hardened DigitalOcean droplet, with off-site backups and volume snapshots.
