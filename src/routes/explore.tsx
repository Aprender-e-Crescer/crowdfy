import { createFileRoute } from '@tanstack/react-router'
import { CardMapa } from '@/components/component/Cardmapa'

export const Route = createFileRoute('/explore')({
  component: Explore,
})

function Explore() {
  return (
    <>
      <CardMapa></CardMapa>
    </>
  )
}
;<CardMapa></CardMapa>
