'use client'

import React from 'react'

import CustomPagination from '@/components/shared/CustomPagination'

import BookCard from './BookCard'

const Book = () => (
  <div className='mt-16'>
    <h3 className='text-3xl font-medium'>Literature course</h3>
    <div className='mt-12.5 grid grid-cols-3 gap-10'>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
    <div className='my-12.5'>
      <CustomPagination
        currentPage={2}
        totalPage={5}
        onPageChange={() => {}}
        onPageNext={() => {}}
        onPagePrevious={() => {}}
      />
    </div>
  </div>
)

export default Book
