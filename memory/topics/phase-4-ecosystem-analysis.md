# Phase 4: Ecosystem Analysis Strategy

## Overview

Phase 4 initiates continuous ecosystem monitoring and analysis of the four-repository system: aeon-atlas, The-Crystal-Vision-System, jolly-bolt-flora-lotus, and pilot-horizon-acre-spring. The ecosystem operates as an autonomous agent framework where aeon-atlas orchestrates workflows across all repositories.

**Status:** Strategy design in progress (2026-09-19)  
**Dependency:** Phase 2 success (blocked on ISS-006 — API credits)

---

## Scope

### In Scope
- **Repository Health:** Branch status, CI/CD state, merge conflicts, stale branches
- **Code Quality Metrics:** Test coverage, build success rates, dependency freshness
- **Workflow Integration:** Skill execution status across all repos, cross-repo dependencies
- **Memory Management:** Documentation completeness, issue tracking accuracy, log consistency
- **Skill Performance:** Execution times, failure rates, error categories

### Out of Scope (Phase 5+)
- Code review automation
- Dependency security patching
- Infrastructure monitoring (beyond repo state)
- External API integration (Twitter, GitHub Enterprise)

---

## Key Metrics

### Per-Repository Metrics
1. **Repo Status**
   - Default branch health (CI green/red)
   - Open PR count and age
   - Merge conflict detection
   - Branch drift (commits ahead of main)

2. **Code Metrics**
   - Test pass rate
   - Build time trends
   - Dependency update age

3. **Automation Metrics**
   - Skill run frequency
   - Success/failure rate per skill
   - Average execution time
   - Error category distribution

### Cross-Repo Metrics
1. **Ecosystem Coherence**
   - All repos on expected branch (claude/build-6i5tgq)
   - Memory consistency across repos
   - Shared dependency versions

2. **Workflow Integration**
   - Phase completion status
   - Blocker impact (e.g., Phase 2 blocking Phase 4)
   - Coordination failures

---

## Monitoring Approach

### Automated Collection (Phase 4 Skills)
- **skill-audit:** Git metrics collection across all repos
  - Branch status, PR count, merge conflicts
  - Commit freshness, author analysis
  - Runs hourly or on-demand

- **skill-health:** GitHub Actions workflow analysis
  - Recent workflow runs (past 7 days)
  - Success rates and failure patterns
  - Execution time distribution
  - Runs daily or triggered by failures

- **skill-ecosystem:** Cross-repo coherence check
  - Branch consistency
  - Dependency alignment
  - Memory file completeness
  - Runs daily at 07:00 UTC

### Manual Analysis (Human Review)
- Weekly digest of critical findings
- Monthly deep dives on trends
- Ad-hoc investigation of anomalies

---

## Skill Design

### Ecosystem Analysis Skill (`skill-ecosystem`)

**Purpose:** Daily cross-repo coherence check and reporting

**Inputs:**
- List of repos: aeon-atlas, The-Crystal-Vision-System, jolly-bolt-flora-lotus, pilot-horizon-acre-spring
- Expected branch: claude/build-6i5tgq
- Memory file paths per repo

**Outputs:**
- JSON report (status, metrics, anomalies)
- Markdown summary for Discord/Telegram
- Issue filing if critical state detected

**Key Checks:**
1. All repos on expected branch
2. Memory index files (MEMORY.md) present and linked
3. Recent activity in each repo (commits, PRs, workflows)
4. Blocker status (ISS-006, etc.)
5. Phase completion tracking

**Failure Modes:**
- Repo inaccessible → flag and investigate
- Memory file missing → alert and recreate
- Multiple anomalies → escalate to operator

### Repository Audit Skill (`skill-repo-audit`)

**Purpose:** Deep scan of repository state, branch health, and PR status

**Inputs:**
- Repo path (git clone URL)
- Scan scope: branches, PRs, commits, CI

**Outputs:**
- Branch inventory (name, commits ahead/behind, last commit date)
- PR status summary (open count, review state, age)
- CI state (latest workflow runs, failures)
- Dependency analysis (if applicable)

**Automation:** Runs on-demand or triggered by state changes

---

## Independent Work (No Phase 2 Dependency)

### Now (Phase 4 Prep)
1. **Repository audit:** Capture current state of all repos
2. **Memory cleanup:** Verify MEMORY.md links, fix broken references
3. **Issue backlog review:** Triage and categorize open issues
4. **Documentation audit:** Ensure CLAUDE.md and skill READMEs are current

### Next (After Repo Audit)
1. **Skill baseline:** Establish success rate baselines for all current skills
2. **Trend analysis:** Identify patterns (time-of-day failures, seasonal trends)
3. **Dependency audit:** Check for stale/vulnerable dependencies
4. **Team capacity:** Calculate skill run cost projections

---

## Integration with Phase 2

**Once Phase 2 succeeds:**
1. Atlas generates ecosystem snapshot (142 repos mapped)
2. Phase 4 monitoring queries atlas results
3. Ecosystem skill includes atlas metrics in reports
4. Enables: dependency graph analysis, skill reachability analysis

**While Phase 2 is blocked:**
- Phase 4 tracks internal (4-repo) ecosystem only
- Prepares monitoring infrastructure
- Builds issue baseline
- Positions for rapid scale-up once Phase 2 unblocked

---

## Success Metrics

**Phase 4 completion criteria:**
- [ ] All four repos audited and baseline captured
- [ ] Ecosystem skill deployed and running daily
- [ ] Health skill integrated into workflow
- [ ] Weekly digest generation working
- [ ] Issue backlog tracked and prioritized
- [ ] Documentation of ecosystem dependencies complete

---

## Timeline

- **2026-09-19:** Repository audit, baseline data collection
- **2026-09-20:** Ecosystem skill design and testing
- **2026-09-21:** First automated ecosystem reports
- **2026-09-22:** Integration with Phase 2 (once credits added)
- **2026-09-23:** Phase 4 declared complete, Phase 5 planning begins

---

## Open Questions

1. **Notification Strategy:** Alert on every anomaly or digest only?
   - Decision: Digest on state change, daily summary on schedule
   
2. **Cross-Repo Branching:** Should all repos stay on claude/build-6i5tgq indefinitely?
   - Decision: Yes, until explicit merge to main scheduled
   
3. **Monitoring Frequency:** Hourly audits or daily?
   - Decision: Daily 07:00 UTC for ecosystem, on-demand for audit

4. **Issue Auto-Filing:** Auto-create issues for detected problems?
   - Decision: Manual triage in Phase 4, auto-filing in Phase 5 with human review loop

---

_Strategy created: 2026-09-19 by Aeon (autonomous agent)_  
_Next review: After repository audit complete (2026-09-19)_
