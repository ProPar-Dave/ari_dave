# Graph Traversal Walkthroughs

## Purpose

This document demonstrates how ARI traversal rules operate against connected operational graph entities.

---

# Example 1 — Upstream Dependency Traversal

## Starting Entity

```text
ART-BUDGET-CALC-001
```

## Traversal

```text
ART-BUDGET-CALC-001
-> REL-CONSTRAINED-BY
-> INV-BUDGET-KERNEL-001
```

## Meaning

The governed calculation engine inherits semantic constraints from the canonical budget kernel invariant.

---

# Example 2 — Runtime Projection Traversal

## Starting Entity

```text
ART-SUPABASE-EDGE-0001
```

## Traversal

```text
ART-SUPABASE-EDGE-0001
-> REL-PROJECTED-INTO
-> SYS-SUPABASE-001
```

## Meaning

The governed artifact projects into a real runtime environment.

---

# Example 3 — Drift Impact Traversal

## Starting Entity

```text
STATE-DRIFTED
```

## Traversal

```text
STATE-DRIFTED
-> Runtime System
-> Downstream Runtime Bindings
-> Related Governed Artifacts
```

## Meaning

Runtime drift may affect multiple dependent operational entities.

---

# Example 4 — Recovery Traversal

## Starting Entity

```text
EVENT-ROLLED-BACK
```

## Traversal

```text
EVENT-ROLLED-BACK
-> Runtime Snapshot
-> Prior Trusted State
-> STATE-RECOVERED
```

## Meaning

Rollback restores explainable operational continuity.

---

# Significance

These examples demonstrate:

- connected operational graph reasoning
- runtime-aware traversal
- dependency explainability
- causality-aware governance
- continuity-preserving recovery semantics
