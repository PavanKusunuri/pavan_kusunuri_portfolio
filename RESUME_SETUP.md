# Resume Download Setup

## Instructions:

1. **Save your resume as:** `Pavan_Kusunuri_Resume.pdf`

2. **Place it in the `public/` folder** of your project:
   ```
   public/
   ├── Pavan_Kusunuri_Resume.pdf  ← Place your PDF here
   ├── desktop_pc/
   ├── planet/
   └── logo.svg
   ```

3. **Commit to Git** (make sure `.gitignore` allows PDFs in public folder)

4. **Test locally:**
   - Run `npm run dev`
   - Check the navbar for "Download Resume" button
   - Click to verify download works

5. **For production deployment:**
   - Ensure the PDF is included in your build output
   - Vercel and most hosting platforms automatically include `public/` folder in deployment

## Recommended Resume Format:
- Use professional formatting with your name as the filename
- Keep it under 2MB for faster downloads
- Ensure it's readable on all devices
