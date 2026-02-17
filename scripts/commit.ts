import chalk from 'chalk';
import { exec } from 'child_process';
import path from 'path';
import { promisify } from 'util';

/* -------------------------------------------------------------------------- */
const execAsync = promisify(exec);
/* -------------------------------------------------------------------------- */
export async function commitChanges(filesToCommit: string[], message: string) {
  const normalizedFiles = filesToCommit.map((file) =>
    path.relative(process.cwd(), file).replace(/\\/g, '/'),
  );

  await execAsync(`git add ${normalizedFiles.map((f) => `"${f}"`).join(' ')}`);

  const { stdout: staged } = await execAsync('git diff --cached --name-only');

  if (!staged.trim()) {
    console.log(
      chalk.yellow(
        `→ No changes detected in ${normalizedFiles.map((f) => `"${f}"`).join(' ')} files, skipping commit`,
      ),
    );
    return;
  }

  await execAsync(`git commit -m "${message}"`);

  console.log(chalk.greenBright('✔ Icons committed to git'));
}
