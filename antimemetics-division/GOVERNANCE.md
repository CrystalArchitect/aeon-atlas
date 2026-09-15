# Governance & Decision-Making

This project operates under **the Incognita Rule**: facts are verified before canonization; proposals and hypotheses are labeled as such; contradictions are documented as "contested" until resolved.

---

## The Incognita Rule

From TerAustralis-Incognita:

> **Never invent canon. Never promote hypothesis into verified fact without evidence. Surveyed vs dreamed — never let dreamed lines pretend they were measured.**

Applied here:

| Status | Meaning | Example | Treatment |
|--------|---------|---------|-----------|
| **Built** | Verified with evidence on disk | Biotwang is a Bryde's whale call, NOAA 2024 | Cite the source |
| **Vision** | Proposed but unverified | Tri-Split Realities framework | Tag "proposed" explicitly |
| **Unknown** | Open question, contradictions | Is CHARYBDIS-9 real or fiction? | Document both sides |
| **Contested** | Multiple credible claims conflict | Antimemetic resistance: neurological vs informational | Keep both, explain split |

**Never cross these lines:**
- Don't call a proposal "verified" without evidence
- Don't hide contradictions — document them
- Don't delete older claims that turned out wrong; archive them with timestamps

---

## How Decisions Are Made

### For New Canon (Narrative & Knowledge)

1. **Propose** in a GitHub Discussion or Issue
   - Title: `[Proposal]` or `[Research]` tag
   - Include: what you're claiming, why it matters, evidence source (if any)
   - Status: "Vision" or "Built" (see table above)

2. **Review & Verification**
   - Project maintainer checks: sources real? logic sound? compatible with existing canon?
   - Community can comment; contradictions are documented, not deleted

3. **Merge to `narrative/canon.md`**
   - Dated session entry with your claim, status, and evidence links
   - If "Built": include proof (URL, paper, run number, etc.)
   - If "Vision": include timestamp, allow others to test it

### For Interactive/Code Changes

1. **Open PR** with description of what changes and why
2. **CI checks**: Code lint, type-checking, tests
3. **Code review** focuses on correctness, not architecture (we allow pluralism in approach)
4. **Merge** when approved

### For Music Contributions

1. **PR with metadata**: Track name, artist/source, date, license, Suno/YouTube ID if applicable
2. **Verify licensing**: Can we legally host this?
3. **Merge** to `music/tracks/` with metadata file
4. **Update** `music/playlists.json` if narrative-relevant

---

## Conflict Resolution

### Contested Claims (two credible sources disagree)

Example: "Does antimemetic resistance happen at the neural level or information level?"

**Process:**
1. Document both claims with evidence, in `narrative/canon.md`
2. Tag as "contested: [side A] vs [side B]"
3. Open a Research issue to explore the gap
4. When resolved, update `narrative/canon.md` with new info + evidence

**Don't resolve by:**
- Majority vote (truth isn't democratic)
- Argument length (brevity isn't evidence)
- Authority of proposer (claim itself matters)

### Licensing/Attribution Disputes

If someone claims music licensing is wrong:

1. **Pause** that track from distribution while investigating
2. **Verify** with original creator if reachable
3. **Update** `music/tracks/[name]/metadata.json` with correct licensing
4. **Restore** or **remove** based on findings

---

## Role Definitions

### Maintainer (Crystal Arena-Turner)
- Approves merges to `narrative/canon.md`
- Final call on contradictions
- Ensures Incognita Rule compliance
- Can revert claims that violate governance

### Contributors
- Propose claims with evidence
- Test hypotheses via code or research
- Request reviews before merging content
- Respect the Incognita Rule

### Collaborators
- Build interactive experiences
- Extend the knowledge system with proofs
- Can work autonomously on their own features
- Loop maintainer when touching canon

---

## Session Logs

At the end of each significant work session, append an entry to `narrative/sessions/[YYYY-MM-DD].md`:

```markdown
## [Session Title] — [Tool/Person]

- **What was discovered**: New claims, verified facts, contradictions
- **Evidence**: Links to runs, papers, sources
- **Status**: Built / Vision / Contested
- **Next steps**: Open questions, what to investigate next

### Claims filed
- "X is true" (Built, source: Y)
- "Z might work" (Vision, experiment: [link])

### Contradictions documented
- Prior claim A vs new evidence B (contested)

### Tools used
- Suno (for music generation test)
- Web search (for verification)
```

---

## Amendment Process

If you discover this governance needs updating:

1. **Open an issue** explaining what's broken
2. **Propose** the amendment in a discussion
3. **Wait for maintainer approval** (this file is part of canon)
4. **Merge amendment** with date + rationale

---

## Questions?

- **"Can I propose X?"** — Yes, if you're willing to provide evidence or mark it "Vision"
- **"Who decides if I'm right?"** — The evidence decides. If it's unclear, it's "contested"
- **"Can I edit other people's claims?"** — No, add new evidence instead; the maintainer arbitrates conflicts
- **"What if someone claims something false?"** — We document the contradiction and keep researching

This project prioritizes **truthfulness over agreeableness**. Contradictions are features, not bugs.
