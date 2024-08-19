import { createFileRoute } from '@tanstack/react-router'
import { Sectionheader } from '@/components/component/sectionheader'

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
