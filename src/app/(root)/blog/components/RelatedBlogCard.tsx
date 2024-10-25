import Image from 'next/image'
import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'

export interface RelatedBlogProps {
  title: string
  image: string
  author: string
  description: string
  view: number
  isFetching?: boolean
}

const RelatedBlog: React.FC<RelatedBlogProps> = ({ title, image, author, description, view, isFetching }) => (
  <div className='mx-auto'>
    <div className='h-full w-full rounded-2.5xl bg-white/80 px-8 py-15 shadow-soft-purple-shadow'>
      {isFetching ? (
        <div className='z-10'>
          <Skeleton className='h-[382px] w-[634px]' />
          <Skeleton className='mt-3 h-10 w-full' />
          <div className='flex w-full items-center gap-2.5'>
            <Skeleton className='my-5 h-10 w-10 rounded-full' />
            <Skeleton className='h-7 w-full' />
          </div>
          <Skeleton className='mt-5 h-15 w-full' />
          <div className='mt-5 flex items-center justify-between'>
            <Skeleton className='h-7 w-25' />
            <Skeleton className='h-7 w-25' />
          </div>
        </div>
      ) : (
        <div>
          {image && (
            <Image src={image} width={719} height={382} alt={title} className='h-[382px] rounded-2.5xl object-cover' />
          )}
          <div className='mt-3'>
            <p className='text-2xl font-medium not-italic leading-11 text-blue-charcoal'>{title}</p>
          </div>
          <div className='mt-8 flex items-center'>
            <Image
              src='/images/avatar.png'
              alt='avatar'
              width={40}
              height={40}
              className='rounded-15xl bg-gray-light'
            />
            <p className='ml-4 text-lg font-medium text-black'>Lina</p>
          </div>
          <div className='mt-6'>
            <p className='line-clamp-2 text-xl leading-9 tracking-0.5 text-slate-blue'>{description}</p>
          </div>
          <div className='mt-11 flex items-center justify-between'>
            <p className='whitespace-normal text-xl leading-9 tracking-0.5 text-slate-blue underline'>Read more</p>
            <div className='flex items-center'>
              <Image src='/svg/eye.svg' alt='Eye Icon' width={22} height={15} className='mr-6' />
              <p className='text-xl leading-9 text-slate-blue'>{view}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
)

export default RelatedBlog
