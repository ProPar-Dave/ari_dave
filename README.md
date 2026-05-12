# ARI - Artifact Registry and Intelligence

ARI is a structured, versioned home for the important things we work on.

It exists because AI tools can now change real systems very quickly. They can rewrite code, modify databases, alter Supabase edge functions, generate product logic, revise documentation, and change operational assumptions. That speed is useful, but it creates risk when there is no durable record of what changed, why it changed, what it replaced, and how to roll it back.

This repository is the rollback and memory layer for that work.

---

## Easy read for humans

### What problem does this solve?

Sometimes an AI or automation may change something important before we fully understand the consequence. For example, an AI agent may remove Supabase edge functions, rewrite generated code, alter a schema, or replace a working prompt. Even if the tool can regenerate the missing files, that is not enough.

We need a reliable way to answer:

- What existed before the change?
- Who or what changed it?
- Why was it changed?
- What version is currently trusted?
- What version can we roll back to?
- Which artifacts are experimental versus canonical?
- Which tools are allowed to act on which artifacts?

ARI provides that structure.

### What belongs here?

Anything that is meaningful enough that losing it would slow us down, create confusion, or damage trust.

Examples:

- Supabase edge functions
- database schemas and migrations
- RLS policies
- prompts and agent instructions
- LST documents
- architecture decisions
- Kiro specifications
- generated UI contracts
- synthetic datasets
- Figma Make handoff instructions
- Claude or ChatGPT generated outputs worth preserving
- environment snapshots, excluding secrets

### What does not belong here?

ARI should not become a junk drawer.

Do not store:

- secrets or credentials
- raw production data
- throwaway drafts with no future value
- large binary files unless explicitly needed
- files already safely versioned elsewhere with clear rollback coverage

### The simplest mental model

ARI has three jobs:

1. **Remember** what mattered.
2. **Explain** why it mattered.
3. **Recover** when something breaks.

### The artifact lifecycle

Most artifacts move through these states:

```text
scratch -> experimental -> candidate -> approved -> canonical -> deprecated -> archived
```

Not everything needs to reach canonical status. Experimental artifacts are allowed. The key is that their status must be visible.

### The core rule

Before an AI or automation changes a meaningful external system, ARI should capture a rollback point.

That means:

1. Snapshot the current state.
2. Store the snapshot or manifest.
3. Make the intended change.
4. Record what changed.
5. Promote only after review.

---

## Repository map

```text
/governance
  /lst
  /adr
  /agents
  /kiro
  /policies

/artifacts
  /supabase
    /edge-functions
    /schema-snapshots
    /rls-policies
    /migrations
    /environment-manifests
  /figma
  /datasets
  /generated-ui
  /prompts

/projects
  /budgeting
  /ap-automation
  /inventory
  /shared-platform

/registry
  artifact-registry.yaml
  artifact-schema.yaml
  snapshot-schema.yaml

/templates
  artifact-manifest.template.yaml
  snapshot-manifest.template.yaml
  change-log-entry.template.md
```

---

## How humans should use ARI

### When starting meaningful work

Create or update an artifact manifest when the work produces something that should be traceable.

At minimum, capture:

- artifact name
- artifact type
- owner
- status
- source of truth
- linked project
- current version
- related external system
- rollback location, if applicable

### When using Claude, ChatGPT, Kiro, Figma Make, or other AI tools

Do not treat generated output as trusted just because it exists.

Generated output should be classified as one of:

- **scratch** - useful for thinking only
- **experimental** - may be tested, not trusted
- **candidate** - ready for review
- **approved** - accepted by a human
- **canonical** - source of truth for future work

### When changing Supabase

Before any AI-driven Supabase mutation, capture a snapshot of the relevant state.

At minimum:

- edge functions
- schema definition
- migrations
- RLS policies
- storage policies, if relevant
- environment manifest without secret values

Never store secret values in this repository.

### When something breaks

Use ARI to locate:

1. the last known good snapshot
2. the artifact manifest for the affected system
3. the change log entry that introduced the mutation
4. the rollback path

---

# Deep model for AIs and automation

## Purpose

ARI is an AI-readable artifact governance repository. Its role is to preserve structured, versioned, explainable, and recoverable records of meaningful project artifacts across tools and systems.

ARI is not merely documentation. It is an operational control layer for AI-assisted work.

## Authority model

ARI separates four kinds of authority:

| Layer | Governs | Examples |
|---|---|---|
| Logic Source of Truth | Business and product meaning | LST, invariants, canonical rules |
| Source Control | File history and diffs | Git commits, branches, tags |
| Runtime Systems | Executable state | Supabase, deployed functions, databases |
| Artifact Registry | Lineage, status, rollback, provenance | manifests, snapshots, change logs |

AI systems must not confuse these layers.

A deployed artifact is not automatically canonical.
A generated artifact is not automatically approved.
A Git commit is not automatically trusted.
A runtime state is not automatically the source of truth.

## Operating doctrine

### Doctrine 1: Meaningful artifacts must be addressable

Each meaningful artifact should have a stable identifier.

Recommended format:

```text
ART-[DOMAIN]-[TYPE]-[NUMBER]
```

Examples:

```text
ART-SUPABASE-EDGE-0001
ART-LST-BUDGET-0001
ART-PROMPT-KIRO-0001
ART-DATASET-BVS-0001
```

### Doctrine 2: Canonical artifacts require human approval

AI tools may generate, transform, compare, and propose artifacts.

AI tools must not mark artifacts canonical unless explicitly instructed by a human.

### Doctrine 3: Runtime mutation requires rollback preparation

Before modifying any external runtime system, automation should create or verify a rollback point.

This applies especially to:

- Supabase edge functions
- database schemas
- migrations
- RLS policies
- storage policies
- scheduled jobs
- generated app code that will be deployed

### Doctrine 4: Snapshots are immutable

A snapshot represents what existed at a point in time.

Do not edit snapshots after creation except to add metadata that does not alter the captured state. If the captured state was wrong or incomplete, create a new snapshot and mark the earlier one superseded.

### Doctrine 5: Promotion is explicit

The registry must make clear whether an artifact is:

```text
scratch, experimental, candidate, approved, canonical, deprecated, archived
```

When uncertain, classify conservatively.

### Doctrine 6: Secrets are never stored

Store references and manifests, not secret values.

Allowed:

```yaml
SUPABASE_URL: present
SUPABASE_ANON_KEY: present
SUPABASE_SERVICE_ROLE_KEY: redacted
```

Forbidden:

```yaml
SUPABASE_SERVICE_ROLE_KEY: actual-secret-value
```

## Required AI behavior

When an AI tool interacts with this repository, it should:

1. Read this README first.
2. Check the registry for existing artifact IDs before creating new ones.
3. Prefer updating manifests over creating untracked files.
4. Preserve historical records.
5. Never delete canonical artifacts without a replacement and explicit human instruction.
6. Never store credentials, tokens, keys, or production data.
7. Create rollback snapshots before recommending destructive or broad runtime changes.
8. Mark uncertainty explicitly.
9. Use human-readable commit messages.
10. Keep this README updated when the model changes.

## Versioning model

Use semantic versioning for artifacts where possible:

```text
major.minor.patch
```

Suggested interpretation:

- **major** - breaking change to meaning, interface, schema, or runtime behavior
- **minor** - additive or compatible enhancement
- **patch** - correction, clarification, or non-breaking fix

For snapshots, use timestamped identifiers:

```text
SNAP-[SYSTEM]-YYYYMMDD-HHMMSS
```

Example:

```text
SNAP-SUPABASE-20260512-183000
```

## Branching model

Recommended branch names:

```text
artifact/[artifact-id]-[short-name]
snapshot/[system]-[date]
policy/[short-policy-name]
project/[project-name]-[workstream]
```

Examples:

```text
artifact/ART-SUPABASE-EDGE-0001-budget-functions
snapshot/supabase-20260512
policy/supabase-rollback-before-mutation
```

## Commit message convention

Use clear operational commit messages:

```text
Initialize artifact registry structure
Add Supabase rollback policy
Snapshot Supabase edge functions before mutation
Promote Kiro workflow artifact to candidate
Deprecate obsolete prompt artifact
```

## Tags

Use Git tags for important rollback points.

Suggested format:

```text
snapshot/[system]/[environment]/[timestamp]
release/[project]/[version]
canonical/[artifact-id]/[version]
```

Examples:

```text
snapshot/supabase/staging/2026-05-12T18-30-00Z
canonical/ART-SUPABASE-EDGE-0001/1.0.0
```

## Minimum viable workflow

### Before changing a runtime system

1. Identify affected artifact.
2. Check or create manifest.
3. Capture snapshot.
4. Commit snapshot.
5. Apply change.
6. Capture post-change state.
7. Record change log entry.
8. Promote or roll back.

### Before accepting AI-generated output

1. Store generated output under an appropriate artifact folder.
2. Add or update manifest.
3. Mark status as experimental or candidate.
4. Review against LST or project rules.
5. Promote only after approval.

## Supabase rollback doctrine

Supabase runtime state must be treated as recoverable infrastructure.

For any meaningful Supabase work, capture:

- edge functions source
- SQL schema snapshot
- migration list
- RLS policies
- storage policies
- relevant environment variable names, redacted

The rollback path should explain whether restoration is:

- file redeploy
- migration revert
- schema restore
- manual console operation
- generated rebuild
- unknown

Unknown rollback paths must be resolved before production mutation.

## Relationship to Kiro

Kiro can act as a structured execution environment, but ARI remains the artifact governance layer.

Kiro specs, designs, tasks, steering files, and execution outputs should be stored or referenced here when they become meaningful artifacts.

Kiro should be used to execute from governed inputs, not to become the source of truth by accident.

Recommended Kiro flow:

```text
LST or project intent
-> Kiro requirements
-> Kiro design
-> Kiro tasks
-> generated or modified artifacts
-> ARI manifest update
-> snapshot if runtime impact exists
-> human approval
-> promotion
```

## Relationship to Claude and ChatGPT

Claude and ChatGPT can both produce valuable artifacts, but neither is the source of truth by default.

Their outputs should be stored as:

- prompt artifacts
- generated documentation
- implementation candidates
- analysis records
- change proposals

The model that generated something should be recorded when known.

## Relationship to Figma Make

Figma Make output should be treated as generated implementation material.

When preserving Figma Make work, capture:

- prompt used
- generated code or exported files
- design assumptions
- linked project
- known limitations
- promotion status

## README maintenance rule

This README is itself a governed artifact.

Whenever the operating model changes, update this README in the same pull request or commit as the structural change.

If an AI tool changes repository structure without updating this README, the change is incomplete.
