'use client'

import { ChevronsLeft, ChevronsRight } from 'lucide-react'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationItem as ShadcnPaginationItem,
} from '@/components/ui/pagination'

interface IPaginationItem {
  totalPages: number
  currentPage: number
  setCurrentPage: (currentPage: number) => void
}

function getPageNumbers(currentPage: number, totalPages: number): (number | 'ellipsis')[] {
  const current = currentPage + 1 // 1-based for display
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  const pages: (number | 'ellipsis')[] = [1]
  if (current > 3) pages.push('ellipsis')
  const start = Math.max(2, current - 1)
  const end = Math.min(totalPages - 1, current + 1)
  for (let p = start; p <= end; p++) {
    if (p !== 1 && p !== totalPages) pages.push(p)
  }
  if (current < totalPages - 2) pages.push('ellipsis')
  if (totalPages > 1) pages.push(totalPages)
  return pages
}

const PaginationItem: React.FC<IPaginationItem> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  if (totalPages <= 0) return null

  const pageNumbers = getPageNumbers(currentPage, totalPages)
  const current1Based = currentPage + 1

  const handlePageClick = (page: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentPage(page - 1)
  }

  return (
    <Pagination className='mx-auto'>
      <PaginationContent>
        {/* First page */}
        <ShadcnPaginationItem>
          <PaginationLink
            href='#'
            onClick={(e) => {
              e.preventDefault()
              if (currentPage > 0) setCurrentPage(0)
            }}
            className={
              currentPage === 0
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer hover:bg-secondary/80 hover:text-white transition-all duration-300 ease-out p-3'
            }
            aria-label='Go to first page'
          >
            <ChevronsLeft className='h-4 w-4' />
          </PaginationLink>
        </ShadcnPaginationItem>

        {/* Previous */}
        <ShadcnPaginationItem>
          <PaginationPrevious
            href='#'
            onClick={(e) => {
              e.preventDefault()
              if (currentPage > 0) setCurrentPage(currentPage - 1)
            }}
            className={
              currentPage === 0
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer hover:bg-secondary/80 hover:text-white transition-all duration-300 ease-out p-3'
            }
          />
        </ShadcnPaginationItem>

        {/* Page numbers */}
        {pageNumbers.map((page, i) =>
          page === 'ellipsis' ? (
            <ShadcnPaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </ShadcnPaginationItem>
          ) : (
            <ShadcnPaginationItem key={page}>
              <PaginationLink
                href='#'
                onClick={handlePageClick(page)}
                isActive={page === current1Based}
                className='cursor-pointer hover:bg-secondary/80 hover:text-white'
              >
                {page}
              </PaginationLink>
            </ShadcnPaginationItem>
          )
        )}

        {/* Next */}
        <ShadcnPaginationItem>
          <PaginationNext
            href='#'
            onClick={(e) => {
              e.preventDefault()
              if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1)
            }}
            className={
              currentPage >= totalPages - 1
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer hover:bg-secondary/80 hover:text-white transition-all duration-300 ease-out p-3'
            }
          />
        </ShadcnPaginationItem>

        {/* Last page */}
        <ShadcnPaginationItem>
          <PaginationLink
            href='#'
            onClick={(e) => {
              e.preventDefault()
              if (currentPage < totalPages - 1) setCurrentPage(totalPages - 1)
            }}
            className={
              currentPage >= totalPages - 1
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer hover:bg-secondary/80 hover:text-white transition-all duration-300 ease-out p-3'
            }
            aria-label='Go to last page'
          >
            <ChevronsRight className='h-4 w-4' />
          </PaginationLink>
        </ShadcnPaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationItem
