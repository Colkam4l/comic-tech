/**
 * generate-pdfs.mjs
 * Converts TechToons HTML docs to PDF using Puppeteer.
 * Run: node scripts/generate-pdfs.mjs
 */
import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, '../docs');

const files = [
    { html: 'PRD.html', pdf: 'PRD.pdf' },
    { html: 'USER_PERSONAS.html', pdf: 'USER_PERSONAS.pdf' },
    { html: 'BUSINESS_MODEL_CANVAS.html', pdf: 'BUSINESS_MODEL_CANVAS.pdf' },
];

(async () => {
    console.log('🚀 Launching headless browser...');
    const browser = await puppeteer.launch({ headless: 'new' });

    for (const { html, pdf } of files) {
        const page = await browser.newPage();
        const htmlPath = path.join(docsDir, html);
        const pdfPath = path.join(docsDir, pdf);

        console.log(`📄 Generating ${pdf}...`);
        await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, {
            waitUntil: 'networkidle0',
        });

        // Wait briefly for Google Fonts to load (or fail gracefully)
        await new Promise(r => setTimeout(r, 1500));

        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
        });

        console.log(`   ✅ Saved → docs/${pdf}`);
        await page.close();
    }

    await browser.close();
    console.log('\n🎉 All PDFs generated successfully!');
})();
