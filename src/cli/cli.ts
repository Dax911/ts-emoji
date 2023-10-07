// src/cli/cli.ts

export function parseArguments(args: string[]): string {
  if (args.length !== 3) {
    console.error('Usage: ts-node src/index.ts [filePath]');
    process.exit(1);
  }
  return args[2];
}

