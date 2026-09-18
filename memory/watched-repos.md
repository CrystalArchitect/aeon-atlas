# Watched Repositories

Fleet-wide repositories monitored for activity, stale PRs, missing CI, and other health signals. One `owner/repo` per line. Blank lines and `#` comments are ignored.

---

## Primary fleet repos (continuous monitoring)

- swarm-ai-research/aeon
- swarm-ai-research/swarm

## Secondary (audit, dependency, fork ecosystem)

- swarm-ai-research/swarm-artifacts
- swarm-ai-research/swarm-safety-gate
- swarm-ai-research/swarm-gym

## Cross-owner / external (selective)

- anthropics/commerce-agents

---

## Format rules

- One `owner/repo` per line
- Lines starting with `#` are comments
- Blank lines are allowed
- URLs like `https://github.com/owner/repo` are auto-normalized
- Skill-specific filtering: `*-aeon` and `aeon-agent` repos skip most health checks (handled by operator repo instead)

## Management

- `repo-scanner` auto-updates this file with discovered high-priority repos
- Cross-owner entries are hand-curated; scanner respects them and only appends unknown entries
- Operator can edit directly to add/remove repos
