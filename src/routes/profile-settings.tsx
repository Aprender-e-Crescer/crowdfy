import PersonalInfo from '@/components/ui/personalInfo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile-settings')({
  component: ProfileSettings,
})

function ProfileSettings() {
  return (
    <div>
      <PersonalInfo />
    </div>
  )
}
