import { LogoBadge } from './icons';
import {
  TEL_MAIN, TEL_ALT, WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, FACEBOOK_URL,
} from '@/lib/site';

// Shared site footer. Section links are absolute (/#…) so they work from the
// homepage and from the individual /treatments/* service pages alike.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
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
            <div style={{ fontSize: '12.5px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#F4A88E', fontWeight: 700, marginBottom: 14 }}>Treatments</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
              <a href="/treatments/laparoscopic-gallbladder-surgery-gorakhpur/" className="flink">Gallbladder Stone Surgery</a>
              <a href="/treatments/laparoscopic-hernia-surgery-gorakhpur/" className="flink">Hernia Surgery</a>
              <a href="/treatments/piles-treatment-gorakhpur/" className="flink">Piles Treatment</a>
              <a href="/treatments/anal-fistula-surgery-gorakhpur/" className="flink">Anal Fistula Surgery</a>
              <a href="/treatments/laparoscopic-appendix-surgery-gorakhpur/" className="flink">Appendix Surgery</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12.5px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#F4A88E', fontWeight: 700, marginBottom: 14 }}>Quick Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
              <a href="/#about" className="flink">About the Surgeon</a>
              <a href="/#treatments" className="flink">All Treatments</a>
              <a href="/#keyhole" className="flink">Why Keyhole Surgery</a>
              <a href="/#ayushman" className="flink">Ayushman Bharat</a>
              <a href="/#contact" className="flink">Contact &amp; Location</a>
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
  );
}
