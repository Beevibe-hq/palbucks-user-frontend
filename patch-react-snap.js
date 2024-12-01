const fs = require("fs");
const path = require("path");

const filePath = path.resolve(
  __dirname,
  "node_modules/react-snap/node_modules/puppeteer/lib/Launcher.js"
);

const content = fs.readFileSync(filePath, "utf8");
const patchedContent = content.replace(
  "const browser = await puppeteer.launch();",
  `
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  `
);

fs.writeFileSync(filePath, patchedContent, "utf8");
