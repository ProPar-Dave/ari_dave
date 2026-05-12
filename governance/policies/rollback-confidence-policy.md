# Rollback Confidence Policy

## Purpose

Not all rollback paths are equally trustworthy.

This policy establishes a framework for evaluating rollback confidence.

---

# Core Principle

A rollback path should not merely exist.

Its reliability, completeness, and operational realism should also be understood.

---

# Rollback Confidence Levels

## RC0 - Unknown

Rollback capability is not understood.

Characteristics:

- no verified rollback
- incomplete lineage
- insufficient snapshots
- recovery assumptions unclear

Operational risk is high.

---

## RC1 - Theoretical

Rollback appears possible but has not been validated.

Characteristics:

- snapshots exist
- restoration path inferred
- no verification performed

---

## RC2 - Partially Verified

Rollback has been tested in limited scenarios.

Characteristics:

- partial restoration validated
- known limitations documented
- some manual recovery steps required

---

## RC3 - Operationally Verified

Rollback has been validated under realistic operational conditions.

Characteristics:

- restoration steps verified
- resulting runtime validated
- lineage preserved
- known-good state confirmed

---

## RC4 - Continuously Recoverable

Rollback and restoration are automated or continuously validated.

Characteristics:

- automated snapshot integrity
- continuous drift detection
- reproducible rollback execution
- verified recovery metrics

---

# Current ARI Direction

ARI currently supports:

- rollback boundary preservation
- snapshot governance
- lineage recording
- operational recovery planning

Future tooling may support:

- rollback simulation
- automated validation
- trust scoring
- continuous recovery testing

---

# AI Behavior Expectations

AI systems should:

- avoid overstating rollback confidence
- classify uncertainty conservatively
- preserve rollback optionality
- identify missing recovery dependencies
- recommend validation when rollback confidence is low

---

# Operational Philosophy

The existence of a backup does not guarantee operational recovery.

Recovery confidence must be earned.
