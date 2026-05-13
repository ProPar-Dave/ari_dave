import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { ExportedEdgeFunction } from "../runtime/export-edge-function.js";

export async function materializeRuntimeExport(
  snapshotRoot: string,
  runtime: ExportedEdgeFunction,
): Promise<string[]> {
  const written: string[] = [];
  for (const file of runtime.files) {
    const relativePath = join("source", file.name);
    const absolutePath = join(snapshotRoot, relativePath);
    await mkdir(dirname(absolutePath), { recursive: true });
    await writeFile(absolutePath, file.content, "utf8");
    written.push(relativePath.replaceAll("\\", "/"));
  }
  return written.sort();
}
