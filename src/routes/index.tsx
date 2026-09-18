import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { WorksHanging } from "@/components/site/works-hanging";
import { Reels } from "@/components/site/reels";
import { About } from "@/components/site/about";
import { Inquiry } from "@/components/site/inquiry";
import { Footer } from "@/components/site/footer";

type HomeSearch = { work?: string };

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): HomeSearch => ({
    work: typeof search.work === "string" ? search.work : undefined,
  }),
  component: Home,
});

function Home() {
  const { work = "" } = Route.useSearch();

  return (
    <main>
      <Header inverted />
      <Hero />
      <Marquee />
      <Reels />
      <WorksHanging />
      <About />
      <Inquiry initialWork={work} />
      <Footer />
    </main>
  );
}
