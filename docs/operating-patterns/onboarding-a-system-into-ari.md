# Onboarding A System Into ARI

## Purpose

This document defines the canonical pattern for introducing arbitrary operational systems into ARI governance.

---

# Core Principle

ARI does not replace operational systems.

ARI governs:

- continuity
- trust
- lineage
- semantic intent
- rollback capability
- operational explainability

around those systems.

---

# Canonical Onboarding Sequence

```text
Identify System
-> Define Governed Entities
-> Define Trust Boundaries
-> Define Runtime Projection
-> Define Invariants
-> Define Recovery Boundaries
-> Define Query Paths
-> Define Governance Workflows
```

---

# Step 1 — Identify System

Examples:

- Supabase runtime
- budgeting engine
- UX generation pipeline
- orchestration workflow
- AP automation system

The operational system becomes identified as a governed runtime domain.

---

# Step 2 — Define Governed Entities

Meaningful operational entities become modeled.

Examples:

- artifacts
- runtime systems
- events
- snapshots
- states
- invariants

---

# Step 3 — Define Trust Boundaries

Operational trust classifications become established.

Examples:

- AI-generated
- candidate
- canonical
- reconciled
- recovered

---

# Step 4 — Define Runtime Projection

Governed entities become mapped into runtime systems.

Examples:

- deployment mappings
- runtime bindings
- generated interface projections

---

# Step 5 — Define Invariants

Operational truths and continuity constraints become defined.

Examples:

- semantic continuity expectations
- rollback requirements
- lineage expectations
- trust preservation rules

---

# Step 6 — Define Recovery Boundaries

Trusted rollback and recovery points become established.

---

# Step 7 — Define Query Paths

Operational reasoning paths become defined.

Examples:

- drift queries
- dependency traversal
- trust propagation
- rollback traversal

---

# Step 8 — Define Governance Workflows

Continuity-preserving workflows become modeled.

Examples:

- runtime mutation workflows
- reconciliation workflows
- promotion workflows
- recovery workflows

---

# Significance

This onboarding pattern demonstrates how ARI governs arbitrary operational systems using reusable semantic governance primitives.
