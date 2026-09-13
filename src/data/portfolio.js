// Using high-quality curated images — replace these with your own original photos when ready
// All images sourced at 1400px width, 90% quality for crisp display
import { inkImages } from '../assets/images';

export const portfolioCategories = [
  "All",
  "Corporate",
  "Packaging",
  "Signage",
  "Events",
  "Gifts",
  "Custom Printing",
];

export const portfolioItems = [
  {
  id: "portfolio-18",
  title: "Custom Business Cards & Branded Packaging",
  category: "Corporate",
  categoryLabel: "Business Cards",
  client: "Kempston Garage Ltd",
  description: "Sleek matte-black business cards with spot-color branding and rounded corners, presented in InkSpire's signature two-tone gold-and-black packaging for a premium unboxing feel.",
  image: inkImages.cardsbox, // update this to your new image's key once added to images.js
  tags: ["Business Cards", "Matte Black", "Spot Color", "Branded Packaging"],
  year: "2026",
  highlight: "Premium Unboxing Presentation"
},
  {
    id: "portfolio-2",
    title: "Gilded 24K Gold Edge Corporate Diaries",
    category: "Corporate",
    categoryLabel: "Corporate Diaries",
    client: "Executive Gifting – Bespoke Edition",
    description: "Hardbound vegan leatherette journals with bespoke gold foil name stamping and 24K mirror-gilded metallic page edges.",
    image: inkImages.newCorporateDiaries,
    tags: ["24K Gilded Edges", "Hardbound", "Gold Foil", "Executive Journal"],
    year: "2026",
    highlight: "Mirror Gold Edge Gilding"
  },
  {
    id: "portfolio-1",
    title: "Executive Corporate Letterheads & Stationery",
    category: "Corporate",
    categoryLabel: "Corporate Stationery",
    client: "Law Firm & Corporate Advisory",
    description: "Multi-piece executive stationery suite featuring gold foil border letterheads, matching lined envelopes, and custom presentation folders.",
    image: inkImages.newCorporateLetterhead,
    tags: ["Gold Foil", "Letterheads", "Stationery", "Corporate"],
    year: "2026",
    highlight: "Gold Foil Border Accents"
  },
  {
    id: "portfolio-15",
    title: "Premium Printed Books",
    category: "Custom Printing",
    categoryLabel: "Book Printing",
    client: "Editorial, Corporate & Creative Brands",
    description: "A refined hardbound book project with a deep charcoal cover and carefully composed interior pages, demonstrating the considered finish and tactile quality possible in bespoke print production.",
    image: inkImages.book,
    tags: ["Book Printing", "Hardbound", "Editorial", "Custom Covers"],
    year: "2026",
    highlight: "Tactile Editorial Finish"
  },
  {
    id: "portfolio-3",
    title: "Custom LED Neon Sign Boards",
    category: "Signage",
    categoryLabel: "Neon Sign Board",
    client: "Events, Retail & Hospitality",
    description: "Vibrant custom script and logo LED neon signs in hot pink, warm white, and electric blue, mounted on clear acrylic with dimmer controls.",
    image: inkImages.newNeonLetsParty,
    tags: ["Custom Neon", "Hot Pink", "Acrylic Backing", "Dimmer"],
    year: "2026",
    highlight: "Custom Script LED Neon"
  },
  {
    id: "portfolio-4",
    title: "Luxury Rigid Gift Boxes",
    category: "Packaging",
    categoryLabel: "Luxury Packaging",
    client: "Bespoke Gifting Brand",
    description: "1200 GSM rigid presentation boxes in cream and charcoal wrapped in anti-scuff matte paper with grosgrain ribbon closures and gold foil.",
    image: inkImages.luxuryBox,
    tags: ["Rigid Box", "Grosgrain Ribbon", "Matte Paper", "Luxury Unboxing"],
    year: "2026",
    highlight: "Hand-Tied Grosgrain Closures"
  },
  {
    id: "portfolio-5",
    title: "Wedding & Celebration Neon Signs",
    category: "Signage",
    categoryLabel: "Event Neon Sign",
    client: "Wedding & Gala Setup",
    description: "Warm white LED neon 'happily ever after' sign installed on floral foliage wall. Also custom 'to the moon', 'Let's Party', and monogram neons.",
    image: inkImages.neonHappilyEverAfter,
    tags: ["Wedding Neon", "Warm White", "Celebration", "Event"],
    year: "2026",
    highlight: "Warm White Glow"
  },
  {
    id: "portfolio-6",
    title: "Artisanal Screen Printing",
    category: "Custom Printing",
    categoryLabel: "Screen Printing",
    client: "Limited Art Editions",
    description: "High-density artisanal silk screen printing with vibrant fluorescent pigments and metallic inks on heavy art stocks and fabric.",
    image: inkImages.highResolutionScreenPrinting,
    tags: ["Screen Print", "Fluorescent", "Art Press", "Limited Edition"],
    year: "2026",
    highlight: "Vibrant Ink Layering"
  },
  {
    id: "portfolio-8",
    title: "Embroidered Velvet Cushions & Custom Merchandise",
    category: "Custom Printing",
    categoryLabel: "Merchandise",
    client: "Corporate Gifting & Boutique Interiors",
    description: "Plush jewel-tone velvet cushions with high-density gold metallic thread embroidery alongside customized ceramic mugs and branded merchandise.",
    image: inkImages.newVelvetCushions,
    tags: ["Embroidery", "Velvet", "Mugs", "Bespoke Gifting"],
    year: "2026",
    highlight: "Dense Gold Metallic Thread"
  },
  {
    id: "portfolio-7",
    title: "Bespoke Party Favour Boxes",
    category: "Events",
    categoryLabel: "Party Favours",
    client: "Milestone Celebrations & Weddings",
    description: "Pastel floral celebration favour boxes with monogram foil stamping and delicate pink satin ribbon bow closures.",
    image: inkImages.giftbox,
    tags: ["Floral Print", "Satin Bow", "Party Favours", "Monogram"],
    year: "2026",
    highlight: "Delicate Floral Illustrations"
  },
  
  {
    id: "portfolio-10",
    title: "Boutique Packaging & Ribbon Accents",
    category: "Packaging",
    categoryLabel: "Custom Packaging",
    client: "Boutique Retail & Gifting",
    description: "Pastel pink shopping bags with cord handles, envelope gift boxes with gold coin seals, and foil-printed satin ribbons.",
    image: inkImages.pinkBag,
    tags: ["Shopping Bags", "Satin Ribbon", "Gift Boxes", "Boutique"],
    year: "2026",
    highlight: "Curated Boutique Packaging"
  },
  {
    id: "portfolio-11",
    title: "Wedding Invitation Suites",
    category: "Events",
    categoryLabel: "Wedding Stationery",
    client: "Weddings & Celebrations",
    description: "Elegant wedding invitation suites with coordinated cards, envelopes, and refined finishing details for a memorable first impression.",
    image: inkImages.weddingInvitationSuites,
    tags: ["Wedding Cards", "Invitations", "Foil Finishes", "Stationery"],
    year: "2026",
    highlight: "Bespoke Wedding Invitations"
  },
  {
    id: "portfolio-13",
    title: "Personalized Satin Ribbon",
    category: "Packaging",
    categoryLabel: "Branded Ribbon",
    client: "Luxury Gifting & Boutique Retail",
    description: "A refined black satin ribbon finished with crisp white personalization, designed to add a tactile signature to gift boxes, hampers, parcels, and premium retail packaging.",
    image: inkImages.ribbon,
    tags: ["Satin Ribbon", "Personalization", "Packaging", "Brand Finishing"],
    year: "2026",
    highlight: "Crisp Foil Personalization"
  },
   {
    id: "portfolio-16",
    title: "Customized Ceramic Mugs",
    category: "Gifts",
    categoryLabel: "Mug Printing",
    client: "Corporate Gifting & Personalised Merchandise",
    description: "A playful pastel mug finished with a memorable typographic message, showing how everyday objects can become warm, distinctive brand gifts with personality and polish.",
    image: inkImages.mug,
    tags: ["Mug Printing", "Ceramic Gifts", "Custom Typography", "Merchandise"],
    year: "2026",
    highlight: "Personalised Everyday Design"
  },
  {
    id: "portfolio-12",
    title: "Love Card Invitations",
    category: "Events",
    categoryLabel: "Celebration Stationery",
    client: "Weddings, Anniversaries & Milestones",
    description: "A romantic statement piece printed on rich burgundy stock, with a softly scalloped silhouette and layered green-and-cream detailing that makes every message feel personal.",
    image: inkImages.loveCard,
    tags: ["Love Cards", "Die-Cut", "Celebrations", "Custom Print"],
    year: "2026",
    highlight: "Scalloped Die-Cut Detailing"
  },

 
];

export const instagramHighlights = [
  {
    id: "ig-1",
    title: "Corporate letterheads, visiting cards & lined envelopes — orders open now! 📩",
    category: "Corporate Stationery",
    image: inkImages.newCorporateLetterhead,
    likes: "482",
    comments: "38"
  },
  {
    id: "ig-2",
    title: "Bespoke corporate diaries with 24K gilded gold edges. Luxury in every detail.",
    category: "Corporate Diaries",
    image: inkImages.newCorporateDiaries,
    likes: "614",
    comments: "52"
  },
  {
    id: "ig-3",
    title: "Custom LED neon signs: 'Let's Party!' and 'happily ever after' ✨",
    category: "Neon Signs",
    image: inkImages.newNeonLetsParty,
    likes: "895",
    comments: "74"
  },
  {
    id: "ig-4",
    title: "Silk screen printing in action — custom vibrant fluorescent inks on the press! 🎨",
    category: "Screen Printing",
    image: inkImages.highResolutionScreenPrinting,
    likes: "721",
    comments: "49"
  },
  {
    id: "ig-5",
    title: "Luxury rigid gift boxes with grosgrain ribbons — unboxing perfection.",
    category: "Packaging",
    image: inkImages.luxuryBox,
    likes: "530",
    comments: "41"
  },
  {
    id: "ig-6",
    title: "Custom embroidered velvet cushions with metallic gold personalization.",
    category: "Custom Merch",
    image: inkImages.newVelvetCushions,
    likes: "667",
    comments: "58"
  }
];
