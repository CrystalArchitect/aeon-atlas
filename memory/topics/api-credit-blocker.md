# API Credit Blocker (ISS-006)

## Issue Summary

**Issue ID:** ISS-006  
**Title:** API credit balance insufficient - atlas skill blocked  
**Status:** OPEN (critical severity)  
**Detected:** 2026-09-15T13:49:26Z  
**Affected Skills:** atlas (and any skill invoking Claude API)  

## Root Cause

The Claude API account used by the aeon-atlas GitHub Actions automation has exhausted its credit balance. When the atlas skill attempted to execute during workflow run on 2026-09-15, the API rejected the request with HTTP 400 error status.

**Error Response:**
```
api_error_status: 400
result: "Credit balance is too low"
```

## Technical Details

### How the Error Manifested

The atlas skill internally invokes Claude API as part of its ecosystem analysis pipeline:

1. Workflow starts GitHub Actions job
2. Job sets up environment (git, Node.js, Claude CLI)
3. Skill execution step runs: `claude run atlas`
4. Skill code invokes Claude API via Messages API or CLI wrapper
5. API call returns 400 "Credit balance is too low"
6. Skill execution terminates; workflow marked FAILED
7. Post-flight steps (notification, PR creation) skipped

### Workflow Details

- **Workflow:** `.github/workflows/aeon.yml`
- **Trigger:** `workflow_dispatch` (manual via GitHub UI or MCP API)
- **Execution Date:** 2026-09-15 @ 13:49:13 UTC
- **Duration:** 13 seconds (setup only; skill step failed)
- **Log:** Available in GitHub Actions UI → Workflow run 34977485254

### Affected Code Path

The skill execution path that failed:
- **File:** `skills/atlas/SKILL.md`
- **Invocation:** CLI-based skill runner within GitHub Actions
- **API Layer:** Claude SDK (via CLI) → Claude API endpoint
- **Rate Limiting:** Not a rate limit issue; credit exhaustion blocks all requests

## Impact Assessment

### Immediate Impact
- Atlas workflow cannot complete until credits replenished
- Ecosystem maps (atlas.json, atlas.md, atlas.html) remain stale (dated 2026-09-11)
- Fork fleet metrics not updated (142 repos last recorded)
- Discord notification never sent

### Cascade Impact
- Phase 2 execution blocked (cannot progress)
- Phase 3 consolidation blocked (depends on Phase 2 success)
- Any skill using Claude API will fail identically
- Autonomous operation halted for all Claude-dependent skills

### Skill Coverage
**Currently Affected:**
- atlas — ecosystem mapping (blocked)
- Any skill invoking `claude` CLI with API calls

**Unaffected:**
- atlas-free.yml — no LLM, runs independently (merged PR #10)
- Heartbeat — likely CLI-only, no API calls
- GitHub-native skills (git, gh CLI) — no external API

## Timeline

| Time | Event |
|------|-------|
| 2026-09-15T13:49:13Z | Workflow dispatch triggered via MCP |
| 2026-09-15T13:49:22Z | Node.js and Claude CLI setup completed |
| 2026-09-15T13:49:25Z | Skill execution step started |
| 2026-09-15T13:49:26Z | Claude API returned 400 error |
| 2026-09-15T13:49:29Z | Workflow marked FAILED; cron state updated |
| 2026-09-15T14:18:16Z | Autonomous status check confirmed no new attempts |
| 2026-09-17T00:00:00Z | Two-day gap; no credit replenishment detected |

## Required Operator Action

### Step 1: Verify Account Status
1. Log into Claude account (claude.ai)
2. Navigate to Billing or Account settings
3. Check credit balance / usage history
4. Identify if credits were exhausted or if there's a spending limit

### Step 2: Replenish Credits
1. Purchase credits via Claude account UI or Stripe
2. Amount depends on: atlas job cost + buffer for other skills
3. Note: Atlas skill cost includes fork enumeration + semantic analysis (unknown per-call cost)
4. Recommendation: Add 5x expected cost to avoid immediate re-exhaustion

### Step 3: Monitor Replenishment
1. After purchase completes, credits should appear immediately
2. Verify new balance in account settings
3. Check for any pending invoices or payment issues

### Step 4: Retry Atlas Workflow
1. Navigate to GitHub: CrystalArchitect/aeon-atlas → Actions
2. Select: Aeon (or aeon.yml workflow)
3. Click: Run workflow
4. Input: `skill: atlas`
5. Confirm: "Run workflow"

### Step 5: Verify Success
1. Monitor workflow run logs
2. Confirm all steps complete (setup, preflight, run, post-flight)
3. Check for PR creation and Discord notification
4. Verify atlas.json, atlas.md, atlas.html updated (timestamp > 2026-09-15)

## Blocking Recovery

**Why This Isn't a Quick Workaround:**
- Credits are account-level, not per-repository or per-skill
- No fallback API or alternate provider for Claude
- atlas-free.yml (no-LLM alternative) doesn't generate same output
- Cannot retry within GitHub Actions without credit replenishment

**What Won't Work:**
- ❌ Re-running workflow (still fails, same credit error)
- ❌ Using different GitHub token (credits are Claude account-level)
- ❌ Increasing job timeout (error happens at API layer, not timeout)
- ❌ Retrying in different repository (same Claude account across repos)

## Monitoring Strategy

### Automatic Monitoring
1. Daily heartbeat skill checks skill-health status
2. ISS-006 should be visible in health probes if/when heartbeat is invoked
3. No automatic retry until credits detected

### Manual Monitoring
- Check atlas.json timestamp: `stat /home/user/aeon-atlas/atlas.json`
- Expected timestamp after successful retry: 2026-09-15 or later
- If still 2026-09-11, Phase 2 has not yet succeeded

### Credit Balance Checks
- Manually query Claude account settings
- No API tool available to automate this check within skill context
- Must be operator responsibility

## Prevention Recommendations

For future autonomous operations:

1. **Credit Monitoring Skill:** Create a health probe that queries account credit balance before running paid skills. Fail fast with clear error if balance below threshold.

2. **Skill-Level Cost Budgets:** Implement per-skill credit limits in skills configuration to prevent runaway consumption.

3. **Free-Only Fallback:** For critical operations like atlas, maintain a no-LLM version (like atlas-free.yml) that can run independently.

4. **Budget Alerts:** Set up Stripe/Claude billing alerts for credit consumption or low balance.

5. **Staged Retry:** Implement exponential backoff for API failures to distinguish credit exhaustion (permanent, needs human action) from transient errors (timeout, rate limit).

---

_Documented as ISS-006 during Phase 3 consolidation, 2026-09-17._
