import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/my-campaigns') ({
    component: LiveCampaigns
})

export function LiveCampaigns() {
    return (
    <>
    <div className='m-5 shadow-md shadow-gray-400 rounded '>
        <h1>🫰Funds donated to this campaign</h1>
    </div>
    </>
    )
}