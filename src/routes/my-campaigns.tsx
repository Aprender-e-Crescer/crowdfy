import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/my-campaigns') ({
    component: LiveCampaigns
})

export function LiveCampaigns() {
    return (
    <>
        <h1 className ="font-semibold pl-6 pt-2 font-[inter] flex text-3xl" >Help me Fight Cancer</h1>
        <p className = "pl-6 pb-4 mt-1 text-[#475467] font-normal text-xs">Your current sales summary and activity.</p>

        <img className='pl-6 pt-2 pb-2' src="./src/assets/image.png" />

        <p className = "pl-6 pb-2 text-[#475467] pt-3"> In 2022 my husband and I moved to Portugal to follow our simple life dream and build our home and 
        homestead after completing a 4 years renovation project which we sold at a profit to finance our dream. </p>

        <p className='pl-6 pt-2 text-[#475467]'> Building our own home after COVID certainly had its challenges which My husband and I overcame with
        a smile and a lot of creativity. Yet what we didn't know is that our biggest challenge was still to come. </p>

        <p className='pl-6 pt-2 text-[#475467] underline decoration-1'>Read more.</p>
    </>
    )
}

