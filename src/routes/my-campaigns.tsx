import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/components/userProfile";
import FemalePerfil from "../assets/FemalePerfil.svg"
import { Flag, MapPin } from "lucide-react";

export const Route = createFileRoute('/my-campaigns') ({
    component: LiveCampaigns
    
})

export function LiveCampaigns() {
    return (
         <> 
            <h1 className=" font-semibold mb-5">👥 Organizadora</h1>
        
            <UserProfile
                title={'Sindy Rheaume'}
                img={FemalePerfil}
                text={'Bragança • Organizadora'}
            />
        
            <Button className="mb-4" variant={"outline"}> Contact</Button>
        
            <hr/>
                        
            <div className="my-4">
                <h1 className="my-4 font-semibold "> 🕊️ Words of support </h1>
                <p className="mb-4 font-medium italic">I just wanted to help 💪</p>
            </div>
        
            <UserProfile  
                title={`Sindy Rheaume`}
                img={FemalePerfil}
                text={'$150 • 10 Horas'}
            />
        
            <p className="mb-4 font-medium italic">Thinking of you two and hoping you get better soon! 🙏</p>
                        
            <UserProfile 
                title={`Michael O'Keff`}
                img={FemalePerfil}
                text={'$150 • 10 Horas'}
            />
        
            <p className="mb-4 font-medium italic">Keep strong both 🫡</p>
        
            <UserProfile
                title={`Michael Millward`}
                img={FemalePerfil}
                text={'$150 • 10 Horas'}
            />
        
            <Button className="mb-4" variant={"outline"}> Show more</Button>
        
            <hr />
        
            <div className="flex my-4 justify-between">
                <p className="font-medium">Created on November 2nd, 2023 </p> 
                <MapPin/>
            </div>
        
            <hr />
        
            <div className="flex my-4">
                <Flag className="fill-black" />
                <p className="font-medium">Denunciar esta campanha</p> 
            </div>
        </>
    )
}