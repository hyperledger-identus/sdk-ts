/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: [
    'main',
    '+([0-9])?(.{+([0-9]),x}).x',
    { name: 'beta', prerelease: 'rc' }
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: "conventionalcommits" }],
    ['@semantic-release/release-notes-generator', { preset: "conventionalcommits" }],
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    ['@semantic-release/exec', { "prepareCmd": 'npm version ${nextRelease.version} --git-tag-version false' }],
    ['@semantic-release/exec', { "prepareCmd": 'npm run build' }],
    ['@semantic-release/exec', { "prepareCmd": 'npm run docs' }],
    ['@semantic-release/exec', { "publishCmd": 'npm publish --tag ${nextRelease.channel || "latest"} --access public' }],
    ['@semantic-release/git', {
      assets: [
        'package.json',
        'package-lock.json',
        'CHANGELOG.md',
        'docs/**/*',
      ],
      message: 'chore(release): release ${nextRelease.version}\n\n${nextRelease.notes}',
    }],
  ],
};
