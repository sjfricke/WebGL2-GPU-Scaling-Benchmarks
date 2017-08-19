const connect = require('connect');
const serveStatic = require('serve-static');
const puppeteer = require('puppeteer');

connect().use(serveStatic(__dirname)).listen(8000, startTest);


async function startTest() {

    console.log("Server Started");
    
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();

    await page.goto('http://localhost:8000/particles/');

    await page.screenshot({path: 'example.png', fullPage: true});

    setTimeout(function() {
	browser.close();
	console.log("Done!");
	process.exit(0);
    }, 5000);
}
