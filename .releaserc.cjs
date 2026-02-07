module.exports = {
  branches: ['develop'],
  tagFormat: 'v${version}',
  repositoryUrl: 'https://tfs.1st.co.com/tfs/AbrPlus/AbrPlus-UI-Kit/_git/AbrPlus-UI-Kit',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'pnpm-lock.yaml', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
