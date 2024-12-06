const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

// Base URL
const Base_Url = "http://localhost:3000";

// Fetch your crowdfund data dynamically
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
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    executablePath:
      process.env.CHROME_EXECUTABLE_PATH || puppeteer.executablePath(),
  });

  const page = await browser.newPage();

  try {
    const crowdfundData = await getCrowdfundData();

    for (const crowdfund of crowdfundData) {
      const url = `${Base_Url}/detailed/${crowdfund.id}`;
      console.log(`Rendering page: ${url}`);

      await page.goto(url, { waitUntil: "networkidle0" });
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
