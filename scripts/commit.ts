import chalk from 'chalk';
import { exec } from 'child_process';
import path from 'path';
import { promisify } from 'util';

/* -------------------------------------------------------------------------- */
const execAsync = promisify(exec);
/* -------------------------------------------------------------------------- */
export async function commitChanges(filesToCommit: string[], message: string) {
  console.log(chalk.cyan('→ Committing generated icons'));

  const { stdout } = await execAsync('git status --porcelain');

  const changedFiles = stdout
    .split('\n')
    .filter(Boolean)
    .map((line) => line.substring(3).trim()); // remove "M  "

  const normalizedFiles = filesToCommit.map((file) =>
    path.relative(process.cwd(), file).replace(/\\/g, '/'),
  );

  const relevantChanges = normalizedFiles.some((file) => changedFiles.includes(file));

  if (!relevantChanges) {
    console.log(
      chalk.yellow(
        `→ No changes detected in ${normalizedFiles.map((f) => `"${f}"`).join(' ')} files, skipping commit`,
      ),
    );
    return;
  }

  await execAsync(`git add ${normalizedFiles.map((f) => `"${f}"`).join(' ')}`);

  await execAsync(`git commit -m "${message}"`);

  console.log(chalk.greenBright('✔ Icons committed to git'));
}
