import { Roadmap } from "@/components/roadmap-comming-soon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <Roadmap />
    </div>
  );
}
