import type { CSSProperties } from 'react';

type Props = {
  /** Base filename (without extension) under /public/assets. */
  name: string;
  alt: string;
  imgStyle?: CSSProperties;
  /** Eager-load + high priority for above-the-fold LCP images. */
  priority?: boolean;
};

/**
 * Renders a <picture> with a WebP source and a JPG fallback.
 * display:contents lets the <img> sit directly in the parent layout box.
 */
export default function Photo({ name, alt, imgStyle, priority = false }: Props) {
  return (
    <picture style={{ display: 'contents' }}>
      <source srcSet={`/assets/${name}.webp`} type="image/webp" />
      <img
        src={`/assets/${name}.jpg`}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        style={imgStyle}
      />
    </picture>
  );
}
