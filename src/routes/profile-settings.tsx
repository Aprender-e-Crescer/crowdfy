import Footer from '@/components/ui/footer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile-settings')({
  component: ProfileSettings,
})

function ProfileSettings() {
  return (
    <Footer />
  )
}