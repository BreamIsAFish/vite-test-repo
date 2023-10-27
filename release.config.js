module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/github',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
  release: {
    prepare: [
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
        },
      ],
      '@semantic-release/npm',
      {
        path: '@semantic-release/git',
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
      },
    ],
  },
}
