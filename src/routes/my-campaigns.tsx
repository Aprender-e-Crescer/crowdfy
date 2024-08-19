import { SubHeader } from '@/components/subHeader';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserProfile } from "@/components/userProfile";
import { createFileRoute } from '@tanstack/react-router';
import { Eye, Flag, MapPin, Rocket } from "lucide-react";
import FemalePerfil from "../assets/FemalePerfil.svg";
        
export const Route = createFileRoute('/my-campaigns') ({
    component: LiveCampaigns
})

export function LiveCampaigns() {

     const buttons = [
        { title: 'Overview', variant:'ghost', className: '', route: '', icon: <Eye />},
        { title: 'My Campaigns', variant:'', className: 'bg-lime-200 hover:bg-lime-300', route: '', icon: <Rocket /> }
    ];

    return (
         <> 
        <SubHeader buttons={buttons}/>

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
    
            <div className=' m-5 py-2 px-3 border shadow-md shadow-gray-400 rounded-[12px] max-w-96'>
                  <h1 className='text-[#475467] mt-1 mb-4 font-semibold text-xl'>🫰Funds donated to this campaign</h1>
                  <p className='text-3xl'>$15.000 /<span className='font-bold'> $20.000</span></p>
                  <div className="my-3 w-max-[360px] h-2 bg-[#84CC16] rounded-full"></div> 
                  <p className='text-base'>185 doações</p>   
              </div>
              <div className=' m-5 py-2 px-3 border shadow-md shadow-gray-400 rounded-[12px] max-w-96'>
              <h1 className='mt-1 mb-4 font-semibold text-xl text-[#475467]'>💪 Fund this campaign</h1>
              <label htmlFor="Fund">
                  <h1 itemID='Fund' className='text-[#0F172A] ml-1 font-medium'>Funding</h1>
                  <Input/> 
              </label>
            </div>
    </>
    )
}