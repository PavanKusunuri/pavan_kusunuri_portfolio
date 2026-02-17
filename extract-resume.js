import fs from 'fs';
import PdfParser from 'pdf-parse';

const pdfPath = './public/Pavan_Kusunuri_Resume.pdf';

const data = fs.readFileSync(pdfPath);

PdfParser(data).then(res => {
  console.log('='.repeat(80));
  console.log('RESUME EXTRACTED TEXT');
  console.log('='.repeat(80));
  console.log(res.text);
  console.log('='.repeat(80));
}).catch(err => {
  console.error('Error parsing PDF:', err);
});
