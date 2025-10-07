const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  console.log('🚀 Starting CV PDF generation...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Load the CV page from the built site
  const cvPath = path.join(__dirname, '../public/cv/index.html');
  const cvUrl = `file://${cvPath}`;

  console.log(`📄 Loading CV from: ${cvUrl}`);
  await page.goto(cvUrl, { waitUntil: 'networkidle0' });

  // Generate PDF with no headers/footers
  const pdfPath = path.join(__dirname, '../public/cv.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    },
    printBackground: true,
    displayHeaderFooter: false, // This removes browser headers/footers!
  });

  console.log(`✅ PDF generated successfully: ${pdfPath}`);

  await browser.close();
}

generatePDF().catch(err => {
  console.error('❌ Error generating PDF:', err);
  process.exit(1);
});
