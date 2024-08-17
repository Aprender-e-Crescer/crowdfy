import { createFileRoute } from '@tanstack/react-router'
import { Cardmapa } from '@/components/component/Cardmapa'

export const Route = createFileRoute('/explore')({
  component: Explore,
})

function Explore() {
  return (
    <>
    <Cardmapa></Cardmapa>
    </>
  )
}