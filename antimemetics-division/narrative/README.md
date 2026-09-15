# 📖 Narrative & Knowledge System

**Single source of truth for all canonical claims, theories, and research.**

## Key Files

### `canon.md` (READ FIRST)
- **The canonical record** of this project
- All claims tagged: Built / Vision / Unknown / Contested
- Session logs append-only (never rewritten)
- Evidence cited with sources and links
- Updated after every significant session

### `sessions/` (Session Logs)
- Dated entries (YYYY-MM-DD.md) recording discoveries
- What was learned, who learned it, what the evidence shows
- Open questions for next session
- Serves as project history

### `research/` (Academic & Theoretical Work)
- **`theology/`** — Gnostic theology, apophatic frameworks, religious parallels
- **`information-theory/`** — Memetics, antimemetics, cognitive science
- **`mythology/`** — Mythological analysis, archetypal patterns
- Each topic: papers, notes, references to canon

### `entities/` (Characters & Concepts)
- Character profiles (Sophia, Crystal, Barbelo, etc.)
- Conceptual entities (Charybdis-9, Tri-Split Realities, etc.)
- Backstory, thematic associations, evidence tier

### `timelines/` (Chronology)
- World events and narrative progression
- Real-world correlations (when applicable)
- Built vs Vision distinctions

### `lore/` (Stories & Worldbuilding)
- Short fiction, myths, narrative pieces
- Tagged with canon references
- Status: Proposed story / canonical event / metaphor

---

## How to Contribute

### Adding Research

1. **Choose a topic** in `research/[topic]/`
2. **Write in Markdown** — cite sources, link to canon
3. **Tag evidence level:**
   - **Built**: Verified fact (URL, paper, dataset)
   - **Vision**: Hypothesis being tested
   - **Unknown**: Open question
4. **Open PR** for review

### Updating Canon

1. **Don't edit `canon.md` directly** (except maintainer)
2. **Propose** in GitHub Discussion with:
   - What you're claiming
   - Why it matters
   - Evidence (URL, source, experiment)
3. **Wait for review** — maintainer adds it as dated session entry
4. **Canon updated** with proper attribution + timestamp

### Adding a Session Log

1. Create `sessions/YYYY-MM-DD.md`
2. Record what was discovered, by whom, with what evidence
3. Link to:
   - New music that fits the narrative
   - Research findings
   - Contradictions found
   - Open questions for others
4. PR to main

**Template:**

```markdown
## [Session Title] — [Tool/Person]

**Duration**: [time spent]

### Discoveries
- "X is true" (Built, source: [link])
- "Y might happen" (Vision, test: [link])

### Verifications
- Claim A confirmed via [source]
- Claim B contradicted by [source]

### Contradictions
- Existing claim X vs new evidence Y (contested)

### Open Questions
- [Question 1 — needs investigation]
- [Question 2 — needs data]

### Music/Creative Additions
- [Track name] added, links to [canon concept]

### References
- Sources checked: [links]
- Sessions consulted: [prior session links]
```

---

## Governance

See `GOVERNANCE.md` for:
- How claims are verified
- Conflict resolution (contested claims)
- Amendment process
- Contributor roles

Key rule: **The Incognita Rule**

> Never invent canon. Never claim verification without evidence. Built vs Vision — never let dreamed lines pretend they were measured.

---

## Data Structure

```
canon.md
├── Section 1: Core Concepts
│   ├── Antimemetics definition (Built)
│   ├── Information-resistance (Vision)
│   └── Entities (Built/Vision mixed)
├── Section 2: Gnostic Spine
│   ├── Sophia (Vision, references canonical Nag Hammadi)
│   ├── Barbelo reflection (Vision)
│   └── Trinity framework (Built on theological texts)
├── Section 3: Evidence & Correlations
│   ├── Biotwang (Built, whale call verified)
│   ├── Vent power (Built, real projects documented)
│   └── CHARYBDIS-9 (Unknown, no public record)
├── Session Logs (append-only)
│   ├── 2026-09-07 — Grok session
│   ├── 2026-09-08 — Research pass
│   └── 2026-09-13 — Initialization
```

---

## Reading Paths

### For the Impatient
1. Read `canon.md` § Built claims only (5 min)
2. Skim `sessions/latest.md` (2 min)

### For Researchers
1. Full `canon.md` (15 min)
2. Relevant `research/` topics (depends)
3. Session logs on that topic (5 min)

### For Collaborators
1. `GOVERNANCE.md` (decision-making)
2. Full `canon.md` (context)
3. Session logs from last 7 days (current state)
4. Any contradictions marked "contested"

### For Musicians
1. `canon.md` § "Concepts" (what exists)
2. `sessions/` for thematic mood
3. `music/playlists.json` (how tracks connect)

---

## Common Questions

**Q: Can I propose something speculative?**
A: Yes! Tag it "Vision" with your reasoning. If it's testable, others can verify it.

**Q: What if my evidence contradicts existing canon?**
A: That's important. Open an issue, it becomes "contested" until resolved.

**Q: Can I edit other people's claims?**
A: No — add new evidence instead. The maintainer arbitrates conflicts.

**Q: How long before something moves from Vision to Built?**
A: When evidence lands. Could be 5 minutes or 5 years. We wait for ground truth.

---

## Resources

- **Original Canon**: TerAustralis-Incognita CANON.md (referenced, not imported)
- **Nag Hammadi Codex**: Reference for gnostic theology
- **SCP Foundation**: Fictional framework (public domain concepts)
- **Memetics**: Dawkins et al.
- **Information Theory**: Shannon, semiotics, cognitive science

---

**This is a living document. Everything here is open to question, revision, and evidence.**
