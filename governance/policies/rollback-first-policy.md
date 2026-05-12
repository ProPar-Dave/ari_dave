# Rollback-First Operational Policy

## Purpose

This policy establishes the minimum operational safety requirements before any meaningful mutation is made to a governed system.

The goal is simple:

Every meaningful change should have a recoverable path backward.

---

# Core Principle

No AI-assisted mutation should occur against a meaningful runtime system without first establishing a rollback boundary.

This applies even when:

- the system can theoretically be regenerated
- the runtime is considered non-production
- the tool claims deterministic reconstruction
- the mutation appears small
- the operator believes the change is safe

The operational cost of uncontrolled mutation increases exponentially as systems become more interconnected.

---

# Minimum Rollback Requirements

Before mutation:

1. Capture current state.
2. Store or reference the snapshot.
3. Record the intended change.
4. Identify rollback strategy.
5. Classify risk level.

After mutation:

1. Verify system integrity.
2. Capture post-change state.
3. Record resulting status.
4. Promote or revert.

---

# Runtime Systems Covered

This policy applies to:

- Supabase
- databases
- deployed edge functions
- APIs
- generated applications
- infrastructure configuration
- AI steering systems
- workflow orchestration systems
- canonical prompts
- policy engines

---

# Supabase Minimum Snapshot Coverage

Before significant Supabase mutation, capture:

- edge functions
- schema definitions
- migrations
- RLS policies
- storage policies
- scheduled jobs
- environment variable names only

Never store secret values.

---

# Risk Classification

## Low Risk

Examples:

- documentation changes
- isolated prompt experiments
- local-only generated artifacts

Rollback may rely on Git history alone.

## Medium Risk

Examples:

- edge function updates
- migration additions
- UI generation changes
- policy revisions

Requires explicit snapshot reference.

## High Risk

Examples:

- destructive migrations
- broad AI-generated rewrites
- production runtime changes
- authentication or authorization changes
- mass deletions

Requires:

- snapshot
- rollback instructions
- human review
- promotion gate

---

# AI Behavior Requirements

AI systems interacting with governed systems should:

- prefer additive changes over destructive changes
- preserve previous states
- avoid deleting canonical artifacts
- mark uncertainty explicitly
- propose rollback paths before execution
- avoid irreversible mutation when alternatives exist

---

# Canonical Operational Philosophy

The ability to recover is more important than the ability to regenerate.

Recovery preserves:

- trust
- lineage
- explainability
- auditability
- operational continuity

Regeneration alone does not.
