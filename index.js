// @ts-check

const core = require('@actions/core');

function verifyConditions() {
  // core.setOutput("new-release-published", "false");
  process.env.newReleasePublished = "false";
}

function generateNotes(_pluginConfig, { nextRelease }) {
  process.env.newReleasePublished = "true";
  process.env.newRelease = nextRelease.version;
  // core.setOutput("new-release-published", "true");
  // core.setOutput("new-release-version", nextRelease.version);
}

module.exports = {
  verifyConditions,
  generateNotes,
};
