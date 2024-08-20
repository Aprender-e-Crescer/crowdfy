import { Localization } from '@/components/ui/localization'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile-settings')({
  component: ProfileSettings,
})

function ProfileSettings() {
  return <Localization />
}
