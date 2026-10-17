import { Fragment } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Content, FlowStep } from "@/content";
import { cn } from "@/lib/utils";
import { SectionIntro } from "./SectionIntro";

function FlowArrow() {
  return (
    <li aria-hidden="true" className="flex shrink-0 items-center justify-center">
      <ArrowRight className="hidden h-5 w-7 md:block" strokeWidth={2} />
      <ArrowDown className="h-6 w-5 md:hidden" strokeWidth={2} />
    </li>
  );
}

function StepBox({ step, className }: { step: FlowStep; className?: string }) {
  return (
    <li className={cn("min-w-0 border border-ink px-4 py-3.5", step.highlight ? "bg-signal" : "bg-surface", className)}>
      {step.step && (
        <span className={cn("block font-mono text-xs", step.highlight ? "text-ink" : "text-ink-muted")}>{step.step}</span>
      )}
      <span className="font-semibold">{step.label}</span>
    </li>
  );
}

function FlowDiagram({ t }: { t: Content }) {
  const { flow, lines, flowEnd, flowLabel, flowCaption } = t.project;

  return (
    <figure className="m-0 flex flex-col gap-3">
      <ol aria-label={flowLabel} className="m-0 flex list-none flex-col gap-2.5 p-0 md:flex-row md:items-center">
        {flow.map((step) => (
          <Fragment key={step.label}>
            <StepBox step={step} className="md:flex-1" />
            <FlowArrow />
          </Fragment>
        ))}
        <li className="flex min-w-0 flex-col gap-2 md:flex-[1.3]">
          {lines.map((line) => (
            <span key={line} className="border border-ink bg-surface px-4 py-2.5 font-semibold">
              {line}
            </span>
          ))}
        </li>
        <FlowArrow />
        <StepBox step={flowEnd} className="md:flex-[1.15]" />
      </ol>
      <figcaption className="text-[15px] text-ink-muted">{flowCaption}</figcaption>
    </figure>
  );
}

function EarlierProjects({ t }: { t: Content }) {
  return (
    <div className="flex flex-col gap-[18px] border-t border-line-strong pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="m-0 font-display text-[30px] font-semibold">{t.project.earlierTitle}</h3>
        <p className="m-0 text-ink-muted">{t.project.earlierIntro}</p>
      </div>
      <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {t.project.earlier.map((project) => (
          <li key={project.href} className="flex flex-col border border-line bg-surface">
            <img
              src={project.image}
              width={project.imageWidth}
              height={project.imageHeight}
              alt={project.alt}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/3] w-full object-cover"
            />
            <div className="flex flex-grow flex-col gap-2 p-4">
              <h4 className="m-0 text-lg font-semibold leading-snug">{project.title}</h4>
              <p className="m-0 text-[15px] text-ink-muted">{project.text}</p>
              <a
                href={project.href}
                className="mt-auto inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-ink underline-offset-4 hover:underline"
              >
                {t.project.githubLink}
                <span className="sr-only"> : {project.title}</span>
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FeaturedProject({ t }: { t: Content }) {
  return (
    <section id={t.ids.projects} aria-labelledby="project-title" className="scroll-mt-20 border-b border-line bg-paper-deep">
      <div className="container-page section-pad flex flex-col gap-9">
        <SectionIntro
          eyebrow={t.project.eyebrow}
          title={t.project.title}
          titleId="project-title"
          titleClassName="max-w-[900px]"
        />

        <div className="flex flex-wrap gap-x-12 gap-y-8">
          <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-4">
            <p className="m-0 text-[19px]">{t.project.question}</p>
            <p className="m-0 text-ink-soft">{t.project.methods}</p>
          </div>
          <div role="group" aria-label={t.project.kpisLabel} className="min-w-0 flex-[1_1_360px] self-start">
            <dl className="m-0 grid grid-cols-2 gap-px border border-ink bg-ink">
              {t.project.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className={cn("flex flex-col gap-1 p-[18px]", kpi.highlight ? "bg-signal" : "bg-surface")}
                >
                  <dt className={cn("order-last text-[15px]", kpi.highlight ? "text-ink" : "text-ink-muted")}>{kpi.label}</dt>
                  <dd className="m-0 font-display text-[32px] font-bold leading-none sm:text-[38px]">{kpi.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <FlowDiagram t={t} />
        <EarlierProjects t={t} />
      </div>
    </section>
  );
}
