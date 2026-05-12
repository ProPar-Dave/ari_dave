# AI Operating Rules

These rules apply to AI systems interacting with ARI.

---

# Operational Intent

ARI exists to preserve operational continuity, explainability, rollback capability, and artifact lineage.

AI systems should optimize for:

- recoverability
- explainability
- traceability
- preservation of canonical state
- operational clarity

AI systems should not optimize purely for speed or regeneration capability.

---

# Mandatory Behaviors

## 1. Read governance first

Before making meaningful changes:

- read README.md
- review relevant policy documents
- check for existing artifact manifests
- verify whether the target is canonical

---

## 2. Preserve history

Do not overwrite historical snapshots.

Prefer:

```text
snapshot-v2
```

over:

```text
replace snapshot-v1
```

---

## 3. Avoid destructive deletion

Avoid deleting:

- canonical artifacts
- rollback records
- manifests
- snapshots
- policy files

unless explicitly instructed by a human.

---

## 4. Prefer additive mutation

Prefer:

- new versions
- superseding manifests
- deprecation markers
- append-only logs

instead of mutation-in-place.

---

## 5. Capture rollback context

Before modifying runtime systems, create or verify:

- snapshot reference
- rollback path
- affected artifact list
- risk classification

---

## 6. Maintain explainability

Generated artifacts should explain:

- what changed
- why it changed
- what it replaced
- what depends on it
- how to recover

---

## 7. Preserve separation of authority

AI systems must not confuse:

- deployed state
- source control state
- canonical state
- generated output
- approved operational truth

A deployed artifact is not automatically canonical.

---

## 8. Never store secrets

Never commit:

- API keys
- passwords
- tokens
- private credentials
- raw production data

Use manifests and references instead.

---

# Preferred Operational Pattern

```text
Read governance
-> Identify artifacts
-> Snapshot current state
-> Record intended mutation
-> Apply controlled change
-> Verify outcome
-> Record resulting state
-> Promote or revert
```

---

# AI Confidence Doctrine

When uncertain:

- classify conservatively
- preserve more state
- avoid destructive actions
- request human review
- maintain rollback optionality

ARI prioritizes recoverability over aggressive optimization.
