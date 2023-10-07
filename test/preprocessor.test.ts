import * as fs from 'fs';
import { preprocessFile } from '../src/preprocessor/preprocessor'; // Modify path if needed

// Dynamic import of the emoji mappings
import emojiMappings from '../src/emojis.json';

describe('Preprocessor Tests', () => {
  it('should replace emojis with corresponding TypeScript directives', () => {
    const testFilePath = './test/sample.ts';
    preprocessFile(testFilePath, emojiMappings);

    const processedCode = fs.readFileSync(testFilePath, 'utf-8');
    
    // Dynamically generate expectations based on emojiMappings
    for (const [emoji, tsDirective] of Object.entries(emojiMappings)) {
      expect(processedCode).toContain(`// ${tsDirective}`);
      expect(processedCode).not.toContain(`// ${emoji}`);
    }
  });

  // Add more test cases as needed
});

