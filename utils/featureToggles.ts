/**
 * Feature Toggles
 * 
 * Centralized mechanism to disable non-core components without modifying application logic.
 * These toggles prefer disabling features (DISABLE_XXX=true) rather than enabling them,
 * to keep the default behavior intact if variables are unset.
 */

export const featureToggles = {
  isMcpDisabled: () => process.env.DISABLE_MCP === 'true',
  isAnalyticsDisabled: () => process.env.DISABLE_ANALYTICS === 'true',
  isGrowthBookDisabled: () => process.env.DISABLE_GROWTHBOOK === 'true',
  isExperimentalToolsDisabled: () => process.env.DISABLE_EXPERIMENTAL_TOOLS === 'true',
  isQolDisabled: () => process.env.DISABLE_QOL_SERVICES === 'true',
}
