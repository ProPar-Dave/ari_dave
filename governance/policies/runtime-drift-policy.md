# Runtime Drift Policy

## Purpose

Runtime systems naturally drift over time.

Drift may be introduced by:

- manual changes
- AI-generated mutations
- emergency fixes
- deployment tooling
- configuration divergence
- undocumented operational behavior

This policy establishes expectations for identifying and governing runtime drift.

---

# Definition

Runtime drift occurs when the actual operational state differs from the governed or expected state.

Examples:

- deployed edge functions differ from governed artifacts
- production schema differs from migrations
- RLS policies differ from canonical snapshots
- runtime configuration diverges from manifests
- prompts or AI rules diverge from approved versions

---

# Drift Categories

## Acceptable Drift

Known and intentional divergence.

Examples:

- temporary hotfixes
- isolated staging experiments
- controlled operational overrides

Acceptable drift should still be documented.

---

## Unknown Drift

Differences that are not explained or governed.

Unknown drift is operational risk.

---

## Dangerous Drift

Drift that:

- weakens rollback capability
- removes explainability
- bypasses governance
- introduces security risk
- changes operational meaning

Dangerous drift should be resolved quickly.

---

# Drift Detection Philosophy

ARI should evolve toward drift awareness.

Future tooling may compare:

- snapshots
- runtime exports
- manifests
- deployment records
- schema state
- policy definitions
- generated artifacts

to identify divergence.

---

# Current Operational Expectations

When meaningful runtime changes occur:

1. Capture snapshot.
2. Update manifest.
3. Record promotion state.
4. Preserve lineage.
5. Record intentional divergence.

---

# AI Behavior Requirements

AI systems should:

- avoid introducing undocumented drift
- preserve alignment with canonical artifacts
- identify suspected divergence
- avoid silently replacing governed state
- recommend reconciliation when drift is discovered

---

# Drift Resolution Strategies

Drift may be resolved through:

- rollback
- promotion of newer state
- reconciliation migration
- documentation alignment
- explicit deprecation

Not all drift requires rollback.

Some drift may become the new canonical state after review.

---

# Operational Philosophy

Drift is inevitable.

Undocumented drift is dangerous.
