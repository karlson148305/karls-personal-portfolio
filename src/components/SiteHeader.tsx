import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { CV_FILES, type Content, type Lang } from "@/content";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  t: Content;
  lang: Lang;
}

function LanguageSwitch({ lang, label }: { lang: Lang; label: string }) {
  const base =
    "inline-flex h-10 min-w-[44px] items-center justify-center font-mono text-[13px] no-underline transition-colors";
  const active = "bg-ink text-paper";
  const idle = "text-ink hover:bg-paper-deep";

  return (
    <nav aria-label={label} className="flex shrink-0 border border-ink">
      <Link
        to="/"
        lang="fr"
        hrefLang="fr"
        aria-current={lang === "fr" ? "page" : undefined}
        className={cn(base, lang === "fr" ? active : idle)}
      >
        FR<span className="sr-only"> — version française</span>
      </Link>
      <Link
        to="/en"
        lang="en"
        hrefLang="en"
        aria-current={lang === "en" ? "page" : undefined}
        className={cn(base, lang === "en" ? active : idle)}
      >
        EN<span className="sr-only"> — English version</span>
      </Link>
    </nav>
  );
}

export function SiteHeader({ t, lang }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cv = CV_FILES[lang];

  useEffect(() => {
    setMenuOpen(false);
  }, [lang]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="container-page flex items-center justify-between gap-4 py-3 lg:py-[18px]">
        <a href={`#${t.ids.home}`} className="flex min-w-0 items-center gap-3 text-ink no-underline">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-ink font-mono text-sm font-medium tracking-[0.04em] text-signal"
          >
            KFN
          </span>
          <span className="truncate font-display text-xl font-semibold tracking-[0.02em]">
            <span className="sm:hidden">Karl Friedrich</span>
            <span className="hidden sm:inline">Karl Friedrich Ngueko Tchindeu</span>
          </span>
        </a>

        <nav aria-label={t.header.navLabel} className="hidden lg:block">
          <ul className="m-0 flex list-none gap-x-[22px] p-0 text-base font-medium">
            {t.header.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${t.ids[item.id]}`}
                  className="inline-block py-2 text-ink no-underline underline-offset-4 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitch lang={lang} label={t.header.langLabel} />
          <a
            href={cv.href}
            download={cv.filename}
            className="hidden h-[42px] items-center gap-2 bg-signal px-4 font-semibold text-ink no-underline transition-colors hover:bg-[#FFC61A] sm:inline-flex"
          >
            <Download aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2} />
            {t.header.cvButton}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-ink text-ink lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      <nav id="menu-mobile" aria-label={t.header.navLabel} hidden={!menuOpen} className="border-t border-line lg:hidden">
        <ul className="container-page m-0 flex list-none flex-col py-2">
          {t.header.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${t.ids[item.id]}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-line py-3 text-lg font-medium text-ink no-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pb-2 pt-3 sm:hidden">
            <a
              href={cv.href}
              download={cv.filename}
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-11 items-center gap-2 bg-signal px-4 font-semibold text-ink no-underline"
            >
              <Download aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2} />
              {t.header.cvButton}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
