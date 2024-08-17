import Card from '@/components/card'
import { Roadmap } from '@/components/roadmap'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return <div className="p-2">
    <div className='border-white flex flex-col'>
    <Card/>
    <Roadmap/>
    </div>
  </div>
}