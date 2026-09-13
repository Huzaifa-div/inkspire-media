import { inkImages } from '../assets/images';

export const products = [
  {
    id: "gilded-corporate-diaries",
    name: "Corporate Diaries with Gilded Edges",
    category: "Corporate",
    featured: true,
    tag: "Bestseller",
    shortDesc: "Hardbound PU leatherette diaries with gold foil personalization and 24K gilded metallic page edges.",
    description: "Our signature corporate journals combine luxury bookbinding with thoughtful utility. Crafted with premium soft-touch vegan leather covers, gilded gold page edges, ribbon markers, bleed-proof ivory paper, and bespoke foil stamping of your name and logo.",
    image: inkImages.gildedCorporateDiary,
    gallery: [
      inkImages.gildedCorporateDiary,
      inkImages.corporatePlannerSet,
      inkImages.brandStatementCard
    ],
    customizationOptions: [
      "Company Logo Debossing / Gold Foil Stamping",
      "Individual Recipient Name Personalization",
      "Cover Material & Color Palette Selection",
      "Gilded Metallic Gold, Rose Gold or Silver Edges",
      "Custom Tip-in Color Inserts & Company Profiles",
      "Choice of Dot Grid, Ruled, or Undated Weekly Planner"
    ],
    specs: {
      "Dimensions": "A5 (148 x 210 mm) or Custom",
      "Paper Stock": "100 GSM Natural Ivory Woodfree Paper",
      "Edge Finish": "24K Metallic Gold Gilded Page Edges",
      "Binding": "Hardbound Lay-Flat Smyth Sewn",
      "Minimum Order": "10 Units"
    }
  },
  {
    id: "corporate-stationery-suite",
    name: "Corporate Stationery & Letterheads",
    category: "Stationery",
    featured: true,
    tag: "Essential",
    shortDesc: "Custom branded letterheads, matching lined envelopes, and visiting cards with gold foil and marble accents.",
    description: "Make an unforgettable executive impression. Our corporate stationery suites feature heavy textured letterhead stocks, custom die-cut envelopes with calligraphic liners, and matching visiting cards with gold foil accents.",
    image: inkImages.businessCard,
    gallery: [
      inkImages.businessCard,
      inkImages.corporateStationeryMk,
      inkImages.customEnvelopeLiner,
      inkImages.takingOrdersNow
    ],
    customizationOptions: [
      "Letterhead with Foil Foil Stamping & Spot Inks",
      "Custom Envelope Liners with Handwritten / Geometric Patterns",
      "Matching Visiting Cards with Marble & Gold Accents",
      "Watermarked 120 GSM Fine Laid Paper",
      "Peel & Seal Envelopes in Custom Dimensions"
    ],
    specs: {
      "Letterhead Size": "A4 (210 x 297 mm)",
      "Envelope Sizes": "DL, C5, or Custom Square",
      "Paper Stock": "120 GSM - 350 GSM Fine Textured Paper",
      "Printer Safe": "100% Laser & Inkjet Compatible",
      "Minimum Order": "50 Sets"
    }
  },
  {
    id: "luxury-rigid-boxes",
    name: "Luxury Rigid Presentation Boxes",
    category: "Packaging",
    featured: true,
    tag: "High Demand",
    shortDesc: "Sturdy rigid gift presentation boxes with grosgrain ribbon closures and foil branding.",
    description: "Engineered for prestige unboxing experiences. Fabricated from heavy 1200 GSM recycled greyboard wrapped in smooth matte paper, finished with grosgrain tie ribbons, foil-stamped logos, and custom velvet product inserts.",
    image: inkImages.luxuryBox,
    gallery: [
      inkImages.luxuryBox,
      inkImages.envelopeGiftBoxes,
      inkImages.pinkShoppingBag
    ],
    customizationOptions: [
      "Custom Dimensions to Fit Exact Products",
      "Choice of Cream, Matte Black, Pastel Pink, or Navy",
      "Gold / Silver Foil Stamped Logo on Lid & Interior",
      "Grosgrain or Satin Ribbon Ties",
      "Custom Molded EVA & Velvet Foam Inserts"
    ],
    specs: {
      "Board Strength": "1200 - 1800 GSM Heavy Rigid Board",
      "Closure": "Ribbon Tie or Concealed Magnet",
      "Lamination": "Anti-Scratch Soft Touch Matte",
      "Minimum Order": "25 Boxes"
    }
  },
  {
    id: "custom-neon-signs",
    name: "Custom LED Neon Sign Boards",
    category: "Signage",
    featured: true,
    tag: "Statement Piece",
    shortDesc: "Vibrant custom silicone LED neon signs mounted on clear acrylic backing with dimmer controls.",
    description: "Quirky, luminous, and undeniably cool. Our LED neon signs bring slogans like 'Let's Party!', 'happily ever after', 'to the moon', or custom monograms to life with rich neon glow, zero glass breakage risk, and remote brightness control.",
    image: inkImages.neonLetsParty,
    gallery: [
      inkImages.neonLetsParty,
      inkImages.neonHappilyEverAfter,
      inkImages.neonToTheMoon,
      inkImages.neonNaimalsParadise,
      inkImages.neonVkSign
    ],
    customizationOptions: [
      "Custom Script, Font, Monogram or Logo Outline",
      "Vibrant Neon Colors: Hot Pink, Warm White, Cyan, Yellow, Violet",
      "Multi-Color RGB with Remote Dimmer Controller",
      "Acrylic Backing Cut-to-Shape or Transparent Rectangle",
      "Mounting: Standoff Wall Pins or Hanging Wire Kit"
    ],
    specs: {
      "Lifespan": "50,000+ Operating Hours",
      "Voltage": "12V Low Voltage with Certified Power Adapter",
      "Backing": "5mm Optical Clear Acrylic Plate",
      "Minimum Order": "1 Unit (Fully Custom)"
    }
  },
  {
    id: "custom-satin-ribbons",
    name: "Personalized Foiled Satin Ribbons",
    category: "Packaging",
    featured: false,
    tag: "Finishing Touch",
    shortDesc: "Double-faced satin ribbons with crisp metallic hot-foil lettering ('With love and care!').",
    description: "The finishing touch that defines luxury packaging. Our ribbons feature vibrant, crisp metallic foils that don't flake or crack, woven with clean non-fray selvedge edges. Perfect for luxury retail, gift packaging, and celebration hampers.",
    image: inkImages.customSatinRibbon,
    gallery: [
      inkImages.customSatinRibbon,
      inkImages.pinkShoppingBag,
      inkImages.highResolutionPartyFavours
    ],
    customizationOptions: [
      "Widths: 15mm, 20mm, 25mm, 38mm, 50mm",
      "Material: Double-Sided Satin, Grosgrain, or Cotton Twill",
      "Print: Gold, Silver, Rose Gold, White, or Black Foil",
      "Custom Text, Slogan, or Brandmark",
      "Continuous Step-and-Repeat or Centered Spacing"
    ],
    specs: {
      "Roll Length": "100 Yards (91.4 Meters) per spool",
      "Material": "100% Polyester Double Face Satin",
      "Durability": "Water-resistant metallic foil adhesion",
      "Minimum Order": "2 Rolls"
    }
  },
  {
    id: "party-favor-boxes",
    name: "Bespoke Party Favour Boxes",
    category: "Events",
    featured: true,
    tag: "Popular",
    shortDesc: "Floral patterned and pastel party favour boxes with satin ribbon ties and personalized tags.",
    description: "Add charm and quirkiness to your celebrations. Crafted from heavy art card with delicate floral illustrations, custom monogram stamping, and hand-tied pastel pink satin bows for weddings, baby showers, and milestone birthdays.",
    image: inkImages.giftbox,
    gallery: [
      inkImages.giftbox,
      inkImages.envelopeGiftBoxes,
      inkImages.customSatinRibbon
    ],
    customizationOptions: [
      "Floral, Geometric, or Minimalist Themed Prints",
      "Matching Satin Ribbon Bow Closures",
      "Personalized Monogram & Date Foil Stamping",
      "Custom Shape Gable Bags or Cube Formats",
      "Matching Thank You Tags Included"
    ],
    specs: {
      "Cardstock": "350 GSM Heavy Food-Safe Art Board",
      "Finish": "Velvet Matte with Gold Foil Highlights",
      "Assembly": "Easy pop-up flat pack or pre-assembled",
      "Minimum Order": "25 Units"
    }
  },
  {
    id: "embroidered-cushions",
    name: "Custom Embroidered Velvet Cushions",
    category: "Gifts",
    featured: false,
    tag: "Creative Accent",
    shortDesc: "Plush emerald green velvet accent cushions with dense gold metallic embroidery personalization.",
    description: "Infuse personality into corporate lounges, executive suites, or boutique spaces. Crafted from high-pile upholstery velvet in jewel tones with custom metallic gold embroidery and hidden zipper closures.",
    image: inkImages.embroideredCushions,
    gallery: [
      inkImages.embroideredCushions,
      inkImages.customCeramicMug
    ],
    customizationOptions: [
      "High-Density Metallic Gold or Silver Thread Embroidery",
      "Custom Names, Initials, Logos, or Slogans",
      "Jewel-Tone Velvet Fabrics (Emerald, Navy, Wine, Black)",
      "Contrast Velvet Piping & Tassels",
      "Choice of Cushion Cover Only or with Plush Insert"
    ],
    specs: {
      "Sizes": "45 x 45 cm / 50 x 50 cm / Lumbar 30 x 50 cm",
      "Fabric": "Heavy 380 GSM Upholstery Velvet",
      "Insert": "Plush 100% Microfibre Cushion Core",
      "Minimum Order": "5 Units"
    }
  },
  {
    id: "custom-ceramic-mugs",
    name: "Customized Pastel Ceramic Mugs",
    category: "Gifts",
    featured: false,
    tag: "Client Favorite",
    shortDesc: "Dusty pink and matte ceramic mugs with permanent typographic print ('Creating Your Story.').",
    description: "A daily ritual elevated. Made from heavyweight stone ceramic with a silky exterior finish and permanent kiln-fired print that won't fade. Microwave and dishwasher safe.",
    image: inkImages.customCeramicMug,
    gallery: [
      inkImages.customCeramicMug,
      inkImages.corporatePlannerSet
    ],
    customizationOptions: [
      "Permanent Kiln-Fired Spot Color / Metallic Print",
      "Custom Slogans, Quotes, Names, or Brandmarks",
      "Choice of Pastel Pink, Matte Black, Ivory, or Cobalt",
      "Individual Gift Box Packaging with Foiled Ribbon",
      "Woven Coaster Pairings Available"
    ],
    specs: {
      "Capacity": "350 ml (12 oz)",
      "Material": "High-Density Ceramic",
      "Durability": "Dishwasher & Microwave Tested",
      "Minimum Order": "10 Units"
    }
  },
  {
    id: "custom-shopping-bags",
    name: "Custom Pastel Shopping Bags",
    category: "Packaging",
    featured: true,
    tag: "Boutique",
    shortDesc: "Pastel pink coated boutique shopping bags with soft cord handles and heart graphic motifs.",
    description: "Turn your customers into walking brand advocates. Constructed from heavy 250 GSM art card with reinforced top cuffs and cardboard base inserts for sturdy weight capacity.",
    image: inkImages.pinkShoppingBag,
    gallery: [
      inkImages.pinkShoppingBag,
      inkImages.luxuryRigidBoxes,
      inkImages.customSatinRibbon
    ],
    customizationOptions: [
      "Custom Pantone Dyed Bag Colors & Artwork",
      "Handle Options: Woven Cotton, Satin Ribbon, Soft Cord",
      "Full Coverage Exterior & Interior Flood Printing",
      "Foil Stamped Brandmark & Spot UV Highlights",
      "Reinforced Cardboard Base & Cuffs"
    ],
    specs: {
      "Material": "250 GSM Premium Art Board",
      "Finish": "Anti-Scuff Soft Touch Matte Lamination",
      "Reinforcement": "Top Turn-In and Base Board Included",
      "Minimum Order": "50 Bags"
    }
  },
  {
    id: "envelope-gift-boxes",
    name: "Themed Envelope Gift Boxes",
    category: "Packaging",
    featured: false,
    tag: "Unique",
    shortDesc: "Envelope-shaped luxury gift boxes with gold coin wax seal closures and foiled messages.",
    description: "Delightful structured envelope boxes designed for gifting jewellery, gift vouchers, cosmetics, and celebration favours. Features gold metallic foil borders and circular coin button fasteners.",
    image: inkImages.envelopeGiftBoxes,
    gallery: [
      inkImages.envelopeGiftBoxes,
      inkImages.partyFavorBoxes,
      inkImages.luxuryRigidBoxes
    ],
    customizationOptions: [
      "Choice of Pastel Pink, Royal Navy, or Matte Cream",
      "Gold Foil 'Best Wishes' / 'Only For You' / Custom Slogan",
      "Metallic Coin Button Flap Fastener",
      "Custom Die-Cut Inner Foam or Tissue Paper",
      "Matching Gift Tag Included"
    ],
    specs: {
      "Structure": "Rigid Envelope Fold Format",
      "Board": "600 GSM Duplex Coated Board",
      "Finish": "Gold Hot Foil Stamping",
      "Minimum Order": "25 Boxes"
    }
  },
  {
    id: "screen-printed-prints",
    name: "Artisanal Screen Printed Prints",
    category: "Custom Printing",
    featured: false,
    tag: "Craft",
    shortDesc: "Multi-color hand-pulled silk screen prints with rich opaque neon pigments and sharp detail.",
    description: "Silk screen printing provides opaque ink density, vibrant pigment saturation, and tactile ink layers that digital printers cannot match. Ideal for art posters, limited apparel capsules, and bespoke cardboard packaging.",
    image: inkImages.highResolutionScreenPrinting,
    gallery: [
      inkImages.highResolutionScreenPrinting,
      inkImages.highResolutionFoilFinishes
    ],
    customizationOptions: [
      "Up to 6-Color Manual / Semi-Automatic Screen Printing",
      "Fluorescent Pink, Neon Yellow & Glow-In-The-Dark Inks",
      "Metallic Gold & Silver Pigments",
      "Heavy French Paper Co. / Kraft / Canvas Substrates",
      "Limited Edition Numbering & Embossed Seals"
    ],
    specs: {
      "Substrates": "250 - 400 GSM Heavy Uncoated Art Paper or Canvas",
      "Inks": "Eco-friendly Water-Based & Soft Plastisol Inks",
      "Max Print Size": "A2 (420 x 594 mm)",
      "Minimum Order": "20 Prints"
    }
  },
  {
    id: "foil-art-prints",
    name: "Foil Art & Invitation Prints",
    category: "Custom Printing",
    featured: false,
    tag: "Vibrant",
    shortDesc: "Geometric harlequin pattern prints and invitations with shimmering metallic foil stamping.",
    description: "Make a striking visual statement. Combining bold graphic patterns with metallic foil stamping for memorable invitation cards, promotional flyers, and brand lookbook covers.",
    image: inkImages.highResolutionFoilFinishes,
    gallery: [
      inkImages.highResolutionFoilFinishes,
      inkImages.brandStatementCard
    ],
    customizationOptions: [
      "Hot Stamped Gold, Rose Gold, Holographic & Copper Foils",
      "Custom Harlequin, Floral, or Minimalist Patterns",
      "Heavy 400 GSM Velvet Cardstock",
      "Die-Cut Arched or Scalloped Edges",
      "Matching Foiled Envelopes"
    ],
    specs: {
      "Cardstock": "350 - 600 GSM Cotton or Velvet Art Card",
      "Foil": "Precision Heated Brass Die Foil Stamping",
      "Minimum Order": "30 Cards"
    }
  },
  {
    id: "pr-giveaway-kits",
    name: "PR Giveaway & Launch Kits",
    category: "Gifts",
    featured: true,
    tag: "Campaign Essential",
    shortDesc: "Curated branded gift kits with custom merchandise, printed inserts, and presentation-ready packaging.",
    description: "Make your next launch memorable with a coordinated PR drop. We combine useful branded merchandise, considered packaging, custom cards, and personalisation for influencer, press, and VIP gifting campaigns.",
    image: inkImages.giftbox,
    gallery: [
      inkImages.giftbox,
      inkImages.newVelvetCushions,
      inkImages.luxuryBox
    ],
    customizationOptions: [
      "Curated Product Selection for Your Campaign",
      "Custom Printed Cards, Inserts & Thank You Notes",
      "Branded Mugs, Cushions, Stationery & Accessories",
      "Coordinated Gift Boxes, Bags & Ribbon Finishes",
      "Recipient Name Personalisation for VIP Drops"
    ],
    specs: {
      "Campaign Size": "10 - 500+ Kits",
      "Contents": "Fully Custom Product Selection",
      "Packaging": "Branded Box, Bag, or Mailer",
      "Minimum Order": "10 Kits"
    }
  }
];

export const productCategories = [
  "All",
  "Corporate",
  "Stationery",
  "Packaging",
  "Events",
  "Gifts",
  "Signage",
  "Custom Printing"
];
