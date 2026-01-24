const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');

puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.gommehd.net/place', {
    waitUntil: 'networkidle2',
    timeout: 0
  });

  // Extract base64 image from <img src="data:image/...">
  const base64Image = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    const base64Img = images.find(img => img.src.startsWith('data:image/'));
    return base64Img ? base64Img.src : null;
  });

  if (base64Image) {
    const base64Data = base64Image.split(',')[1];
    fs.writeFileSync('image_from_img.png', Buffer.from(base64Data, 'base64'));
    console.log('✅ Base64 image found in <img> and saved as image_from_img.png');
  } else {
    console.log('❌ No base64 image found in <img> tags.');
  }

  await browser.close();
})();
console.log(base64Data.slice(0, 100)); // See the start
console.log(base64Data.slice(-100));  // See the end