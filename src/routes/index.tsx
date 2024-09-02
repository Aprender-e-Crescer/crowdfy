import { createFileRoute } from "@tanstack/react-router";
import { RoadmapFooter } from "@/components/roadmap-comming-soon";

export const Route = createFileRoute("/")({
  component: HomePage,
});

export function HomePage() {
  return (
    <>
      <Card />
      <RoadmapFooter />
    </>
  );
}
