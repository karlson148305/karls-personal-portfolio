import { useEffect } from "react";
import { content, SITE_URL, type Lang } from "@/content";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Experience } from "@/components/Experience";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact, SiteFooter } from "@/components/Contact";

function setAttribute(selector: string, attribute: string, value: string) {
  document.querySelector(selector)?.setAttribute(attribute, value);
}

export default function Home({ lang }: { lang: Lang }) {
  const t = content[lang];

  useEffect(() => {
    const url = `${SITE_URL}${t.meta.path}`;
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    setAttribute('meta[name="description"]', "content", t.meta.description);
    setAttribute('link[rel="canonical"]', "href", url);
    setAttribute('meta[property="og:title"]', "content", t.meta.title);
    setAttribute('meta[property="og:description"]', "content", t.meta.description);
    setAttribute('meta[property="og:url"]', "content", url);
    setAttribute('meta[property="og:locale"]', "content", lang === "fr" ? "fr_FR" : "en_US");
  }, [lang, t]);

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-signal focus:px-4 focus:py-3 focus:font-semibold focus:text-ink"
      >
        {t.skipLink}
      </a>
      <SiteHeader t={t} lang={lang} />
      <main id="contenu" tabIndex={-1} className="outline-none">
        <Hero t={t} lang={lang} />
        <Profile t={t} />
        <Experience t={t} />
        <FeaturedProject t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <SiteFooter t={t} />
    </>
  );
}
