export type SnapshotConfig = {
  supabaseAuth: string;
  supabaseProjectId: string;
  supabaseFunctionSlug: string;
  githubAuth: string;
  githubOwner: string;
  githubRepo: string;
  githubBranch: string;
  snapshotId: string;
  snapshotRoot: string;
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value || value.trim() === "") {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function loadConfig(): SnapshotConfig {
  const snapshotId = process.env.ARI_SNAPSHOT_ID ?? "2026-05-13-v77";
  return {
    supabaseAuth: requireEnv("ARI_SUPABASE_AUTH"),
    supabaseProjectId: process.env.SUPABASE_PROJECT_ID ?? "bjpcjlemlfnmrqseldmb",
    supabaseFunctionSlug: process.env.SUPABASE_FUNCTION_SLUG ?? "make-server-b98afb97",
    githubAuth: requireEnv("ARI_GITHUB_AUTH"),
    githubOwner: process.env.GITHUB_OWNER ?? "ProPar-Dave",
    githubRepo: process.env.GITHUB_REPO ?? "ari_dave",
    githubBranch: process.env.GITHUB_BRANCH ?? "main",
    snapshotId,
    snapshotRoot: process.env.ARI_SNAPSHOT_ROOT ?? `ari-runtime-archive/snapshots/${snapshotId}`,
  };
}
