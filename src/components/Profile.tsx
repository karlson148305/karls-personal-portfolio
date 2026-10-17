import { PORTRAIT, type Content } from "@/content";
import { SectionIntro } from "./SectionIntro";

export function Profile({ t }: { t: Content }) {
  return (
    <section id={t.ids.profile} aria-labelledby="profile-title" className="scroll-mt-20 border-b border-line">
      <div className="container-page section-pad flex flex-col gap-12">
        <div className="flex flex-wrap items-start gap-10">
          <img
            src={PORTRAIT.src}
            width={PORTRAIT.width}
            height={PORTRAIT.height}
            alt={t.profile.portraitAlt}
            loading="lazy"
            decoding="async"
            className="block aspect-[3/4] w-[280px] max-w-full flex-[0_1_280px] object-cover grayscale-[15%]"
          />
          <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-5">
            <SectionIntro eyebrow={t.profile.eyebrow} title={t.profile.title} titleId="profile-title" />
            <p className="m-0 max-w-[680px] text-[19px]">{t.profile.text}</p>
            <p className="m-0 max-w-[680px] text-ink-muted">{t.profile.note}</p>
          </div>
        </div>

        <ul className="m-0 grid list-none gap-5 p-0 lg:grid-cols-3">
          {t.profile.pillars.map((pillar) => (
            <li key={pillar.number} className="flex flex-col gap-3.5 border border-line bg-surface p-7">
              <span className="font-mono text-[13px] text-ink-muted">{pillar.number}</span>
              <h3 className="m-0 font-display text-[28px] font-semibold leading-[1.1]">{pillar.title}</h3>
              <p className="m-0 text-ink-soft">{pillar.text}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-1">
                {pillar.tags.map((tag) => (
                  <span key={tag.label} className={tag.learning ? "tag-dashed" : "tag-solid"}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
