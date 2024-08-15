import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/my-campaigns') ({
    component: LiveCampaigns
})

export function LiveCampaigns() {
    return (
    <>
    <div className=' m-5 p-3 shadow-md shadow-gray-400 rounded-[12px] max-w-96'>
        <h1 className='font-semibold'>🫰Funds donated to this campaign</h1>
        <p className='text-3xl'>$15.000 /<span className='font-bold'> $20.000</span></p>
        <div className="my-3 w-[360px] h-2 bg-[#84CC16] rounded-full" />    
    </div>
    </>
    )
}