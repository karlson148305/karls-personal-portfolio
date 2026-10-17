import { cn } from "@/lib/utils";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  titleId: string;
  dark?: boolean;
  titleClassName?: string;
}

/** Small label + section title used at the top of every section. */
export function SectionIntro({ eyebrow, title, titleId, dark = false, titleClassName }: SectionIntroProps) {
  return (
    <div className="flex flex-col gap-3.5">
      <p
        className={cn(
          "m-0 font-mono text-[13px] uppercase tracking-[0.08em]",
          dark ? "text-signal" : "text-signal-ink",
        )}
      >
        {eyebrow}
      </p>
      <h2 id={titleId} className={cn("heading-2", titleClassName)}>
        {title}
      </h2>
    </div>
  );
}
