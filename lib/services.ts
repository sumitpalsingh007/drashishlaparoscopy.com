// Per-condition service pages — the SEO content layer for individual
// procedures. Each entry becomes a static page at /treatments/<slug>/.
// Keep the content genuinely unique per condition (no thin/templated pages):
// this is what lets each page rank for "<procedure> in Gorakhpur".

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePage {
  slug: string;
  order: number;
  /** Matches conditions[].en in site.ts so homepage cards can deep-link. */
  conditionEn: string;
  conditionHi: string;
  /** The procedure name (used in schema + intros). */
  procedure: string;
  /** Small uppercase hero label. */
  eyebrow: string;
  /** On-page <h1> — the exact keyword target. */
  h1: string;
  /** SEO <title>. */
  title: string;
  metaDescription: string;
  /** Hero sub-line (emotional promise). */
  promise: string;
  /** Hindi hero line. */
  heroHi: string;
  /** Reused image from /public/assets (no new assets needed). */
  image: string;
  imageAlt: string;
  /** "What is …" — one or more paragraphs. */
  whatIs: string[];
  symptomsHeading: string;
  symptoms: string[];
  approachHeading: string;
  approach: string[];
  /** Quick recovery facts. */
  recovery: { label: string; value: string }[];
  faqs: ServiceFaq[];
  /** Slugs of related conditions to cross-link. */
  related: string[];
}

export const services: ServicePage[] = [
  {
    slug: 'laparoscopic-gallbladder-surgery-gorakhpur',
    order: 1,
    conditionEn: 'Gallbladder Stones',
    conditionHi: 'पित्त की थैली की पथरी',
    procedure: 'Laparoscopic Gallbladder Surgery (Cholecystectomy)',
    eyebrow: 'Laparoscopic Cholecystectomy · Gorakhpur',
    h1: 'Gallbladder Stone Surgery in Gorakhpur',
    title: 'Gallbladder Stone Surgery in Gorakhpur | Laparoscopic Cholecystectomy',
    metaDescription:
      'Painless keyhole gallbladder (gallstone) surgery in Gorakhpur by Dr. Ashish Agarwal (MBBS, MS, FMAS). Home usually within 24 hours. Free for eligible patients under Ayushman Bharat. Call +91 98075 60443.',
    promise: 'Keyhole removal of gallstones — most patients go home within 24 hours.',
    heroHi: 'पित्त की पथरी का दूरबीन से ऑपरेशन — छोटा चीरा, जल्दी रिकवरी।',
    image: 'surgery-1',
    imageAlt: 'Laparoscopic gallbladder (gallstone) surgery in Gorakhpur',
    whatIs: [
      'Gallstones are hardened deposits that form inside the gallbladder — a small organ that stores bile beneath the liver. Many people have gallstones without symptoms, but once they begin to block the flow of bile they cause pain, indigestion and, if ignored, infection or jaundice.',
      'When gallstones cause symptoms, the safe and lasting solution is to remove the whole gallbladder with the stones inside it. Dr. Ashish Agarwal performs this as a laparoscopic cholecystectomy — a keyhole operation — which is the modern gold standard worldwide.',
    ],
    symptomsHeading: 'Signs you may need treatment',
    symptoms: [
      'Pain in the upper-right or upper-middle abdomen, often after oily or heavy meals',
      'Pain that spreads to the right shoulder or back',
      'Nausea, vomiting, bloating or repeated indigestion',
      'Fever with chills if the gallbladder becomes infected',
      'Yellowing of the eyes or skin (jaundice) — this needs urgent attention',
    ],
    approachHeading: 'The keyhole approach',
    approach: [
      'The operation is done through 3–4 tiny cuts instead of one large incision. A small camera guides fine instruments to gently separate and remove the entire gallbladder along with its stones — usually in under an hour.',
      'Because the cuts are so small, there is far less pain and bleeding, no big scar, and a much quicker recovery. You can live a completely normal life without a gallbladder — the bile simply flows directly from the liver into the intestine.',
    ],
    recovery: [
      { label: 'Hospital stay', value: 'Day-care / within 24 hrs' },
      { label: 'Back to light routine', value: '3–5 days' },
      { label: 'Incisions', value: '3–4 keyhole cuts' },
    ],
    faqs: [
      { q: 'Can I live a normal life without my gallbladder?', a: 'Yes. The gallbladder only stores bile — it is not essential. After removal, bile flows directly from the liver to the intestine and the vast majority of patients eat and live completely normally.' },
      { q: 'Can medicines dissolve gallstones instead of surgery?', a: 'For stones that are causing symptoms, medicines are unreliable and stones usually return. Removing the gallbladder is the only definitive, one-time treatment. Dr. Ashish will advise what is right for your case.' },
      { q: 'Will I need a special diet after surgery?', a: 'Most people return to a normal diet within a few weeks. It helps to reintroduce very oily and fatty foods gradually. You will get clear, simple guidance before you go home.' },
      { q: 'Is gallbladder surgery free under Ayushman Bharat?', a: 'Eligible patients can have the operation done free of cost under the Ayushman Bharat (PM-JAY) scheme. Call or WhatsApp with your card details to check eligibility.' },
    ],
    related: ['laparoscopic-hernia-surgery-gorakhpur', 'laparoscopic-appendix-surgery-gorakhpur'],
  },
  {
    slug: 'laparoscopic-hernia-surgery-gorakhpur',
    order: 2,
    conditionEn: 'Hernia',
    conditionHi: 'हर्निया',
    procedure: 'Laparoscopic Hernia Repair',
    eyebrow: 'Laparoscopic Hernia Repair · Gorakhpur',
    h1: 'Hernia Surgery in Gorakhpur',
    title: 'Hernia Surgery in Gorakhpur | Laparoscopic Hernia Repair',
    metaDescription:
      'Laparoscopic (keyhole) hernia repair in Gorakhpur by Dr. Ashish Agarwal (MBBS, MS, FMAS). Strong mesh repair through tiny cuts, less pain, low recurrence. Free under Ayushman Bharat for eligible patients. Call +91 98075 60443.',
    promise: 'Strong, lasting mesh repair through tiny cuts — less pain, quick recovery.',
    heroHi: 'हर्निया का दूरबीन से ऑपरेशन — मजबूत मेश रिपेयर, कम दर्द।',
    image: 'surgery-2',
    imageAlt: 'Laparoscopic hernia repair surgery in Gorakhpur',
    whatIs: [
      'A hernia is a bulge that appears when an organ or fatty tissue pushes through a weak spot in the abdominal wall. The most common types are inguinal (groin), umbilical (navel) and incisional (through an old surgical scar).',
      'A hernia will not heal on its own and tends to grow slowly larger over time. Belts and trusses only give temporary support. The definitive treatment is surgery — and Dr. Ashish Agarwal repairs most hernias laparoscopically, reinforcing the weak wall with a soft mesh from the inside.',
    ],
    symptomsHeading: 'Signs you may have a hernia',
    symptoms: [
      'A visible bulge or swelling in the groin, navel or an old scar',
      'A lump that often disappears when you lie down and returns on standing',
      'A dragging ache or discomfort, worse on lifting, coughing or straining',
      'A feeling of heaviness or pressure in the abdomen or groin',
      'Sudden severe pain with a hard, tender lump and vomiting — this is an emergency (possible strangulation)',
    ],
    approachHeading: 'The keyhole approach',
    approach: [
      'Through a few keyhole openings, a fine camera and instruments are used to place a strong mesh that reinforces the weak area from behind the muscle wall. This modern technique holds the repair securely and greatly lowers the chance of the hernia coming back.',
      'Compared with open surgery, keyhole hernia repair usually means less pain after the operation, smaller scars and a faster return to work. When hernias are present on both sides, they can often be repaired in the same sitting.',
    ],
    recovery: [
      { label: 'Hospital stay', value: 'Short — often day-care' },
      { label: 'Back to desk work', value: '~1 week' },
      { label: 'Avoid heavy lifting', value: '4–6 weeks' },
    ],
    faqs: [
      { q: 'Can a hernia be cured without surgery?', a: 'No. A belt or truss can support a hernia temporarily, but only surgery repairs the weak wall permanently. Delaying treatment lets the hernia grow and raises the risk of complications.' },
      { q: 'Will the hernia come back after mesh repair?', a: 'Recurrence is uncommon after a properly done laparoscopic mesh repair. The mesh becomes a permanent, strong reinforcement of the abdominal wall.' },
      { q: 'When is a hernia an emergency?', a: 'If the bulge suddenly becomes hard, very painful and cannot be pushed back — especially with vomiting — the hernia may be trapped or strangulated. Seek surgical care immediately.' },
      { q: 'Is hernia surgery covered under Ayushman Bharat?', a: 'Yes, eligible patients can have hernia surgery done free of cost under Ayushman Bharat (PM-JAY). Call or WhatsApp with your card details to check your eligibility.' },
    ],
    related: ['laparoscopic-gallbladder-surgery-gorakhpur', 'laparoscopic-appendix-surgery-gorakhpur'],
  },
  {
    slug: 'piles-treatment-gorakhpur',
    order: 3,
    conditionEn: 'Piles / Hemorrhoids',
    conditionHi: 'बवासीर',
    procedure: 'Laser & Stapler Piles (Hemorrhoid) Treatment',
    eyebrow: 'Laser & Stapler Treatment · Gorakhpur',
    h1: 'Piles Treatment in Gorakhpur',
    title: 'Piles Treatment in Gorakhpur | Laser Piles Surgery',
    metaDescription:
      'Modern laser & stapler piles (hemorrhoid) treatment in Gorakhpur by Dr. Ashish Agarwal (MBBS, MS, FMAS). Much less pain than cutting methods, often day-care. Free under Ayushman Bharat for eligible patients. Call +91 98075 60443.',
    promise: 'Modern laser & stapler treatment — much less pain, often day-care.',
    heroHi: 'बवासीर का आधुनिक लेज़र इलाज — कम दर्द, जल्दी राहत।',
    image: 'consultation',
    imageAlt: 'Piles (bawaseer) laser treatment consultation in Gorakhpur',
    whatIs: [
      'Piles — also called hemorrhoids or bawaseer — are swollen veins in and around the anus and lower rectum. They are extremely common and often caused by constipation, straining, prolonged sitting or pregnancy. Doctors grade them from 1 to 4 depending on severity.',
      'Many people suffer in silence for years out of embarrassment, but piles are very treatable. Dr. Ashish Agarwal is an experienced proctologist and offers modern laser and stapler treatment that is far more comfortable than the old cutting operations.',
    ],
    symptomsHeading: 'Common symptoms of piles',
    symptoms: [
      'Bright-red bleeding during or after passing stool',
      'A soft lump or swelling felt around the anus',
      'Itching, irritation or a moist feeling around the anus',
      'Pain or discomfort while sitting or passing stool',
      'Mucus discharge or a feeling that the bowel is not fully empty',
    ],
    approachHeading: 'The modern, less-painful approach',
    approach: [
      'Early-grade piles can often settle with the right diet, fibre and medicines. For piles that keep bleeding or have prolapsed, Dr. Ashish uses modern laser and stapler (MIPH) techniques that seal or lift the piles with minimal cutting.',
      'These methods mean much less pain, little bleeding and a faster return to normal life than traditional open surgery — many patients are treated as day-care and back to routine within a few days. Related problems such as anal fissures are treated at the same visit when needed.',
    ],
    recovery: [
      { label: 'Procedure', value: 'Often day-care' },
      { label: 'Back to routine', value: 'A few days' },
      { label: 'Pain', value: 'Far less than cutting surgery' },
    ],
    faqs: [
      { q: 'Is piles surgery very painful?', a: 'Modern laser treatment is far less painful than the traditional cutting operation. Most patients are surprised by how comfortable the recovery is and return to normal activity quickly.' },
      { q: 'Can piles be treated without surgery?', a: 'Early-grade piles often improve with a high-fibre diet, more water, and medicines. Advanced or repeatedly bleeding piles are best treated with a quick laser or stapler procedure. Dr. Ashish will advise the least invasive option for you.' },
      { q: 'Will piles come back after treatment?', a: 'Proper treatment combined with good bowel habits — enough fibre, water and avoiding prolonged straining — keeps recurrence low.' },
      { q: 'Is piles treatment free under Ayushman Bharat?', a: 'Eligible patients can be treated free of cost under Ayushman Bharat (PM-JAY). Call or WhatsApp with your card details to check your eligibility.' },
    ],
    related: ['anal-fistula-surgery-gorakhpur', 'laparoscopic-gallbladder-surgery-gorakhpur'],
  },
  {
    slug: 'anal-fistula-surgery-gorakhpur',
    order: 4,
    conditionEn: 'Anal Fistula',
    conditionHi: 'भगंदर',
    procedure: 'Anal Fistula Surgery',
    eyebrow: 'Proctology · Gorakhpur',
    h1: 'Anal Fistula Surgery in Gorakhpur',
    title: 'Anal Fistula Surgery in Gorakhpur | Fistula (Bhagandar) Treatment',
    metaDescription:
      'Expert anal fistula (bhagandar) surgery in Gorakhpur by Dr. Ashish Agarwal (MBBS, MS, FMAS). Modern, sphincter-preserving technique for faster, cleaner healing. Free under Ayushman Bharat for eligible patients. Call +91 98075 60443.',
    promise: 'Modern fistula surgery that protects the muscle — faster, cleaner healing.',
    heroHi: 'भगंदर का आधुनिक ऑपरेशन — बेहतर एवं जल्दी रिकवरी।',
    image: 'ot-facility',
    imageAlt: 'Anal fistula (bhagandar) surgery facility in Gorakhpur',
    whatIs: [
      'An anal fistula (bhagandar) is a small tunnel that forms between the inside of the anal canal and the skin near the anus. It usually develops after an anal abscess (a collection of pus) that has drained but left a track behind.',
      'A fistula rarely heals with medicines alone and tends to flare up again and again until it is treated surgically. Because the track runs close to the muscles that control motion, it needs an experienced proctologist — Dr. Ashish Agarwal treats fistula with techniques designed to clear the track while protecting these important muscles.',
    ],
    symptomsHeading: 'Signs of an anal fistula',
    symptoms: [
      'A recurring boil or abscess near the anus that keeps coming back',
      'Discharge of pus or blood near the anus (sometimes with a smell)',
      'Pain and swelling that builds up and then eases when it drains',
      'Skin irritation or a persistent moist opening beside the anus',
      'Occasional fever when the track becomes infected',
    ],
    approachHeading: 'The sphincter-preserving approach',
    approach: [
      'The key to fistula surgery is clearing the entire track so it heals fully, while carefully protecting the anal sphincter muscles that control continence. Dr. Ashish selects the technique to match the type and depth of the fistula for the best chance of a one-time cure.',
      'Modern methods aim for faster, cleaner healing with less discomfort. Most patients have a short stay or day-care procedure, followed by simple dressing care and follow-up until the area has healed completely.',
    ],
    recovery: [
      { label: 'Hospital stay', value: 'Short / day-care' },
      { label: 'Healing', value: 'A few weeks, with follow-up' },
      { label: 'Focus', value: 'Muscle (continence) protected' },
    ],
    faqs: [
      { q: 'Can a fistula heal without surgery?', a: 'Usually not. Medicines may calm an infection for a while, but a true fistula track keeps recurring until it is properly treated with surgery.' },
      { q: 'Will fistula surgery affect my motion control?', a: 'The technique is chosen specifically to protect the sphincter muscles that control continence. Treating a fistula with an experienced proctologist is the safest way to protect this function.' },
      { q: 'Does a fistula come back after surgery?', a: 'A correctly and completely treated fistula has a low recurrence rate. Following the post-operative dressing and hygiene advice is important for full healing.' },
      { q: 'Is fistula surgery free under Ayushman Bharat?', a: 'Eligible patients can have fistula surgery done free of cost under Ayushman Bharat (PM-JAY). Call or WhatsApp with your card details to check your eligibility.' },
    ],
    related: ['piles-treatment-gorakhpur', 'laparoscopic-appendix-surgery-gorakhpur'],
  },
  {
    slug: 'laparoscopic-appendix-surgery-gorakhpur',
    order: 5,
    conditionEn: 'Appendix',
    conditionHi: 'अपेंडिक्स',
    procedure: 'Laparoscopic Appendix Surgery (Appendectomy)',
    eyebrow: 'Laparoscopic Appendectomy · Gorakhpur',
    h1: 'Appendix Surgery in Gorakhpur',
    title: 'Appendix Surgery in Gorakhpur | Laparoscopic Appendectomy',
    metaDescription:
      'Emergency & planned laparoscopic appendix surgery in Gorakhpur by Dr. Ashish Agarwal (MBBS, MS, FMAS). Keyhole appendectomy — less pain, quick recovery. Free under Ayushman Bharat for eligible patients. Call +91 98075 60443.',
    promise: 'Keyhole appendix removal for emergency & planned cases — quick recovery.',
    heroHi: 'अपेंडिक्स का दूरबीन से ऑपरेशन — कम दर्द, जल्दी रिकवरी।',
    image: 'ot-wide',
    imageAlt: 'Laparoscopic appendix (appendectomy) surgery theatre in Gorakhpur',
    whatIs: [
      'Appendicitis is a sudden inflammation of the appendix — a small pouch attached to the large intestine. It is one of the most common surgical emergencies and, once it starts, usually needs prompt removal of the appendix before it bursts.',
      'Dr. Ashish Agarwal performs laparoscopic appendectomy — keyhole removal of the appendix — for both emergency and planned cases. It is the modern alternative to open surgery and gets most patients back on their feet quickly.',
    ],
    symptomsHeading: 'Warning signs of appendicitis',
    symptoms: [
      'Pain that often starts near the navel and then shifts to the lower-right abdomen',
      'Pain that worsens with movement, coughing or pressing on the area',
      'Loss of appetite, nausea or vomiting',
      'Low-grade fever',
      'Rapidly worsening pain — do not wait, seek care immediately',
    ],
    approachHeading: 'The keyhole approach',
    approach: [
      'Through three small cuts, a camera and instruments are used to locate and remove the inflamed appendix safely. Keyhole surgery means less pain, a lower chance of wound infection and smaller scars than the traditional open operation.',
      'Because appendicitis can worsen quickly, prompt treatment matters. Dr. Ashish is available for emergency appendix surgery as well as planned removal in less urgent cases.',
    ],
    recovery: [
      { label: 'Hospital stay', value: 'Usually 1–2 days' },
      { label: 'Back to routine', value: '~1 week' },
      { label: 'Incisions', value: '3 keyhole cuts' },
    ],
    faqs: [
      { q: 'Is appendix surgery always an emergency?', a: 'Most cases of acute appendicitis need urgent surgery to prevent the appendix from bursting. Some mild or early cases can be planned — Dr. Ashish will advise based on your examination.' },
      { q: 'Can antibiotics alone cure appendicitis?', a: 'Antibiotics may settle very early or mild inflammation temporarily, but symptoms often return. Removing the appendix is the definitive treatment and prevents a dangerous rupture.' },
      { q: 'How is keyhole appendix surgery better than open surgery?', a: 'Laparoscopic appendectomy means smaller cuts, less pain, a lower risk of wound infection and a faster recovery compared with the traditional open operation.' },
      { q: 'Is appendix surgery free under Ayushman Bharat?', a: 'Eligible patients can have appendix surgery done free of cost under Ayushman Bharat (PM-JAY). Call or WhatsApp with your card details to check your eligibility.' },
    ],
    related: ['laparoscopic-gallbladder-surgery-gorakhpur', 'laparoscopic-hernia-surgery-gorakhpur'],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);

/** Map a homepage condition (conditions[].en) to its service-page slug. */
export const conditionSlugByEn: Record<string, string> = services.reduce(
  (acc, s) => {
    acc[s.conditionEn] = s.slug;
    return acc;
  },
  {} as Record<string, string>,
);
