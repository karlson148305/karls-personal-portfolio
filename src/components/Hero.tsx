import { Download } from "lucide-react";
import { CV_FILES, type Content, type Lang } from "@/content";

interface HeroProps {
  t: Content;
  lang: Lang;
}

function ResultsBoard({ t }: { t: Content }) {
  return (
    <div
      role="group"
      aria-label={t.hero.boardLabel}
      className="flex min-w-0 flex-[1_1_360px] flex-col border border-board-line bg-board"
    >
      <div className="flex items-center justify-between border-b border-board-line px-5 py-3.5 font-mono text-xs uppercase tracking-[0.08em] text-board-text">
        <span>{t.hero.boardTitle}</span>
        <span>{t.hero.boardCountries}</span>
      </div>
      <dl className="m-0 flex flex-1 flex-col">
        {t.hero.results.map((result) => (
          <div
            key={result.source + result.label}
            className="grid flex-1 grid-cols-[6.5rem_minmax(0,1fr)] content-center items-center gap-x-4 border-b border-board-line p-5 sm:grid-cols-[7.75rem_minmax(0,1fr)]"
          >
            <dt className="order-last flex flex-col gap-0.5">
              <span className="text-lg font-semibold leading-tight">{result.label}</span>
              <span className="font-mono text-xs text-board-text">{result.source}</span>
            </dt>
            <dd className="m-0 whitespace-nowrap font-display text-[46px] font-bold leading-none text-signal sm:text-[54px]">
              {result.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="m-0 px-5 py-4 text-[15px] text-board-text">{t.hero.boardFooter}</p>
    </div>
  );
}

export function Hero({ t, lang }: HeroProps) {
  const cv = CV_FILES[lang];

  return (
    <section id={t.ids.home} aria-labelledby="hero-title" className="on-dark scroll-mt-20 bg-ink text-paper">
      <div className="container-page flex flex-wrap items-stretch gap-12 py-14 md:py-20 lg:py-[104px]">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-6">
          <p className="m-0 font-mono text-[13px] uppercase tracking-[0.08em] text-signal">{t.hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="m-0 font-display text-[48px] font-bold uppercase leading-[0.92] tracking-[0.01em] sm:text-[72px] lg:text-[clamp(72px,7vw,100px)]"
          >
            Karl Friedrich
            <br />
            Ngueko Tchindeu
          </h1>
          <p className="m-0 max-w-[640px] text-[21px] font-medium leading-[1.35] md:text-[25px] lg:text-[27px]">
            {t.hero.lead}
          </p>
          <p className="m-0 max-w-[600px] text-board-text">{t.hero.sub}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={cv.href}
              download={cv.filename}
              className="inline-flex h-[52px] items-center gap-2.5 bg-signal px-6 text-[17px] font-semibold text-ink no-underline transition-colors hover:bg-[#FFC61A]"
            >
              <Download aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2} />
              {t.hero.ctaCv}
            </a>
            <a
              href={`#${t.ids.contact}`}
              className="inline-flex h-[52px] items-center border border-paper px-6 text-[17px] font-semibold text-paper no-underline transition-colors hover:bg-paper hover:text-ink"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </div>
        <ResultsBoard t={t} />
      </div>
    </section>
  );
}
