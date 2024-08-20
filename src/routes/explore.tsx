import { Map } from '@/components/map'
import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/component/card'
import { Sectionheader } from '@/components/component/Sectionheader'

export const Route = createFileRoute('/explore')({
  component: Explore,
})

function Explore() {
  return (
    <>
      <Card /> 
      <Sectionheader />
      <Map />
    </>
  )
}
