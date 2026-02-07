import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';

import { commitChanges } from './commit';

const DRIVE_URL =
  'https://drive.usercontent.google.com/u/0/uc?id=1IcnNf7YUzIkceDeW-8aI3eCxbEWLOTxv&export=download';

const OUTPUT_DIR = path.resolve(process.cwd(), 'src/components/atoms/icon/constants');

const ICONS_PACK_FILE = path.join(OUTPUT_DIR, 'iconsPack.ts');
const ICON_NAMES_FILE = path.join(OUTPUT_DIR, 'iconNames.ts');

type IcoMoonSelection = {
  icons: Array<{
    icon: {
      paths: string[];
      attrs?: Array<Record<string, string>>;
      width?: number;
    };
    properties: {
      name: string;
      code: number;
    };
  }>;
  height: number;
};

async function downloadSelectionJson(): Promise<IcoMoonSelection> {
  const res = await fetch(DRIVE_URL, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
      Accept: 'application/json,text/plain,*/*',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to download selection.json (${res.status})`);
  }

  return res.json();
}

function generateIconsPack(selection: IcoMoonSelection) {
  const iconsPack: Record<string, unknown> = {};
  const iconNames: string[] = [];

  const sortedIcons = [...selection.icons].sort((a, b) =>
    a.properties.name.localeCompare(b.properties.name),
  );

  for (const icon of sortedIcons) {
    const name = icon.properties.name;

    iconsPack[name] = { ...icon, height: selection.height };
    iconNames.push(name);
  }

  return { iconsPack, iconNames };
}

async function writeFiles(iconsPack: Record<string, unknown>, iconNames: string[]) {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const iconsPackContent = `export const iconsPack = ${JSON.stringify(iconsPack, null, 2)} as const;
`;

  const iconNamesContent = `export type IconsNames =
${iconNames.map((name) => `  | "${name}"`).join('\n')};
`;

  await fs.writeFile(ICONS_PACK_FILE, iconsPackContent);
  await fs.writeFile(ICON_NAMES_FILE, iconNamesContent);
}

async function run() {
  try {
    console.log(chalk.cyan('→ Downloading IcoMoon selection.json'));

    const selection = await downloadSelectionJson();

    console.log(chalk.cyan('→ Generating icon constants'));

    const { iconsPack, iconNames } = generateIconsPack(selection);

    await writeFiles(iconsPack, iconNames);

    const shouldCommit = process.argv.includes('--commit');
    if (shouldCommit) await commitChanges([ICON_NAMES_FILE, ICONS_PACK_FILE]);

    console.log(chalk.greenBright(`✔ Generated ${iconNames.length} icons successfully`));
  } catch (err) {
    console.error(chalk.red('✖ Icon generation failed'));
    console.error(err);
    process.exit(1);
  }
}

run();
