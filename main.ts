// Entry program for the make.fun bounty "The agent builds a game from one prompt".
// The entry itself is the X post named in POST.json. All this program has to do
// is copy POST.json from the repository root into the output directory, where the
// house reads the post's address and then fetches the post's counts from X.
// Node 22, standard library only, no network.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(botDir, 'POST.json');

// Fail loudly on a malformed POST.json instead of copying a bad file through.
const post = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };
if (typeof post.url !== 'string' || !post.url.startsWith('https://')) {
  console.error('POST.json has no https url field; refusing to copy it.');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postPath, join(outputDir, 'POST.json'));
console.log(`POST.json copied to ${join(outputDir, 'POST.json')}`);
