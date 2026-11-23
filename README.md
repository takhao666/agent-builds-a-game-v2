# Neon Snake — one prompt, one agent, one game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/takhao666/agent-builds-a-game-v2/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/takhao666/agent-builds-a-game-v2/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

An entry for the [$20 bounty on make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709): the agent builds a game from one prompt.

## The one prompt

> Build a tiny neon browser game called Neon Snake: a glowing snake on a dark starfield grid eats glowing orbs to grow and score, golden bonus orbs are worth 50, the game speeds up as the score grows, 3 lives with a short breather after each hit, walls and its own body are deadly, with a start screen, a game-over screen with restart, a score / best / lives display, arrow keys or WASD or swipe to steer — everything in one HTML file, no network needed.

## The game

**Neon Snake** — open `game.html` in any browser and play. No build step, no network.

- 🐍 Steer with ← ↑ ↓ →, WASD, or swipe on touch
- 🔵 Eat glowing orbs: +10 points each, the snake grows
- 🌟 Golden bonus orbs: +50 points
- 🚀 Speed rises with your score (level = score / 100 + 1)
- ♥️ 3 lives — hitting a wall or yourself costs one, then a short breather
- 🏆 Best score saved locally, start screen and game-over screen with restart (R)

`game.html?demo=1` runs a seeded autopilot that plays the game itself — that is how the video's gameplay was recorded, from the real game code running headlessly. In the demo the autopilot scored 510 in 18 seconds.

## The video

`video.mp4` (~40 seconds, 1920×1080) tells the whole story: the prompt, the agent working, the finished game actually running, and make.fun's referral end card with the referral code. It is posted on X as the entry — see `POST.json` for the post once it exists.

The video was rendered in this session from the real game: headless Chrome screenshots of the game in demo mode, plus animated title and terminal scenes, assembled with ffmpeg, ending on make.fun's official 16:9 referral end card from the press pack with referral code `hvn9m3q0`.

## The entry program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repo root to the output directory, where the house reads the post and its counts from X:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds the post's address on X (`{"url": "https://x.com/<handle>/status/<id>"}`) — the placeholder is replaced once the video is posted.
