module.exports = {
  branches: [
    "main",
    "develop"
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      { tarballDir: "dist" }
    ],
    [
      "@semantic-release/git",
      { message: "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}" }
    ],
    [
      "@semantic-release/github",
      { assets: "dist/*.tgz" }
    ],
    "@qiwi/semantic-release-gh-pages-plugin",
  ]
}