import type { ExportedEdgeFunction } from "../runtime/export-edge-function.js";
import type { HashEntry } from "./generate-hashes.js";

export function generateManifest(params: {
  snapshotId: string;
  runtime: ExportedEdgeFunction;
  files: string[];
  hashes: Record<string, HashEntry>;
}): unknown {
  return {
    ariSnapshotVersion: "1.0.0",
    snapshotId: params.snapshotId,
    capturedAt: new Date().toISOString(),
    source: {
      provider: "supabase",
      edgeFunctionSlug: params.runtime.slug,
      version: params.runtime.version,
      status: params.runtime.status,
      verifyJwt: params.runtime.verify_jwt,
      entrypointPath: params.runtime.entrypoint_path,
      bundleSha256: params.runtime.ezbr_sha256 ?? null,
      createdAt: params.runtime.created_at,
      updatedAt: params.runtime.updated_at,
    },
    files: params.files.map((path) => ({
      path,
      status: "captured",
      sha256: params.hashes[path]?.sha256,
      bytes: params.hashes[path]?.bytes,
    })),
  };
}
