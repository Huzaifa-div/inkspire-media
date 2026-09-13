import { inkImages } from '../assets/images';

export const services = [
  {
    id: "corporate-stationery",
    number: "01",
    title: "Corporate Stationery",
    category: "Corporate",
    tagline: "First impressions engineered for authority and elegance.",
    shortDesc: "Complete executive stationery suites including bespoke letterheads, foiled visiting cards, tactile envelopes, and presentation folders.",
    fullDesc: "Elevate your business communication with museum-grade stationery. Crafted on ultra-heavyweight textured cotton papers with precision letterpress, blind debossing, and metallic foil stamping that command respect in every meeting.",
    image: inkImages.kpcard,
    features: [
      "Letterheads & Executive Continuation Sheets",
      "Cotton & Duplex Visiting Cards (Up to 700 GSM)",
      "Bespoke Watermarked & Lined Envelopes",
      "Die-cut Presentation Folders & Document Sleeves",
      "Pantone Spot Color Matching & Edge Painting"
    ],
    turnaround: "3 - 5 Business Days",
    idealFor: "Corporate firms, luxury agencies, law practices, executive offices"
  },
  {
    id: "packaging",
    number: "02",
    title: "Luxury Packaging & Boxes",
    category: "Packaging",
    tagline: "Unboxing journeys designed to be felt and remembered.",
    shortDesc: "Rigid magnetic closure boxes, custom shaped mailers, luxury shopping bags, product sleeves, and embossed ribbon accents.",
    fullDesc: "Transform products into prestige objects. From heavy board rigid gift boxes with magnetic catches to custom shopping bags and envelope gift boxes, our structural packaging blends tactile beauty with rock-solid durability.",
    image: inkImages.luxuryBox,
    features: [
      "Rigid Gift Boxes with Ribbon & Magnetic Closures",
      "Custom Die-Cut Sleeve & Envelope Box Formats",
      "Foil Stamped Paper & Soft-Touch Matte Finishes",
      "Custom Molded EVA & Velvet Product Inserts",
      "Woven & Satin Branded Pull Ribbons"
    ],
    turnaround: "5 - 7 Business Days",
    idealFor: "D2C brands, luxury cosmetics, confectionery, jewelry, retail fashion"
  },
  {
    id: "neon-signs",
    number: "03",
    title: "Custom Neon Sign Boards",
    category: "Signage",
    tagline: "Luminous, quirky, and modern illuminated statements.",
    shortDesc: "Custom LED neon signs mounted on optical-grade acrylic backing with dimmer controls for spaces, events, and businesses.",
    fullDesc: "Quirky, luminous, and undeniably cool. Our custom LED neon signs bring your logos, slogans ('Let's Party', 'happily ever after', 'to the moon'), or custom monograms to life with rich neon glow, zero glass breakage risk, and remote brightness control.",
    image: inkImages.newNeonLetsParty,
    features: [
      "Handcrafted Flexible LED Neon Sign Boards",
      "Custom Typography, Script & Logo Contours",
      "Vibrant Colors: Hot Pink, Warm White, Electric Blue & Yellow",
      "Multi-Color RGB with Remote Dimmer Controller",
      "Clear Acrylic Cut-to-Shape Backing with Standoff Pins"
    ],
    turnaround: "5 - 7 Business Days",
    idealFor: "Retail stores, restaurants, cafes, event stage backdrops, weddings"
  },
  {
    id: "corporate-diaries",
    number: "04",
    title: "Gilded Corporate Diaries",
    category: "Corporate",
    tagline: "24K gilded page edges & debossed executive journals.",
    shortDesc: "Hardbound PU leatherette diaries with gold foil personalization, 24K gilded metallic page edges, and custom planners.",
    fullDesc: "Our signature corporate journals combine luxury bookbinding with thoughtful utility. Crafted with premium soft-touch vegan leather covers, gilded gold page edges, ribbon markers, bleed-proof ivory paper, and bespoke foil stamping.",
    image: inkImages.newCorporateDiaries,
    features: [
      "Hardbound Vegan Leatherette Covers",
      "24K Mirror Gold, Silver or Rose Gilded Edges",
      "Bespoke Gold Foil Debossing",
      "Custom Planner & Calendar Pages",
      "Ribbon Marker & Pen Loop Options"
    ],
    turnaround: "5 - 8 Business Days",
    idealFor: "Corporate gifts, executive kits, conferences, milestone gifting"
  },
  {
    id: "screen-printing",
    number: "05",
    title: "Artisanal Screen Printing",
    category: "Custom Printing",
    tagline: "Rich, saturated pigments applied with master craftsmanship.",
    shortDesc: "Manual and semi-automatic screen printing for heavy art papers, fabric totes, apparel, wood, and experimental substrates.",
    fullDesc: "Screen printing provides opaque ink density, vibrant pigment saturation, and longevity that digital presses simply cannot replicate. Ideal for heavy dark stocks, metallic inks, fluorescent neon pigments, and custom textiles.",
    image: inkImages.highResolutionScreenPrinting,
    features: [
      "Vibrant Opaque Inks on Dark & Kraft Stocks",
      "Fluorescent, Neon & Glow-in-the-Dark Specialty Pigments",
      "Textured Puff & High-Density Inks",
      "Short Run Limited Edition Art Posters",
      "Specialty Substrates: Cotton, Wood, Canvas & Acrylic"
    ],
    turnaround: "5 - 7 Business Days",
    idealFor: "Art prints, concert posters, indie brand merchandise, specialty packaging"
  },
  {
    id: "foil-printing",
    number: "06",
    title: "Foil Printing & Finishes",
    category: "Custom Printing",
    tagline: "Gleaming metallic accents that catch the light and the eye.",
    shortDesc: "Hot foil stamping in gold, holographic, matte pigment, combined with blind debossing and raised spot UV textures.",
    fullDesc: "Foil stamping brings undeniable luxury to any print surface. We use heated brass dies to fuse premium metallic foils deep into the fibers of paper, cardstock, leather, and book cloth, delivering crisp reflections and rich tactile relief.",
    image: inkImages.highResolutionFoilFinishes,
    features: [
      "Metallic Gold, Matte Gold, Copper, Silver & Rose Foils",
      "Holographic, Rainbow & Security Micro-Foils",
      "Sculpted Multi-Level Blind Embossing & Debossing",
      "Raised 3D Spot UV Polymer Coatings",
      "Gilded & Painted 24K Gold Card Edges"
    ],
    turnaround: "4 - 6 Business Days",
    idealFor: "High-end stationery, certificates, luxury packaging, event invites"
  },
  {
    id: "party-favours",
    number: "07",
    title: "Party Favours & Celebration Gifts",
    category: "Events",
    tagline: "Delightful keepsakes that leave a lasting memory of joy.",
    shortDesc: "Personalized favour boxes, customized confectionery packaging, printed ribbons, floral celebration gift boxes, and tags.",
    fullDesc: "Add charm, humor, and quirky delight to birthdays, anniversaries, baby showers, and milestone festivities with tailored gift boxes, custom stamped satin ribbons, foil-pressed tags, and uniquely themed keepsake packages.",
    image: inkImages.giftbox,
    features: [
      "Custom Themed Favour Boxes & Floral Gift Boxes",
      "Personalized Foiled Silk & Grosgrain Ribbons",
      "Custom Shaped Die-Cut Thank You Tags",
      "Themed Envelope Gift Boxes with Gold Seals",
      "Customized Mugs & Keepsake Packages"
    ],
    turnaround: "4 - 7 Business Days",
    idealFor: "Milestone birthdays, baby showers, festive gifting, wedding favours"
  },
  {
    id: "custom-merchandise",
    number: "08",
    title: "Custom Merchandise & Gifts",
    category: "Gifts",
    tagline: "Curated merchandise people actually cherish and use.",
    shortDesc: "Embroidered jewel-tone velvet cushions, customized ceramic mugs, branded apparel, and bespoke promotional items.",
    fullDesc: "From custom embroidered plush velvet cushions to kiln-fired ceramic coffee mugs and heavyweight streetwear apparel, we bring your identity to high-grade lifestyle merchandise.",
    image: inkImages.newVelvetCushions,
    features: [
      "Plush Velvet Cushions with Gold Metallic Embroidery",
      "Kiln-Fired Ceramic Typographic Coffee Mugs",
      "Heavyweight Organic Cotton T-Shirts with Puff Prints",
      "Double-Faced Foiled Satin Ribbons",
      "Bespoke Gift Boxes & Packaging"
    ],
    turnaround: "5 - 8 Business Days",
    idealFor: "Brand merchandise, PR drops, boutique home decor, client gifts"
  },
  {
    id: "pr-giveaways",
    number: "09",
    title: "PR Giveaways & Brand Drops",
    category: "Gifts",
    tagline: "Memorable branded gifts made to travel further.",
    shortDesc: "Curated promotional gifts, influencer mailers, launch kits, and branded keepsakes designed to make your campaign memorable.",
    fullDesc: "Turn launches and PR moments into tangible brand experiences. We create considered giveaway kits with custom merchandise, premium packaging, printed inserts, and finishing details that feel made for sharing.",
    image: inkImages.giftBag,
    features: [
      "Curated Promotional Gift Sets & Influencer Mailers",
      "Branded Mugs, Cushions, Stationery & Lifestyle Goods",
      "Custom Printed Inserts, Cards & Thank You Notes",
      "Launch Kits with Coordinated Packaging",
      "Small-Batch Personalization for VIP Recipients"
    ],
    turnaround: "5 - 10 Business Days",
    idealFor: "Product launches, influencer campaigns, press drops, corporate gifting"
  }
];
