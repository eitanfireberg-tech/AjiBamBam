import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const Route = createFileRoute("/works")({
  component: WorksLayout,
});

function WorksLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
