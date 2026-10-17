import { Download, Github, Linkedin, Mail } from "lucide-react";
import { CV_FILES, EMAIL, GITHUB_URL, LINKEDIN_URL, type Content } from "@/content";
import { SectionIntro } from "./SectionIntro";

const outlineLink =
  "inline-flex min-h-[52px] items-center gap-2.5 border border-paper px-5 font-semibold text-paper no-underline transition-colors hover:bg-paper hover:text-ink";

export function Contact({ t }: { t: Content }) {
  return (
    <section id={t.ids.contact} aria-labelledby="contact-title" className="on-dark scroll-mt-20 bg-ink text-paper">
      <div className="container-page flex flex-col gap-8 pb-12 pt-14 md:pt-20 lg:pt-[104px]">
        <div className="flex flex-col gap-3.5">
          <SectionIntro
            dark
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            titleId="contact-title"
            titleClassName="max-w-[820px]"
          />
          <p className="m-0 max-w-[640px] text-board-text">{t.contact.text}</p>
        </div>

        <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-[52px] items-center gap-2.5 bg-signal px-5 font-semibold text-ink no-underline transition-colors hover:bg-[#FFC61A]"
            >
              <Mail aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2} />
              {EMAIL}
            </a>
          </li>
          <li>
            <a href={LINKEDIN_URL} className={outlineLink}>
              <Linkedin aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2} />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={GITHUB_URL} className={outlineLink}>
              <Github aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2} />
              GitHub
            </a>
          </li>
        </ul>

        <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
          {t.contact.cvLinks.map((link) => {
            const file = CV_FILES[link.lang];
            return (
              <li key={link.lang}>
                <a
                  href={file.href}
                  download={file.filename}
                  className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-paper underline underline-offset-4 hover:text-signal"
                >
                  <Download aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function SiteFooter({ t }: { t: Content }) {
  return (
    <footer className="bg-ink text-board-text">
      <div className="container-page flex flex-wrap justify-between gap-3 border-t border-board-line pb-10 pt-6 font-mono text-[13px]">
        <span>{t.contact.copyright}</span>
        <span>{t.contact.location}</span>
      </div>
    </footer>
  );
}
