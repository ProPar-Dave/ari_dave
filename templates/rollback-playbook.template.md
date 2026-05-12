# Rollback Playbook

## Rollback Metadata

| Field | Value |
|---|---|
| Rollback ID | RB-0001 |
| Related Artifact | ART-EXAMPLE-0001 |
| Environment | staging |
| Risk Level | medium |
| Last Verified | YYYY-MM-DD |

---

# Purpose

Describe what this rollback playbook restores.

---

# Trigger Conditions

Describe when rollback should occur.

Examples:

- runtime failure
- deployment corruption
- data integrity drift
- AI-generated destructive mutation
- performance regression

---

# Snapshot References

List required snapshots.

Example:

```text
SNAP-SUPABASE-20260512-183000
```

---

# Rollback Steps

## Step 1

Describe first rollback action.

## Step 2

Describe second rollback action.

## Step 3

Describe validation process.

---

# Validation

Describe how successful rollback is confirmed.

Examples:

- endpoint health
- schema comparison
- runtime verification
- UI verification
- migration parity

---

# Known Limitations

Describe:

- irreversible effects
- manual dependencies
- partial restoration boundaries
- unsupported rollback cases

---

# Notes

Additional operational context.
