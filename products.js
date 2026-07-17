/* ═══════════════════════════════════════════════════════════
   PRODUCTS — this is the only file you need to edit.

   To add a piece: copy one block, change the values.
   To remove a piece: delete its block.

   images:  put photos in the images/ folder, list filenames here.
            First image is the one shown in the grid.
   stripe:  paste the Stripe Payment Link for this piece.
            Leave "" until you make one — checkout will email you instead.
   ═══════════════════════════════════════════════════════════ */

const PRODUCTS = [

  {
    id: "ruffle-tie-jacket-flax",
    name: "Ruffle Tie Jacket in Flax Linen",
    category: "jackets",
    price: 1180,
    year: "AW26",
    origin: "Warsaw",
    images: ["campaign.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A stand-collar jacket closed with hand-tied linen ribbons. The cuff opens into a gathered ruffle that falls over the hand. Rosette applied at the front hip.",
    composition: "100% washed linen. Undyed horn buttons. Linen ribbon ties.",
    sizing: "Cut generous through the body. Model is 174 cm, wearing S.",
    stripe: ""
  },

  {
    id: "high-collar-dress-rose",
    name: "High Collar Dress in Antique Rose Floral",
    category: "dresses",
    price: 1340,
    year: "AW26",
    origin: "Warsaw",
    images: ["campaign.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A standing collar and full gathered sleeve, drawn from a late nineteenth-century bodice. Ruffled hem. Printed cotton sourced from a French archive.",
    composition: "100% cotton, archival floral print. Self-covered buttons.",
    sizing: "Fitted at the collar, full through the sleeve. Model is 176 cm, wearing S.",
    stripe: ""
  }

];
