const fs = require("fs");
const path = require("path");

const reactSnapPath = path.resolve(
  __dirname,
  "node_modules/react-snap/lib/puppeteer_utils.js"
);

fs.readFile(reactSnapPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading react-snap file:", err);
    process.exit(1);
  }

  const patchedContent = data.replace(
    "const puppeteer = require('puppeteer');",
    "const chromium = require('chrome-aws-lambda');\nconst puppeteer = chromium.puppeteer;"
  );

  fs.writeFile(reactSnapPath, patchedContent, "utf8", (writeErr) => {
    if (writeErr) {
      console.error("Error writing patched react-snap file:", writeErr);
      process.exit(1);
    }
    console.log("Successfully patched react-snap to use chrome-aws-lambda.");
  });
});
