import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';

interface PageMetaProps {
  titleEn: string;
  titleNo: string;
  descriptionEn: string;
  descriptionNo: string;
  path: string;
  ogType?: string;
}

const SITE_NAME = 'Frostline AS';
const BASE_URL = 'https://frostline.no';
const OG_IMAGE = `${BASE_URL}/frostline-share.png`;

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function PageMeta({
  titleEn,
  titleNo,
  descriptionEn,
  descriptionNo,
  path,
  ogType = 'website',
}: PageMetaProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const title = language === 'no' ? titleNo : titleEn;
    const description = language === 'no' ? descriptionNo : descriptionEn;
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${BASE_URL}${path}`;

    document.title = fullTitle;
    document.documentElement.lang = language === 'no' ? 'nb' : 'en';

    setMeta('description', description);

    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', url, true);
    setMeta('og:image', OG_IMAGE, true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:locale', language === 'no' ? 'nb_NO' : 'en_US', true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', OG_IMAGE);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [language, titleEn, titleNo, descriptionEn, descriptionNo, path, ogType]);

  return null;
}
