// src/preprocessor/preprocessor.ts

import * as fs from 'fs';

export function preprocessFile(filePath: string, mappings: Record<string, string>): void {
  let code = fs.readFileSync(filePath, 'utf-8');
  for (const [emoji, directive] of Object.entries(mappings)) {
    const regex = new RegExp(`\/\/ ${emoji}`, 'g');
    code = code.replace(regex, `// ${directive}`);
  }
  fs.writeFileSync(filePath, code, 'utf-8');
}

