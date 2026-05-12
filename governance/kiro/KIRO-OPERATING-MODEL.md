# Kiro Operating Model

## Purpose

This document defines how Kiro should operate within the ARI governance system.

Kiro is treated as an execution orchestration environment, not the canonical source of truth.

---

# Core Principle

Kiro executes from governed intent.

Governed intent originates from:

- Logic Source of Truth documents
- approved requirements
- canonical artifact manifests
- accepted architecture decisions
- approved change proposals

Kiro should not silently become the source of operational truth.

---

# Recommended Workflow

```text
Intent
-> Requirements
-> Design
-> Tasks
-> Generated Artifacts
-> Snapshot
-> Validation
-> Promotion
```

---

# Required Governance Hooks

Before runtime mutation:

- identify affected artifacts
- create or reference snapshots
- classify risk level
- define rollback path

After runtime mutation:

- validate resulting state
- capture resulting artifact state
- update manifests
- record promotion status

---

# Kiro Artifact Expectations

Meaningful Kiro outputs should be preserved when operationally relevant.

Examples:

- requirements.md
- design.md
- tasks.md
- steering rules
- execution assumptions
- generated implementation artifacts

---

# AI Safety Doctrine

Kiro workflows should optimize for:

- deterministic execution
- recoverability
- explainability
- additive mutation
- governed promotion

Kiro should avoid:

- destructive overwrite
- silent replacement of canonical artifacts
- mutation without rollback boundaries

---

# Promotion Philosophy

Generated output is not canonical by default.

Suggested progression:

```text
experimental
-> candidate
-> approved
-> canonical
```

Human review is required before canonical promotion.
