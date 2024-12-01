const fs = require("fs");
const path = require("path");

const reactSnapPath = path.resolve(
  __dirname,
  "node_modules/react-snap/lib/puppeteer_utils.js"
);

const fileContent = fs.readFileSync(reactSnapPath, "utf8");

// Add Puppeteer arguments and fix executablePath for Vercel
const modifiedContent = fileContent.replace(
  "const browser = await puppeteer.launch(",
  `
  const chromium = require('chrome-aws-lambda');
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath || puppeteer.executablePath(),
    headless: chromium.headless,
  });`
);

fs.writeFileSync(reactSnapPath, modifiedContent, "utf8");
console.log("react-snap has been patched for Puppeteer");
