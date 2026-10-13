# Atlas Workflow Lifecycle

## Overview

The atlas skill is an autonomous ecosystem mapping tool for the aeon fork repository network. It enumerates all GitHub forks of upstream repositories, analyzes their enabled skills, and generates interactive ecosystem maps.

## Phases

### Phase 1: Notification Infrastructure (✅ COMPLETE — 2026-09-15)

**Objective:** Establish outbound notification channel for atlas workflow completion status.

**Accomplishments:**
- Configured Discord webhook URL as GitHub Actions repository secret (`DISCORD_WEBHOOK_URL`)
- GitHub Actions re-enabled at repository level (was initially disabled)
- Notification pipeline tested and verified functional

**Technical Details:**
- Secret added via GitHub UI: Settings → Secrets → Actions → `DISCORD_WEBHOOK_URL`
- Discord webhook URL format: `https://discordapp.com/api/webhooks/{WEBHOOK_ID}/{WEBHOOK_TOKEN}`
- Workflow environment has access to secret for use in skill execution

**Outcome:** Ready for first autonomous atlas workflow execution with Discord notification on completion.

### Phase 2: First Atlas Run (❌ FAILED — 2026-09-15, BLOCKED)

**Objective:** Execute atlas skill workflow to generate ecosystem maps for 142+ fork repositories.

**Execution Timeline:**
- Triggered: 2026-09-15 @ 13:49:13 UTC via `mcp__github__actions_run_trigger`
- Input: `skill: atlas`, Reference: main branch
- Job Duration: 13 seconds
- Completed: 2026-09-15T13:49:32Z with **FAILURE**

**Workflow Steps Executed:**
1. ✅ Setup (git, Node.js 20, Claude CLI installed)
2. ✅ Preflight (GitHub secrets validated, pre-fetch scripts successful)
3. ❌ **Run (Claude API call)** — FAILED with HTTP 400 error
4. ⏭️ Post-flight steps (skipped due to upstream failure)

**Root Cause: Insufficient API Credits**
- Error: `api_error_status: 400`
- Message: `"Credit balance is too low"`
- Claude API rejected skill execution at runtime, within workflow run step
- Issue filed: ISS-006 (critical severity)

**What the Atlas Skill Does:**
1. Enumerates GitHub forks of 3 upstream repos
2. Fetches aeon.yml from each fork to determine enabled skills
3. Builds ecosystem graph with skill-overlap edges
4. Generates three output formats:
   - `atlas.json` — Machine-readable ecosystem map
   - `docs/atlas.md` — Markdown digest (human-readable)
   - `docs/atlas.html` — Interactive web visualization
5. If material changes detected, opens PR with updated maps
6. Sends Discord notification on completion

**Why It Failed:**
The atlas skill internally invokes Claude API to perform semantic analysis on fork ecosystem data. During the skill execution step in GitHub Actions, the Claude API call was rejected due to account-level credit exhaustion.

**Impact:**
- atlas.json NOT updated (remains dated 2026-09-11, 142 repos, 394 skill edges)
- No ecosystem mapping generated
- No Discord notification sent
- No PR created
- Phase 2 → BLOCKED; Phase 3 → BLOCKED

**Last Successful Atlas Run:**
- Date: 2026-09-11 @ 06:18:33
- Repos: 142 (with aeon.yml)
- Skill edges: 394
- Maps: atlas.json, docs/atlas.md, docs/atlas.html all generated

### Phase 3: Results Consolidation (⏳ PENDING — BLOCKED ON PHASE 2)

**Objective:** Consolidate Phase 1 & 2 findings into structured memory and prepare for autonomous operation.

**Planned Milestones:**
1. Move detailed Phase 1 & 2 findings into topic files (this file)
2. Reorganize memory index to reflect blocked state
3. Document credit blocker details in separate issue topic
4. Update Phase status in MEMORY.md
5. Commit consolidation work
6. Document recovery steps for operator

**Blocking Condition:**
Phase 3 cannot proceed to verification until Phase 2 succeeds. The atlas workflow must complete successfully (with credit replenishment) before ecosystem data can be validated and consolidated.

## Key Artifacts

- **atlas.json**: Machine-readable fork ecosystem map
  - Last update: 2026-09-11 (stale)
  - Contains: fork metadata, enabled skills, ecosystem edges
  - Updated when changes detected (currently not)

- **docs/atlas.md**: Markdown digest
  - Human-readable summary of ecosystem
  - Includes: fork counts, skill adoption rates, cluster analysis

- **docs/atlas.html**: Interactive visualization
  - Web-based explorer for ecosystem
  - Features: node/edge graphs, skill filtering, fork details

- **atlas-free.yml**: New GitHub Actions workflow (PR #10, 2026-09-16)
  - No LLM dependencies, free to run
  - Can generate ecosystem maps without Claude API
  - Scheduled weekly Sunday 04:00 UTC

## Recovery Path

1. **Operator Action Required:**
   - Check Claude account billing/credit status
   - Add sufficient credits for atlas skill execution
   - Credits should cover: API calls for fork enumeration + semantic analysis

2. **Manual Retry:**
   - GitHub UI: Actions → Aeon Atlas → Run workflow
   - Select `skill: atlas` input
   - Monitor job logs for completion
   - Confirm Discord notification delivery

3. **Post-Retry:**
   - Verify atlas.json timestamp updated
   - Check PR creation (if changes detected)
   - Resume Phase 3 consolidation

## Lessons & Observations

- **Single Point of Failure:** Atlas workflow depends entirely on Claude API availability and account credits. Recommend backup: atlas-free.yml provides no-LLM alternative (now available as PR #10).

- **Monitoring Gaps:** No early warning system for credit depletion before skill execution. Consider: periodic credit balance check as health probe, or skill-level quota validation.

- **Notification Reliability:** Discord webhook configured but never tested (Phase 2 failed before reaching notification step). Should verify webhook on Phase 2 retry.

- **Autonomous Limits:** This blocker highlights that autonomous operation requires pre-validated external dependencies. Pure GitHub Actions (atlas-free.yml) can run unattended; Claude-dependent skills need credit monitoring.

---

_Documented during Phase 3 consolidation, 2026-09-17._
