# Operational Query Examples

## Purpose

This document demonstrates how ARI graph traversal and governance semantics support operational reasoning.

---

# Query Example 1

## Question

```text
What downstream systems are affected by a drifted runtime state?
```

## Traversal

```text
STATE-DRIFTED
-> REL-AFFECTS
-> Runtime Bindings
-> Runtime Systems
-> Downstream Artifacts
```

---

# Query Example 2

## Question

```text
What rollback restored operational continuity?
```

## Traversal

```text
STATE-RECOVERED
-> EVENT-ROLLED-BACK
-> SNAPSHOT
-> Prior Trusted State
```

---

# Query Example 3

## Question

```text
What invariants constrain this runtime system?
```

## Traversal

```text
Runtime System
-> Runtime Projection
-> Governed Artifact
-> REL-CONSTRAINED-BY
-> Invariants and Contracts
```

---

# Query Example 4

## Question

```text
Why is this artifact considered trustworthy?
```

## Traversal

```text
Artifact
-> Trust Boundary
-> Promotion Events
-> Validation Evidence
-> Canonical State
```

---

# Significance

These examples demonstrate that ARI supports:

- graph-native operational reasoning
- explainable lineage
- causality traversal
- trust-aware governance
- runtime reconciliation reasoning
