// Mock of the built-in bun:bundle
// By returning false, we assure dead-code elimination logic acts as if all Experimental toggles are disabled.
export const feature = (name: string): boolean => false;
