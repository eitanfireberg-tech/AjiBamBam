export type Lang = "en" | "he";

export type Copy = Record<Lang, string>;

export type Availability = "available" | "studio";

export type Work = {
  slug: string;
  index: string;
  title: Copy;
  size: string;
  year?: string;
  medium: Copy;
  details: Copy;
  availability: Availability;
  instagram: string;
  image: string;
};

export type Reel = {
  shortcode: string;
  poster: string;
  title: Copy;
  caption: Copy;
};

export const INSTAGRAM_HANDLE = "@aji.bam.bam0";
export const INSTAGRAM_URL = "https://www.instagram.com/aji.bam.bam0/";
export const INSTAGRAM_EMBED = "https://www.instagram.com/aji.bam.bam0/embed/";

export function reelUrl(shortcode: string) {
  return `https://www.instagram.com/reel/${shortcode}/`;
}

export const brand = {
  name: { en: "AJI BAM BAM", he: "אג׳י באם באם" },
  stackedHe: ["אג׳י", "באם", "באם"],
  legal: { en: "Maayan Fireberg", he: "מעין פיירברג" },
};

export const nav = [
  { id: "reels", href: "/#reels", label: { en: "Reels", he: "רילס" } },
  { id: "works", href: "/#works", label: { en: "Works", he: "עבודות" } },
  { id: "about", href: "/#about", label: { en: "About", he: "אודות" } },
  { id: "inquiry", href: "/#inquiry", label: { en: "Inquiry", he: "פנייה" } },
];

export const heroCopy = {
  kicker: { en: "Maayan Fireberg", he: "מעין פיירברג" },
  line1: { en: "There isn’t a word for it.", he: "אין לזה מילה בעברית." },
  line2: { en: "He makes art. He sells it.", he: "הוא יוצר ומוכר אומנות." },
  scroll: { en: "Enter the cinema", he: "כניסה לקולנוע" },
};

export const marqueeItems: Copy[] = [
  { en: "There isn’t a word for it", he: "אין לזה מילה בעברית" },
  { en: "He makes art. He sells it.", he: "הוא יוצר ומוכר אומנות" },
  { en: "Aji Bam Bam", he: "אג׳י באם באם" },
  { en: "From the Instagram studio", he: "מהסטודיו באינסטגרם" },
];

export const uiCopy = {
  menu: { en: "Menu", he: "תפריט" },
  stills: { en: "Stills", he: "סטילס" },
  works: { en: "Works", he: "עבודות" },
  swipe: { en: "Swipe the works", he: "החליקו בין העבודות" },
  inventory: { en: "Inventory", he: "מלאי" },
  allWorks: { en: "All works", he: "כל העבודות" },
  onInstagram: { en: "On Instagram", he: "באינסטגרם" },
  viewWork: { en: "View work", he: "לעבודה" },
  back: { en: "All works", he: "כל העבודות" },
  inquireThis: { en: "Inquire about this work", he: "פנייה על העבודה" },
};

export const availabilityCopy: Record<Availability, Copy> = {
  available: { en: "Available", he: "זמין לרכישה" },
  studio: { en: "In studio", he: "בסטודיו" },
};

export const works: Work[] = [
  {
    slug: "untitled",
    index: "01",
    title: { en: "Untitled", he: "ללא כותרת" },
    size: "—",
    year: "2026",
    medium: { en: "Mixed media", he: "מדיה מעורבת" },
    details: {
      en: "From a studio carousel on Instagram. Size not listed.",
      he: "מקארוסלת הסטודיו באינסטגרם. מידה לא צוינה.",
    },
    availability: "studio",
    instagram: "https://www.instagram.com/p/DakruY1gN5k/",
    image: "/works/untitled.jpg",
  },
  {
    slug: "untitled-ii",
    index: "02",
    title: { en: "Untitled II", he: "ללא כותרת ב׳" },
    size: "—",
    year: "2026",
    medium: { en: "Mixed media", he: "מדיה מעורבת" },
    details: {
      en: "Second still from the same studio carousel. Size not listed.",
      he: "סטילס שני מאותה קארוסלה. מידה לא צוינה.",
    },
    availability: "studio",
    instagram: "https://www.instagram.com/p/DakruY1gN5k/",
    image: "/works/untitled-ii.jpg",
  },
  {
    slug: "from-the-heart",
    index: "03",
    title: { en: "From the Heart", he: "יצירה שיצאה מהלב" },
    size: "100 × 70 cm",
    year: "2026",
    medium: { en: "Painting", he: "ציור" },
    details: {
      en: "A work that came from the heart. 100 × 70 cm. Available for purchase.",
      he: "יצירה שיצאה מהלב. 100×70 ס״מ. זמין לרכישה.",
    },
    availability: "available",
    instagram: "https://www.instagram.com/p/DcI8w0KnPDr/",
    image: "/works/from-the-heart.jpg",
  },
  {
    slug: "studio-canvas",
    index: "04",
    title: { en: "Studio Canvas", he: "קנבס מהסטודיו" },
    size: "—",
    year: "2026",
    medium: { en: "Mixed media", he: "מדיה מעורבת" },
    details: {
      en: "Downloaded from the Instagram studio feed. Size not listed.",
      he: "הורד מפיד הסטודיו באינסטגרם. מידה לא צוינה.",
    },
    availability: "studio",
    instagram: INSTAGRAM_URL,
    image: "/works/studio-canvas.jpg",
  },
];

export function workBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}

export const reels: Reel[] = [
  {
    shortcode: "DcJU1nIMZHo",
    poster: "/ig/reel-afternoon.jpg",
    title: {
      en: "A standard afternoon in an artist’s life",
      he: "צהריים סטנדרטיים בחייו של אמן",
    },
    caption: {
      en: "Reel from @aji.bam.bam0",
      he: "ריל מ־@aji.bam.bam0",
    },
  },
  {
    shortcode: "DbYqDvyM7Se",
    poster: "/ig/reel-open-mind.jpg",
    title: {
      en: "Have a mind that is open to EVERYTHING",
      he: "תודעה פתוחה להכל",
    },
    caption: {
      en: "Reel from @aji.bam.bam0",
      he: "ריל מ־@aji.bam.bam0",
    },
  },
  {
    shortcode: "DbBkdEWsuxJ",
    poster: "/ig/reel-israeli-art.jpg",
    title: {
      en: "Israeli art",
      he: "אומנות ישראלית",
    },
    caption: {
      en: "Reel from @aji.bam.bam0",
      he: "ריל מ־@aji.bam.bam0",
    },
  },
  {
    shortcode: "Dam3nKzMaqZ",
    poster: "/ig/reel-exhibition.jpg",
    title: {
      en: "The exhibition of Aji Bam Bam",
      he: "התערוכה של אג׳י באם באם",
    },
    caption: {
      en: "Exhibition reel from @aji.bam.bam0",
      he: "ריל מהתערוכה מ־@aji.bam.bam0",
    },
  },
];

export const reelsCopy = {
  kicker: { en: "Cinema", he: "קולנוע" },
  title: { en: "The studio, on film.", he: "הסטודיו, על פילם." },
  body: {
    en: "His Instagram Reels. Swipe the program, open a reel, watch the studio.",
    he: "הרילס מאינסטגרם. החליקו בתוכנייה, פתחו ריל, צפו בסטודיו.",
  },
  program: { en: "Program", he: "תוכנייה" },
  play: { en: "Play reel", he: "נגן ריל" },
  playing: { en: "Now screening", he: "מוקרן עכשיו" },
  openIg: { en: "Open in Instagram", he: "פתח באינסטגרם" },
  close: { en: "Close", he: "סגור" },
  swipe: { en: "Swipe the program", he: "החליקו בתוכנייה" },
};

export const aboutCopy = {
  kicker: { en: "Credits", he: "קרדיטים" },
  title: { en: "Maayan Fireberg", he: "מעין פיירברג" },
  aka: { en: "Aji Bam Bam", he: "אג׳י באם באם" },
  statement: {
    en: "There isn’t a word for it. He paints. He films the studio. He sells the work.",
    he: "אין לזה מילה. הוא מצייר. הוא מצלם את הסטודיו. הוא מוכר את העבודה.",
  },
  bio: {
    en: "Young Israeli painter. Instagram is the studio window. Every still and every reel on this site is from @aji.bam.bam0 — nothing invented.",
    he: "צייר ישראלי צעיר. אינסטגרם הוא חלון הסטודיו. כל סטילס וכל ריל באתר מגיעים מ־@aji.bam.bam0 — בלי המצאות.",
  },
};

export const inquiryCopy = {
  kicker: { en: "Inquiry", he: "פנייה" },
  title: { en: "For the work.", he: "לעבודה." },
  inquire: { en: "Inquire", he: "פנייה" },
  contactTbd: {
    en: "Contact TBD — placeholder",
    he: "יצירת קשר תיקבע — זמני",
  },
  lead: {
    en: "Instagram is the studio line until a dedicated address is set. Write here, copy the note, and send it there.",
    he: "אינסטגרם הוא קו הסטודיו עד שתהיה כתובת. כתבו כאן, העתיקו, ושלחו לשם.",
  },
  name: { en: "Name", he: "שם" },
  email: { en: "Email", he: "דוא״ל" },
  work: { en: "Work", he: "עבודה" },
  workAny: { en: "A work — or none yet", he: "עבודה — או עדיין לא" },
  message: { en: "Message", he: "הודעה" },
  messagePh: {
    en: "Which work, and a few words.",
    he: "איזו עבודה, וכמה מילים.",
  },
  submit: { en: "Copy note & open Instagram", he: "העתק הודעה ופתח אינסטגרם" },
  sent: { en: "Copied — send on Instagram", he: "הועתק — שלחו באינסטגרם" },
};
