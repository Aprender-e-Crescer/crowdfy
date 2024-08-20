import { Map } from '@/components/map'
import { createFileRoute } from '@tanstack/react-router'
import { Sectionheader } from '@/components/component/Sectionheader'

export const Route = createFileRoute('/explore')({
  component: Explore,
})

function Explore() {
  return (
    <>
      <Sectionheader />
    </>
  )
}
