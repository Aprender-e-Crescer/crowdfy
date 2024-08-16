import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return <div>
   <Pagination className="flex justify-evenly">
  <PaginationContent >
    <PaginationItem>
      <PaginationPrevious href="#" />
      
    </PaginationItem>
    <div className="flex">
    <PaginationItem >
      <PaginationLink href="#">1</PaginationLink>
      <PaginationLink href="#">2</PaginationLink>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationLink href="#">8</PaginationLink>
    <PaginationLink href="#">9</PaginationLink>
    <PaginationLink href="#">10</PaginationLink>
    </div>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

  </div>
}