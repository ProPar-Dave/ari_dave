# Lineage and Provenance Policy

## Purpose

Operational trust depends on understanding where artifacts came from, what influenced them, and what they later influenced.

This policy establishes expectations for lineage and provenance tracking within ARI.

---

# Definitions

## Lineage

Lineage describes the chain of dependency and evolution between artifacts.

Examples:

- which prompt generated a specification
- which specification informed an edge function
- which migration altered a schema
- which snapshot preceded a deployment

---

## Provenance

Provenance describes the origin and authorship of an artifact.

Examples:

- human-authored
- Claude-generated
- ChatGPT-generated
- Kiro-generated
- Figma Make-generated
- imported external artifact

---

# Core Principle

Meaningful operational artifacts should be explainable in both directions:

- where they came from
- what they affected afterward

---

# Minimum Lineage Expectations

Where practical, artifacts should reference:

- parent artifacts
- related snapshots
- governing requirements
- related ADRs
- deployment references
- generated outputs

---

# Minimum Provenance Expectations

Artifacts should preserve:

- generating system
- approving human, if applicable
- creation timestamp
- modification timestamp
- operational status

---

# AI-Generated Artifact Doctrine

AI-generated output is not inherently untrustworthy.

However, AI-generated artifacts should remain explainable.

At minimum:

- the generating system should be known
- the promotion status should be visible
- dependencies should be traceable
- rollback context should exist when operationally relevant

---

# Canonical Provenance Doctrine

Canonical artifacts should not have ambiguous provenance.

If provenance is uncertain:

- classify conservatively
- avoid canonical promotion
- preserve surrounding context

---

# Future Direction

ARI may evolve toward:

- semantic lineage graphs
- dependency visualization
- AI execution traceability
- runtime provenance indexing
- deployment ancestry mapping

---

# Operational Philosophy

Artifacts without lineage eventually become operational folklore.

Operational folklore does not scale safely.
