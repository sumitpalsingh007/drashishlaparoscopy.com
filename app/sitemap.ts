import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { serviceSlugs } from '@/lib/services';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${SITE_URL}/treatments/${slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
