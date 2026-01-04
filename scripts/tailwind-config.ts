import chalk from 'chalk';
import glob from 'fast-glob';
import fs from 'fs/promises';
import { createRequire } from 'module';
import path from 'path';
import prettier from 'prettier';
import { searchForWorkspaceRoot } from 'vite';

const require = createRequire(import.meta.url);
const cwd = searchForWorkspaceRoot(process.cwd());

// --------------------------------------------------
// Paths
// --------------------------------------------------
const COLORS_DIR = 'src/configs/theme/colors.ts';
const V3_TW_CONFIG = 'src/configs/tailwindcss/index.ts';
const V4_TW_CSS = 'src/configs/tailwindcss/index.css';

// --------------------------------------------------
// Fonts (STATIC)
// --------------------------------------------------
const FONTS = {
  'yekan-normal': 'YekanBakhFaRegular',
  'yekan-medium': 'YekanBakhFaMedium',
  'yekan-light': 'YekanBakhFaLight',
  'yekan-bold': 'YekanBakhFaBold',
  'roboto-normal': 'RobotoRegular',
  'roboto-light': 'RobotoLight',
  'roboto-medium': 'RobotoMedium',
  'roboto-bold': 'RobotoBold',
};

// --------------------------------------------------
// Utils
// --------------------------------------------------
function normalizeColors(colors: Record<string, any>) {
  const result: Record<string, string> = {};

  for (const key in colors) {
    const baseKey = key.replace(/_/g, '-');

    if (typeof colors[key] === 'string') {
      result[baseKey] = colors[key];
    } else {
      for (const subKey in colors[key]) {
        result[`${baseKey}-${subKey.replace(/_/g, '-')}`] = colors[key][subKey];
      }
    }
  }

  return result;
}

async function readColors() {
  const [colorsPath] = await glob(COLORS_DIR, { absolute: true, cwd });
  return require(colorsPath).colors;
}

// --------------------------------------------------
// Templates
// --------------------------------------------------
function templateV3(colors: Record<string, string>) {
  return `// Auto-Generated for Tailwind V3 */

const config = {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  },
  theme: {
    fontFamily: ${JSON.stringify(FONTS, null, 2)},
    colors: ${JSON.stringify(colors, null, 2)},
  },
};

export default config;
`;
}

function templateV4CSS(colors: Record<string, string>) {
  const lines: string[] = ['/* Auto-Generated for Tailwind V4 */ \n'];

  lines.push('@theme {');
  lines.push('  /* -------------------- */');
  lines.push('  /* Fonts */');
  lines.push('  /* -------------------- */');

  for (const key in FONTS) {
    const keyname = key as keyof typeof FONTS;
    lines.push(`  --font-${key}: ${FONTS[keyname]};`);
  }

  lines.push('');
  lines.push('  /* -------------------- */');
  lines.push('  /* Colors */');
  lines.push('  /* -------------------- */');

  for (const key in colors) {
    lines.push(`  --color-${key}: ${colors[key]};`);
  }

  lines.push('}');
  return lines.join('\n');
}

// --------------------------------------------------
// Main
// --------------------------------------------------
async function generate() {
  const rawColors = await readColors();
  const colors = normalizeColors(rawColors);

  const prettierConfig = await prettier.resolveConfig(cwd);

  // ---- v3 config ----
  const v3 = await prettier.format(templateV3(colors), {
    ...(prettierConfig ?? {}),
    parser: 'babel-ts',
  });

  await fs.writeFile(path.resolve(cwd, V3_TW_CONFIG), v3);

  // ---- v4 CSS ----
  const v4 = await prettier.format(templateV4CSS(colors), {
    ...(prettierConfig ?? {}),
    parser: 'css',
  });

  await fs.writeFile(path.resolve(cwd, V4_TW_CSS), v4);

  console.log(`\n${chalk.greenBright('[SUCCESS]')} Tailwind v3 config & v4 theme generated`);
}

// --------------------------------------------------
generate().catch(console.error);
