import * as fs from 'fs';
import { preprocessFile } from '../src/preprocessor/preprocessor';
import emojiMappings from '../src/emojis.json';

const testFilePath = './test/sample.ts';
const outputFilePath = './test/output.ts';

// Make a copy of the sample file to keep the original intact
fs.copyFileSync(testFilePath, outputFilePath);

// Preprocess the file
preprocessFile(outputFilePath);

// Load the processed and original code
const processedCode = fs.readFileSync(outputFilePath, 'utf-8');
const originalCode = fs.readFileSync(testFilePath, 'utf-8');

// Clean up - delete the output file
fs.unlinkSync(outputFilePath);

// Extract all emojis from the original test file
const emojisUsed = Array.from(originalCode.matchAll(/\/\/ (\p{Emoji})/gu)).map(match => match[1]);

// Check if the emojis were replaced correctly
for (const emoji of emojisUsed) {
  const directive = (emojiMappings as Record<string, string>)[emoji];

  if (!directive) {
    console.error(`Test failed: Mapping for "${emoji}" not found!`);
    process.exit(1);
  }

  if (processedCode.includes(`// ${emoji}`)) {
    console.error(`Test failed: "${emoji}" was not replaced!`);
    process.exit(1);
  }

  if (!processedCode.includes(`// ${directive}`)) {
    console.error(`Test failed: "${directive}" was not inserted!`);
    process.exit(1);
  }
}

console.log('Test passed: All used emojis were replaced successfully!');
