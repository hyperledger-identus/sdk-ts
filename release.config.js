/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: "conventionalcommits" }],
    ['@semantic-release/release-notes-generator', { preset: "conventionalcommits" }],
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    ['@semantic-release/exec', { "prepareCmd": './publish.sh ${nextRelease.version}' }],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'CHANGELOG.md',
          'docs/**/*',
        ],
        message: 'chore(release): release ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
  ],
};
