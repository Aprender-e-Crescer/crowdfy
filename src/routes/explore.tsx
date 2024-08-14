import { HeaderCard } from '@/components/headerCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore')({
  component: Explore,
})

function Explore() {
  return <HeaderCard />
}
