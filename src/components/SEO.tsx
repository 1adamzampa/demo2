import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const SITE_URL = 'https://aiomatrix.com';
const DEFAULT_IMAGE = '/ChatGPT_Image_Aug_2,_2026,_11_51_44_PM.png';

export function useSEO({ title, description, path = '', image = DEFAULT_IMAGE }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes('AIO Matrix') ? title : `${title} — AIO Matrix`;
    const canonical = `${SITE_URL}${path}`;
    const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonical);
  }, [title, description, path, image]);
}
