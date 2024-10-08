/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/kMflSIl2Jp5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import imageAvatar1 from "@/assets/primeiraimagemavatar.png";
import imageAvatar2 from "@/assets/segundaimagemavatar.png";
import imageAvatar3 from "@/assets/terceiraimagemavatar.png";

export function RoadmapFooter() {
  return (
    <div className="w-full px-2">
      <div className="md:w-4/5 md:max-w-[680px] w-full md:mx-auto px-2 bg-white rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          Roadmap <span className="text-lg">(Coming Soon)</span>
        </h1>
        <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[20px] before:w-px before:bg-muted">
          <div className="flex items-start space-x-4">
            <Avatar className="bg-[#A3E635]">
              <AvatarImage src={imageAvatar1} alt="User Avatar" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-[#475467]">
                  Mateus Rodrigues
                </span>
                <span className="text-sm text-muted-foreground">
                  in 20 days
                </span>
              </div>
              <p className="text-sm text-[#475467]">
                is gathering{" "}
                <span className="font-bold text-[#84CC16]">9000</span> signs to
                city's prefecture
              </p>
              <blockquote className="text-sm text-muted-foreground mt-2">
                "We need to deliver this about of 9.000 signs to the mayor to he
                approve us as international english teacher"
              </blockquote>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Avatar className="bg-[#94A3B8]">
              <AvatarImage src={imageAvatar2} alt="User Avatar" />
              <AvatarFallback>add</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-[#475467]">
                  Mateus Rodrigues
                </span>
                <span className="text-sm text-muted-foreground">
                  in 20 days
                </span>
              </div>
              <p className="text-sm text-[#475467]">
                Raise together{" "}
                <span className="font-bold text-[#475569]">$1000</span> to pay
                for our (2 persons) flights to 1st weeks
              </p>
              <Button
                variant="greenShadow"
                className="hover:bg-[#7B7B7B] text-white"
              >
                Fund compaign
              </Button>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Avatar className="bg-[#94A3B8]">
              <AvatarImage src={imageAvatar3} alt="User Avatar" />
              <AvatarFallback>add</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-[#475467]">
                  Mateus Rodrigues
                </span>
                <span className="text-sm text-muted-foreground">
                  2 mins ago
                </span>
              </div>
              <p className="text-sm text-[#475467]">
                Make{" "}
                <span className="font-bold text-[#9333EA]">300 children</span>{" "}
                pass on the English proficiency test on China
              </p>
              <div className="flex space-x-2 mt-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                  <AvatarFallback className="bg- bg-[#DDA83A] text-white font-bold text-xl">
                    3
                  </AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                  <AvatarFallback className="bg- bg-[#4B9F38] text-white font-bold text-xl">
                    2
                  </AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                  <AvatarFallback className="bg- bg-[#C5192E] text-white font-bold text-xl">
                    4
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback className="bg- bg-[#A3E635] text-white"></AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-[#475467]">
                  Mateus Rodrigues
                </span>
                <span className="text-sm text-muted-foreground">
                  2 mins ago
                </span>
              </div>
              <p className="text-sm text-[#475467]">
                Your earned{" "}
                <span className="font-bold text-purple-600">300 </span>uSDG +{" "}
                <span className="font-bold text-[#9333EA]">10.000 </span>XP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
