import chalk from 'chalk';
import { exec } from 'child_process';
import { promisify } from 'util';

/* -------------------------------------------------------------------------- */
const execAsync = promisify(exec);
/* -------------------------------------------------------------------------- */
export async function commitChanges(filesToCommit: string[]) {
  console.log(chalk.cyan('→ Committing generated icons'));
  const { stdout } = await execAsync('git status --porcelain');
  const relevantChanges = filesToCommit.some((f) => stdout.includes(f));

  if (!relevantChanges) {
    console.log(chalk.yellow('→ No changes detected in icon files, skipping commit'));
    return;
  }
  await execAsync(`git add ${filesToCommit.map((f) => `"${f}"`).join(' ')}`);

  await execAsync(`git commit -m "chore(icons): regenerate icon constants"`);

  console.log(chalk.greenBright('✔ Icons committed to git'));
}
