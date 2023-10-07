// src/index.ts

import * as fs from 'fs';
import { preprocessFile } from './preprocessor/preprocessor';
import { parseArguments } from './cli/cli';

// Load emoji mappings
const emojiMappings = JSON.parse(fs.readFileSync('./src/emojiMap.json', 'utf-8'));

// Parse CLI arguments
const filePath = parseArguments(process.argv);

// Process the file
preprocessFile(filePath, emojiMappings);

