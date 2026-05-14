# ARI Snapshot Orchestrator

Purpose: preserve Supabase Edge Function runtime source into Git before mutation.

This tool intentionally separates runtime export from runtime materialization:

1. Export the Supabase Edge Function bundle to a local JSON file using an approved local workflow.
2. Run this orchestrator against that JSON export.
3. Commit the materialized source, manifest, and hashes to Git.
4. Only then allow runtime mutation.

## Current target

- Supabase project: `bjpcjlemlfnmrqseldmb`
- Edge function: `make-server-b98afb97`
- Snapshot: `2026-05-13-v77`
- Archive root: `ari-runtime-archive/snapshots/2026-05-13-v77`

## Run

```bash
cd tools/snapshot-orchestrator
npm install
npm run snapshot -- ./supabase-edge-function-export.json
```

The command materializes files under the configured snapshot root and prints a hash report to stdout.

## Required governance rule

Do not mutate the runtime until:

- `source/index.tsx` is captured
- `source/bvs-queries.tsx` is captured
- all eight source files have SHA-256 hashes
- `manifest.json` reports every file as `captured`
- `hashes.json` reports `status: complete`
