import { Link, Navigate, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { KenBurns } from "@/components/site/ken-burns";
import { WorkCaption } from "@/components/site/work-caption";
import { uiCopy, workBySlug } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/works/$slug")({
  component: WorkDossier,
});

function WorkDossier() {
  const { slug } = Route.useParams();
  const work = workBySlug(slug);
  const { t, dir } = useLang();

  if (!work) return <Navigate to="/works" />;

  return (
    <main className="min-h-svh bg-bg pt-20">
      <div className="grid lg:grid-cols-12 lg:min-h-[calc(100svh-5rem)]" dir="ltr">
        <div className="flex items-center justify-center px-4 py-8 lg:col-span-8 lg:px-10">
          <KenBurns
            src={work.image}
            alt={t(work.title)}
            fit="contain"
            className="max-h-[82svh] w-full"
            imgClassName="mx-auto max-h-[82svh] w-auto max-w-full object-contain"
            priority
          />
        </div>
        <aside
          dir={dir}
          className="flex flex-col justify-center border-t border-line px-4 py-10 lg:col-span-4 lg:border-s lg:border-t-0 lg:px-8"
        >
          <Link
            to="/works"
            className="mb-8 inline-flex min-h-11 w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4 rtl:rotate-180" strokeWidth={1.5} />
            {t(uiCopy.back)}
          </Link>
          <WorkCaption work={work} showLink={false} />
          <a
            href={`/?work=${work.slug}#inquiry`}
            className="mt-8 inline-flex min-h-11 w-fit items-center border-b border-accent pb-1 text-sm text-fg hover:text-accent"
          >
            {t(uiCopy.inquireThis)}
          </a>
        </aside>
      </div>
    </main>
  );
}
