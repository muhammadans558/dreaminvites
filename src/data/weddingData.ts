export interface ProductDetails {
  style?: string;
  customization?: string;
  finishing?: string;
  paper?: string;
  material?: string;
  size?: string;
  dimensions?: string;
  occasion?: string;
  includes?: string;
  [key: string]: string | undefined;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Wedding Cards' | 'Bid Boxes' | 'Nikah Frames';
  subCategory?: 'Minimal' | 'Floral' | 'Traditional' | 'Luxury' | 'Modern' | 'Velvet' | 'Keepsake' | 'Embossed';
  tagline: string;
  description: string;
  images: string[]; // Dynamic multi-image array (2, 3, 4, 5+ images)
  details?: ProductDetails;
  features?: string[];
  altText: string;
}

export interface CollectionInfo {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  coverImage: string;
  altText: string;
  ctaText: string;
  productCountDescription: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  review: string;
  context?: string;
}

export interface EventType {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  vibe: string;
  palette: string[];
  accentNotes: string;
  image: string;
}

export interface ValueProp {
  title: string;
  description: string;
  details: string;
}

export const BRAND_CONFIG = {
  name: 'Dream Invites',
  tagline: 'Bringing your print to Life.',
  phoneDisplay: '0339 4825465',
  phoneInternational: '+923394825465',
  phoneRaw: '923394825465',
  email: 'infodreaminvites@gmail.com',
  instagramUrl: 'https://www.instagram.com/dream_invites/',
  instagramHandle: '@dream_invites',
  
  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMsg = "Hi Dream Invites, I'd like to know more about your wedding stationery.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/923394825465?text=${text}`;
  },

  getProductWhatsAppUrl: (product: { name: string; category?: string }) => {
    const msg = `Hi Dream Invites, I am interested in the ${product.name}. Please share more details.`;
    return `https://wa.me/923394825465?text=${encodeURIComponent(msg)}`;
  },

  getEventWhatsAppUrl: (eventName: string) => {
    const msg = `Hi Dream Invites, I'm interested in invitations for ${eventName}. Please share design options.`;
    return `https://wa.me/923394825465?text=${encodeURIComponent(msg)}`;
  },
};

export const CATEGORIES = ['All', 'Wedding Cards', 'Bid Boxes', 'Nikah Frames', 'Minimal', 'Floral', 'Traditional', 'Luxury', 'Modern'] as const;

export const COLLECTIONS: CollectionInfo[] = [
  {
    id: 'wedding-cards',
    slug: 'wedding-cards',
    name: 'Wedding Cards',
    shortDescription: 'Elegant wedding invitations designed for your special celebration.',
    coverImage: '/products/wedding-cards/embossed-bloom-02/EB-01.png',
    altText: 'Embossed Bloom wedding invitation suite and stationery collection by Dream Invites',
    ctaText: 'EXPLORE WEDDING CARDS',
    productCountDescription: '15 Bespoke Suites',
  },
  {
    id: 'bid-boxes',
    slug: 'bid-boxes',
    name: 'Bid Boxes',
    shortDescription: 'Beautiful bid boxes made to add a thoughtful touch to your celebration.',
    coverImage: '/src/assets/images/bidbox_royal_emerald_1790663691007.jpg',
    altText: 'Ceremonial favor bid boxes collection by Dream Invites',
    ctaText: 'EXPLORE BID BOXES',
    productCountDescription: '4 Ceremonial Keepsakes',
  },
  {
    id: 'nikah-frames',
    slug: 'nikah-frames',
    name: 'Nikah Frames',
    shortDescription: 'Elegant Nikah frames created to preserve a meaningful moment.',
    coverImage: '/src/assets/images/nikah_frame_collection_1790675009112.jpg',
    altText: 'Bespoke Nikah frames collection by Dream Invites',
    ctaText: 'EXPLORE NIKAH FRAMES',
    productCountDescription: '3 Keepsake Frames',
  },
];

export const PRODUCTS: Product[] = [
  // --- WEDDING CARDS (15 Real Dream Invites Suites in Editorial Display Order) ---
  // 1. Embossed Bloom
  {
    id: 'embossed-bloom-02',
    slug: 'embossed-bloom-02',
    name: 'Embossed Bloom',
    category: 'Wedding Cards',
    subCategory: 'Embossed',
    tagline: 'Intricate embossed floral border with debossed monogram envelope',
    description: 'White invitation card with an intricate embossed floral border and elegant dark script lettering. The matching envelope features green botanical line illustrations on the flap and edges, finished with a debossed monogram.',
    images: [
      '/products/wedding-cards/embossed-bloom-02/EB-01.png',
      '/products/wedding-cards/embossed-bloom-02/EB-02.png',
      '/products/wedding-cards/embossed-bloom-02/EB-03.png',
      '/products/wedding-cards/embossed-bloom-02/EB-04.png',
      '/products/wedding-cards/embossed-bloom-02/EB-05.png',
    ],
    details: {
      style: 'Intricate Embossed Floral Border & Botanical Accents',
      customization: 'Available (Names, Ceremony Details, Venue Inserts)',
      finishing: 'Blind Embossed Border & Debossed Monogram',
      includes: 'Invitation Card & Botanical Illustrated Envelope',
      occasion: 'Nikah, Barat & Reception',
    },
    features: ['Blind Embossed Floral Border', 'Dark Script Calligraphy', 'Debossed Monogram Envelope', 'Green Botanical Line Art'],
    altText: 'Embossed Bloom 02 wedding card with intricate embossed floral border by Dream Invites',
  },

  // 2. Floral Lace
  {
    id: 'floral-lace-03',
    slug: 'floral-lace-03',
    name: 'Floral Lace',
    category: 'Wedding Cards',
    subCategory: 'Floral',
    tagline: 'Intricate floral cutwork with maroon script lettering and gold crest',
    description: 'White invitation card with a solid coloured border and intricate floral cutwork along the top edge. Maroon script lettering displays the names beneath a small gold crest, while soft leaf motifs appear at the base. A white envelope with a simple gold botanical illustration completes the set.',
    images: [
      '/products/wedding-cards/floral-lace-03/FL-01.png',
      '/products/wedding-cards/floral-lace-03/FL-02.png',
    ],
    details: {
      style: 'Intricate Laser Floral Cutwork & Gold Crest',
      customization: 'Available (Couple Names, Urdu/English Verses, Border Color)',
      finishing: 'Precision Cutwork & Foil Gold Crest',
      includes: 'Laser-Cut Invitation Card & Botanical Gold Envelope',
      occasion: 'Baraat, Nikah & Reception',
    },
    features: ['Intricate Top Floral Cutwork', 'Maroon Script Lettering', 'Gold Botanical Crest', 'Matching Gold-Accented Envelope'],
    altText: 'Floral Lace 03 wedding card with intricate cutwork by Dream Invites',
  },

  // 3. Gold Branch
  {
    id: 'gold-branch-04',
    slug: 'gold-branch-04',
    name: 'Gold Branch',
    category: 'Wedding Cards',
    subCategory: 'Luxury',
    tagline: 'Translucent gold branch overlay tied with a cream ribbon',
    description: 'White invitation suite with elegant gold script lettering and a subtle monogram watermark. A translucent overlay shows delicate gold branch illustrations, tied with a cream ribbon. Matching white folder and envelope complete the refined set.',
    images: [
      '/products/wedding-cards/gold-branch-04/GB-01.png',
      '/products/wedding-cards/gold-branch-04/GB-02.png',
      '/products/wedding-cards/gold-branch-04/GB-03.png',
    ],
    details: {
      style: 'Translucent Vellum Overlay & Gold Branch Motif',
      customization: 'Available (Couple Initials, Ceremony Wording, Ribbon Selection)',
      finishing: 'Hot Gold Foil Branches & Monogram Watermark',
      includes: 'Main Card, Translucent Branch Overlay, Ribbon, Folder & Envelope',
      occasion: 'Bespoke Nikah & Reception',
    },
    features: ['Translucent Branch Overlay', 'Hand-Tied Cream Ribbon', 'Subtle Monogram Watermark', 'Matching Presentation Folder'],
    altText: 'Gold Branch 04 wedding invitation suite with vellum overlay by Dream Invites',
  },

  // 4. Golden Lattice
  {
    id: 'golden-lattice-05',
    slug: 'golden-lattice-05',
    name: 'Golden Lattice',
    category: 'Wedding Cards',
    subCategory: 'Traditional',
    tagline: 'Windowed box set with clear acrylic card and geometric gold calligraphy',
    description: 'White and gold invitation box set with geometric patterned cards featuring gold Arabic calligraphy and English text. A clear acrylic card shows gold floral line details. The set includes a windowed box with rope handle, gold tassel, and ribbon closure.',
    images: [
      '/products/wedding-cards/golden-lattice-05/GL-01.png',
      '/products/wedding-cards/golden-lattice-05/GL-02.png',
    ],
    details: {
      style: 'Luxury Boxed Suite with Clear Acrylic Card',
      customization: 'Available (Arabic Calligraphy, Event Inserts, Monogram)',
      finishing: 'Gold Foil Stamping, Clear Acrylic & Gold Tassel',
      includes: 'Windowed Presentation Box, Clear Acrylic Card, Inserts & Rope Handle',
      occasion: 'Grand Barat & Royal Reception',
    },
    features: ['Clear Acrylic Floral Card', 'Geometric Patterned Cards', 'Windowed Box with Rope Handle', 'Gold Tassel & Ribbon Closure'],
    altText: 'Golden Lattice 05 luxury boxed wedding invitation set by Dream Invites',
  },

  // 5. Golden Leaf
  {
    id: 'golden-leaf-06',
    slug: 'golden-leaf-06',
    name: 'Golden Leaf',
    category: 'Wedding Cards',
    subCategory: 'Luxury',
    tagline: 'Frosted acrylic cards in a pocket folder with ribbon and wax seal',
    description: 'Frosted acrylic invitation cards feature gold text and delicate gold leaf motifs along the sides. A white pocket folder holds the cards, tied with a cream ribbon, wax seal and small dried flower sprig. Gold script names appear on the folder front.',
    images: [
      '/products/wedding-cards/golden-leaf-06/GL-01.png',
      '/products/wedding-cards/golden-leaf-06/GL-02.png',
      '/products/wedding-cards/golden-leaf-06/GL-03.png',
    ],
    details: {
      style: 'Frosted Acrylic & Botanical Pocket Folder',
      customization: 'Available (Couple Names, Script Style, Wax Seal Color)',
      finishing: 'Gold Foil on Frosted Acrylic + Wax Seal with Dried Floral Sprig',
      includes: 'Frosted Acrylic Cards, Pocket Folder, Cream Ribbon & Wax Seal',
      occasion: 'Nikah, Baraat & Walima',
    },
    features: ['Frosted Acrylic Cardstock', 'Delicate Gold Leaf Motifs', 'Artisanal Wax Seal & Dried Floral', 'Custom Script Pocket Folder'],
    altText: 'Golden Leaf 06 frosted acrylic wedding invitation by Dream Invites',
  },

  // 6. Coral Bloom
  {
    id: 'coral-bloom',
    slug: 'coral-bloom',
    name: 'Coral Bloom',
    category: 'Wedding Cards',
    subCategory: 'Floral',
    tagline: 'Cream invitation and save the date cards with a rich floral border',
    description: 'Cream invitation and save the date cards feature a rich floral border in pink, coral and burgundy tones. Elegant script lettering appears across the cards. A matching cream envelope shows a gold monogram on the flap.',
    images: [
      '/products/wedding-cards/coral-bloom-01/CB-01.png',
      '/products/wedding-cards/coral-bloom-01/CB-02.png',
      '/products/wedding-cards/coral-bloom-01/CB-03.png',
    ],
    details: {
      style: 'Botanical Floral Border & Script Lettering',
      customization: 'Available (Couple Names, Ceremony Wording, Date Inserts)',
      finishing: 'Fine Art Print with Gold Monogram on Envelope Flap',
      includes: 'Invitation Card, Save the Date Card & Monogram Envelope',
      occasion: 'Nikah, Barat & Walima Celebrations',
    },
    features: ['Rich Floral Botanical Border', 'Elegant Script Typography', 'Matching Monogram Envelope', 'Multi-Card Suite'],
    altText: 'Coral Bloom wedding invitation card and matching stationery by Dream Invites',
  },

  // 7. Golden Script
  {
    id: 'golden-script-07',
    slug: 'golden-script-07',
    name: 'Golden Script',
    category: 'Wedding Cards',
    subCategory: 'Minimal',
    tagline: 'Refined gold script lettering with embossed monogram envelope and ribbon',
    description: 'White invitation cards feature a thin double border, elegant gold script lettering for the names, and a subtle monogram watermark. A matching white envelope shows an embossed monogram and is finished with a gold ribbon.',
    images: [
      '/products/wedding-cards/golden-script-07/GS-01.png',
      '/products/wedding-cards/golden-script-07/GS-02.png',
    ],
    details: {
      style: 'Classic Double Border & Gold Script',
      customization: 'Available (Script Monogram, Typography, Ribbon Accent)',
      finishing: 'Hot Gold Foil Lettering & Blind Embossed Monogram',
      includes: 'Main Ceremony Card, Monogram Envelope & Gold Ribbon Closure',
      occasion: 'Nikah, Reception & Engagement',
    },
    features: ['Thin Gold Double Border', 'Hand-Crafted Gold Script', 'Embossed Monogram Flap', 'Luxe Gold Satin Ribbon'],
    altText: 'Golden Script 07 elegant wedding invitation cards by Dream Invites',
  },

  // 8. Golden Vine
  {
    id: 'golden-vine-08',
    slug: 'golden-vine-08',
    name: 'Golden Vine',
    category: 'Wedding Cards',
    subCategory: 'Floral',
    tagline: 'Ivory cards with delicate gold vine illustrations and bronze wax seal',
    description: 'Ivory invitation cards display delicate gold vine illustrations along the sides and a central gold monogram. Subtle embossed textures appear across the background. A matching cream envelope with scalloped flap and bronze wax seal completes the suite.',
    images: [
      '/products/wedding-cards/golden-vine-08/GV-01.png',
      '/products/wedding-cards/golden-vine-08/GV-02.png',
      '/products/wedding-cards/golden-vine-08/GV-03.png',
      '/products/wedding-cards/golden-vine-08/GV-04.png',
      '/products/wedding-cards/golden-vine-08/GV-05.png',
    ],
    details: {
      style: 'Gold Vine Botanical & Scalloped Envelope',
      customization: 'Available (Monogram Crest, Ceremony Inserts, Wax Seal Stamp)',
      finishing: 'Embossed Background Texture, Gold Vines & Bronze Wax Seal',
      includes: 'Multi-Card Suite, Scalloped Flap Envelope & Bronze Wax Seal',
      occasion: 'Mehndi, Baraat & Walima',
    },
    features: ['Delicate Gold Vine Details', 'Textured Embossed Backdrop', 'Scalloped Flap Envelope', 'Hand-Stamped Bronze Wax Seal'],
    altText: 'Golden Vine 08 ivory wedding invitation suite by Dream Invites',
  },

  // 9. Golden Wreath
  {
    id: 'golden-wreath-09',
    slug: 'golden-wreath-09',
    name: 'Golden Wreath',
    category: 'Wedding Cards',
    subCategory: 'Minimal',
    tagline: 'Textured suite with gold foil monogram wreath and pink ribbon seal',
    description: 'White textured invitation suite with a gold foil monogram set inside a delicate leafy wreath. The same gold design appears on the envelope flap. Simple printed cards for Baraat and Mehndi are included, held together with a pink ribbon and wax seal.',
    images: [
      '/products/wedding-cards/golden-wreath-09/GW-01.png',
      '/products/wedding-cards/golden-wreath-09/GW-02.png',
    ],
    details: {
      style: 'Botanical Leafy Wreath Monogram',
      customization: 'Available (Baraat & Mehndi Inserts, Ribbon Tone, Monogram)',
      finishing: 'Hot Gold Foil Wreath & Artisan Wax Seal',
      includes: 'Main Card, Baraat & Mehndi Cards, Envelope, Pink Ribbon & Seal',
      occasion: 'Mehndi, Baraat & Nikah',
    },
    features: ['Gold Leafy Wreath Monogram', 'Multi-Event Ceremony Inserts', 'Soft Pink Ribbon Tie', 'Matching Wreath Envelope Flap'],
    altText: 'Golden Wreath 09 textured wedding invitation suite by Dream Invites',
  },

  // 10. Ivory Rose
  {
    id: 'ivory-rose-10',
    slug: 'ivory-rose-10',
    name: 'Ivory Rose',
    category: 'Wedding Cards',
    subCategory: 'Floral',
    tagline: 'Cream cards with illustrated floral arch and monogram wreath envelope',
    description: 'Cream invitation cards feature white rose and greenery illustrations in the corners with gold script lettering. The suite includes a main illustrated card showing a floral arch and couple, along with a matching cream envelope bearing a monogram wreath.',
    images: [
      '/products/wedding-cards/ivory-rose-10/IR-01.png',
      '/products/wedding-cards/ivory-rose-10/IR-02.png',
      '/products/wedding-cards/ivory-rose-10/IR-03.png',
    ],
    details: {
      style: 'Romantic Floral Arch & Botanical Wreath',
      customization: 'Available (Couple Illustration, Ceremony Wording, Date Inserts)',
      finishing: 'Fine Art Matte Print & Gold Script Calligraphy',
      includes: 'Illustrated Arch Main Card, Ceremony Inserts & Monogram Envelope',
      occasion: 'Barat, Walima & Reception',
    },
    features: ['Illustrated Couple Floral Arch', 'White Rose & Greenery Accents', 'Gold Script Lettering', 'Monogram Wreath Envelope'],
    altText: 'Ivory Rose 10 cream wedding invitation card by Dream Invites',
  },

  // 11. Ivory Sprig
  {
    id: 'ivory-sprig-11',
    slug: 'ivory-sprig-11',
    name: 'Ivory Sprig',
    category: 'Wedding Cards',
    subCategory: 'Minimal',
    tagline: 'Multi-shaped cards in soft pastels with lavender sprig and wax seal',
    description: 'Cream invitation suite featuring simple brown lavender sprig illustrations. The set includes rectangular, circular and arched cards in soft cream, pink and beige tones. A matching cream envelope closes with a gold botanical wax seal.',
    images: [
      '/products/wedding-cards/ivory-sprig-11/IS-01.png',
      '/products/wedding-cards/ivory-sprig-11/IS-02.png',
      '/products/wedding-cards/ivory-sprig-11/IS-03.png',
    ],
    details: {
      style: 'Organic Multi-Shape Arch & Circle Suite',
      customization: 'Available (Shape Cuts, Pastel Color Tones, Monogram)',
      finishing: 'Precision Die-Cut Arches & Hand-Poured Gold Botanical Wax Seal',
      includes: 'Rectangular Card, Arched Card, Circular Tag, Envelope & Wax Seal',
      occasion: 'Intimate Nikah, Mehndi & Reception',
    },
    features: ['Die-Cut Arch & Circle Shapes', 'Soft Cream, Pink & Beige Palette', 'Botanical Lavender Line Art', 'Gold Botanical Wax Seal'],
    altText: 'Ivory Sprig 11 multi-shape wedding invitation suite by Dream Invites',
  },

  // 12. Navy Bloom
  {
    id: 'navy-bloom-12',
    slug: 'navy-bloom-12',
    name: 'Navy Bloom',
    category: 'Wedding Cards',
    subCategory: 'Floral',
    tagline: 'Deep navy pocket folder with bronze leaf wax seal and soft blue cards',
    description: 'Soft blue invitation cards feature navy floral illustrations in the corners and elegant script lettering. A deep navy pocket folder holds the cards, closed with a gold string and bronze leaf wax seal.',
    images: [
      '/products/wedding-cards/navy-bloom-12/NB-01.png',
    ],
    details: {
      style: 'Deep Navy Pocket Folio & Botanical Corners',
      customization: 'Available (Event Inserts, Script Typography, Wax Seal)',
      finishing: 'Navy Folio Construction, Gold String & Bronze Leaf Wax Seal',
      includes: 'Soft Blue Cards, Deep Navy Pocket Folder, Gold String & Wax Seal',
      occasion: 'Walima, Barat & Formal Reception',
    },
    features: ['Deep Navy Pocket Folder', 'Soft Blue Cardstock with Navy Florals', 'Gold String Tie', 'Bronze Leaf Wax Seal'],
    altText: 'Navy Bloom 12 wedding invitation with navy pocket folder by Dream Invites',
  },

  // 13. Peacock Blue Garden
  {
    id: 'peacock-blue-garden-13',
    slug: 'peacock-blue-garden-13',
    name: 'Peacock Blue Garden',
    category: 'Wedding Cards',
    subCategory: 'Traditional',
    tagline: 'Detailed garden illustrations with peacocks, lotuses and gold script',
    description: 'Soft blue invitation cards display detailed garden illustrations with peacocks, pink lotuses, green foliage, and classical architecture. Gold script lettering highlights the names and event details across the main card, Baraat, and Walima pieces in a refined, illustrated style.',
    images: [
      '/products/wedding-cards/peacock-blue-garden-13/PBG-01.png',
      '/products/wedding-cards/peacock-blue-garden-13/PBG-02.png',
      '/products/wedding-cards/peacock-blue-garden-13/PBG-03.png',
      '/products/wedding-cards/peacock-blue-garden-13/PBG-04.png',
      '/products/wedding-cards/peacock-blue-garden-13/PBG-05.png',
    ],
    details: {
      style: 'Royal Mughal Botanical Garden Painting',
      customization: 'Available (Multi-Event Inserts, Urdu/English Wording, Couple Names)',
      finishing: 'Fine Art Illustrated Prints + Warm Gold Script Highlights',
      includes: 'Main Ceremony Card, Baraat Insert, Walima Card & Illustrated Envelope',
      occasion: 'Mehndi, Baraat & Walima',
    },
    features: ['Hand-Illustrated Garden Motif', 'Peacocks & Pink Lotus Florals', 'Complete Multi-Event Suite', 'Classical Architectural Borders'],
    altText: 'Peacock Blue Garden 13 luxury illustrated wedding invitation by Dream Invites',
  },

  // 14. Soft Meadow
  {
    id: 'soft-meadow-14',
    slug: 'soft-meadow-14',
    name: 'Soft Meadow',
    category: 'Wedding Cards',
    subCategory: 'Floral',
    tagline: 'Light blue card with wildflower borders and purple floral envelope liner',
    description: 'Light blue invitation card with delicate pink and purple wildflower borders, gold accents and butterflies. Names are shown in elegant gold script. The matching blue envelope carries a gold foil monogram wreath and opens to a purple floral liner.',
    images: [
      '/products/wedding-cards/soft-meadow-14/SM-01.png',
      '/products/wedding-cards/soft-meadow-14/SM-02.png',
      '/products/wedding-cards/soft-meadow-14/SM-03.png',
    ],
    details: {
      style: 'Pastel Wildflower Meadow & Floral Lined Envelope',
      customization: 'Available (Couple Monogram, Ceremony Details, Envelope Liners)',
      finishing: 'Gold Foil Monogram Wreath & Full Color Floral Envelope Liner',
      includes: 'Light Blue Card, Gold Wreath Envelope & Illustrated Liner',
      occasion: 'Daytime Nikah, Garden Reception & Mehndi',
    },
    features: ['Pink & Purple Wildflower Borders', 'Gold Script & Butterfly Accents', 'Gold Foil Monogram Wreath', 'Patterned Purple Floral Liner'],
    altText: 'Soft Meadow 14 light blue wedding invitation card by Dream Invites',
  },

  // 15. Teal Wreath
  {
    id: 'teal-wreath-15',
    slug: 'teal-wreath-15',
    name: 'Teal Wreath',
    category: 'Wedding Cards',
    subCategory: 'Luxury',
    tagline: 'Deep teal pocket folder with gold foil wreath and bronze wax seal',
    description: 'Deep teal pocket folder displays a gold foil monogram inside a leafy wreath, secured with gold string and a bronze wax seal. White invitation cards with gold borders and elegant gold script lettering complete the suite.',
    images: [
      '/products/wedding-cards/teal-wreath-15/TW-01.png',
    ],
    details: {
      style: 'Royal Deep Teal Folio & Foil Monogram',
      customization: 'Available (Initials Monogram, Multi-Card Inserts, Wax Seal)',
      finishing: 'Hot Gold Foil Leafy Wreath, Gold Cord & Bronze Wax Seal',
      includes: 'Deep Teal Pocket Folder, Gold Bordered Cards, Cord & Seal',
      occasion: 'Royal Baraat, Nikah & Reception',
    },
    features: ['Deep Teal Pocket Folder', 'Gold Foil Leafy Wreath Monogram', 'Braided Gold String Tie', 'Hand-Stamped Bronze Wax Seal'],
    altText: 'Teal Wreath 15 deep teal pocket folder wedding invitation by Dream Invites',
  },

  // --- BID BOXES ---
  {
    id: 'signature-royal-emerald',
    slug: 'royal-emerald-bid-box',
    name: 'Signature Royal Emerald',
    category: 'Bid Boxes',
    subCategory: 'Velvet',
    tagline: 'A regal ceremonial favor box bound in emerald velvet with gold Arabesque filigree',
    description: 'A beautifully presented ceremonial bid box designed for your special announcement and luxury sweet favors. Hand-wrapped in emerald velvet with intricate gold foil arches and a handmade silk tassel.',
    images: [
      '/src/assets/images/bidbox_royal_emerald_1790663691007.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/src/assets/images/bidbox_ivory_gold_1790663711646.jpg',
      '/src/assets/images/card_traditional_grace_1790662808370.jpg',
    ],
    details: {
      style: 'Royal Subcontinental Velvet',
      customization: 'Available (Couple Monogram, Inner Calligraphy Insert, Tassel Colors)',
      finishing: 'Premium Velvet Wrap with Multi-Level Gold Foil',
      material: 'Hardboard Core with Royal Emerald Velvet',
      dimensions: '8" × 8" × 2.5" Luxury Presentation Box',
      occasion: 'Nikah Announcement, Baraat Mithai, VIP Family Favors',
    },
    features: ['Emerald Velvet Casing', 'Intricate Gold Foil Filigree', 'Silk Tassel Pull', 'Customizable Internal Card'],
    altText: 'Signature Royal Emerald luxury wedding bid box by Dream Invites',
  },
  {
    id: 'archival-ivory-bid-box',
    slug: 'archival-ivory-bid-box',
    name: 'Archival Ivory & Gold',
    category: 'Bid Boxes',
    subCategory: 'Keepsake',
    tagline: 'Understated bridal keepsake box in textured linen cardstock and gold medallion',
    description: 'An exquisitely tailored announcement box in heavy textured ivory linen cardstock, stamped with warm gold lettering, featuring an artisanal wax seal medallion and satin ribbon tie.',
    images: [
      '/src/assets/images/bidbox_ivory_gold_1790663711646.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/src/assets/images/bidbox_blush_floral_1790663729292.jpg',
      '/src/assets/images/featured_invitation_editorial_1790662767611.jpg',
    ],
    details: {
      style: 'Contemporary Bridal Linen',
      customization: 'Available (Custom Wax Crest, Foil Tone, Interior Compartments)',
      finishing: 'Hot Gold Foil Stamping & Monogram Wax Medallion',
      material: 'Textured Archival Linen Cardstock & Rigid Board',
      dimensions: '7.5" × 7.5" × 2" Presentation Box',
      occasion: 'Nikah, Walima Favors, Formal Invitation Presentation',
    },
    features: ['Warm Ivory Linen Texture', 'Monogram Wax Medallion', 'Satin Ribbon Closure', 'Rigid Keepsake Construction'],
    altText: 'Archival Ivory and Gold wedding bid box by Dream Invites',
  },
  {
    id: 'blush-botanical-bid-box',
    slug: 'blush-botanical-bid-box',
    name: 'Blush Botanical Keepsake',
    category: 'Bid Boxes',
    subCategory: 'Floral',
    tagline: 'Romantic sweet favor box kissed with delicate watercolors and gold debossed rims',
    description: 'A charming wedding bid box adorned with delicate blush and ivory floral watercolor patterns, debossed gold accents, and personalized couple calligraphy for sweet wedding favors.',
    images: [
      '/src/assets/images/bidbox_blush_floral_1790663729292.jpg',
      '/src/assets/images/card_floral_romance_1790662796207.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
    ],
    details: {
      style: 'Romantic Botanical Watercolor',
      customization: 'Available (Floral Colorways, Custom Initials)',
      finishing: 'Fine Matte Art Finish with Gold Foil Debossed Rim',
      material: 'High-Density Presentation Cardboard',
      dimensions: '6.5" × 6.5" × 2" Favor Box',
      occasion: 'Mehndi Favors, Dholki Sweets & Bridal Showers',
    },
    features: ['Watercolor Botanical Artwork', 'Gold Debossed Rim', 'Food-Safe Sweet Compartment', 'Personalized Initials'],
    altText: 'Blush Botanical wedding favor bid box by Dream Invites',
  },
  {
    id: 'ceremonial-heritage-bid-box',
    slug: 'ceremonial-heritage-bid-box',
    name: 'Ceremonial Heritage',
    category: 'Bid Boxes',
    subCategory: 'Traditional',
    tagline: 'A grand multi-compartment ceremonial announcement box for timeless celebrations',
    description: 'Designed for families who appreciate subcontinental grandeur. Features multi-compartment interior for celebratory sweets, dry fruits, and a dedicated presentation slot for the wedding card.',
    images: [
      '/src/assets/images/bidbox_royal_emerald_1790663691007.jpg',
      '/src/assets/images/bidbox_ivory_gold_1790663711646.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/src/assets/images/hero_wedding_stationery_1790662746929.jpg',
    ],
    details: {
      style: 'Grand Ceremonial Multi-Compartment',
      customization: 'Available (Custom Layout, Compartment Sizes, Gold Monogramming)',
      finishing: 'Gold Edge Gilding, Hand-Stitched Fabric & Foil Inlay',
      material: 'Wood Core Wrapped in Heavyweight Linen & Velvet',
      dimensions: '10" × 10" × 3" Master Box',
      includes: 'Main Box, 4 Sweet Trays, Custom Invitation Card Mount',
    },
    features: ['Multi-Compartment Design', 'Dedicated Card Mount', 'Rigid Heirloom Quality', 'Bespoke Family Monogram'],
    altText: 'Ceremonial Heritage wedding bid box suite by Dream Invites',
  },

  // --- NIKAH FRAMES ---
  {
    id: 'archival-gold-nikah-frame',
    slug: 'archival-gold-nikah-frame',
    name: 'Archival Gold Nikah Frame',
    category: 'Nikah Frames',
    subCategory: 'Keepsake',
    tagline: 'Floating glass and gold leaf frame created for your Nikah certificate',
    description: 'A ceremonial keepsake frame crafted in handcrafted gold leaf moulding and floating double glass, designed to preserve your sacred Nikah certificate with timeless grace.',
    images: [
      '/src/assets/images/nikah_frame_collection_1790675009112.jpg',
      '/src/assets/images/nikah_frame_archival_1790675052381.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/src/assets/images/hero_wedding_stationery_1790662746929.jpg',
    ],
    details: {
      style: 'Floating Double Glass',
      material: 'Handcrafted Gold Leaf & Museum Quality Glass',
      customization: 'Available (Couple Names, Ceremony Date, Custom Calligraphy)',
      dimensions: '12" × 16" Keepsake Frame',
      occasion: 'Nikah Ceremony, Stage Presentation, Bridal Keepsake',
    },
    features: ['Floating Double Glass', 'Gold Leaf Moulding', 'Certificate Mounting', 'Wall Hanging & Table Stand'],
    altText: 'Archival Gold Nikah Frame with Islamic calligraphy by Dream Invites',
  },
  {
    id: 'floating-champagne-nikah-frame',
    slug: 'floating-champagne-nikah-frame',
    name: 'Floating Champagne Nikah Frame',
    category: 'Nikah Frames',
    subCategory: 'Modern',
    tagline: 'Minimal brushed champagne floating frame with botanical accents',
    description: 'A modern floating glass frame with a delicate champagne border and pressed botanical accents, framing your certificate in radiant daylight clarity.',
    images: [
      '/src/assets/images/nikah_frame_floating_1790675032438.jpg',
      '/src/assets/images/nikah_frame_collection_1790675009112.jpg',
      '/src/assets/images/card_minimal_elegance_1790662782511.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
    ],
    details: {
      style: 'Contemporary Minimalist Floating',
      material: 'Brushed Champagne Metal & Clarity Glass',
      customization: 'Available (Urdu/Arabic Calligraphy, Botanical Layout)',
      dimensions: '11" × 14" Presentation Frame',
      occasion: 'Nikah Ceremony & Master Bedroom Decor',
    },
    features: ['Brushed Metal Profile', 'Pressed Botanicals', 'UV-Protective Glass', 'Satin Ribbon Accent'],
    altText: 'Floating Champagne Nikah Frame with botanical accents by Dream Invites',
  },
  {
    id: 'heritage-carved-nikah-frame',
    slug: 'heritage-carved-nikah-frame',
    name: 'Heritage Carved Nikah Frame',
    category: 'Nikah Frames',
    subCategory: 'Traditional',
    tagline: 'Solid wood frame with Islamic arched calligraphy mounting',
    description: 'Traditional carved natural solid wood frame with warm gold inner fillet, honoring Islamic architectural arches and artisanal calligraphy traditions.',
    images: [
      '/src/assets/images/nikah_frame_archival_1790675052381.jpg',
      '/src/assets/images/nikah_frame_floating_1790675032438.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/src/assets/images/hero_wedding_stationery_1790662746929.jpg',
    ],
    details: {
      style: 'Subcontinental Heritage Carved',
      material: 'Solid Oak Wood Core with Gold Leaf Fillet',
      customization: 'Available (Custom Calligraphy, Arch Profiles, Wax Seal Medallion)',
      dimensions: '14" × 18" Master Frame',
      occasion: 'Nikah Ceremony & Family Heirloom',
    },
    features: ['Solid Oak Construction', 'Hand-Carved Relief Profile', 'Archival Mount Board', 'Custom Wax Seal Accent'],
    altText: 'Heritage Carved Nikah Frame in natural wood and gold by Dream Invites',
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Ayesha',
    review: 'The cards looked even better in person. The paper quality and finishing were really nice.',
    context: 'Wedding Cards',
  },
  {
    id: 'rev-2',
    name: 'Hamza',
    review: "I ordered these for my brother's wedding and everyone in the family liked the design. The final print was clean and the details were exactly as expected.",
    context: "Brother's Wedding",
  },
  {
    id: 'rev-3',
    name: 'Fatima',
    review: 'I was a little unsure about ordering online, but the card turned out really beautiful. The finishing was neat and the team was helpful throughout.',
    context: 'Baraat Cards',
  },
  {
    id: 'rev-4',
    name: 'Usman',
    review: "I ordered cards for my sister's Nikah. The design was simple and elegant, which was exactly what we wanted.",
    context: "Sister's Nikah",
  },
  {
    id: 'rev-5',
    name: 'Zainab',
    review: 'The bid boxes arrived safely and the velvet finish is gorgeous. Perfect size for the sweets and family loved them.',
    context: 'Bid Boxes',
  },
  {
    id: 'rev-6',
    name: 'Bilal',
    review: 'We ordered the Nikah frame along with the invitation cards. Both looked great on the stage. Really happy with the work.',
    context: 'Nikah Frame & Cards',
  },
  {
    id: 'rev-7',
    name: 'Maryam',
    review: 'My wedding cards arrived in Lahore right on time. Very neat gold foil work and the textured paper feels substantial.',
    context: 'Wedding Invitation Suite',
  },
  {
    id: 'rev-8',
    name: 'Omar',
    review: "Ordered the emerald bid boxes for my brother's wedding. Good communication on WhatsApp and the packing was secure.",
    context: 'Favor Boxes',
  },
];

// Helper functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return PRODUCTS.find((p) => p.slug === slug || p.id === slug);
};

export const getCollectionBySlug = (slug: string): CollectionInfo | undefined => {
  return COLLECTIONS.find((c) => c.slug === slug || c.id === slug);
};

export const getProductsByCollectionSlug = (slug: string): Product[] => {
  if (slug === 'wedding-cards') {
    return PRODUCTS.filter((p) => p.category === 'Wedding Cards');
  }
  if (slug === 'bid-boxes') {
    return PRODUCTS.filter((p) => p.category === 'Bid Boxes');
  }
  if (slug === 'nikah-frames') {
    return PRODUCTS.filter((p) => p.category === 'Nikah Frames');
  }
  return [];
};

export const getRelatedProducts = (currentProduct: Product, limit = 4): Product[] => {
  return PRODUCTS
    .filter((p) => p.id !== currentProduct.id && p.category === currentProduct.category)
    .slice(0, limit);
};

export const EVENT_TYPES: EventType[] = [
  {
    id: 'nikah',
    name: 'Nikah',
    subtitle: 'Sacred Covenant & Pure Grace',
    description: 'Quiet beauty celebrating solemn vows, sacred blessings, and the union of two families in understated ivory and gold.',
    vibe: 'Serene, Sacred & Elegant',
    palette: ['#FAF8F5', '#EAD9C4', '#2D4A3E', '#0A0A0A'],
    accentNotes: 'Quranic verses, refined English calligraphy, gold foil deboss',
    image: '/src/assets/images/card_minimal_elegance_1790662782511.jpg',
  },
  {
    id: 'mehndi',
    name: 'Mehndi',
    subtitle: 'Vibrant Colors & Festive Rhythms',
    description: 'A burst of joyful energy, warm marigold motifs, intricate henna patterns, and celebratory typography that sets the musical mood.',
    vibe: 'Festive, Joyous & Warm',
    palette: ['#E6A15C', '#C25D42', '#3D614A', '#FAF5E8'],
    accentNotes: 'Henna filigree, playful typography, celebratory card inserts',
    image: '/src/assets/images/card_floral_romance_1790662796207.jpg',
  },
  {
    id: 'baraat',
    name: 'Baraat',
    subtitle: 'Grand Tradition & Royal Heritage',
    description: 'Deep jewel tones, imperial gold foil embellishments, and regal gatefold presentation that heralds the grand arrival.',
    vibe: 'Regal, Prestigious & Ceremonial',
    palette: ['#1C3F34', '#992B2B', '#D4AF37', '#FAF8F5'],
    accentNotes: 'Hardbound folio, gold tassel, bilingual invitation card',
    image: '/src/assets/images/card_traditional_grace_1790662808370.jpg',
  },
  {
    id: 'walima',
    name: 'Walima',
    subtitle: 'Gracious Reception & Modern Romance',
    description: 'Subtle champagne hues, delicate floral illustrations, and contemporary typography that welcomes guests to a lavish dinner.',
    vibe: 'Sophisticated, Warm & Romantic',
    palette: ['#E8DED1', '#4A5568', '#00AEEF', '#FFFFFF'],
    accentNotes: 'Pearlized paper stock, vellum overlay, reception dinner details',
    image: '/src/assets/images/featured_invitation_editorial_1790662767611.jpg',
  },
  {
    id: 'engagement',
    name: 'Engagement',
    subtitle: 'The First Chapter of Forever',
    description: 'Intimate announcements and couple monograms crafted on deckled cotton paper, marking the joyful milestone.',
    vibe: 'Intimate, Modern & Sweet',
    palette: ['#F3E9DF', '#B89B72', '#2A2928', '#FFFFFF'],
    accentNotes: 'Bespoke couple initials, botanical accent, wax seal',
    image: '/src/assets/images/card_floral_romance_1790662796207.jpg',
  },
  {
    id: 'dholki',
    name: 'Dholki',
    subtitle: 'Songs, Smiles & Treasured Nights',
    description: 'Charming festive cards for pre-wedding musical gatherings and family get-togethers filled with laughter.',
    vibe: 'Warm, Cultural & Lively',
    palette: ['#D97706', '#059669', '#7C3AED', '#FAF8F5'],
    accentNotes: 'Musical motifs, warm tones, compact format',
    image: '/src/assets/images/hero_wedding_stationery_1790662746929.jpg',
  },
];

export const WHY_DREAM_INVITES: ValueProp[] = [
  {
    title: 'Thoughtful Designs',
    description: 'Every detail is considered to create an invitation that feels uniquely yours.',
    details: 'From spacing to type pairing, we craft layouts that honour your vision and personal story.',
  },
  {
    title: 'Beautiful Craftsmanship',
    description: 'Designed with attention to typography, paper, color, and finishing details.',
    details: 'We work with heavyweight Italian cotton papers, hot foil stamping, and artisanal blind embossing.',
  },
  {
    title: 'Personalized Experience',
    description: 'Share your vision with us and let us help bring it to life.',
    details: 'Direct consultation on WhatsApp to customize names, wording, languages, and color harmonies.',
  },
  {
    title: 'Made for Your Moments',
    description: 'Because your invitation should feel as special as the celebration itself.',
    details: 'A lasting keepsake that your loved ones will cherish long after the vows are spoken.',
  },
];

export const INSTAGRAM_GALLERY_ITEMS = [
  {
    id: 'ig-1',
    caption: 'Gold foil typography on deckled Italian cotton with sage envelope.',
    image: '/src/assets/images/featured_invitation_editorial_1790662767611.jpg',
    likes: 'Bespoke Suite',
  },
  {
    id: 'ig-2',
    caption: 'Clean architectural stationery suite for an intimate Lahore Nikah.',
    image: '/src/assets/images/card_minimal_elegance_1790662782511.jpg',
    likes: 'Nikah Collection',
  },
  {
    id: 'ig-3',
    caption: 'Handcrafted floral watercolors kissed with warm foil accents.',
    image: '/src/assets/images/card_floral_romance_1790662796207.jpg',
    likes: 'Floral Series',
  },
  {
    id: 'ig-4',
    caption: 'Traditional royal green and gold Arabesque suite with custom silk tassel.',
    image: '/src/assets/images/card_traditional_grace_1790662808370.jpg',
    likes: 'Heritage Series',
  },
  {
    id: 'ig-5',
    caption: 'Complete ceremonial multi-card suite with RSVP and presentation box.',
    image: '/src/assets/images/hero_wedding_stationery_1790662746929.jpg',
    likes: 'Luxury Boxed',
  },
  {
    id: 'ig-6',
    caption: 'Minimal vellum jacket tied with delicate champagne raw silk thread.',
    image: '/src/assets/images/card_minimal_elegance_1790662782511.jpg',
    likes: 'Studio Details',
  },
];
