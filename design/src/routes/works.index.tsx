import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { availabilityCopy, uiCopy, works } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/works/")({
  component: WorksInventory,
});

function WorksInventory() {
  const { t, tAlt } = useLang();
  const [active, setActive] = useState(works[0]?.slug ?? "");
  const current = works.find((work) => work.slug === active) ?? works[0];

  return (
    <main className="min-h-svh bg-bg pt-20">
      <div className="px-4 pt-8 md:px-8">
        <p className="kicker mb-2">{t(uiCopy.inventory)}</p>
        <h1 className="text-section text-fg">{t(uiCopy.allWorks)}</h1>
        <p className="mt-2 text-muted">{tAlt(uiCopy.allWorks)}</p>
      </div>

      <div className="mt-10 grid lg:grid-cols-12 lg:gap-8">
        <ul className="lg:col-span-6">
          {works.map((work) => {
            const isActive = work.slug === active;
            return (
              <li key={work.slug} onMouseEnter={() => setActive(work.slug)}>
                <Link
                  to="/works/$slug"
                  params={{ slug: work.slug }}
                  className={cn(
                    "grid min-h-16 grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-line px-4 py-4 md:grid-cols-[3rem_1fr_8rem_auto] md:px-8",
                    "transition-colors duration-150",
                    isActive ? "bg-surface text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  <span className="kicker text-faint">{work.index}</span>
                  <span>
                    <span className="block font-serif text-lg text-fg">{t(work.title)}</span>
                    <span className="block text-xs text-muted">{tAlt(work.title)}</span>
                  </span>
                  <span className="hidden text-sm text-muted md:block">{work.size}</span>
                  <span className="kicker text-accent">{t(availabilityCopy[work.availability])}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {current ? (
          <div className="sticky top-20 hidden h-[calc(100svh-5rem)] items-center justify-center p-8 lg:col-span-6 lg:flex">
            <img
              src={current.image}
              alt={t(current.title)}
              className="max-h-[78svh] w-auto max-w-full object-contain"
            />
          </div>
        ) : null}
      </div>
    </main>
  );
}
