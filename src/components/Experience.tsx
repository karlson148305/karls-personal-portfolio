import type { Content } from "@/content";
import { cn } from "@/lib/utils";
import { SectionIntro } from "./SectionIntro";

export function Experience({ t }: { t: Content }) {
  return (
    <section id={t.ids.experience} aria-labelledby="experience-title" className="scroll-mt-20 border-b border-line">
      <div className="container-page section-pad flex flex-col gap-10">
        <SectionIntro eyebrow={t.experience.eyebrow} title={t.experience.title} titleId="experience-title" />

        <ol className="m-0 flex list-none flex-col gap-10 p-0">
          {t.experience.jobs.map((job) => (
            <li
              key={job.org}
              className={cn(
                "grid gap-x-10 gap-y-4 pt-7 md:grid-cols-[220px_minmax(0,1fr)]",
                job.featured ? "border-t-2 border-ink" : "border-t border-line",
              )}
            >
              <div className="flex flex-col gap-1.5 font-mono text-sm text-ink-muted">
                <span className="text-ink">{job.period}</span>
                <span>{job.place}</span>
                <span>{job.kind}</span>
              </div>
              <article className="flex min-w-0 flex-col gap-3">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
                  <h3 className="m-0 font-display text-[26px] font-semibold leading-[1.1] md:text-[30px]">{job.role}</h3>
                  <span
                    className={cn(
                      "font-mono text-xs",
                      job.badge.current ? "bg-signal px-2.5 py-1 text-ink" : "border border-ink px-[9px] py-[3px]",
                    )}
                  >
                    {job.badge.label}
                  </span>
                </div>
                <p className="m-0 font-semibold">{job.org}</p>
                {job.summary && <p className="m-0 max-w-[680px] text-ink-soft">{job.summary}</p>}
                {job.bullets && (
                  <ul className="m-0 flex max-w-[720px] list-disc flex-col gap-1.5 pl-5 text-ink-soft">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
