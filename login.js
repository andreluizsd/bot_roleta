import { firefox } from "playwright-firefox";
import { config } from "dotenv";

config();

const MAIN_URL = "https://bet7k.com/";

const headers = {
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  extraHTTPHeaders: {
    Accept: "*/*",
    "Accept-Language": "pt-br",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
  },
}

async function login(){
    const browser = await firefox.launch({
        headless: false,
      });
    
      const page = await browser.newPage(headers);
    
      await page.goto("https://bet7k.com/");
    
      await page.getByText("Entrar").nth(0).click();
    
      await page.locator("#email").click();
      await page.locator("#email").fill(process.env.EMAIL_BET_7k);
    
      await page.locator("#password").click();
      await page.locator("#password").fill(process.env.PASSWORD_BET_7K);
    
      await page.locator("button.btn:nth-child(6)").click();
    
      // await page.screenshot('./teste.png')
    
};

login();

  
