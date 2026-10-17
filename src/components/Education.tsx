import type { Content } from "@/content";
import { cn } from "@/lib/utils";
import { SectionIntro } from "./SectionIntro";

const segmentTone = {
  ink: "bg-ink text-paper",
  paper: "bg-surface text-ink",
  signal: "bg-signal text-ink",
} as const;

const swatchTone = {
  ink: "bg-ink",
  paper: "border border-ink bg-surface",
  signal: "border border-ink bg-signal",
} as const;

export function Education({ t }: { t: Content }) {
  const { education } = t;

  return (
    <section id={t.ids.education} aria-labelledby="education-title" className="scroll-mt-20 border-b border-line">
      <div className="container-page section-pad flex flex-col gap-9">
        <SectionIntro eyebrow={education.eyebrow} title={education.title} titleId="education-title" />

        <div className="flex flex-wrap gap-x-12 gap-y-8">
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-4">
            <p className="m-0 font-mono text-sm text-ink-muted">{education.degreeMeta}</p>
            <div role="img" aria-label={education.splitLabel} className="flex h-11 border border-ink">
              {education.split.map((segment, index) => {
                const share = Number.parseInt(segment.share, 10);
                const isLast = index === education.split.length - 1;
                return (
                  <div
                    key={segment.title}
                    className={cn(
                      "flex items-center px-3 font-mono text-[13px]",
                      segmentTone[segment.tone],
                      index > 0 && "border-l border-ink",
                    )}
                    style={{ flex: isLast ? `1 1 ${share}%` : `0 0 ${share}%` }}
                  >
                    {segment.share}
                  </div>
                );
              })}
            </div>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {education.split.map((segment) => (
                <li key={segment.title} className="flex items-baseline gap-3">
                  <span aria-hidden="true" className={cn("h-3.5 w-3.5 shrink-0 translate-y-0.5", swatchTone[segment.tone])} />
                  <span>
                    <strong className="font-semibold">{segment.title}</strong> {segment.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-5">
            <div className="flex flex-col gap-1.5 border border-line bg-surface p-5">
              <h3 className="m-0 text-lg font-semibold">{education.bachelor.title}</h3>
              <p className="m-0 text-ink-soft">{education.bachelor.text}</p>
              <p className="m-0 font-mono text-[13px] text-ink-muted">{education.bachelor.period}</p>
            </div>
            <div className="flex flex-col gap-2 border border-line bg-surface p-5">
              <h3 className="m-0 text-lg font-semibold">{education.languages.title}</h3>
              <ul className="m-0 list-none p-0 text-ink-soft">
                {education.languages.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="m-0 text-ink-soft">{education.languages.certification}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
