'use client';

import { useState } from 'react';
import { LogoBadge, IconPhone, IconWhatsApp, IconInstagram, IconMenu } from './icons';
import {
  TEL_MAIN, TEL_ALT, WHATSAPP_URL, INSTAGRAM_URL, PHONE_ALT_DISPLAY,
  ADDRESS_LINE, REG_NO,
} from '@/lib/site';

const NAV = [
  { href: '#about', label: 'About', mobileLabel: 'About' },
  { href: '#treatments', label: 'Treatments', mobileLabel: 'Treatments' },
  { href: '#keyhole', label: 'Why Keyhole', mobileLabel: 'Why Keyhole' },
  { href: '#ayushman', label: 'Ayushman', mobileLabel: 'Ayushman Bharat' },
  { href: '#contact', label: 'Contact', mobileLabel: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top utility bar (desktop only) */}
      <div className="desktop-only" style={{ background: '#083A3C', color: '#CFE3DE', fontSize: '13.5px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '9px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, letterSpacing: '.2px' }}>
            <span style={{ color: '#EC6A4E', fontSize: 9 }}>●</span> {ADDRESS_LINE.replace(', Uttar Pradesh', '')} · {REG_NO}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <a href={TEL_ALT} className="tb-call">
              <IconPhone size={15} strokeWidth={2} /> {PHONE_ALT_DISPLAY}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="tb-wa">
              <IconWhatsApp size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Sticky header */}
      <header
        style={{
          position: 'sticky', top: 0, zIndex: 50, background: 'rgba(8,58,60,.93)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(236,106,78,.22)',
        }}
      >
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }} aria-label="Dr. Ashish Agarwal — home">
            <LogoBadge size={42} svg={23} />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.06 }}>
              <span className="serif" style={{ fontSize: 20, fontWeight: 600, color: '#fff', letterSpacing: '.2px', whiteSpace: 'nowrap' }}>Dr. Ashish Agarwal</span>
              <span style={{ fontSize: 11, letterSpacing: '1.6px', textTransform: 'uppercase', color: '#EC6A4E', fontWeight: 600 }}>Laparoscopic Surgeon</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="nav-desktop" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="navlink">{n.label}</a>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="iconlink">
              <IconInstagram size={20} />
            </a>
            <a href={TEL_MAIN} className="btn btn-coral" style={{ gap: 8, padding: '11px 20px', fontWeight: 700, fontSize: 15 }}>
              <IconPhone size={16} strokeWidth={2.2} /> Call Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="nav-mobile"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            style={{ background: 'transparent', border: '1px solid rgba(236,106,78,.45)', borderRadius: 10, padding: '8px 10px', color: '#fff' }}
          >
            <IconMenu size={22} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="mobile-menu" style={{ background: '#083A3C', borderTop: '1px solid rgba(236,106,78,.18)', padding: '8px 24px 20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="menu-link" onClick={() => setMenuOpen(false)}>{n.mobileLabel}</a>
              ))}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="menu-link" style={{ display: 'flex', alignItems: 'center', gap: 10 }} onClick={() => setMenuOpen(false)}>
                <IconInstagram size={19} /> Instagram
              </a>
              <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                <a href={TEL_MAIN} className="btn btn-coral" style={{ flex: 1, padding: 14, fontWeight: 700 }}>Call Now</a>
                <a href={WHATSAPP_URL} className="btn btn-wa" style={{ flex: 1, padding: 14, fontWeight: 700 }}>WhatsApp</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
