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
  subCategory?: 'Minimal' | 'Floral' | 'Traditional' | 'Luxury' | 'Modern' | 'Velvet' | 'Keepsake';
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
    coverImage: '/src/assets/images/featured_invitation_editorial_1790662767611.jpg',
    altText: 'Elegant wedding invitation cards collection by Dream Invites',
    ctaText: 'EXPLORE WEDDING CARDS',
    productCountDescription: '8 Bespoke Suites',
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
  // --- WEDDING CARDS ---
  {
    id: 'royal-floral',
    slug: 'royal-floral',
    name: 'Royal Floral',
    category: 'Wedding Cards',
    subCategory: 'Floral',
    tagline: 'An elegant invitation design created for timeless wedding celebrations',
    description: 'An elegant wedding invitation design with detailed floral styling, soft watercolor hues, and hand-pressed gold calligraphy designed to set a romantic tone.',
    images: [
      '/src/assets/images/card_floral_romance_1790662796207.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/src/assets/images/featured_invitation_editorial_1790662767611.jpg',
      '/src/assets/images/hero_wedding_stationery_1790662746929.jpg',
    ],
    details: {
      style: 'Romantic Botanical Watercolor',
      customization: 'Available (Couple Names, Urdu/English Verses, Ceremony Details)',
      finishing: 'Fine Matte Art Print + Hot Gold Accents',
      paper: 'Fine Art Velvet Finish 450gsm',
      dimensions: '5" × 7" with Matching Lined Envelope',
      occasion: 'Mehndi, Nikah & Reception',
    },
    features: ['Watercolor Botanicals', 'Warm Gold Lettering', 'Floral Lined Envelope', 'Custom Botanical Seal'],
    altText: 'Royal Floral wedding invitation card with watercolor flowers by Dream Invites',
  },
  {
    id: 'the-classic',
    slug: 'the-classic',
    name: 'The Classic',
    category: 'Wedding Cards',
    subCategory: 'Luxury',
    tagline: 'Refined craftsmanship framed in timeless distinction',
    description: 'Archival pearl cardstock framed in debossed blind bevels, elevated with hand-pressed gold foil and an artisanal monogram wax seal.',
    images: [
      '/src/assets/images/featured_invitation_editorial_1790662767611.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/src/assets/images/card_minimal_elegance_1790662782511.jpg',
      '/src/assets/images/hero_wedding_stationery_1790662746929.jpg',
    ],
    details: {
      style: 'Editorial Monogram Elegance',
      customization: 'Available (Custom Wax Monogram, Foil Color, Paper Tones)',
      finishing: 'Foil Stamped & Blind Debossed Bevels',
      paper: 'Archival 600gsm Italian Cotton',
      dimensions: '5" × 7" with Euro-flap Envelope',
      occasion: 'Nikah, Baraat & Walima',
    },
    features: ['Heavyweight 600gsm Cotton', 'Hand-Pressed Gold Foil', 'Debossed Blind Bevel', 'Monogram Wax Seal'],
    altText: 'The Classic luxury wedding card by Dream Invites with gold foil and wax seal',
  },
  {
    id: 'timeless-elegance',
    slug: 'timeless-elegance',
    name: 'Timeless Elegance',
    category: 'Wedding Cards',
    subCategory: 'Minimal',
    tagline: 'Quiet poise and tactile luxury for intimate ceremonies',
    description: 'Subtle architectural serif typography on warm ivory linen stock, paired with a translucent vellum wrap and delicate champagne raw silk ribbon.',
    images: [
      '/src/assets/images/card_minimal_elegance_1790662782511.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/src/assets/images/featured_invitation_editorial_1790662767611.jpg',
    ],
    details: {
      style: 'Minimal Architectural Serif',
      customization: 'Available (Ribbon Colors, Vellum Styling, Monogram)',
      finishing: 'Blind Letterpress & Deckle Edge',
      paper: 'Textured Warm Ivory Cardstock',
      dimensions: '5.25" × 7.25" Booklet',
    },
    features: ['Textured Archival Linen', 'Translucent Vellum Wrap', 'Hand-Torn Deckled Edges', 'Raw Silk Ribbon'],
    altText: 'Timeless Elegance minimal wedding invitation by Dream Invites on warm ivory cardstock',
  },
  {
    id: 'traditional-grace',
    slug: 'traditional-grace',
    name: 'Traditional Grace',
    category: 'Wedding Cards',
    subCategory: 'Traditional',
    tagline: 'Subcontinental royal heritage reimagined for today',
    description: 'Regal emerald and gold Arabesque filigree inspired by subcontinental royal heritage, with exquisite bilingual calligraphy and silk tassel detail.',
    images: [
      '/src/assets/images/card_traditional_grace_1790662808370.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/src/assets/images/bidbox_royal_emerald_1790663691007.jpg',
      '/src/assets/images/hero_wedding_stationery_1790662746929.jpg',
    ],
    details: {
      style: 'Royal Subcontinental Heritage',
      customization: 'Available (Bilingual Urdu Calligraphy, Archway Colors)',
      finishing: 'Multi-Level Embossed Gold Foil',
      paper: 'Royal Emerald & Ivory Board',
      dimensions: '6" × 8" Ceremonial Gatefold',
      occasion: 'Baraat & Grand Nikah',
    },
    features: ['Heritage Arch Filigree', 'Intricate Hot Gold Foil', 'Bilingual Calligraphy Option', 'Handmade Silk Tassel'],
    altText: 'Traditional Grace Pakistani luxury wedding card by Dream Invites',
  },
  {
    id: 'royal-celebration',
    slug: 'royal-celebration',
    name: 'Royal Celebration',
    category: 'Wedding Cards',
    subCategory: 'Luxury',
    tagline: 'A grand announcement worthy of an unforgettable day',
    description: 'A multi-piece ceremonial invitation suite including RSVP, insert cards, and custom debossed presentation folio bound in satin texture.',
    images: [
      '/src/assets/images/hero_wedding_stationery_1790662746929.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
      '/src/assets/images/featured_invitation_editorial_1790662767611.jpg',
      '/src/assets/images/card_traditional_grace_1790662808370.jpg',
      '/src/assets/images/bidbox_ivory_gold_1790663711646.jpg',
    ],
    details: {
      style: 'Grand Multi-Card Ceremonial Folio',
      customization: 'Available (Multi-Event Inserts, Edge Gilding, Wax Monogram)',
      finishing: 'Gold Edge Gilding & Debossing',
      paper: 'Double-Thick Cotton Board & Satin Folio',
      dimensions: '6" × 9" Presentation Boxed Suite',
      includes: 'Main Ceremony Card, RSVP Card, Mehndi Insert, Presentation Folio',
    },
    features: ['Complete Multi-Card Suite', 'Custom Hardbound Folio', 'Bespoke Wax Monogram', 'Gold Gilded Edges'],
    altText: 'Royal Celebration bespoke wedding card suite by Dream Invites',
  },
  {
    id: 'modern-minimal',
    slug: 'modern-minimal',
    name: 'Modern Minimal',
    category: 'Wedding Cards',
    subCategory: 'Modern',
    tagline: 'Pure focus on breathing room, typography, and paper grain',
    description: 'Crisp editorial layout balancing generous whitespace, contemporary serif type, and tactile cotton cardstock that feels wonderful in the hand.',
    images: [
      '/src/assets/images/card_minimal_elegance_1790662782511.jpg',
      '/src/assets/images/featured_invitation_editorial_1790662767611.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
    ],
    details: {
      style: 'Editorial Modernist',
      customization: 'Available (Grid Variations, Monogram Initials)',
      finishing: 'Letterpress & Precision Die-Cut',
      paper: 'Pure Cotton Fiber 500gsm',
      dimensions: '5" × 7" Single Card & RSVP',
    },
    features: ['Editorial Layout Grid', 'Tactile Cotton Grain', 'Blind Embossed Border', 'Clean Typographic Rhythm'],
    altText: 'Modern Minimal clean wedding stationery card by Dream Invites',
  },
  {
    id: 'contemporary-love',
    slug: 'contemporary-love',
    name: 'Contemporary Love',
    category: 'Wedding Cards',
    subCategory: 'Modern',
    tagline: 'Understated tenderness with modern romantic styling',
    description: 'Gentle muted tones, blind letterpress, and soft-touch velvet finish created for couples who appreciate subtle, refined expressions of love.',
    images: [
      '/src/assets/images/card_floral_romance_1790662796207.jpg',
      '/src/assets/images/card_minimal_elegance_1790662782511.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
    ],
    details: {
      style: 'Soft-Touch Romantic',
      customization: 'Available (Color Palette, Envelope Liners)',
      finishing: 'Blind Deboss & Spot Gloss',
      paper: 'Soft-Touch Matte Card 400gsm',
      dimensions: '5.5" × 7.5" Envelope Pocket',
    },
    features: ['Soft-Touch Velvet Feel', 'Debossed Monogram Crest', 'Vellum Pocket Envelope', 'Silk Thread Binding'],
    altText: 'Contemporary Love modern wedding card by Dream Invites',
  },
  {
    id: 'simply-yours',
    slug: 'simply-yours',
    name: 'Simply Yours',
    category: 'Wedding Cards',
    subCategory: 'Minimal',
    tagline: 'Clean lines celebrating your names and shared journey',
    description: 'Pure understated charm celebrating clean lines, bespoke monograms, and timeless unhurried design crafted on warm sand cardstock.',
    images: [
      '/src/assets/images/featured_invitation_editorial_1790662767611.jpg',
      '/src/assets/images/card_minimal_elegance_1790662782511.jpg',
      '/src/assets/images/stationery_detail_wax_seal_1790663743925.jpg',
    ],
    details: {
      style: 'Minimal Organic',
      customization: 'Available (Custom Monogram, Cardstock Color)',
      finishing: 'Charcoal Letterpress Print',
      paper: 'FSC Certified Sand Cardstock 450gsm',
      dimensions: '5" × 7" Single Sheet with Envelope',
    },
    features: ['Warm Sand Tone Paper', 'Custom Couple Monogram', 'Minimal Euro Flap', 'Delicate Wax Droplet'],
    altText: 'Simply Yours elegant minimal wedding card by Dream Invites',
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
