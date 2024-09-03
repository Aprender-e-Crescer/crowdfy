import { createFileRoute } from "@tanstack/react-router";
import { RoadmapFooter } from "@/components/roadmap-comming-soon";
import Card from "@/components/card-help";

export const Route = createFileRoute("/")({
  component: HomePage,
});

export function HomePage() {
  return (
    <>
      <div className="bg-[url('@/assets/fundoHome.png')] bg-cover bg-no-repeat bg-center">
        <div className="flex justify-center items-center mt-12 w-full">
          <div className="mb-10 max-w-[850px] w-full flex flex-col justify-center items-center">
            <Card
              title="Help us Teach English for Kids on China Countryside"
              descrition="I need about 9.000 signatures to deliver to my mayor in two weeks and get that grant! Check more about our project and if you want to see how we are changing lovely children lifes on China countryside just teaching how they can use the internet."
              userName="Mateus Rodrigues"
              location="São Paulo - Brazil"
              barNumbers="4.533/9.000"
              backgroundImage={false}
            />
              <RoadmapFooter />
          </div>
        </div>
      </div>
    </>
  );
}
