import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { ButtonProps, buttonVariants } from '@/components/ui/button'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      'px-2 py-1 text-sm',
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

type PaginationPreviousProps = React.ComponentProps<typeof PaginationLink> & {
  useArrows: boolean
}

const PaginationPrevious = ({
  className,
  useArrows = false,
  ...props
}: PaginationPreviousProps) => (
  <Link
    to="/explore"
    className={cn('text-start rounded-lg overflow-hidden font-sans', className)}
    aria-label="Go to previous page"
  >
    <PaginationLink
      size="default"
      className={cn('gap-1 pl-2.5', className)}
      {...props}
    >
      {useArrows ? (
        <FaArrowLeft className="h-4 w-4" />
      ) : (
        <ChevronLeft className="h-4 w-4" />
      )}
      <span className="hidden sm:inline">Previous</span>{' '}
      {/* Esconde em telas pequenas */}
    </PaginationLink>
  </Link>
)
PaginationPrevious.displayName = 'PaginationPrevious'

type PaginationNextProps = React.ComponentProps<typeof PaginationLink> & {
  useArrows: boolean
}

const PaginationNext = ({
  className,
  useArrows = false,
  ...props
}: PaginationNextProps) => (
  <Link
    to="/explore"
    className={cn('text-start rounded-lg overflow-hidden font-sans', className)}
    aria-label="Go to next page"
  >
    <PaginationLink
      size="default"
      className={cn('gap-1 pr-2.5', className)}
      {...props}
    >
      <span className="hidden sm:inline">Next</span>{' '}
      {/* Esconde em telas pequenas */}
      {useArrows ? (
        <FaArrowRight className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </PaginationLink>
  </Link>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
