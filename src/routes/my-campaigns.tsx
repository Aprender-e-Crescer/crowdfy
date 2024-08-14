import { createFileRoute } from '@tanstack/react-router'

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