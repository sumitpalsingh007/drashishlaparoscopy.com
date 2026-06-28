import type { Metadata, Viewport } from 'next';
import { Spectral, Mukta } from 'next/font/google';
import './globals.css';
import {
  SITE_URL, DOCTOR_NAME, ADDRESS_LINE, PHONE_MAIN_DISPLAY, PHONE_MAIN, PHONE_ALT,
  INSTAGRAM_URL, OPD_TIMING, conditions,
} from '@/lib/site';

// Self-hosted Google Fonts (no render-blocking external request).
// Spectral = serif headings; Mukta = body + Devanagari (Hindi).
const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-spectral',
  display: 'swap',
});
const mukta = Mukta({
  subsets: ['latin', 'devanagari'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mukta',
  display: 'swap',
});

// Approximate clinic coordinates (Daudpur, Gorakhpur). TODO: replace with the
// exact lat/long from Google Maps for best local-SEO accuracy.
const GEO = { latitude: 26.7606, longitude: 83.3732 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Dr. Ashish Agarwal — Laparoscopic Surgeon in Gorakhpur | Piles, Hernia & Gallstone Surgery',
    template: '%s | Dr. Ashish Agarwal',
  },
  description:
    'Dr. Ashish Agarwal (MBBS, MS, FMAS) is an advanced laparoscopic (keyhole) surgeon & proctologist in Gorakhpur. Painless surgery for gallstones, hernia, piles, fistula, appendix & more — free for eligible patients under Ayushman Bharat. Call +91 98075 60443.',
  keywords: [
    'laparoscopic surgeon Gorakhpur', 'keyhole surgery Gorakhpur', 'piles operation Gorakhpur',
    'hernia surgery Gorakhpur', 'gallstone operation Gorakhpur', 'fistula treatment Gorakhpur',
    'appendix surgery Gorakhpur', 'proctologist Gorakhpur', 'best surgeon Gorakhpur',
    'Ayushman Bharat surgery Gorakhpur', 'Dr. Ashish Agarwal',
    'दूरबीन सर्जरी गोरखपुर', 'बवासीर का ऑपरेशन गोरखपुर', 'हर्निया ऑपरेशन गोरखपुर', 'पित्त की पथरी का ऑपरेशन',
  ],
  applicationName: DOCTOR_NAME,
  authors: [{ name: DOCTOR_NAME }],
  creator: DOCTOR_NAME,
  publisher: DOCTOR_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Dr. Ashish Agarwal — Laparoscopic Surgeon, Gorakhpur',
    title: 'Painless keyhole surgery in Gorakhpur — Dr. Ashish Agarwal',
    description:
      'Advanced laparoscopic surgeon & proctologist in Gorakhpur. Gallstones, hernia, piles, fistula, appendix & more — free under Ayushman Bharat.',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Dr. Ashish Agarwal — Advanced Laparoscopic Surgeon, Gorakhpur' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Painless keyhole surgery in Gorakhpur — Dr. Ashish Agarwal',
    description:
      'Advanced laparoscopic surgeon & proctologist in Gorakhpur. Gallstones, hernia, piles, fistula, appendix & more — free under Ayushman Bharat.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  category: 'health',
};

export const viewport: Viewport = {
  themeColor: '#0C4A4D',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': `${SITE_URL}/#physician`,
  name: DOCTOR_NAME,
  alternateName: 'डॉ. आशीष अग्रवाल',
  description:
    'Advanced laparoscopic surgeon and proctologist in Gorakhpur, Uttar Pradesh. Minimally invasive keyhole surgery for gallstones, hernia, piles, fistula, appendix and more. Ayushman Bharat (PM-JAY) empanelled.',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/icon-512.png`,
  medicalSpecialty: ['Surgical', 'Gastroenterologic'],
  telephone: PHONE_MAIN,
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  areaServed: ['Gorakhpur', 'Deoria', 'Kushinagar', 'Maharajganj', 'Purvanchal', 'Uttar Pradesh'],
  knowsLanguage: ['en', 'hi'],
  sameAs: [INSTAGRAM_URL],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Daudpur, Near Bela Public School',
    addressLocality: 'Gorakhpur',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: GEO.latitude, longitude: GEO.longitude },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE_MAIN,
    contactType: 'reservations',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'King George’s Medical University (KGMU), Lucknow' },
    { '@type': 'CollegeOrUniversity', name: 'BRD Medical College, Gorakhpur' },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MBBS — KGMU, Lucknow' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MS (General Surgery) — BRD Medical College, Gorakhpur' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'fellowship', name: 'FMAS (Minimal Access Surgery), Delhi' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'UP Medical Council Reg. No. 64333' },
  ],
  availableService: conditions.map((c) => ({
    '@type': 'MedicalProcedure',
    name: c.en,
    procedureType: 'https://schema.org/SurgicalProcedure',
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spectral.variable} ${mukta.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
