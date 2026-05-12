# Canonical Promotion Policy

## Purpose

This policy defines how artifacts become trusted operational references.

Not all artifacts should become canonical.

Canonical status represents:

- trusted operational meaning
- approved implementation direction
- durable reference state
- future dependency eligibility

Canonical artifacts influence future work and therefore require stronger governance.

---

# Artifact Status Model

```text
scratch
-> experimental
-> candidate
-> approved
-> canonical
-> deprecated
-> archived
```

---

# Status Definitions

## Scratch

Temporary exploratory material.

Characteristics:

- unstable
- incomplete
- disposable
- not operationally trusted

Examples:

- rough AI output
- brainstorming prompts
- temporary notes

---

## Experimental

Potentially useful but unverified.

Characteristics:

- testable
- not yet trusted
- may contain operational risk
- suitable for isolated experimentation

---

## Candidate

Ready for structured review.

Characteristics:

- coherent
- sufficiently complete
- linked to artifacts or intent
- suitable for validation

---

## Approved

Accepted for operational use.

Characteristics:

- reviewed by human stakeholders
- validated against requirements
- operationally acceptable
- rollback path understood

Approved does not necessarily mean canonical.

---

## Canonical

Authoritative reference state.

Characteristics:

- trusted source for future work
- referenced by downstream systems
- operationally stable
- explainable
- recoverable
- governed

Canonical artifacts should not be casually replaced.

---

## Deprecated

No longer recommended for future use.

Characteristics:

- retained for lineage
- superseded by newer artifacts
- may still support historical reconstruction

---

## Archived

Preserved historical state.

Characteristics:

- immutable historical value
- inactive
- not operationally referenced

---

# Canonical Promotion Requirements

Before promotion to canonical:

1. Artifact must have stable identifier.
2. Artifact must have manifest.
3. Artifact must have version.
4. Dependencies should be known.
5. Rollback path should exist if operationally meaningful.
6. Human review must occur.
7. README and governance documentation should remain aligned.

---

# AI Restrictions

AI systems must not independently promote artifacts to canonical status unless explicitly instructed by a human.

AI systems may:

- recommend promotion
- generate validation summaries
- compare candidate artifacts
- identify drift
- propose canonical replacements

Human approval remains authoritative.

---

# Canonical Replacement Doctrine

Canonical artifacts should normally be superseded, not overwritten.

Preferred:

```text
canonical-v2 supersedes canonical-v1
```

Avoid:

```text
rewrite canonical-v1 in place
```

---

# Promotion Philosophy

The goal of canonical promotion is not perfection.

The goal is trustworthy operational reference.
