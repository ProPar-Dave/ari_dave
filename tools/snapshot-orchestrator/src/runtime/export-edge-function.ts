import { readFile } from "node:fs/promises";

export type ExportedEdgeFunctionFile = {
  name: string;
  content: string;
};

export type ExportedEdgeFunction = {
  id: string;
  slug: string;
  version: number;
  name: string;
  status: string;
  entrypoint_path: string;
  import_map: boolean;
  verify_jwt: boolean;
  created_at: number;
  updated_at: number;
  ezbr_sha256?: string;
  files: ExportedEdgeFunctionFile[];
};

export async function loadEdgeFunctionExport(path: string): Promise<ExportedEdgeFunction> {
  const raw = await readFile(path, "utf8");
  const payload = JSON.parse(raw) as ExportedEdgeFunction;
  if (!Array.isArray(payload.files)) {
    throw new Error("Edge function export did not include a files array.");
  }
  return payload;
}
