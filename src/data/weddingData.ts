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
    productCountDescription: '17 Bespoke Suites',
  },
  {
    id: 'bid-boxes',
    slug: 'bid-boxes',
    name: 'Bid Boxes',
    shortDescription: 'Beautiful bid boxes made to add a thoughtful touch to your celebration.',
    coverImage: '/bid-boxes/Rattan Bloom Bid Box 06/RB-01.png',
    altText: 'Rattan Bloom ceremonial favor bid box by Dream Invites',
    ctaText: 'EXPLORE BID BOXES',
    productCountDescription: '14 Bespoke Keepsakes',
  },
  {
    id: 'nikah-frames',
    slug: 'nikah-frames',
    name: 'Nikah Frames',
    shortDescription: 'Elegant Nikah frames created to preserve a meaningful moment.',
    coverImage: '/assets/images/nikah_frame_collection_1790675009112.jpg',
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
      '/products/wedding-cards/Coral Bloom 01/CB-01.png',
      '/products/wedding-cards/Coral Bloom 01/CB-02.png',
      '/products/wedding-cards/Coral Bloom 01/CB-03.png',
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

  // 16. Sage Arch
  {
    id: 'sage-arch',
    slug: 'sage-arch',
    name: 'Sage Arch',
    category: 'Wedding Cards',
    subCategory: 'Minimal',
    tagline: 'White arched invitation card with soft eucalyptus garland and sage wax seal',
    description: 'White arched invitation card with a soft eucalyptus and white flower garland along the top curve. Elegant script lettering appears below the design. The matching sage green envelope shows the date on the flap and closes with a clear wax seal.',
    images: [
      '/products/wedding-cards/sage-arch/SA-01.png',
    ],
    details: {
      style: 'Arched Botanical Elegance',
      customization: 'Available (Couple Names, Date Flap, Floral Accents)',
      finishing: 'Precision Die-Cut Arch with Clear Botanical Wax Seal',
      paper: '350 GSM Heavy Matte Cotton Cardstock with Sage Envelope',
      occasion: 'Nikah, Baraat, Minimal Modern Weddings',
    },
    features: ['Curved Arch Silhouette', 'Eucalyptus Garland Detail', 'Sage Green Envelope', 'Clear Wax Seal Flap Closure'],
    altText: 'Sage Arch bespoke wedding invitation suite by Dream Invites',
  },

  // 17. Ribbon Grace
  {
    id: 'ribbon-grace',
    slug: 'ribbon-grace',
    name: 'Ribbon Grace',
    category: 'Wedding Cards',
    subCategory: 'Luxury',
    tagline: 'Cream invitation card with gold script and oversized ribbon bow closure',
    description: 'Cream invitation card with elegant gold script lettering and a subtle monogram. The matching envelope is tied with a large ribbon bow. Clean borders and refined typography complete the minimal design.',
    images: [
      '/products/wedding-cards/ribbon-grace/RG-01.png',
    ],
    details: {
      style: 'Classic Monogram Minimalist',
      customization: 'Available (Couple Monogram, Ribbon Tone, Gold Foil Typography)',
      finishing: 'Hot Gold Foil Stamping with Hand-Tied Satin Ribbon Bow',
      paper: '350 GSM Textured Cream Linen Cardstock',
      occasion: 'Walima, Nikah, Formal Wedding Receptions',
    },
    features: ['Gold Script Typography', 'Hand-Tied Oversized Ribbon Bow', 'Subtle Watermark Monogram', 'Refined Minimal Border'],
    altText: 'Ribbon Grace elegant wedding invitation suite by Dream Invites',
  },

  // --- BID BOXES (14 Real Dream Invites Favor Boxes in Exact Specified Order) ---
  // 1. Blue Toile Bid Box
  {
    id: 'blue-toile-bid-box',
    slug: 'blue-toile-bid-box',
    name: 'Blue Toile Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Floral',
    tagline: 'Soft blue favor box with white toile botanical illustrations and pearl charm',
    description: 'Soft blue favor box with white botanical and bird illustrations in a classic toile pattern. It is tied with a cream ribbon and finished with a delicate pearl charm.',
    images: [
      '/bid-boxes/Blue Toile Bid Box 1/BT-01.png',
    ],
    details: {
      style: 'Classic Toile de Jouy Pattern',
      customization: 'Available (Personalized Monogram, Ribbon Selection)',
      finishing: 'Matte Art Cardstock with Toile Illustration & Pearl Charm',
      occasion: 'Nikah Announcement, Bridal Favors, Luxury Sweets',
    },
    features: ['Classic Toile Botanical Pattern', 'Delicate Pearl Charm Accent', 'Cream Satin Ribbon Tie', 'Rigid Favor Construction'],
    altText: 'Blue Toile bespoke favor bid box by Dream Invites',
  },

  // 2. Cream Toile Bid Box
  {
    id: 'cream-toile-bid-box',
    slug: 'cream-toile-bid-box',
    name: 'Cream Toile Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Floral',
    tagline: 'Cream favor box with soft toile illustrations and pearl charm',
    description: 'Cream favor box with soft botanical and bird illustrations in a classic toile pattern. It is tied with a cream ribbon and finished with a pearl charm.',
    images: [
      '/bid-boxes/Cream Toile Bid Box 02/CT-01.png',
    ],
    details: {
      style: 'Cream Botanical Toile',
      customization: 'Available (Custom Monogram, Ribbon Tone)',
      finishing: 'Textured Cardstock with Delicate Toile Print & Pearl Charm',
      occasion: 'Nikah Favors, Walima Favors, Formal Sweet Box',
    },
    features: ['Soft Cream Botanical Toile', 'Pearl Charm Detail', 'Cream Satin Ribbon', 'Luxury Keepsake Box'],
    altText: 'Cream Toile bespoke favor bid box by Dream Invites',
  },

  // 3. Mint Toile Bid Box
  {
    id: 'mint-toile-bid-box',
    slug: 'mint-toile-bid-box',
    name: 'Mint Toile Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Floral',
    tagline: 'Soft mint favor box with white toile illustrations and pearl charm',
    description: 'Soft mint favor box with white botanical and bird illustrations in a classic toile pattern. It is tied with a cream ribbon and finished with a pearl charm.',
    images: [
      '/bid-boxes/Mint Toile Bid Box 03/MT-01.png',
    ],
    details: {
      style: 'Mint Toile de Jouy Pattern',
      customization: 'Available (Custom Monogram, Inner Calligraphy)',
      finishing: 'Fine Matte Mint Finish with White Toile Artwork & Charm',
      occasion: 'Mehndi Favors, Nikah Announcement, Luxury Favors',
    },
    features: ['Pastel Mint Toile Artwork', 'Cream Ribbon Tie', 'Pearl Charm Pull', 'Food-Safe Sweet Storage'],
    altText: 'Mint Toile ceremonial favor bid box by Dream Invites',
  },

  // 4. Blue Wreath Bid Box
  {
    id: 'blue-wreath-bid-box',
    slug: 'blue-wreath-bid-box',
    name: 'Blue Wreath Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Luxury',
    tagline: 'Soft blue favor box with gold foil leafy wreath and matching ribbon bow',
    description: 'Soft blue favor box with a gold foil leafy wreath and baby silhouette design. Elegant gold lettering appears in the center. The box is finished with a matching blue ribbon bow.',
    images: [
      '/bid-boxes/Blue Wreath Bid Box 04/BW-01.png',
    ],
    details: {
      style: 'Gold Foil Leafy Wreath Emblem',
      customization: 'Available (Center Lettering, Silhouette Option, Ribbon Colors)',
      finishing: 'Hot Gold Foil Stamping with Soft Blue Ribbon Bow',
      occasion: 'Celebration Favors, Sweet Boxes, Family Keepsakes',
    },
    features: ['Gold Foil Leafy Wreath', 'Center Gold Typography', 'Matching Blue Ribbon Bow', 'Premium Rigid Cardstock'],
    altText: 'Blue Wreath elegant favor bid box by Dream Invites',
  },

  // 5. Burgundy Monogram Bid Box
  {
    id: 'burgundy-monogram-bid-box',
    slug: 'burgundy-monogram-bid-box',
    name: 'Burgundy Monogram Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Minimal',
    tagline: 'Clean white favor box with burgundy monogram and satin ribbon bow',
    description: 'White favor boxes feature a simple burgundy monogram on the lid. Each box is tied with a matching burgundy satin ribbon bow. The design remains clean and minimal.',
    images: [
      '/bid-boxes/Burgundy Monogram Bid Box 05/BM-01.png',
    ],
    details: {
      style: 'Minimalist Monogram Contrast',
      customization: 'Available (Bespoke Monogram, Ribbon Tone)',
      finishing: 'Crisp White Cardstock with Rich Burgundy Monogram & Satin Bow',
      occasion: 'Baraat Mithai, Nikah Favors, Formal Wedding Receptions',
    },
    features: ['Minimalist Center Monogram', 'Rich Burgundy Satin Ribbon', 'Crisp White Presentation Box', 'Clean Refined Lines'],
    altText: 'Burgundy Monogram minimal favor bid box by Dream Invites',
  },

  // 6. Rattan Bloom Bid Box (Collection Cover)
  {
    id: 'rattan-bloom-bid-box',
    slug: 'rattan-bloom-bid-box',
    name: 'Rattan Bloom Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Traditional',
    tagline: 'Cream round favor box with floral lid, delicate rattan band, and cream bow',
    description: 'Cream round favor boxes with a soft green floral pattern on the lids. A delicate rattan band wraps the sides, and each box is finished with a cream ribbon bow.',
    images: [
      '/bid-boxes/Rattan Bloom Bid Box 06/RB-01.png',
    ],
    details: {
      style: 'Artisanal Woven Rattan & Floral',
      customization: 'Available (Floral Pattern, Ribbon Selection, Custom Medallion)',
      finishing: 'Woven Rattan Band with Printed Floral Lid & Ribbon Bow',
      occasion: 'Mehndi Sweets, Baraat Mithai, Wedding Favors',
    },
    features: ['Delicate Woven Rattan Side Band', 'Soft Green Floral Lid Artwork', 'Cream Ribbon Bow Closure', 'Signature Round Silhouette'],
    altText: 'Rattan Bloom bespoke ceremonial favor bid box by Dream Invites',
  },

  // 7. Blue Bloom Bid Box
  {
    id: 'blue-bloom-bid-box',
    slug: 'blue-bloom-bid-box',
    name: 'Blue Bloom Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Floral',
    tagline: 'Cream favor box with blue floral line illustrations and soft blue ribbon',
    description: 'Cream favor box with blue floral line illustrations and gold lettering. It is tied with a soft blue ribbon bow. The design is clean and refined.',
    images: [
      '/bid-boxes/Blue Bloom Bid Box 7/BL-01.png',
    ],
    details: {
      style: 'Fine Botanical Line Artwork',
      customization: 'Available (Gold Lettering, Ribbon Tone)',
      finishing: 'Precision Line Illustration with Gold Lettering & Blue Ribbon',
      occasion: 'Walima Favors, Daytime Nikah, Wedding Favors',
    },
    features: ['Delicate Blue Floral Line Illustrations', 'Warm Gold Script Lettering', 'Soft Blue Satin Ribbon', 'Clean Refined Aesthetic'],
    altText: 'Blue Bloom botanical favor bid box by Dream Invites',
  },

  // 8. Mint Monogram Bid Box
  {
    id: 'mint-monogram-bid-box',
    slug: 'mint-monogram-bid-box',
    name: 'Mint Monogram Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Keepsake',
    tagline: 'Soft mint round favor box with gold monogram and key design on lid',
    description: 'Soft mint round favor box with an elegant gold monogram and key design on the lid. The clean exterior pairs with a divided interior for small gifts.',
    images: [
      '/bid-boxes/Mint Monogram Bid Box 08/MM-01.png',
    ],
    details: {
      style: 'Round Keepsake Box with Key Medallion',
      customization: 'Available (Couple Monogram, Divided Interior Layout)',
      finishing: 'Soft Mint Matte Finish with Gold Monogram & Key Detailing',
      occasion: 'Nikah Announcement, VIP Gifts, Luxury Mithai Presentation',
    },
    features: ['Round Box Silhouette', 'Gold Foil Monogram with Key Motif', 'Divided Multi-Compartment Interior', 'Velvety Matte Mint Texture'],
    altText: 'Mint Monogram round favor bid box by Dream Invites',
  },

  // 9. Wax Bloom Bid Box (Multi-photo gallery: WB-01.png & WB-02.png)
  {
    id: 'wax-bloom-bid-box',
    slug: 'wax-bloom-bid-box',
    name: 'Wax Bloom Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Keepsake',
    tagline: 'Soft champagne favor box with embossed monogram and gold floral wax seal',
    description: 'Soft champagne favor boxes with an embossed monogram and a gold floral wax seal. Each box is finished with a cream ribbon bow. The design is clean and refined.',
    images: [
      '/bid-boxes/Wax Bloom Bid Box 09/WB-01.png',
      '/bid-boxes/Wax Bloom Bid Box 09/WB-02.png',
    ],
    details: {
      style: 'Embossed Monogram & Wax Medallion',
      customization: 'Available (Custom Wax Seal, Ribbon Selection, Embossed Initials)',
      finishing: 'Blind Embossed Monogram with Hand-Pressed Gold Wax Seal',
      occasion: 'Nikah Announcement, Luxury Sweet Favors, Keepsake Box',
    },
    features: ['Hand-Pressed Gold Floral Wax Seal', 'Blind Embossed Monogram', 'Cream Ribbon Bow Closure', 'Multi-Angle 2-Photo Gallery'],
    altText: 'Wax Bloom champagne favor bid box with gold wax seal by Dream Invites',
  },

  // 10. Navy Velvet Bid Box
  {
    id: 'navy-velvet-bid-box',
    slug: 'navy-velvet-bid-box',
    name: 'Navy Velvet Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Velvet',
    tagline: 'Deep navy velvet box with elegant gold monogram lettering on lid',
    description: 'Deep navy velvet ring boxes with elegant gold monogram lettering on the lids. The soft texture and clean design create a refined look.',
    images: [
      '/bid-boxes/Navy Velvet Bid Box 10/NV-01.png',
    ],
    details: {
      style: 'Royal Velvet Keepsake',
      customization: 'Available (Gold Monogram Initials, Interior Lining)',
      finishing: 'Lush Navy Velvet Wrap with Metallic Gold Foil Stamping',
      occasion: 'Ring Presentation, Nikah Announcement, VIP Favors',
    },
    features: ['Lush Navy Velvet Exterior', 'Metallic Gold Monogram Lettering', 'Soft Tactile Texture', 'Rigid Heirloom Core'],
    altText: 'Navy Velvet bespoke favor bid box by Dream Invites',
  },

  // 11. Emerald Crest Bid Box
  {
    id: 'emerald-crest-bid-box',
    slug: 'emerald-crest-bid-box',
    name: 'Emerald Crest Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Luxury',
    tagline: 'Deep green favor box with gold foil crest, cream ribbon, and gold wax seal',
    description: 'Deep green favor box with a gold foil monogram crest and elegant script lettering. It is wrapped with a cream ribbon and topped with a gold wax seal.',
    images: [
      '/bid-boxes/Emerald Crest Bid Box 11/EC-01.png',
    ],
    details: {
      style: 'Royal Emerald Crest',
      customization: 'Available (Custom Family Crest, Ribbon Tone, Wax Seal)',
      finishing: 'Deep Emerald Matte Board with Gold Foil Crest & Wax Seal',
      occasion: 'Royal Nikah, Baraat Mithai, Formal Announcement',
    },
    features: ['Gold Foil Monogram Crest', 'Hand-Pressed Gold Wax Seal', 'Cream Ribbon Wrap', 'Rich Emerald Green Hue'],
    altText: 'Emerald Crest luxury favor bid box by Dream Invites',
  },

  // 12. Green Bloom Bid Box
  {
    id: 'green-bloom-bid-box',
    slug: 'green-bloom-bid-box',
    name: 'Green Bloom Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Floral',
    tagline: 'Cream favor box with green botanical artwork, olive velvet ribbon, and pearl charm',
    description: 'Cream favor boxes with green botanical line illustrations and gold lettering. Each box is tied with an olive green velvet ribbon and finished with a pearl charm.',
    images: [
      '/bid-boxes/Green Bloom Bid Box 12/GB-01.png',
    ],
    details: {
      style: 'Botanical Line Art & Olive Velvet',
      customization: 'Available (Gold Lettering, Velvet Ribbon Color)',
      finishing: 'Botanical Print on Cream Cardstock with Velvet Ribbon & Charm',
      occasion: 'Mehndi Favors, Daytime Weddings, Garden Receptions',
    },
    features: ['Green Botanical Line Art', 'Olive Green Velvet Ribbon Tie', 'Delicate Pearl Charm', 'Gold Calligraphy Accent'],
    altText: 'Green Bloom botanical favor bid box by Dream Invites',
  },

  // 13. Blush Tassel Bid Box
  {
    id: 'blush-tassel-bid-box',
    slug: 'blush-tassel-bid-box',
    name: 'Blush Tassel Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Traditional',
    tagline: 'Soft blush favor box with floral pattern, gold calligraphy, and matching tassel',
    description: 'Soft blush favor boxes with a subtle floral pattern and elegant gold calligraphy. Each box is finished with a matching blush tassel.',
    images: [
      '/bid-boxes/Blush Tassel Bid Box 13/BT-01.png',
    ],
    details: {
      style: 'Soft Blush & Gold Calligraphy',
      customization: 'Available (Couple Calligraphy, Tassel Color)',
      finishing: 'Subtle Floral Pattern with Gold Foil Calligraphy & Silk Tassel',
      occasion: 'Bridal Shower, Dholki Sweets, Nikah Favors',
    },
    features: ['Subtle Blush Floral Pattern', 'Warm Gold Calligraphy', 'Matching Silk Tassel Pull', 'Heirloom Keepsake Quality'],
    altText: 'Blush Tassel favor bid box with gold calligraphy by Dream Invites',
  },

  // 14. Navy Floral Bid Box
  {
    id: 'navy-floral-bid-box',
    slug: 'navy-floral-bid-box',
    name: 'Navy Floral Bid Box',
    category: 'Bid Boxes',
    subCategory: 'Floral',
    tagline: 'Deep navy square favor box with white botanical florals and textured ribbon bow',
    description: 'This square favor box features a deep navy blue background covered in white floral illustrations. A round white emblem on the front showcases elegant script lettering. The top is neatly tied with a soft white textured ribbon bow.',
    images: [
      '/bid-boxes/Navy Floral Bid Box 14/NF-01.png',
    ],
    details: {
      style: 'Botanical Floral Illustration',
      customization: 'Available (Personalized Script Names, Ribbon Selection)',
      finishing: 'Deep Matte Navy with White Botanical Print & Textured Ribbon',
      occasion: 'Walima Favors, Wedding Favors, Sweet Boxes',
    },
    features: ['White Botanical Floral Pattern', 'Center Round Script Emblem', 'Soft Textured Ribbon Bow', 'Food-Safe Sweet Storage'],
    altText: 'Navy Floral bespoke wedding favor bid box by Dream Invites',
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
      '/assets/images/nikah_frame_collection_1790675009112.jpg',
      '/assets/images/nikah_frame_archival_1790675052381.jpg',
      '/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/assets/images/hero_wedding_stationery_1790662746929.jpg',
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
      '/assets/images/nikah_frame_floating_1790675032438.jpg',
      '/assets/images/nikah_frame_collection_1790675009112.jpg',
      '/assets/images/card_minimal_elegance_1790662782511.jpg',
      '/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
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
      '/assets/images/nikah_frame_archival_1790675052381.jpg',
      '/assets/images/nikah_frame_floating_1790675032438.jpg',
      '/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/assets/images/hero_wedding_stationery_1790662746929.jpg',
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
    context: "Brother's Wedding Cards",
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
    context: "Sister's Nikah Cards",
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
    context: 'Ceremonial Favor Boxes',
  },
  {
    id: 'rev-9',
    name: 'Hassan',
    review: 'The laser cutwork on our wedding invites was so precise. Delivery reached Karachi two days before our scheduled distribution.',
    context: 'Wedding Cards',
  },
  {
    id: 'rev-10',
    name: 'Hira',
    review: "Ordered custom cards for my sister's Walima. The color matching with her dress theme and the gold accents were spot on.",
    context: 'Walima Cards',
  },
  {
    id: 'rev-11',
    name: 'Saad',
    review: 'The paper thickness and foil embossing gave the invitations a very royal feel. Everyone in the family asked where we got them made.',
    context: 'Wedding Invitation Cards',
  },
  {
    id: 'rev-12',
    name: 'Khadija',
    review: 'We needed cards on short notice for our family wedding. The team coordinated everything smoothly on WhatsApp and dispatched promptly.',
    context: 'Nikah Invitations',
  },
  {
    id: 'rev-13',
    name: 'Tariq',
    review: 'The velvet bid boxes with silk tassels made such a good impression on our guests. Beautifully finished and securely packed.',
    context: 'Favor Bid Boxes',
  },
  {
    id: 'rev-14',
    name: 'Anum',
    review: 'Received our wedding cards yesterday. The gold calligraphy and scalloped envelopes are truly stunning in real life.',
    context: 'Wedding Cards',
  },
  {
    id: 'rev-15',
    name: 'Zubair',
    review: "Ordered for my brother's Barat. Clean typography, premium cardstock, and hassle-free communication from start to finish.",
    context: 'Baraat Invitation Suite',
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
    image: '/assets/images/card_minimal_elegance_1790662782511.jpg',
  },
  {
    id: 'mehndi',
    name: 'Mehndi',
    subtitle: 'Vibrant Colors & Festive Rhythms',
    description: 'A burst of joyful energy, warm marigold motifs, intricate henna patterns, and celebratory typography that sets the musical mood.',
    vibe: 'Festive, Joyous & Warm',
    palette: ['#E6A15C', '#C25D42', '#3D614A', '#FAF5E8'],
    accentNotes: 'Henna filigree, playful typography, celebratory card inserts',
    image: '/assets/images/card_floral_romance_1790662796207.jpg',
  },
  {
    id: 'baraat',
    name: 'Baraat',
    subtitle: 'Grand Tradition & Royal Heritage',
    description: 'Deep jewel tones, imperial gold foil embellishments, and regal gatefold presentation that heralds the grand arrival.',
    vibe: 'Regal, Prestigious & Ceremonial',
    palette: ['#1C3F34', '#992B2B', '#D4AF37', '#FAF8F5'],
    accentNotes: 'Hardbound folio, gold tassel, bilingual invitation card',
    image: '/assets/images/card_traditional_grace_1790662808370.jpg',
  },
  {
    id: 'walima',
    name: 'Walima',
    subtitle: 'Gracious Reception & Modern Romance',
    description: 'Subtle champagne hues, delicate floral illustrations, and contemporary typography that welcomes guests to a lavish dinner.',
    vibe: 'Sophisticated, Warm & Romantic',
    palette: ['#E8DED1', '#4A5568', '#00AEEF', '#FFFFFF'],
    accentNotes: 'Pearlized paper stock, vellum overlay, reception dinner details',
    image: '/assets/images/featured_invitation_editorial_1790662767611.jpg',
  },
  {
    id: 'engagement',
    name: 'Engagement',
    subtitle: 'The First Chapter of Forever',
    description: 'Intimate announcements and couple monograms crafted on deckled cotton paper, marking the joyful milestone.',
    vibe: 'Intimate, Modern & Sweet',
    palette: ['#F3E9DF', '#B89B72', '#2A2928', '#FFFFFF'],
    accentNotes: 'Bespoke couple initials, botanical accent, wax seal',
    image: '/assets/images/card_floral_romance_1790662796207.jpg',
  },
  {
    id: 'dholki',
    name: 'Dholki',
    subtitle: 'Songs, Smiles & Treasured Nights',
    description: 'Charming festive cards for pre-wedding musical gatherings and family get-togethers filled with laughter.',
    vibe: 'Warm, Cultural & Lively',
    palette: ['#D97706', '#059669', '#7C3AED', '#FAF8F5'],
    accentNotes: 'Musical motifs, warm tones, compact format',
    image: '/assets/images/hero_wedding_stationery_1790662746929.jpg',
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
    image: '/assets/images/featured_invitation_editorial_1790662767611.jpg',
    likes: 'Bespoke Suite',
  },
  {
    id: 'ig-2',
    caption: 'Clean architectural stationery suite for an intimate Lahore Nikah.',
    image: '/assets/images/card_minimal_elegance_1790662782511.jpg',
    likes: 'Nikah Collection',
  },
  {
    id: 'ig-3',
    caption: 'Handcrafted floral watercolors kissed with warm foil accents.',
    image: '/assets/images/card_floral_romance_1790662796207.jpg',
    likes: 'Floral Series',
  },
  {
    id: 'ig-4',
    caption: 'Traditional royal green and gold Arabesque suite with custom silk tassel.',
    image: '/assets/images/card_traditional_grace_1790662808370.jpg',
    likes: 'Heritage Series',
  },
  {
    id: 'ig-5',
    caption: 'Complete ceremonial multi-card suite with RSVP and presentation box.',
    image: '/assets/images/hero_wedding_stationery_1790662746929.jpg',
    likes: 'Luxury Boxed',
  },
  {
    id: 'ig-6',
    caption: 'Minimal vellum jacket tied with delicate champagne raw silk thread.',
    image: '/assets/images/card_minimal_elegance_1790662782511.jpg',
    likes: 'Studio Details',
  },
];
