import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export type HashEntry = {
  sha256: string;
  bytes: number;
};

export async function generateHashes(
  snapshotRoot: string,
  files: string[],
): Promise<Record<string, HashEntry>> {
  const hashes: Record<string, HashEntry> = {};
  for (const file of files) {
    const content = await readFile(join(snapshotRoot, file));
    hashes[file] = {
      sha256: createHash("sha256").update(content).digest("hex"),
      bytes: content.byteLength,
    };
  }
  return hashes;
}
