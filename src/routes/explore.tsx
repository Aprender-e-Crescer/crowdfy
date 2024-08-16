import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/component/card'

export const Route = createFileRoute('/explore')({
  component: Explore,
})

function Explore() {
  return (
    <>
      <Card /> {}
    </>
  )
}
