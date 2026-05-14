import { loadConfig } from "./config.js";
import { loadEdgeFunctionExport } from "./runtime/export-edge-function.js";
import { materializeRuntimeExport } from "./snapshot/materialize-runtime-export.js";
import { generateHashes } from "./snapshot/generate-hashes.js";

async function main() {
  const config = loadConfig();
  const exportPath = process.argv[2];
  if (!exportPath) {
    throw new Error("Usage: npm run snapshot -- ./path/to/supabase-edge-function-export.json");
  }

  const runtime = await loadEdgeFunctionExport(exportPath);
  const files = await materializeRuntimeExport(config.snapshotRoot, runtime);
  const hashes = await generateHashes(config.snapshotRoot, files);

  console.log(JSON.stringify({
    snapshotId: config.snapshotId,
    snapshotRoot: config.snapshotRoot,
    runtime: {
      slug: runtime.slug,
      version: runtime.version,
      status: runtime.status,
      bundleSha256: runtime.ezbr_sha256 ?? null,
    },
    files,
    hashes,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
