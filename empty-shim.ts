// Shims for internal Anthropic modules

// @anthropic-ai/claude-agent-sdk
export type PermissionMode = any;

// @anthropic-ai/mcpb
export type McpbManifest = any;
export type McpbUserConfigurationOption = any;
export const getMcpConfigForManifest = async () => null;

// @ant/computer-use-mcp
export const getSentinelCategory = () => null;
export type CuPermissionRequest = any;
export type CuPermissionResponse = any;
export const DEFAULT_GRANT_FLAGS = {};
export const buildComputerUseTools = () => [];
export const bindSessionContext = () => ({});
export const API_RESIZE_PARAMS = {};
export const targetImageSize = {};

// @ant/claude-for-chrome-mcp
export const BROWSER_TOOLS = [];

// @ant/computer-use-swift
export type ComputerUseAPI = any;

// @ant/computer-use-input
// (Add more as needed)
