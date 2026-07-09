// Central source of truth for business data, links and page content.
// Edit values here to update them everywhere on the site.

export const SITE_URL = 'https://drashishlaparoscopy.com';

export const DOCTOR_NAME = 'Dr. Ashish Agarwal';
export const DOCTOR_TAGLINE = 'Advanced Laparoscopic Surgeon & Proctologist';
export const REG_NO = 'UP MCI Reg. 64333';

// --- Contact / conversion links (the #1 goal is calls + WhatsApp) ---
export const PHONE_MAIN = '+919807560443'; // primary (also WhatsApp)
export const PHONE_MAIN_DISPLAY = '+91 98075 60443';
export const PHONE_ALT = '+917985032860';
export const PHONE_ALT_DISPLAY = '+91 79850 32860';
export const TEL_MAIN = `tel:${PHONE_MAIN}`;
export const TEL_ALT = `tel:${PHONE_ALT}`;
export const WHATSAPP_URL = 'https://wa.me/919807560443';
export const INSTAGRAM_URL = 'https://www.instagram.com/dr_ashish_agarwal_';
export const INSTAGRAM_HANDLE = '@dr_ashish_agarwal_';
export const FACEBOOK_URL = 'https://www.facebook.com/share/18RpZt1at8/';
export const FACEBOOK_LABEL = 'Dr. Ashish Agarwal';

export const ADDRESS_LINE = 'Daudpur, Near Bela Public School, Gorakhpur, Uttar Pradesh';
export const ADDRESS_SHORT = 'Daudpur, Near Bela Public School, Gorakhpur, UP';
export const OPD_TIMING = '11:00 AM – 2:00 PM';
export const OPD_LOCATION = 'Pulse Hospital, Chhatrasal Chowk';
export const ON_CALL = 'On-call service round the clock';

export const MAPS_EMBED =
  'https://maps.google.com/maps?q=Bela%20Public%20School%20Daudpur%20Gorakhpur&z=14&output=embed';
export const MAPS_DIRECTIONS =
  'https://www.google.com/maps/dir/?api=1&destination=Bela+Public+School+Daudpur+Gorakhpur';

// --- Pulse Hospital: additional location where Dr. Ashish operates ---
export const PULSE_NAME = 'Pulse Hospital';
export const PULSE_ADDRESS = 'Chatra Sangh Chauraha (Chhatrasal Chowk), 34 Kasya Road, Gorakhpur, Uttar Pradesh 273001';
export const PULSE_ADDRESS_SHORT = 'Chhatrasal Chowk, Kasya Road, Gorakhpur';
export const PULSE_MAPS_EMBED =
  'https://maps.google.com/maps?q=Pulse%20Hospital%20Chatra%20Sangh%20Chauraha%20Kasya%20Road%20Gorakhpur&z=16&output=embed';
export const PULSE_MAPS_DIRECTIONS =
  'https://www.google.com/maps/dir/?api=1&destination=Pulse%20Hospital%20Chatra%20Sangh%20Chauraha%20Kasya%20Road%20Gorakhpur';
// Opens the Google listing where patients can read & leave reviews.
export const PULSE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Pulse%20Hospital%20Chatra%20Sangh%20Chauraha%20Kasya%20Road%20Gorakhpur';

// --- Content data ---
export const conditions = [
  { en: 'Gallbladder Stones', hi: 'पित्त की थैली की पथरी', desc: 'Keyhole removal of gallstones — usually home within 24 hours.' },
  { en: 'Hernia', hi: 'हर्निया', desc: 'Mesh repair through tiny cuts with strong, lasting results.' },
  { en: 'Appendix', hi: 'अपेंडिक्स', desc: 'Emergency & planned laparoscopic appendix removal.' },
  { en: 'Piles / Hemorrhoids', hi: 'बवासीर', desc: 'Modern laser & stapler treatment for painful piles.' },
  { en: 'Anal Fistula', hi: 'भगंदर', desc: 'Advanced fistula surgery with faster, cleaner healing.' },
  { en: 'Hydrocele', hi: 'हाइड्रोसील', desc: 'Day-care hydrocele surgery with minimal downtime.' },
  { en: 'Kidney & Urinary Stones', hi: 'गुर्दे / मूत्र की पथरी', desc: 'Stone removal and complete urinary care.' },
  { en: 'Prostate', hi: 'प्रोस्टेट', desc: 'Treatment for enlarged prostate and related problems.' },
  { en: 'Cysts & Lumps', hi: 'सिस्ट एवं गाँठ', desc: 'Safe removal of cysts and soft-tissue lumps.' },
  { en: 'Uterine Lumps', hi: 'बच्चेदानी की गाँठ', desc: 'Surgical care for uterine lumps and fibroids.' },
  { en: 'Abdominal Problems', hi: 'पेट / उदर रोग', desc: 'Diagnosis and surgery for a range of abdominal issues.' },
  { en: 'Anal & Breast Care', hi: 'गुदा एवं स्तन रोग', desc: 'Specialist treatment for anal and breast conditions.' },
];

export const benefits = [
  { en: 'Tiny cuts, no big scar', hi: 'बहुत छोटा चीरा', desc: 'Surgery through 2–3 keyhole openings instead of one large incision.' },
  { en: 'Much less pain', hi: 'बहुत कम दर्द', desc: 'Smaller wounds mean far less pain after the operation.' },
  { en: 'Faster recovery', hi: 'जल्दी रिकवरी', desc: 'Most patients are back on their feet and home sooner.' },
  { en: 'Less bleeding & infection', hi: 'कम रक्तस्राव', desc: 'Minimally invasive technique lowers bleeding and infection risk.' },
  { en: 'Short hospital stay', hi: 'कम अस्पताल में रुकना', desc: 'Many procedures are day-care or need only a short stay.' },
  { en: 'Neater healing', hi: 'बेहतर परिणाम', desc: 'Small keyhole scars heal better and look far cleaner.' },
];

export const processSteps = [
  { n: 1, en: 'Call or WhatsApp', desc: 'Tell us your problem and book a convenient time.', hi: 'फ़ोन या व्हाट्सएप करें' },
  { n: 2, en: 'Examination & diagnosis', desc: 'A proper check-up and clear, honest advice.', hi: 'जाँच एवं सही सलाह' },
  { n: 3, en: 'Keyhole surgery', desc: 'Safe, modern, minimally-invasive operation.', hi: 'दूरबीन से ऑपरेशन' },
  { n: 4, en: 'Quick recovery', desc: 'Go home soon, with caring follow-up.', hi: 'जल्दी रिकवरी एवं देखभाल' },
];

export const trustCards = [
  { kind: 'rupee', title: 'Free under Ayushman', desc: 'Eligible patients get their full operation done free of cost under Ayushman Bharat (PM-JAY).' },
  { kind: 'star', title: 'Govt-college trained', desc: 'Educated at KGMU Lucknow & BRD Gorakhpur — a strong, trusted surgical foundation.' },
  { kind: 'check', title: 'Advanced keyhole expertise', desc: 'FMAS-qualified in minimal-access surgery — smaller cuts, less pain, faster recovery.' },
  { kind: 'pin', title: 'Trusted & local', desc: 'Caring, unhurried treatment right here in Daudpur, Gorakhpur — close to home.' },
];

export const faqs = [
  { q: 'Is keyhole (laparoscopic) surgery safe?', a: 'Yes. Laparoscopic or “keyhole” surgery is the modern gold standard for many operations. Using a tiny camera and fine instruments, Dr. Ashish operates through very small cuts — safe, precise and well-proven.' },
  { q: 'Will the operation be very painful?', a: 'Because the cuts are so small, keyhole surgery causes much less pain than traditional open surgery. Most patients are surprised at how comfortable their recovery is.' },
  { q: 'How soon can I go home and return to work?', a: 'For many procedures — like gallbladder or appendix — patients go home within 24 hours and return to a light routine within a few days. Your exact recovery is explained before surgery.' },
  { q: 'Can I get free surgery with an Ayushman card?', a: 'Yes. Dr. Ashish provides free operations for eligible patients under the Ayushman Bharat (PM-JAY) scheme. Call or WhatsApp with your Ayushman card details to check your eligibility.' },
  { q: 'Which problems does Dr. Ashish treat?', a: 'Gallstones, hernia, appendix, piles, fistula, hydrocele, kidney & urinary stones, prostate, cysts, uterine lumps and other abdominal, anal and breast conditions.' },
  { q: 'How do I book a consultation?', a: 'Simply call or WhatsApp directly — there is no complicated form. Describe your problem and book a convenient time to visit the clinic in Daudpur, Gorakhpur.' },
];

// NOTE: These 3 testimonials are realistic but fictional SAMPLES shipped with the
// design. Replace with real, consented patient reviews before/soon after launch.
export const testimonials = [
  { quote: 'I was terrified of surgery, but my gallbladder operation was done through tiny cuts and I was home the very next day. Almost no pain.', name: 'Ramesh Verma', place: 'Deoria', proc: 'Gallbladder Surgery', initial: 'R' },
  { quote: 'I suffered with piles for years and kept avoiding treatment. Dr. Ashish treated me with great care and the relief was immediate.', name: 'Sunita Devi', place: 'Gorakhpur', proc: 'Piles Treatment', initial: 'S' },
  { quote: 'My father’s hernia operation was done free under the Ayushman card. The whole family is grateful for the support and treatment.', name: 'Mohan Yadav', place: 'Kushinagar', proc: 'Hernia Surgery', initial: 'M' },
];

// Instagram tile grid (curated clinic images that link to the IG profile).
export const igTiles = [
  { src: 'surgery-1', alt: 'Laparoscopic surgery' },
  { src: 'ot-facility', alt: 'Modern operation theatre' },
  { src: 'surgery-2', alt: 'Keyhole technique' },
  { src: 'dr-ashish-portrait', alt: 'Dr. Ashish Agarwal' },
  { src: 'ot-wide', alt: 'Surgical suite' },
  { src: 'consultation', alt: 'At the clinic' },
];

// Toggleable sections (kept ON, matching the design defaults).
export const SHOW_AYUSHMAN_BAND = true;
export const SHOW_REVIEWS = true;
