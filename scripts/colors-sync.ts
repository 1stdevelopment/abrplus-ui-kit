import { Config } from 'tailwindcss';

import chalk from 'chalk';
import glob from 'fast-glob';
import fs from 'fs/promises';
import { createRequire } from 'module';
import path from 'path';
import prettier from 'prettier';
import { RecursiveKeyValuePair } from 'tailwindcss/types/config';
import { searchForWorkspaceRoot } from 'vite';

const require = createRequire(import.meta.url);

type DeepRequired<T> = {
  [K in keyof T]-?: NonNullable<DeepRequired<T[K]>>;
};

const cwd = searchForWorkspaceRoot(process.cwd());

const COLORS_DIR = 'src/configs/theme/colors.ts';
const BASE_TW_DIR = 'src/configs/tailwindcss/index.ts';

function getColorKeys(colors: Record<string, RecursiveKeyValuePair>) {
  const result: RecursiveKeyValuePair = {};

  for (const key in colors) {
    const newKey = key.replace(/_/g, '-');

    if (typeof colors[key] === 'string') {
      result[newKey] = colors[key];
    } else {
      for (const subKey in colors[key]) {
        const newSubKey = `${newKey}-${subKey.replace(/_/g, '-')}`;
        result[newSubKey] = colors[key][subKey];
      }
    }
  }

  return result;
}

async function readTailwindConfig(path: string) {
  const configs: DeepRequired<Config> = require(path).default;

  return configs;
}

async function readLogicColors(path: string) {
  const colors = require(path).colors;

  return colors;
}

function template(content: DeepRequired<Config>) {
  const s1 = `// colors are auto-generated`;
  const s2 = `const config = ${JSON.stringify(content)}`;
  const s3 = `export default config`;

  const tokens = [s1, s2, s3];

  return tokens.join('\n\n');
}

async function syncColors() {
  const [logicColorsPath] = await glob(COLORS_DIR, { absolute: true, cwd });
  const [baseTailwindPath] = await glob(BASE_TW_DIR, { absolute: true, cwd });

  const logicColors = await readLogicColors(logicColorsPath);

  const normalizedLogicColors = getColorKeys(logicColors);

  const content = await readTailwindConfig(baseTailwindPath);

  content.theme.colors = normalizedLogicColors;

  const prettierOptions = await prettier.resolveConfig(cwd);

  const prettierTheme = await prettier.format(template(content), {
    ...(prettierOptions ?? {}),
    parser: 'babel-ts',
  });

  const dest = path.resolve(cwd, BASE_TW_DIR);

  fs.writeFile(dest, prettierTheme);
}

syncColors()
  .then(() => console.info(`\n${chalk.greenBright('[SUCCESS]')} The tailwind colors are synced\n`))
  .catch(console.error);
