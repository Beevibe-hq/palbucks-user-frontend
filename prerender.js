import { fileURLToPath } from "url";

import puppeteer from "puppeteer";
import fs from "fs";
//const fs = require("fs");
//const path = require("path");
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//import { baseUrl } from "./src/auth/checkauthentication";

//export const Base_Url = "http://localhost:3000";
export const Base_Url = "https://www.palbucks.co";

// Fetch your crowdfund data dynamically (adjust this to your API)
const getCrowdfundData = async () => {
  const response = await fetch(
    `${"https://palbucks-api.onrender.com"}/funding/api`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch crowdfund data");
  }
  return response.json();
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    const crowdfundData = await getCrowdfundData();

    // Iterate through each event and prerender its page
    for (const crowdfund of crowdfundData) {
      const url = `${Base_Url}/detailed/${crowdfund.id}`;
      console.log(`Rendering page: ${url}`);

      await page.goto(url, { waitUntil: "networkidle0" }); // Wait for the page to fully load

      const content = await page.content();
      const filePath = path.resolve(
        __dirname,
        "../public",
        `detailed-${crowdfund.id}.html`
      );
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, content, "utf-8");
      console.log(`Saved: ${filePath}`);
    }
  } catch (error) {
    console.error("Error during prerendering:", error);
  } finally {
    await browser.close();
  }
})();
