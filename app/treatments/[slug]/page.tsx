import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Photo from '../../components/Photo';
import {
  IconPhone, IconWhatsApp, IconCheck, IconArrowRight, IconPlus,
} from '../../components/icons';
import { TEL_MAIN, WHATSAPP_URL, SITE_URL, DOCTOR_NAME } from '@/lib/site';
import { getService, serviceSlugs, services } from '@/lib/services';

// Only the known service slugs are built; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  const url = `/treatments/${s.slug}/`;
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: s.title,
      description: s.metaDescription,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${s.procedure} — Dr. Ashish Agarwal, Gorakhpur` }],
    },
  };
}

const HERO_BG = 'radial-gradient(125% 120% at 82% 0%, #13746F 0%, #0C4A4D 46%, #083A3C 100%)';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const related = s.related
    .map((slug) => services.find((x) => x.slug === slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Treatments', item: `${SITE_URL}/#treatments` },
          { '@type': 'ListItem', position: 3, name: s.conditionEn, item: `${SITE_URL}/treatments/${s.slug}/` },
        ],
      },
      {
        '@type': 'MedicalProcedure',
        name: s.procedure,
        procedureType: 'https://schema.org/SurgicalProcedure',
        howPerformed: s.approach.join(' '),
        provider: { '@type': 'Physician', '@id': `${SITE_URL}/#physician`, name: DOCTOR_NAME },
      },
      {
        '@type': 'FAQPage',
        mainEntity: s.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <div id="top">
      <Header />

      {/* ============ HERO ============ */}
      <section style={{ position: 'relative', color: '#fff', overflow: 'hidden', background: HERO_BG }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(32px,5vw,60px) 24px clamp(40px,5vw,64px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(28px,4vw,52px)' }}>
          <div style={{ flex: '1 1 430px', minWidth: 300 }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ fontSize: '13.5px', color: '#9FC4BC', marginBottom: 18, display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
              <a href="/" style={{ color: '#9FC4BC' }}>Home</a>
              <span aria-hidden>›</span>
              <a href="/#treatments" style={{ color: '#9FC4BC' }}>Treatments</a>
              <span aria-hidden>›</span>
              <span style={{ color: '#EAF3F1' }}>{s.conditionEn}</span>
            </nav>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, border: '1px solid rgba(236,106,78,.45)', color: '#F4A88E', borderRadius: 999, padding: '7px 15px', fontSize: 12, letterSpacing: '1.4px', textTransform: 'uppercase', fontWeight: 600, marginBottom: 20 }}>
              {s.eyebrow}
            </div>
            <h1 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(34px,5vw,54px)', lineHeight: 1.06, letterSpacing: '-.5px' }}>
              {s.h1}
            </h1>
            <p style={{ fontSize: 'clamp(16px,1.9vw,18.5px)', lineHeight: 1.6, color: '#EAF3F1', maxWidth: 545, margin: '16px 0 6px', fontWeight: 500 }}>
              {s.promise}
            </p>
            <p style={{ fontSize: 'clamp(15.5px,1.9vw,17.5px)', color: '#9FC4BC', marginBottom: 26 }}>
              {s.heroHi}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 13, marginBottom: 22 }}>
              <a href={TEL_MAIN} className="btn btn-coral pulse" style={{ gap: 10, padding: '15px 26px', fontWeight: 700, fontSize: '16.5px' }}>
                <IconPhone size={18} strokeWidth={2.2} /> Call Now
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ gap: 10, padding: '15px 24px', fontWeight: 600, fontSize: '16px' }}>
                <IconWhatsApp size={18} /> WhatsApp
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px 20px', color: '#BFD8D2', fontSize: '14px', fontWeight: 500 }}>
              {['KGMU Lucknow', 'MS Surgery, BRD', 'FMAS Delhi'].map((t) => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <IconCheck size={15} stroke="#F4A88E" strokeWidth={2.5} /> {t}
                </span>
              ))}
            </div>
          </div>
          <div style={{ flex: '1 1 320px', minWidth: 280, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'min(430px,100%)', borderRadius: 18, overflow: 'hidden', aspectRatio: '4 / 3', boxShadow: '0 26px 54px rgba(0,0,0,.38)', border: '1px solid rgba(236,106,78,.25)' }}>
              <Photo name={s.image} alt={s.imageAlt} priority imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(12,74,77,.1),rgba(8,58,60,.4))' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT IS ============ */}
      <section style={{ background: '#F4FAF9' }}>
        <div className="wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,4vw,56px)' }}>
            <div style={{ flex: '1 1 520px', minWidth: 300 }}>
              <div className="eyebrow"><span className="eyebrow-bar" />About the condition</div>
              <h2 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(26px,3.6vw,38px)', lineHeight: 1.14, color: '#16201D', letterSpacing: '-.3px' }}>
                {s.conditionEn} <span style={{ color: '#C2553B', fontSize: '.72em', fontWeight: 600 }}>· {s.conditionHi}</span>
              </h2>
              {s.whatIs.map((para, i) => (
                <p key={i} style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#46524d', marginTop: i === 0 ? 18 : 12 }}>{para}</p>
              ))}
            </div>
            {/* Symptoms card */}
            <div style={{ flex: '1 1 300px', minWidth: 280 }}>
              <div className="card" style={{ padding: '26px 24px' }}>
                <h3 className="serif" style={{ fontWeight: 600, fontSize: 20, color: '#16201D', marginBottom: 16 }}>{s.symptomsHeading}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {s.symptoms.map((sym, i) => (
                    <li key={i} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                      <span style={{ flex: 'none', width: 22, height: 22, borderRadius: '50%', background: '#FCE8E1', color: '#C2553B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                        <IconPlus size={13} stroke="#C2553B" strokeWidth={2.6} />
                      </span>
                      <span style={{ fontSize: '14.5px', lineHeight: 1.5, color: '#3a443f' }}>{sym}</span>
                    </li>
                  ))}
                </ul>
                <a href={TEL_MAIN} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18, color: '#0C4A4D', fontWeight: 700, fontSize: 15, borderBottom: '2px solid #EC6A4E', paddingBottom: 1 }}>
                  Discuss your symptoms <IconArrowRight size={15} strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE KEYHOLE APPROACH ============ */}
      <section style={{ background: '#0C4A4D', color: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,7vw,84px) 24px' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow eyebrow-dark"><span className="eyebrow-bar" />Treatment</div>
            <h2 className="h2">{s.approachHeading}</h2>
            {s.approach.map((para, i) => (
              <p key={i} style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#CFE3DE', marginTop: i === 0 ? 16 : 12 }}>{para}</p>
            ))}
          </div>
          {/* Recovery quick facts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 16, marginTop: 40 }}>
            {s.recovery.map((r) => (
              <div key={r.label} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, padding: '20px 22px' }}>
                <div style={{ fontSize: 12, letterSpacing: '1px', textTransform: 'uppercase', color: '#9FC4BC', fontWeight: 700 }}>{r.label}</div>
                <div className="serif" style={{ fontSize: 21, fontWeight: 600, color: '#fff', marginTop: 6 }}>{r.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AYUSHMAN BAND ============ */}
      <section style={{ background: 'linear-gradient(180deg,#FCE8E1,#F7D8CD)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,6vw,72px) 24px', display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 480px', minWidth: 300 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0C4A4D', color: '#F4A88E', padding: '7px 15px', borderRadius: 999, fontSize: 12, letterSpacing: '1.4px', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>Ayushman Bharat · PM-JAY</div>
            <h2 className="serif" style={{ fontWeight: 700, fontSize: 'clamp(26px,4vw,40px)', lineHeight: 1.1, color: '#0C4A4D', letterSpacing: '-.4px' }}>Free surgery under your Ayushman card.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#8a4231', maxWidth: 560, marginTop: 12 }}>
              Eligible patients can have this operation done completely free of cost under the Ayushman Bharat (PM-JAY) scheme. Call or WhatsApp with your card details to check your eligibility.
            </p>
          </div>
          <div style={{ flex: 'none' }}>
            <a href={TEL_MAIN} className="btn btn-teal" style={{ gap: 10, padding: '16px 28px', fontWeight: 700, fontSize: 17, boxShadow: '0 16px 34px rgba(12,74,77,.25)' }}>
              <IconPhone size={18} strokeWidth={2.2} /> Check eligibility
            </a>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section style={{ background: '#F4FAF9' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(48px,7vw,84px) 24px' }}>
          <div className="eyebrow"><span className="eyebrow-bar" />Common questions</div>
          <h2 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(26px,3.6vw,38px)', lineHeight: 1.14, color: '#16201D', letterSpacing: '-.3px', marginBottom: 24 }}>
            {s.conditionEn} — your questions answered
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {s.faqs.map((f, i) => (
              <details key={i} className="card" style={{ padding: '18px 22px' }}>
                <summary className="serif" style={{ cursor: 'pointer', fontWeight: 600, fontSize: '17.5px', color: '#16201D', listStyle: 'none' }}>
                  {f.q}
                </summary>
                <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#46524d', marginTop: 12 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RELATED TREATMENTS ============ */}
      <section style={{ background: '#EFF5F4' }}>
        <div className="wrap">
          <div className="eyebrow"><span className="eyebrow-bar" />More keyhole surgery</div>
          <h2 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(24px,3.4vw,34px)', lineHeight: 1.14, color: '#16201D', letterSpacing: '-.3px' }}>Related treatments</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16, marginTop: 28 }}>
            {related.map((r) => (
              <a key={r.slug} href={`/treatments/${r.slug}/`} className="card card-lift" style={{ padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 6, textDecoration: 'none' }}>
                <h3 className="serif" style={{ fontWeight: 600, fontSize: '19px', color: '#16201D', lineHeight: 1.15 }}>{r.conditionEn}</h3>
                <div style={{ fontSize: 15, color: '#C2553B', fontWeight: 600 }}>{r.conditionHi}</div>
                <span style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6, color: '#0C4A4D', fontWeight: 700, fontSize: 14 }}>
                  Learn more <IconArrowRight size={14} strokeWidth={2.2} />
                </span>
              </a>
            ))}
          </div>
          <a href="/#treatments" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 26, color: '#0C4A4D', fontWeight: 700, fontSize: 16, borderBottom: '2px solid #EC6A4E', paddingBottom: 1 }}>
            View all treatments <IconArrowRight size={16} strokeWidth={2.2} />
          </a>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section style={{ background: '#083A3C', color: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(44px,6vw,72px) 24px', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(26px,4vw,40px)', lineHeight: 1.12, letterSpacing: '-.4px' }}>
            Talk to Dr. Ashish about {s.conditionEn.toLowerCase()}.
          </h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.6, color: '#CFE3DE', maxWidth: 560, margin: '14px auto 26px' }}>
            No long forms — just call or WhatsApp to describe your problem and book a convenient time at the clinic in Daudpur, Gorakhpur.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <a href={TEL_MAIN} className="btn btn-coral" style={{ gap: 10, padding: '16px 28px', fontWeight: 700, fontSize: '16.5px' }}><IconPhone size={18} strokeWidth={2.2} /> Call +91 98075 60443</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ gap: 10, padding: '16px 26px', fontWeight: 700, fontSize: '16.5px' }}><IconWhatsApp size={18} /> WhatsApp</a>
          </div>
        </div>
      </section>

      <Footer />

      {/* ============ STICKY MOBILE CALL BAR ============ */}
      <div className="callbar" style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 60, gap: 2, background: '#0C4A4D', boxShadow: '0 -6px 22px rgba(0,0,0,.22)' }}>
        <a href={TEL_MAIN} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#EC6A4E', color: '#fff', padding: 15, fontWeight: 700, fontSize: '16.5px' }}><IconPhone size={18} strokeWidth={2.2} /> Call Now</a>
        <a href={WHATSAPP_URL} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#1FA855', color: '#fff', padding: 15, fontWeight: 700, fontSize: '16.5px' }}><IconWhatsApp size={18} /> WhatsApp</a>
      </div>
      <div className="callbar-spacer" style={{ height: 62 }} />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </div>
  );
}
