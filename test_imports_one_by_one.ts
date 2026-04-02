import { readFileSync } from 'fs';

const paths = readFileSync('import_paths.txt', 'utf8').split('\n').filter(p => p.trim() !== '');

async function run() {
  for (const path of paths) {
    if (path === 'bun:bundle') {
      console.log('Skipping bun:bundle (needs build-time support)');
      continue;
    }
    console.log(`Importing ${path}...`);
    try {
      // Use process.cwd() to resolve relativeness if needed, but dynamic import should work from current dir
      await import(path);
      console.log(`Imported ${path}`);
    } catch (e) {
      console.error(`Error importing ${path}: ${e}`);
    }
  }
}

run();
