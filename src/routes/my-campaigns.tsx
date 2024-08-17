import { createFileRoute } from '@tanstack/react-router'
import { Input } from "@/components/ui/input"
import { SubHeader } from '@/components/subHeader'
import { Button } from '@/components/ui/button'
import { DESTRUCTION } from 'dns'
import share from '@/assets/share.svg'
import Heart from '@/assets/HeartFav.svg'
import { Textarea } from '@/components/ui/textarea'

/*Arrumar o label  e  estilizar o input*/
export const Route = createFileRoute('/my-campaigns') ({
    component: LiveCampaigns
})

export function LiveCampaigns() {
    return (
    <>
    <SubHeader />


    <div className='font-[inter] m-5 py-2 px-3 border shadow-md shadow-gray-200 rounded-[12px] max-w-96'>
        <h1 className='text-[#475467]  mt-1 mb-4 font-semibold text-xl'>🫰Funds donated to this campaign</h1>
        <p className='text-3xl'>$15.000 /<span className='font-bold'> $20.000</span></p>
        <div className="my-3 w-max-[360px] h-2 bg-[#84CC16] rounded-full"></div> 
        <p className='text-base'>185 doações</p>
        <div className='flex justify-between'>
        <Button className='bg-[#D9F99D] text-[#1F2937] max-w-40 border-[#F7FEE7] font-medium' variant={'shadow'}><img src={share} className='mx-2' />Share Campaign </Button>
        <Button className='border-[#E2E8F0] drop-shadow-sm text-[#1E293B] max-w-44 px-16 mx-2' variant={'outline'}><img src={Heart}/>Like</Button>
        </div>
    </div>

        {/*Começo do segundo card de financie esta campanha */}

    <div className='font-[inter] m-5 py-2 px-3 border shadow-md shadow-gray-200 rounded-[12px] max-w-96'>
    <h1 className='mt-1 mb-4 font-semibold text-xl text-[#475467]'>💪 Fund this campaign</h1>
    <h1 itemID='Fund' className='text-[#0F172A] text-sm ml-1 tracking-wide font-medium'>Funding</h1>
    <Input/> 
    <p className='text-[#64748B] m-1 text-sm'>~$950,23</p>
    <h1 itemID='Fund' className='text-[#0F172A] text-sm base ml-1 tracking-wide font-medium'>Words of Support 🕊️</h1>
    <Textarea placeholder='Wish you a nice weekend and stay strong guys, I m here with you all 💪🫡💚️'/>
    </div>
    </>
    )
}