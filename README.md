# Aeon Atlas

A map of the [aeon](https://github.com/aaronjmars/aeon) fork ecosystem — every public fork, what they enable, where they cluster.

This repo is a fork of [`aaronjmars/aeon`](https://github.com/aaronjmars/aeon) whose sole purpose is to keep that map fresh. The weekly atlas refresh runs via the free no-LLM workflow [`.github/workflows/atlas-free.yml`](.github/workflows/atlas-free.yml); the Claude `atlas` skill in `aeon.yml` stays disabled (empty Anthropic credits). Everything else from the upstream skill catalog ships disabled unless you enable it.

For what aeon itself is, see [the upstream README](https://github.com/aaronjmars/aeon).

## Demo

[![Quartz universe graph](docs/assets/universe-graph-dark.png)](https://github.com/swarm-ai-research/aeon-atlas/raw/main/docs/assets/universe-graph-dark.mp4)

> Quartz graph of the fork ecosystem — three clusters, one per upstream root (`aeon`, `aeon-agent`, `miroshark-aeon`), connected by skill-overlap edges. **Click the still for the [10-second physics animation](https://github.com/swarm-ai-research/aeon-atlas/raw/main/docs/assets/universe-graph-dark.mp4)** ([light version](https://github.com/swarm-ai-research/aeon-atlas/raw/main/docs/assets/universe-graph-light.mp4)). Interactive version at **[swarm-ai-research.github.io/aeon-atlas/universe/](https://swarm-ai-research.github.io/aeon-atlas/universe/)**. Re-record with `node scripts/screenshot-universe.mjs --video --theme dark`.

## What you get

| Artifact | What it shows |
|---|---|
| [`/universe/`](https://swarm-ai-research.github.io/aeon-atlas/universe/) | Quartz-rendered graph + per-entity notes for every fork, ecosystem project, skill pack, and novel skill. Backlinks + tag clusters + global graph view. |
| [`docs/atlas.html`](docs/atlas.html) | Interactive Cytoscape map. Fork tree, colored by recent activity. Click any node for its enabled-skill list, ★, last-push date. |
| [`docs/atlas.md`](docs/atlas.md) | Readable digest — top forks by ★, most-active recent pushes, most-enabled skills across the fleet, strongest customization-overlap pairs. |
| [`docs/whats-new.md`](docs/whats-new.md) | Diff vs the most recent prior `history/` snapshot — new/removed forks, ★ movers, new novel skills, ecosystem additions, activity transitions. |
| [`docs/digest/`](docs/digest.md) + [`feed.xml`](docs/feed.xml) | Permanent per-date weekly-digest pages and an Atom feed. Subscribe at `/aeon-atlas/feed.xml`. |
| [`atlas.json`](atlas.json) | Machine-readable: nodes (repos with metadata), edges (`fork-of` + `skill-overlap`), per-skill popularity. |

## How it builds the graph

For every public fork of `aaronjmars/aeon` (via the GitHub Forks API):

1. **Fetch** the fork's `aeon.yml` and parse which skills it has `enabled: true`.
2. **Compute its delta** from upstream (which skills it added or disabled vs. the upstream baseline). Vanilla forks — those that cloned and never customized — have an empty delta and don't get overlap edges. The signal of interest is **customization patterns**, not identical clones.
3. **Score overlap** between any two non-vanilla forks as the Jaccard similarity of their deltas. Keep the top 4 per fork above 0.30 with at least 2 shared customizations.

So the dense edges of the graph aren't "these forks both contain heartbeat" (universal — heartbeat ships enabled in upstream) but "these forks both enabled `narrative-tracker` and `defi-monitor` while disabling `morning-brief`."

## Refresh cadence

Weekly, Sunday 04:00 UTC via **Atlas (free)** ([`.github/workflows/atlas-free.yml`](.github/workflows/atlas-free.yml)): `node scripts/atlas.mjs` regenerates everything, diffs against the prior run, and opens a PR only when something changed materially (new fork, ★ jump, dormant fork resumed, new high-overlap pair, etc.). No LLM keys required. The Claude `atlas` skill remains available in [`skills/atlas/SKILL.md`](skills/atlas/SKILL.md) if you enable it in `aeon.yml` with Anthropic credits.

### Free paths for forks

**Zero-key weekly atlas (no LLM) — this fork's Sunday path:** [`.github/workflows/atlas-free.yml`](.github/workflows/atlas-free.yml) (`Atlas (free)`, cron `0 4 * * 0` + `workflow_dispatch`). Enable GitHub Actions on your fork and keep that workflow. No Anthropic/Bankr/Ollama secrets required. Optionally add a repository secret `DISCORD_WEBHOOK_URL` to post when a PR opens; if unset, Discord is skipped quietly.

**Free LLM skills** (Claude Code via gateway — still needs a free-tier provider key):

1. In `aeon.yml`, set `gateway.provider: openrouter` or `deepseek` (default stays `direct` for paid Anthropic).
2. Add the matching Actions secret: `OPENROUTER_API_KEY` or `DEEPSEEK_API_KEY`.
3. Pin `model:` (and any per-skill `model:`) to a free/compatible id — Claude model names will not work on these routes.
   - OpenRouter examples: `deepseek/deepseek-chat-v3-0324:free`, `meta-llama/llama-4-scout:free`, `openrouter/free`
   - DeepSeek examples: `deepseek-chat`, `deepseek-v4-flash`, `deepseek-v4-pro` (pin from [DeepSeek docs](https://api-docs.deepseek.com/); IDs change)
4. Caveats: free OpenRouter models are rate-limited; tool/compatibility varies by model; Bankr/`direct` remain the paid paths.


To regenerate locally:

```bash
node scripts/atlas.mjs              # fresh fetch + write all artifacts
node scripts/atlas.mjs --cache      # reuse cached fork list if < 24h old
node scripts/atlas.mjs --json       # print atlas.json to stdout
node scripts/atlas.mjs --depth 2    # include forks-of-forks (default 1)
```

The script uses `gh api` for auth headroom; with no auth it falls back to unauthenticated `curl` (60 req/hr rate limit — usually fine for one run).

## What it isn't

- **Not a skill marketplace.** It catalogs what's enabled in `aeon.yml`, not what's available in `skills/`. A fork can ship skills nobody runs; those don't show here.
- **Not a contribution graph.** Doesn't currently look at committers or contributor overlap — could be added later.
- **Not real-time.** Weekly cadence is enough for an ecosystem that adds a few forks per day.
- **Not portable to other forks.** The atlas always maps `aaronjmars/aeon`'s descendants. Use `--upstream owner/repo` if you want to point it elsewhere.

## Relationship to upstream

This is a vanilla GitHub fork — all upstream commits flow in via `git fetch upstream main`. The only divergence is `scripts/atlas.mjs`, `skills/atlas/`, the `atlas` line in `aeon.yml`, the rewritten README, and the regenerated artifacts. Periodic merges from upstream keep the rest in sync.

---

Originally created with the methodology pioneered in [`rsavitt/aeon`'s notegraph](https://github.com/rsavitt/aeon/blob/main/docs/notegraph.html) work (PRs #64–#79). Same TF-IDF + clustering tooling, applied to the fork network instead of internal notes.
