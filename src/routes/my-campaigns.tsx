import { SubHeader } from "@/components/subHeader";
import { Textarea } from "@/components/ui/textarea";
import { UserProfile } from "@/components/user-profile";
import { Progress } from "@/components/ui/progress";
import share from "@/assets/share.svg";
import Heart from "@/assets/HeartFav.svg";
import IconDonate from "@/assets/IconDonate.svg";
import CheyennePerfil from "@/assets/CheyennePerfil.svg";
import MarilyUser from "@/assets/MarilyUser.svg";
import FranciPerfil from "@/assets/FranciPerfil.svg";
import AdilsonFranciPerfil from "@/assets/AdilsonFranciPerfil.svg";
import JocelynPerfil from "@/assets/JocelynPerfil.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { Eye, Flag, MapPin, Rocket } from "lucide-react";
import FemalePerfil from "@/assets/FemalePerfil.svg";
import ImagemMaeEFilha from "@/assets/ImageLiveCampaings.png";

export const Route = createFileRoute("/my-campaigns")({
  component: LiveCampaigns,
});

export function LiveCampaigns() {
  const buttonsSubHeader = [
    {
      title: "Overview",
      variant: "ghost" as const,
      route: "/Campaigns",
      icon: <Eye />,
    },
    {
      title: "My Campaigns",
      variant: "green" as const,
      route: "/my-campaigns",
      icon: <Rocket />,
    },
  ];

  return (
    <>
      <SubHeader buttons={buttonsSubHeader} />

      <main className="mt-12 justify-center w-full sm:gap-10 sm:flex flex-1 p-2 sm:p-3">
        <div className="2xl:w-[1200px]">
          <h1 className="font-semibold font-[inter] text-3xl">
            Help me Fight Cancer
          </h1>

          <p className="pb-4 mt-1 text-[#475467] font-normal text-xl">
            Your current sales summary and activity.
          </p>

          <div className="flex flex-1 flex-col justify-center sm:w-full">
            <img
              className="py-2 max-h-[876px] xl:w-full"
              src={ImagemMaeEFilha}
            />

            <p className="pb-2 text-[#475467] pt-3 text-xl text-justify flex flex-1">
              In 2022 my husband and I moved to Portugal to follow our simple
              life dream and build our home and homestead after completing a 4
              years renovation project which we sold at a profit to finance our
              dream.
            </p>

            <p className="pt-2 text-[#475467] text-xl text-justify">
              Building our own home after COVID certainly had its challenges
              which My husband and I overcame with a smile and a lot of
              creativity. Yet what we didn't know is that our biggest challenge
              was still to come.
            </p>
            <p className="pt-2 text-[#475467] underline decoration-1 text-2xl my-5">
              Read more.
            </p>
          </div>

          <hr />

          <h1 className="font-semibold mb-5 mt-5">👥 Organizadora</h1>
          <UserProfile
            title="Sindy Rheaume"
            img={FemalePerfil}
            valorDonate="Bragança"
            horarioDonate="Organizadora"
          />

          <Button className="mb-4" variant="outline">
            Contract
          </Button>

          <hr />

          <div className="my-4">
            <h1 className="my-4 font-semibold"> 🕊️ Words of support</h1>
            <p className="mb-4 font-medium italic">I just wanted to help 💪</p>
          </div>

          <UserProfile
            title="Sindy Rheaume"
            img={FemalePerfil}
            valorDonate="$150"
            horarioDonate="10 horas"
          />

          <p className="mb-4 font-medium italic">
            Thinking of you two and hoping you get better soon! 🙏
          </p>

          <UserProfile
            title="Michael O'Keff"
            img={FemalePerfil}
            valorDonate="$150"
            horarioDonate="10 horas"
          />

          <p className="mb-4 font-medium italic">Keep strong both 🫡</p>

          <UserProfile
            title="Michael Millward"
            img={FemalePerfil}
            valorDonate="$150"
            horarioDonate="10 Horas"
          />

          <Button className="mb-4" variant="outline">
            Show more
          </Button>

          <hr />

          <div className="flex flex-1 w-full my-4 justify-center sm:justify-between">
            <p className="font-medium">Created on November 2nd, 2023 </p>
            <MapPin />
          </div>

          <hr />

          <div className="flex flex-1 my-4">
            <Flag className="fill-black" />
            <p className="font-medium">Denunciar esta campanha</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-start lg:justify-center mb-6">
            <Button
              className="bg-[#D9F99D] text-[#1F2937] max-w-40 border-[#F7FEE7] font-medium"
              variant="shadow"
            >
              <img src={share} className="mx-2" />
              Share Campaign
            </Button>

            <Button
              className="border-[#E2E8F0] drop-shadow-sm text-[#1E293B] max-w-44 px-16 mx-2"
              variant="outline"
            >
              <img src={Heart} />
              Like
            </Button>
          </div>

          <div className="font-[inter] p-[18px] border-[1.58px] border-[#EAECF0] shadow-md shadow-gray-200 rounded-[12px] max-w-[400px]">
            <h1 className="text-[#475467] mt-1 mb-5 font-semibold text-xl">
              🫰Funds donated to this campaign
            </h1>
            <p className="text-[#1E293B] text-3xl">
              $15.000 /<span className="font-bold"> $20.000</span>
            </p>
            <div className="my-4 w-full h-[6px] bg-[#84CC16] rounded-full"></div>
            <p className="mb-4 text-base">185 doações</p>
            <div className="mt-2">
              <UserProfile
                title="Marilyn Aminoff"
                img={MarilyUser}
                valorDonate="$39.03"
                horarioDonate="8 horas"
              />
              <UserProfile
                title="Cheyenne Dokidis"
                img={CheyennePerfil}
                valorDonate="$50.00"
                horarioDonate="7 horas"
              />
              <UserProfile
                title="Miracle Franci"
                img={FranciPerfil}
                valorDonate="$51.04"
                horarioDonate="5 horas"
              />
              <UserProfile
                title="Adison Franci"
                img={AdilsonFranciPerfil}
                valorDonate="$57.25"
                horarioDonate="4 horas"
              />
              <UserProfile
                title="Jocelyn Rhiel Madsen"
                img={JocelynPerfil}
                valorDonate="$84.60"
                horarioDonate="10 horas"
              />
            </div>

            <div className="flex justify-between">
              <Button
                className="bg-[#D9F99D] text-[#1F2937] w-full border-[#F7FEE7] font-medium"
                variant="shadow"
              >
                <img src={share} className="mx-2" />
                Share Campaign
              </Button>

              <Button
                className="border-[#E2E8F0] drop-shadow-sm text-[#1E293B] w-full mx-2"
                variant="outline"
              >
                <img src={Heart} />
                Like
              </Button>
            </div>
          </div>

          <div className="font-[inter] p-[18px] border-[1.58px] border-[#EAECF0] shadow-md shadow-gray-200 rounded-[12px] max-w-[400px]">
            <h1 className="mt-1 mb-4 font-semibold text-xl text-[#475467]">
              💪 Fund this campaign
            </h1>
            <div className="my-5">
              <h1
                itemID="Fund"
                className="text-[#0F172A] mb-1 text-sm ml-1 tracking-wide font-medium"
              >
                Funding
              </h1>
              <Input />
              <p className="text-[#64748B] mt-1 text-sm">~$950,23</p>
            </div>

            <div className="mb-4">
              <h1
                itemID="Fund"
                className="text-[#0F172A] text-sm base ml-1 mb-1 tracking-wide font-medium"
              >
                Words of Support 🕊️
              </h1>
              <Textarea placeholder="Wish you a nice weekend and stay strong guys, I m here with you all 💪🫡💚️" />
              <p className="text-[#64748B] mt-1 ml-1 text-sm">
                Not only numbers make the difference on our lives :)
              </p>
            </div>

            <Button
              className="w-full bg-[#84CC16] hover:bg-green-600 text-white"
              variant="default"
            >
              <img src={IconDonate} />
              Donate now
            </Button>

            <div className="flex mt-3">
              <Progress />
              <p className="text-[#344054] text-base leading-6 mt-[7px] ml-3">
                1/3
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
