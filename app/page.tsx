import Header from './components/Header';
import Faq from './components/Faq';
import Photo from './components/Photo';
import InstaCarousel from './components/InstaCarousel';
import {
  IconPhone, IconWhatsApp, IconCheck, IconInstagram, IconFacebook, IconPlus, IconArrowRight,
  IconMapPin, IconClock, IconStar, LogoBadge,
} from './components/icons';
import {
  TEL_MAIN, TEL_ALT, WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, FACEBOOK_URL, FACEBOOK_LABEL,
  ADDRESS_LINE, MAPS_EMBED, MAPS_DIRECTIONS,
  PULSE_NAME, PULSE_ADDRESS_SHORT, PULSE_MAPS_EMBED, PULSE_MAPS_DIRECTIONS, PULSE_REVIEWS_URL,
  ASTRO_NAME, ASTRO_OPD_TIMING, ASTRO_ADDRESS_SHORT, ASTRO_MAPS_EMBED, ASTRO_MAPS_DIRECTIONS, ASTRO_REVIEWS_URL,
  conditions, benefits, processSteps, trustCards, testimonials, igTiles,
  SHOW_AYUSHMAN_BAND, SHOW_REVIEWS,
} from '@/lib/site';

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div id="top">
      <Header />

      {/* ============ HERO ============ */}
      <section
        style={{
          position: 'relative', color: '#fff', overflow: 'hidden',
          background: 'radial-gradient(125% 120% at 82% 0%, #13746F 0%, #0C4A4D 46%, #083A3C 100%)',
        }}
      >
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,6vw,72px) 24px clamp(48px,6vw,80px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(28px,4vw,56px)' }}>
          <div style={{ flex: '1 1 430px', minWidth: 300 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, border: '1px solid rgba(236,106,78,.45)', color: '#F4A88E', borderRadius: 999, padding: '7px 15px', fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600, marginBottom: 22 }}>
              Advanced Laparoscopic Surgeon · Gorakhpur
            </div>
            <h1 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(40px,6.3vw,66px)', lineHeight: 1.04, letterSpacing: '-.6px' }}>
              Painless keyhole surgery,<br /><span style={{ color: '#F4A88E' }}>closer to home.</span>
            </h1>
            <p style={{ fontSize: 'clamp(16.5px,1.9vw,19px)', lineHeight: 1.6, color: '#CFE3DE', maxWidth: 545, margin: '20px 0 8px' }}>
              Gallstones, hernia, piles, fistula, appendix &amp; more — treated through tiny cuts with modern laparoscopic technique. Less pain, faster recovery.
            </p>
            <p style={{ fontSize: 'clamp(16px,2vw,18.5px)', color: '#9FC4BC', marginBottom: 28 }}>
              दूरबीन विधि से दर्दरहित ऑपरेशन — छोटा चीरा, जल्दी रिकवरी।
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 26 }}>
              <a href={TEL_MAIN} className="btn btn-coral pulse" style={{ gap: 10, padding: '16px 28px', fontWeight: 700, fontSize: 17 }}>
                <IconPhone size={19} strokeWidth={2.2} /> Call Now
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ gap: 10, padding: '16px 26px', fontWeight: 600, fontSize: '16.5px' }}>
                <IconWhatsApp size={19} /> WhatsApp
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px 20px', color: '#BFD8D2', fontSize: '14.5px', fontWeight: 500 }}>
              {['KGMU Lucknow', 'MS Surgery, BRD', 'FMAS Delhi'].map((t) => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <IconCheck size={15} stroke="#F4A88E" strokeWidth={2.5} /> {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ flex: '1 1 330px', minWidth: 280, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'min(410px,100%)' }}>
              <div style={{ position: 'absolute', top: 18, left: 18, right: -14, bottom: -14, border: '1.5px solid rgba(236,106,78,.5)', borderRadius: 20 }} />
              <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', aspectRatio: '4 / 5', boxShadow: '0 30px 60px rgba(0,0,0,.4)' }}>
                <Photo name="dr-ashish-portrait" alt="Dr. Ashish Agarwal, Laparoscopic Surgeon" priority imgStyle={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 14%' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 52%,rgba(8,58,60,.6) 100%)' }} />
              </div>
              <div style={{ position: 'absolute', left: 14, bottom: 14, background: '#F4FAF9', color: '#16201D', borderRadius: 14, padding: '13px 16px', boxShadow: '0 16px 34px rgba(0,0,0,.3)', maxWidth: 230 }}>
                <div className="serif" style={{ fontWeight: 600, fontSize: '16.5px', color: '#0C4A4D' }}>Dr. Ashish Agarwal</div>
                <div style={{ fontSize: '12.5px', color: '#5C6A64', marginTop: 1 }}>MBBS · MS · FMAS</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 9, background: '#0C4A4D', color: '#fff', fontSize: '11.5px', fontWeight: 600, padding: '5px 10px', borderRadius: 999 }}>
                  <IconCheck size={13} stroke="#F4A88E" strokeWidth={3} /> Ayushman empanelled
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CREDENTIALS STRIP ============ */}
      <section style={{ background: '#F4FAF9', borderBottom: '1px solid #DDE8E5' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '28px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 22 }}>
          {[
            { badge: 'G', bs: 18, dark: false, title: 'KGMU, Lucknow', sub: 'MBBS · Govt. medical college' },
            { badge: 'MS', bs: 18, dark: false, title: 'BRD Medical College', sub: 'MS · General Surgery, Gorakhpur' },
            { badge: 'F', bs: 15, dark: false, title: 'FMAS, Delhi', sub: 'Fellow · Minimal Access Surgery' },
            { badge: 'check', bs: 0, dark: true, title: 'Ayushman Bharat', sub: 'Free surgery for eligible patients' },
          ].map((c) => (
            <div key={c.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 13 }}>
              <span className="serif" style={{ flex: 'none', width: 40, height: 40, borderRadius: 11, background: c.dark ? '#0C4A4D' : '#E2F0ED', color: c.dark ? '#F4A88E' : '#0C4A4D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: c.bs || undefined }}>
                {c.badge === 'check' ? <IconCheck size={20} strokeWidth={2.4} /> : c.badge}
              </span>
              <div>
                <div className="serif" style={{ fontWeight: 600, fontSize: '16.5px', color: '#0C4A4D', lineHeight: 1.2 }}>{c.title}</div>
                <div style={{ fontSize: '13.5px', color: '#5C6A64', marginTop: 2 }}>{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHY PATIENTS TRUST US ============ */}
      <section style={{ background: '#F4FAF9' }}>
        <div className="wrap">
          <div className="eyebrow"><span className="eyebrow-bar" />Why patients trust us</div>
          <h2 className="h2" style={{ color: '#16201D', maxWidth: 700 }}>Expert hands, honest advice, real value</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginTop: 40 }}>
            {trustCards.map((c) => (
              <div key={c.title} className="card" style={{ padding: '26px 22px' }}>
                {c.kind === 'rupee' ? (
                  <span className="serif" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 48, height: 48, padding: '0 12px', borderRadius: 12, background: '#FCE8E1', color: '#C2553B', fontWeight: 700, fontSize: 21, marginBottom: 16 }}>₹0</span>
                ) : (
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 12, background: '#E2F0ED', color: '#0F6E68', marginBottom: 16 }}>
                    {c.kind === 'star' && <IconStar size={24} strokeWidth={2} />}
                    {c.kind === 'check' && <IconCheck size={24} stroke="currentColor" strokeWidth={2.2} />}
                    {c.kind === 'pin' && <IconMapPin size={24} strokeWidth={2} />}
                  </span>
                )}
                <h3 className="serif" style={{ fontWeight: 600, fontSize: 20, color: '#16201D' }}>{c.title}</h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.55, color: '#5C6A64', marginTop: 7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TREATMENTS ============ */}
      <section id="treatments" className="anchor" style={{ background: '#EFF5F4' }}>
        <div className="wrap">
          <div className="eyebrow"><span className="eyebrow-bar" />What we treat · उपचार</div>
          <h2 className="h2" style={{ color: '#16201D', maxWidth: 680 }}>Conditions treated by Dr. Ashish</h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.6, color: '#5C6A64', maxWidth: 600, marginTop: 14 }}>
            Find your problem below — every condition can be treated with safe, modern surgery. Not sure? Just call and ask.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(248px,1fr))', gap: 16, marginTop: 40 }}>
            {conditions.map((c) => (
              <div key={c.en} className="card card-lift" style={{ padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 7 }}>
                <span style={{ width: 38, height: 38, borderRadius: 10, background: '#E2F0ED', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                  <IconPlus size={20} stroke="#EC6A4E" strokeWidth={2.4} />
                </span>
                <h3 className="serif" style={{ fontWeight: 600, fontSize: '19.5px', color: '#16201D', lineHeight: 1.15 }}>{c.en}</h3>
                <div style={{ fontSize: 15, color: '#C2553B', fontWeight: 600 }}>{c.hi}</div>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: '#5C6A64', marginTop: 3 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14, background: '#fff', border: '1px dashed #C8D8D4', borderRadius: 16, padding: '20px 24px' }}>
            <span style={{ fontSize: 16, color: '#3a443f', fontWeight: 500 }}>Don&rsquo;t see your problem listed? Dr. Ashish treats a wide range of surgical conditions.</span>
            <a href={TEL_MAIN} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#0C4A4D', fontWeight: 700, fontSize: 16, borderBottom: '2px solid #EC6A4E', paddingBottom: 1 }}>
              Call &amp; ask <IconArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ WHY KEYHOLE ============ */}
      <section id="keyhole" className="anchor" style={{ background: '#0C4A4D', color: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,8vw,96px) 24px', display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
          <div style={{ flex: '1 1 340px', minWidth: 290, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'min(440px,100%)', borderRadius: 18, overflow: 'hidden', aspectRatio: '4 / 5', boxShadow: '0 30px 60px rgba(0,0,0,.4)', border: '1px solid rgba(236,106,78,.25)' }}>
              <Photo name="surgery-1" alt="Laparoscopic keyhole surgery in progress" imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(12,74,77,.15),rgba(8,58,60,.35))' }} />
            </div>
          </div>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div className="eyebrow eyebrow-dark"><span className="eyebrow-bar" />दूरबीन सर्जरी · Laparoscopy</div>
            <h2 className="h2">Why keyhole surgery is better</h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.6, color: '#CFE3DE', maxWidth: 520, marginTop: 14 }}>
              Instead of one large cut, the operation is done through 2–3 tiny openings using a camera and fine instruments. For most patients, that changes everything about recovery.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 15, marginTop: 28 }}>
              {benefits.map((b) => (
                <div key={b.en} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ flex: 'none', width: 30, height: 30, borderRadius: '50%', background: 'rgba(236,106,78,.18)', color: '#F4A88E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <IconCheck size={15} stroke="currentColor" strokeWidth={2.6} />
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 17, color: '#fff' }}>{b.en} <span style={{ color: '#9FC4BC', fontWeight: 500, fontSize: '14.5px' }}>· {b.hi}</span></div>
                    <div style={{ fontSize: '14.5px', color: '#BFD8D2', lineHeight: 1.5, marginTop: 2 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT TO EXPECT (PROCESS) ============ */}
      <section style={{ background: '#EFF5F4' }}>
        <div className="wrap">
          <div className="eyebrow"><span className="eyebrow-bar" />Simple &amp; stress-free</div>
          <h2 className="h2" style={{ color: '#16201D', maxWidth: 680 }}>What to expect, step by step</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(232px,1fr))', gap: 16, marginTop: 42 }}>
            {processSteps.map((s) => (
              <div key={s.n} className="card" style={{ padding: '26px 22px' }}>
                <div className="serif" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: '#EC6A4E', color: '#fff', fontWeight: 700, fontSize: 19, marginBottom: 16 }}>{s.n}</div>
                <h3 className="serif" style={{ fontWeight: 600, fontSize: 19, color: '#16201D' }}>{s.en}</h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.55, color: '#5C6A64', marginTop: 7 }}>
                  {s.desc} <span style={{ color: '#C2553B', display: 'block', marginTop: 4 }}>{s.hi}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AYUSHMAN BAND ============ */}
      {SHOW_AYUSHMAN_BAND && (
        <section id="ayushman" className="anchor" style={{ background: 'linear-gradient(180deg,#FCE8E1,#F7D8CD)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,7vw,84px) 24px', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 480px', minWidth: 300 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0C4A4D', color: '#F4A88E', padding: '7px 15px', borderRadius: 999, fontSize: 12, letterSpacing: '1.4px', textTransform: 'uppercase', fontWeight: 700, marginBottom: 18 }}>Ayushman Bharat · PM-JAY</div>
              <h2 className="serif" style={{ fontWeight: 700, fontSize: 'clamp(30px,4.6vw,46px)', lineHeight: 1.08, color: '#0C4A4D', letterSpacing: '-.5px' }}>Free surgery under your Ayushman card.</h2>
              <p style={{ fontSize: 'clamp(17px,2.2vw,21px)', color: '#9a4632', fontWeight: 600, margin: '10px 0 14px' }}>आयुष्मान कार्ड से निःशुल्क ऑपरेशन की सुविधा उपलब्ध।</p>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#8a4231', maxWidth: 560 }}>
                Eligible patients can have their operation done completely free of cost under the Ayushman Bharat (PM-JAY) scheme. Call or WhatsApp with your card details and the clinic will help you check your eligibility.
              </p>
            </div>
            <div style={{ flex: 'none' }}>
              <a href={TEL_MAIN} className="btn btn-teal" style={{ gap: 10, padding: '17px 30px', fontWeight: 700, fontSize: 18, boxShadow: '0 16px 34px rgba(12,74,77,.25)' }}>
                <IconPhone size={19} strokeWidth={2.2} /> Check eligibility
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ============ ABOUT ============ */}
      <section id="about" className="anchor" style={{ background: '#F4FAF9' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,8vw,96px) 24px', display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
          <div style={{ flex: '1 1 330px', minWidth: 280, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'min(420px,100%)' }}>
              <div style={{ position: 'absolute', top: 16, left: -14, right: 16, bottom: -14, border: '1.5px solid #EC6A4E', borderRadius: 18, opacity: 0.55 }} />
              <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '1 / 1', boxShadow: '0 24px 50px rgba(12,74,77,.18)' }}>
                <Photo name="consultation" alt="Dr. Ashish Agarwal at the clinic" imgStyle={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 30%' }} />
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 420px', minWidth: 300 }}>
            <div className="eyebrow"><span className="eyebrow-bar" />About the surgeon</div>
            <h2 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(28px,4vw,42px)', lineHeight: 1.12, color: '#16201D', letterSpacing: '-.4px' }}>Modern surgical care, with a personal touch.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#46524d', marginTop: 16 }}>
              Dr. Ashish Agarwal is an advanced laparoscopic surgeon and proctologist based in Gorakhpur. Trained at some of North India&rsquo;s most respected government institutions — KGMU Lucknow and BRD Medical College — he specialises in minimally invasive &ldquo;keyhole&rdquo; surgery that means smaller cuts, less pain and a faster return to everyday life.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#46524d', marginTop: 12 }}>
              From gallstones and hernia to piles, fistula and appendix, he offers trusted surgical care close to home — including free operations for eligible patients under the Ayushman Bharat scheme.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '12px 20px', marginTop: 24 }}>
              {[
                ['MBBS', '— KGMU, Lucknow'],
                ['MS, General Surgery', '— BRD, Gorakhpur'],
                ['FMAS', '— Minimal Access Surgery, Delhi'],
                ['Reg. No. 64333', '— UP Medical Council'],
              ].map(([b, rest]) => (
                <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <IconCheck size={18} stroke="#0C4A4D" strokeWidth={2.4} style={{ flex: 'none', marginTop: 2 }} />
                  <span style={{ fontSize: 15, color: '#28332F' }}><b style={{ fontWeight: 600 }}>{b}</b> {rest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      {SHOW_REVIEWS && (
        <section id="reviews" className="anchor" style={{ background: '#EFF5F4' }}>
          <div className="wrap">
            <div className="eyebrow"><span className="eyebrow-bar" />Patient voices</div>
            <h2 className="h2" style={{ color: '#16201D', maxWidth: 680 }}>Trusted by families across Purvanchal</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18, marginTop: 38 }}>
              {testimonials.map((t) => (
                <div key={t.name} className="card" style={{ borderRadius: 18, padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ color: '#EC6A4E', fontSize: 17, letterSpacing: 3 }} aria-label="5 out of 5 stars">★★★★★</div>
                  <p className="serif" style={{ fontSize: 18, lineHeight: 1.5, color: '#28332F', fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #E6EFEC', paddingTop: 15 }}>
                    <span className="serif" style={{ flex: 'none', width: 42, height: 42, borderRadius: '50%', background: '#0C4A4D', color: '#F4A88E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18 }}>{t.initial}</span>
                    <div>
                      <div style={{ fontWeight: 600, color: '#16201D' }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: '#5C6A64' }}>{t.proc} · {t.place}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ SOCIAL: Instagram carousel + Facebook ============ */}
      <section id="instagram" className="anchor" style={{ background: '#0C4A4D', color: '#fff' }}>
        <div className="wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32 }}>
            <div>
              <div className="eyebrow eyebrow-dark"><span className="eyebrow-bar" />Follow Dr. Ashish</div>
              <h2 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(28px,4.2vw,42px)', lineHeight: 1.1, letterSpacing: '-.4px' }}>Real surgeries, real updates</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#CFE3DE', maxWidth: 520, marginTop: 12 }}>
                Follow along for live glimpses of keyhole surgery, patient recoveries and health tips from the clinic — on Instagram and Facebook.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-coral" style={{ gap: 10, padding: '13px 22px', fontWeight: 700, fontSize: '15.5px', whiteSpace: 'nowrap' }}>
                <IconInstagram size={20} /> Instagram
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-fb" style={{ gap: 10, padding: '13px 22px', fontWeight: 700, fontSize: '15.5px', whiteSpace: 'nowrap' }}>
                <IconFacebook size={19} /> Facebook
              </a>
            </div>
          </div>

          {/* Instagram carousel (swipeable, autoplaying) */}
          <InstaCarousel tiles={igTiles} />

          {/* Facebook follow card */}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fb-card"
            style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 22, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, padding: '18px 20px', flexWrap: 'wrap' }}
          >
            <span style={{ flex: 'none', width: 52, height: 52, borderRadius: 14, background: '#1877F2', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconFacebook size={28} />
            </span>
            <span style={{ flex: '1 1 260px', minWidth: 220 }}>
              <span style={{ display: 'block', fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#9FC4BC', fontWeight: 700 }}>On Facebook</span>
              <span className="serif" style={{ display: 'block', fontSize: 20, fontWeight: 600, color: '#fff', marginTop: 2 }}>{FACEBOOK_LABEL}</span>
              <span style={{ display: 'block', fontSize: '14.5px', color: '#CFE3DE', marginTop: 3 }}>Clinic updates, patient stories &amp; health tips.</span>
            </span>
            <span className="btn btn-fb" style={{ gap: 8, padding: '12px 20px', fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap' }}>
              Follow on Facebook <IconArrowRight size={15} strokeWidth={2.2} />
            </span>
          </a>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section style={{ background: '#F4FAF9' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(56px,8vw,96px) 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="eyebrow"><span className="eyebrow-bar" />Questions?</div>
            <h2 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(28px,4vw,42px)', lineHeight: 1.12, color: '#16201D', letterSpacing: '-.4px' }}>Your surgery questions, answered</h2>
          </div>
          <Faq />
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="anchor" style={{ background: '#0C4A4D', color: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,8vw,96px) 24px', display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,56px)' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div className="eyebrow eyebrow-dark"><span className="eyebrow-bar" />Book your visit</div>
            <h2 className="h2">Call now — talk directly to the clinic.</h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.6, color: '#CFE3DE', maxWidth: 480, marginTop: 14 }}>
              No long forms. Call or WhatsApp to describe your problem and book a convenient time to visit.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 26 }}>
              <a href={TEL_MAIN} className="contact-row" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 11, background: 'rgba(236,106,78,.16)', color: '#F4A88E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconPhone size={19} strokeWidth={2} /></span>
                <span><span style={{ display: 'block', fontSize: '12.5px', color: '#9FC4BC', textTransform: 'uppercase', letterSpacing: '1px' }}>Call / Phone</span><span style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>+91 98075 60443 · 79850 32860</span></span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contact-row" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 11, background: 'rgba(31,168,85,.18)', color: '#5fe39a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconWhatsApp size={19} /></span>
                <span><span style={{ display: 'block', fontSize: '12.5px', color: '#9FC4BC', textTransform: 'uppercase', letterSpacing: '1px' }}>WhatsApp</span><span style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>+91 98075 60443</span></span>
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 11, background: 'rgba(236,106,78,.16)', color: '#F4A88E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconMapPin size={19} strokeWidth={2} /></span>
                <span><span style={{ display: 'block', fontSize: '12.5px', color: '#9FC4BC', textTransform: 'uppercase', letterSpacing: '1px' }}>Clinic Address</span><span style={{ fontSize: 17, fontWeight: 500, color: '#fff', lineHeight: 1.4 }}>{ADDRESS_LINE}</span></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 11, background: 'rgba(236,106,78,.16)', color: '#F4A88E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconClock size={19} strokeWidth={2} /></span>
                <span><span style={{ display: 'block', fontSize: '12.5px', color: '#9FC4BC', textTransform: 'uppercase', letterSpacing: '1px' }}>OPD Timing</span><span style={{ fontSize: 17, fontWeight: 500, color: '#fff' }}>11:00 AM – 2:00 PM · {PULSE_NAME}<span style={{ display: 'block', marginTop: 2 }}>{ASTRO_OPD_TIMING} · {ASTRO_NAME}</span><span style={{ color: '#9FC4BC', fontSize: 14, display: 'block', marginTop: 2 }}>On-call service round the clock</span></span></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '15px 0' }}>
                <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 11, background: 'rgba(236,106,78,.16)', color: '#F4A88E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconMapPin size={19} strokeWidth={2} /></span>
                <span><span style={{ display: 'block', fontSize: '12.5px', color: '#9FC4BC', textTransform: 'uppercase', letterSpacing: '1px' }}>Surgeries at</span><span style={{ fontSize: 17, fontWeight: 500, color: '#fff', lineHeight: 1.4 }}>{PULSE_NAME} — {PULSE_ADDRESS_SHORT}</span></span>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
              <a href={TEL_MAIN} className="btn btn-coral" style={{ gap: 10, padding: '15px 26px', fontWeight: 700, fontSize: '16.5px' }}><IconPhone size={18} strokeWidth={2.2} /> Call Now</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ gap: 10, padding: '15px 26px', fontWeight: 700, fontSize: '16.5px' }}>WhatsApp</a>
            </div>
          </div>
          <div style={{ flex: '1 1 340px', minWidth: 300, display: 'flex', flexDirection: 'column' }}>
            <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(236,106,78,.25)', boxShadow: '0 24px 50px rgba(0,0,0,.3)', background: '#062E30' }}>
              <iframe title="Clinic location map" src={MAPS_EMBED} style={{ width: '100%', height: 320, border: 0, display: 'block' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '16px 18px' }}>
                <div>
                  <div className="serif" style={{ fontWeight: 600, fontSize: 17, color: '#fff' }}>Daudpur, Gorakhpur</div>
                  <div style={{ fontSize: '13.5px', color: '#9FC4BC' }}>Near Bela Public School</div>
                </div>
                <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="dir-chip">Directions <IconArrowRight size={15} strokeWidth={2.2} /></a>
              </div>
            </div>
            {/* Pulse Hospital — additional operating location */}
            <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(236,106,78,.25)', boxShadow: '0 24px 50px rgba(0,0,0,.3)', background: '#062E30', marginTop: 16 }}>
              <iframe title="Pulse Hospital location map" src={PULSE_MAPS_EMBED} style={{ width: '100%', height: 300, border: 0, display: 'block' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '16px 18px' }}>
                <div>
                  <div style={{ fontSize: 12, color: '#F4A88E', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: 3 }}>Surgeries at</div>
                  <div className="serif" style={{ fontWeight: 600, fontSize: 17, color: '#fff' }}>{PULSE_NAME}</div>
                  <div style={{ fontSize: '13.5px', color: '#9FC4BC' }}>{PULSE_ADDRESS_SHORT}</div>
                </div>
                <a href={PULSE_MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="dir-chip">Directions <IconArrowRight size={15} strokeWidth={2.2} /></a>
              </div>
              <a href={PULSE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px', borderTop: '1px solid rgba(255,255,255,.08)', color: '#F4A88E', fontWeight: 600, fontSize: '14.5px' }}>
                <IconStar size={16} stroke="#F4A88E" strokeWidth={2} /> Read &amp; leave reviews on Google
              </a>
            </div>
            {/* Astro Medics — third OPD location */}
            <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(236,106,78,.25)', boxShadow: '0 24px 50px rgba(0,0,0,.3)', background: '#062E30', marginTop: 16 }}>
              <iframe title="Astro Medics Super Speciality Hospital location map" src={ASTRO_MAPS_EMBED} style={{ width: '100%', height: 300, border: 0, display: 'block' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '16px 18px' }}>
                <div>
                  <div style={{ fontSize: 12, color: '#F4A88E', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: 3 }}>OPD · {ASTRO_OPD_TIMING}</div>
                  <div className="serif" style={{ fontWeight: 600, fontSize: 17, color: '#fff' }}>{ASTRO_NAME}</div>
                  <div style={{ fontSize: '13.5px', color: '#9FC4BC' }}>{ASTRO_ADDRESS_SHORT}</div>
                </div>
                <a href={ASTRO_MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="dir-chip">Directions <IconArrowRight size={15} strokeWidth={2.2} /></a>
              </div>
              <a href={ASTRO_REVIEWS_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px', borderTop: '1px solid rgba(255,255,255,.08)', color: '#F4A88E', fontWeight: 600, fontSize: '14.5px' }}>
                <IconStar size={16} stroke="#F4A88E" strokeWidth={2} /> Read &amp; leave reviews on Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ background: '#062E30', color: '#9FB8B2' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,5vw,64px) 24px 0' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between', paddingBottom: 36, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            <div style={{ maxWidth: 320 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
                <LogoBadge size={38} svg={21} />
                <span className="serif" style={{ fontSize: 19, fontWeight: 600, color: '#fff' }}>Dr. Ashish Agarwal</span>
              </div>
              <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#85A39C' }}>
                Advanced Laparoscopic Surgeon &amp; Proctologist, Gorakhpur. Modern keyhole surgery for gallstones, hernia, piles, fistula &amp; more.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '12.5px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#F4A88E', fontWeight: 700, marginBottom: 14 }}>Quick Links</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
                <a href="#about" className="flink">About the Surgeon</a>
                <a href="#treatments" className="flink">Treatments</a>
                <a href="#keyhole" className="flink">Why Keyhole Surgery</a>
                <a href="#ayushman" className="flink">Ayushman Bharat</a>
                <a href="#contact" className="flink">Contact &amp; Location</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12.5px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#F4A88E', fontWeight: 700, marginBottom: 14 }}>Reach Us</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
                <a href={TEL_MAIN} className="flink">+91 98075 60443</a>
                <a href={TEL_ALT} className="flink">+91 79850 32860</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flink">WhatsApp Chat</a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flink">Instagram {INSTAGRAM_HANDLE}</a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flink">Facebook</a>
                <span style={{ color: '#85A39C', lineHeight: 1.5 }}>Daudpur, Near Bela Public<br />School, Gorakhpur, UP</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 18px', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0 30px', fontSize: 13, color: '#6f8b85' }}>
            <span>© {year} Dr. Ashish Agarwal · drashishlaparoscopy.com · UP MCI Reg. 64333</span>
            <span style={{ maxWidth: 560, lineHeight: 1.5 }}>Surgical outcomes vary by individual. Please consult the doctor for advice specific to your condition.</span>
          </div>
        </div>
      </footer>

      {/* ============ STICKY MOBILE CALL BAR (<=960px) ============ */}
      <div className="callbar" style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 60, gap: 2, background: '#0C4A4D', boxShadow: '0 -6px 22px rgba(0,0,0,.22)' }}>
        <a href={TEL_MAIN} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#EC6A4E', color: '#fff', padding: 15, fontWeight: 700, fontSize: '16.5px' }}><IconPhone size={18} strokeWidth={2.2} /> Call Now</a>
        <a href={WHATSAPP_URL} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#1FA855', color: '#fff', padding: 15, fontWeight: 700, fontSize: '16.5px' }}><IconWhatsApp size={18} /> WhatsApp</a>
      </div>
      <div className="callbar-spacer" style={{ height: 62 }} />
    </div>
  );
}
