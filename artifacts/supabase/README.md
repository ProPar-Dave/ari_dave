# Supabase Artifact Governance

This directory contains governed Supabase artifacts and rollback material.

---

# Purpose

Supabase runtime state changes quickly and can be modified by:

- humans
- AI agents
- migrations
- generated tooling
- deployment systems

This directory preserves enough operational state to:

- recover previous behavior
- understand mutation history
- reconstruct lineage
- explain deployment state
- compare snapshots over time

---

# Recommended Structure

```text
/supabase
  /edge-functions
  /schema-snapshots
  /rls-policies
  /migrations
  /environment-manifests
  /rollback-playbooks
```

---

# Snapshot Expectations

Before meaningful mutation, capture:

- edge functions
- migrations
- schema definitions
- RLS policies
- scheduled jobs
- environment manifest without secret values

---

# Environment Manifest Rules

Environment manifests may include:

```yaml
SUPABASE_URL: present
SUPABASE_ANON_KEY: present
SUPABASE_SERVICE_ROLE_KEY: redacted
```

Environment manifests must not include actual secrets.

---

# Edge Function Doctrine

Edge functions should be treated as recoverable operational artifacts.

Each meaningful state should preserve:

- source files
- deployment assumptions
- linked migrations
- runtime dependencies
- related policies
- deployment environment

---

# Rollback Philosophy

A rollback path should exist before destructive mutation.

Rollback is considered incomplete if restoration depends entirely on regeneration.
