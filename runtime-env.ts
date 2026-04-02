console.log('DEBUG: runtime-env.ts top-level entry');
// Polyfill for Bun compilation macros
(globalThis as any).MACRO = {
  VERSION: "1.0.0-local",
  PACKAGE_URL: "https://npmjs.com/package/@anthropic-ai/claude-code",
  ISSUES_EXPLAINER: "issues",
  VERSION_CHANGELOG: "1.0.0",
  NATIVE_PACKAGE_URL: "",
  FEEDBACK_CHANNEL: "github"
};
