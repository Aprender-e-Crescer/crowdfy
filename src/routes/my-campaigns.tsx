import { createFileRoute } from '@tanstack/react-router'
import { Activity } from '@/components/activity'

export const Route = createFileRoute('/live-campaigns') ({
    component: LiveCampaigns
})

export function LiveCampaigns() {
    return (
    <>
        <h1>Hello campaigns</h1>
    </>
    )
}