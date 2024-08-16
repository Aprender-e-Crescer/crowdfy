import { createFileRoute } from '@tanstack/react-router'
import { Input } from "@/components/ui/input"


export const Route = createFileRoute('/my-campaigns') ({
    component: LiveCampaigns
})

export function LiveCampaigns() {
    return (
    <>
    <div className=' m-5 py-2 px-3 border shadow-md shadow-gray-400 rounded-[12px] max-w-96'>
        <h1 className='mt-1 mb-4 font-semibold text-xl'>🫰Funds donated to this campaign</h1>
        <p className='text-3xl'>$15.000 /<span className='font-bold'> $20.000</span></p>
        <div className="my-3 w-max-[360px] h-2 bg-[#84CC16] rounded-full"></div> 
        <p className='text-base'>185 doações</p>   
    </div>
    <div className=' m-5 py-2 px-3 border shadow-md shadow-gray-400 rounded-[12px] max-w-96'>
    <h1 className='mt-1 mb-4 font-semibold text-xl'>💪 Fund this campaign</h1>
    <Input/>
    </div>
    </>
    )
}