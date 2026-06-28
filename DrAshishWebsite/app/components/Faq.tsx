'use client';

import { useState } from 'react';
import { faqs } from '@/lib/site';

export default function Faq() {
  // One open at a time; first item open by default (matches the design).
  const [open, setOpen] = useState(0);

  return (
    <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="faq-item">
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="serif" style={{ fontSize: '17.5px', fontWeight: 600, color: '#16201D', lineHeight: 1.3 }}>
                {f.q}
              </span>
              <span className="faq-indicator" aria-hidden="true">{isOpen ? '–' : '+'}</span>
            </button>
            {isOpen && <div className="faq-a">{f.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
