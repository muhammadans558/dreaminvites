# Dream Invites Complete Deployment Package

The deployment archive has been generated and verified.

## Archive Details
- **Filename:** `dreaminvites-update.zip`
- **File Size:** 74,008,267 bytes (74.0 MB)
- **Status:** Verified (HTTP 200 OK)
- **Direct Download Location:** In the website footer via the **"Download Deployment ZIP (74 MB)"** button, or directly at `/dreaminvites-update.zip`.

## What Is Included Inside the ZIP:
1. **Source Code Files:**
   - `src/data/weddingData.ts` (configured with all 20 Wedding Cards, 14 Bid Boxes, Rattan Bloom collection cover, and exact descriptions)
   - `src/components/CategoryShowcase.tsx` (updated with 20 Designs badge and Rattan Bloom cover image)
   - `DEPLOYMENT-INSTRUCTIONS.txt`

2. **Wedding Cards Images (`public/products/wedding-cards/`):**
   - `blush-arch/BA-01.png` + `Blush Arch Description.txt` (2.99 MB)
   - `floral-arch/FA-01.png` + `Floral Arch Description.txt` (2.94 MB)
   - `ivory-emboss/` with all 4 photos:
     - `IE-01.png` (3.10 MB)
     - `IE-02.jpg` (489 KB)
     - `IE-03.jpg` (632 KB)
     - `IE-04.jpg` (695 KB)
     - `Ivory Embos Description.txt`
   - `sage-arch/SA-01.png` + `Sage Arch Description.txt` (2.72 MB)
   - `ribbon-grace/RG-01.png` + `Ribbon Grace Description.txt` (3.05 MB)

3. **Bid Boxes Images (`public/bid-boxes/`):**
   - All 14 product folders (`Blue Toile Bid Box 1`, `Cream Toile Bid Box 02`, `Mint Toile Bid Box 03`, `Blue Wreath Bid Box 04`, `Burgundy Monogram Bid Box 05`, `Rattan Bloom Bid Box 06`, `Blue Bloom Bid Box 7`, `Mint Monogram Bid Box 08`, `Wax Bloom Bid Box 09` with 2 photos, `Navy Velvet Bid Box 10`, `Emerald Crest Bid Box 11`, `Green Bloom Bid Box 12`, `Blush Tassel Bid Box 13`, `Navy Floral Bid Box 14`).

## Next Steps to Update the Live Website:
1. Click the **"Download Deployment ZIP (74 MB)"** button in the website preview footer.
2. Extract the ZIP into your local `dreaminvites` git repository folder.
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add all 20 Wedding Cards and 14 Bid Boxes"
   git push origin main
   ```
4. Vercel will immediately deploy the live site with all 20 Wedding Cards and 14 Bid Boxes.
