import * as fs from 'fs';
import * as path from 'path';

export function preprocessFile(filePath: string): void {
  // Define the path to the emojis.json file
  const emojisPath = path.resolve(__dirname, '../emojis.json');

  // Read and parse the emoji mappings from emojis.json
  const mappings: Record<string, string> = JSON.parse(fs.readFileSync(emojisPath, 'utf-8'));

  // Read the target TypeScript file
  let code = fs.readFileSync(filePath, 'utf-8');

  // Replace each emoji comment with the corresponding TypeScript directive
  for (const [emoji, directive] of Object.entries(mappings)) {
    const regex = new RegExp(`\/\/ ${emoji}`, 'g');
    code = code.replace(regex, `// ${directive}`);
  }

  // Write the modified code back to the file
  fs.writeFileSync(filePath, code, 'utf-8');
}
