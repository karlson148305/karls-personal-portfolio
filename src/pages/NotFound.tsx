import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { content } from "@/content";

export default function NotFound() {
  const { pathname } = useLocation();
  const lang = pathname.startsWith("/en") ? "en" : "fr";
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `${t.notFound.title} · Karl Friedrich Ngueko Tchindeu`;
  }, [lang, t]);

  return (
    <main className="flex min-h-screen items-center bg-paper">
      <div className="container-page flex flex-col gap-5 py-20">
        <p className="m-0 font-mono text-[13px] uppercase tracking-[0.08em] text-signal-ink">404</p>
        <h1 className="heading-2">{t.notFound.title}</h1>
        <p className="m-0 max-w-[560px] text-ink-soft">{t.notFound.text}</p>
        <Link
          to={lang === "en" ? "/en" : "/"}
          className="inline-flex h-[52px] items-center self-start bg-signal px-6 font-semibold text-ink no-underline transition-colors hover:bg-[#FFC61A]"
        >
          {t.notFound.back}
        </Link>
      </div>
    </main>
  );
}
