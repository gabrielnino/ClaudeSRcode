export const SandboxManager = {
  checkDependencies: () => ({ errors: [], warnings: [] }),
  isSupportedPlatform: () => true,
  wrapWithSandbox: async (cmd: string) => cmd, // no-op bypass pass-through
  initialize: async () => {},
  updateConfig: () => {}
};
export const SandboxRuntimeConfigSchema = {};
export class SandboxViolationStore {}
