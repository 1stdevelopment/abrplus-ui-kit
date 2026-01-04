import chalk from 'chalk';
import glob from 'fast-glob';
import fs from 'fs/promises';
import { createRequire } from 'module';
import path from 'path';
import prettier from 'prettier';
import { RecursiveKeyValuePair } from 'tailwindcss/types/config';
import { searchForWorkspaceRoot } from 'vite';

const require = createRequire(import.meta.url);
const cwd = searchForWorkspaceRoot(process.cwd());

// Paths
const COLORS_DIR = 'src/configs/theme/colors.ts';
const BASE_TW_DIR = 'src/configs/tailwindcss/index.ts'; // v3 config
const BASE_TW_CSS = 'src/configs/tailwindcss/index.css'; // v4 CSS output

type DeepRequired<T> = {
  [K in keyof T]-?: NonNullable<DeepRequired<T[K]>>;
};

// ------------------- Utilities -------------------
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
  const configs: DeepRequired<any> = require(path).default;
  return configs;
}

async function readLogicColors(path: string) {
  const colors = require(path).colors;
  return colors;
}

// ------------------- Templates -------------------
function templateV3(content: DeepRequired<any>) {
  return [
    '// colors are auto-generated',
    `const config = ${JSON.stringify(content, null, 2)};`,
    'export default config;',
  ].join('\n\n');
}

function templateV4CSS(colors: Record<string, string>) {
  const lines = ['/* Auto-Generated for Tailwind V4 */', '@theme {'];
  for (const key in colors) {
    lines.push(`  --color-${key}: ${colors[key]};`);
  }
  lines.push('}');
  return lines.join('\n');
}

// ------------------- Main -------------------
async function syncColors() {
  const [logicColorsPath] = await glob(COLORS_DIR, { absolute: true, cwd });
  const [baseTailwindPath] = await glob(BASE_TW_DIR, { absolute: true, cwd });

  const logicColors = await readLogicColors(logicColorsPath);
  const normalizedLogicColors = getColorKeys(logicColors) as any;

  // ---- 1️⃣ Update v3 Tailwind config ----
  const v3Content = (await readTailwindConfig(baseTailwindPath)) as any;
  v3Content.theme.colors = normalizedLogicColors;

  const prettierOptions = await prettier.resolveConfig(cwd);

  const prettierV3 = await prettier.format(templateV3(v3Content), {
    ...(prettierOptions ?? {}),
    parser: 'babel-ts',
  });

  await fs.writeFile(baseTailwindPath, prettierV3);

  // ---- 2️⃣ Generate v4 CSS ----
  const v4CSS = templateV4CSS(normalizedLogicColors);
  const prettierV4 = await prettier.format(v4CSS, {
    ...(prettierOptions ?? {}),
    parser: 'css',
  });

  const destCSS = path.resolve(cwd, BASE_TW_CSS);
  await fs.writeFile(destCSS, prettierV4);

  console.info(`\n${chalk.greenBright('[SUCCESS]')} Tailwind colors synced for v3 + v4 CSS`);
}

// ------------------- Run -------------------
syncColors().catch(console.error);
