import type { Content } from "@/content";
import { SectionIntro } from "./SectionIntro";

export function Skills({ t }: { t: Content }) {
  return (
    <section id={t.ids.skills} aria-labelledby="skills-title" className="scroll-mt-20 border-b border-line">
      <div className="container-page section-pad flex flex-col gap-9">
        <SectionIntro eyebrow={t.skills.eyebrow} title={t.skills.title} titleId="skills-title" />
        <div className="grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group) => (
            <div key={group.title} className="flex min-w-0 flex-col gap-3">
              <h3 className="m-0 text-lg font-semibold">{group.title}</h3>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {group.items.map((item) => (
                  <li key={item} className={group.learning ? "chip-learning" : "chip"}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
