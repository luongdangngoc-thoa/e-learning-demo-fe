'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/Pagination'

interface CustomPaginationProps {
  totalPage: number
  currentPage: number
  onPageChange: (page: number) => void
  onPageNext: () => void
  onPagePrevious: () => void
}

export default function CustomPagination({
  totalPage,
  currentPage,
  onPageChange,
  onPageNext,
  onPagePrevious
}: CustomPaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={onPagePrevious} />
        </PaginationItem>
        {[...Array(totalPage)].map((_, index) => (
          <PaginationItem
            key={new Date(index).getTime()}
            onClick={() => {
              onPageChange(index + 1)
            }}
          >
            <PaginationLink isActive={index + 1 === currentPage}>{index + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={onPageNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
