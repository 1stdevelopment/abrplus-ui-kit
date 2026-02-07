import chalk from 'chalk';
import { exec } from 'child_process';
import { promisify } from 'util';

/* -------------------------------------------------------------------------- */
const execAsync = promisify(exec);
/* -------------------------------------------------------------------------- */
export async function commitChanges(filesToCommit: string[]) {
  console.log(chalk.cyan('→ Committing generated icons'));
  const { stdout } = await execAsync('git status --porcelain');
  if (!stdout.trim()) {
    console.log(chalk.yellow('→ No changes detected, skipping commit'));
    return;
  }
  await execAsync(`git add ${filesToCommit.map((f) => `"${f}"`).join(' ')}`);

  await execAsync(`git commit -m "chore(icons): regenerate icon constants"`);

  console.log(chalk.greenBright('✔ Icons committed to git'));
}
