import fs from 'fs';
import path from 'path';

import config from '../src/assets/fonts/icomoon/selection.json';

const target = 'src/components/atoms/icon/constants';

const cwd = process.cwd();

const iconsContent = path.resolve(cwd, target, 'iconsContent.ts');
const iconNames = path.resolve(cwd, target, 'iconNames.ts');

const icons: Record<string, string> = {};
const types: string[] = [];

const modifiedIcons = config.icons.map((icon) => ({
  ...icon,
  code: icon.properties.code,
  name: icon.properties.name,
}));

modifiedIcons.sort(({ name: a }, { name: b }) => a.localeCompare(b));

modifiedIcons.forEach(({ name, code }) => {
  icons[name] = Number(code).toString(16);
});

modifiedIcons.forEach(({ name }) => {
  types.push(`${name}`);
});

fs.writeFileSync(iconsContent, ` export const iconsContent = ${JSON.stringify(icons)}`);
fs.writeFileSync(
  iconNames,
  `export type IconsNames = ${types.map((name) => `"${name}"`).join('\n|')}`,
);
