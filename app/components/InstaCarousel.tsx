'use client';

import { useEffect, useRef } from 'react';
import Photo from './Photo';
import { IconInstagram, IconArrowRight } from './icons';
import { INSTAGRAM_URL } from '@/lib/site';

type Tile = { src: string; alt: string };

// Progressive-enhancement carousel: works as a native swipe list without JS;
// arrows + gentle autoplay layer on once hydrated. Static-export friendly.
export default function InstaCarousel({ tiles }: { tiles: Tile[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const step = () => {
    const el = trackRef.current;
    const card = el?.querySelector('a') as HTMLElement | null;
    return card ? card.offsetWidth + 14 : (el?.clientWidth ?? 300) * 0.8;
  };

  const go = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;
    let left = el.scrollLeft + dir * step();
    if (dir > 0 && atEnd) left = 0;
    if (dir < 0 && atStart) left = el.scrollWidth;
    el.scrollTo({ left, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let paused = false;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', resume);
    el.addEventListener('pointerdown', pause);
    const id = setInterval(() => { if (!paused) go(1); }, 4000);
    return () => {
      clearInterval(id);
      el.removeEventListener('pointerenter', pause);
      el.removeEventListener('pointerleave', resume);
      el.removeEventListener('pointerdown', pause);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={trackRef} className="insta-track" style={{ display: 'flex', gap: 14, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 4 }}>
        {tiles.map((t, i) => (
          <a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-tile"
            style={{ flex: '0 0 auto', width: 'clamp(240px, 78vw, 320px)', scrollSnapAlign: 'center' }}
            aria-label={`${t.alt} — open Instagram`}
          >
            <Photo name={t.src} alt={t.alt} imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <span className="ig-ovl"><IconInstagram size={22} /></span>
          </a>
        ))}
      </div>
      <button type="button" aria-label="Previous posts" onClick={() => go(-1)} className="carousel-btn" style={{ left: 8 }}>
        <IconArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
      </button>
      <button type="button" aria-label="Next posts" onClick={() => go(1)} className="carousel-btn" style={{ right: 8 }}>
        <IconArrowRight size={20} />
      </button>
    </div>
  );
}
