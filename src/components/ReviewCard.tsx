import Image, { type StaticImageData } from 'next/image'
import React from 'react'

import { Skeleton } from './ui/skeleton'

export interface ReviewCardProps {
  logo: StaticImageData | string
  title: string
  description?: string
  className?: string
  color?: string
  isFetching?: boolean
}
const ReviewCard = ({ logo, title, description, color = '#d9d9d9', isFetching, className }: ReviewCardProps) => (
  <div>
    {isFetching ? (
      <div
        className={`${className} flex w-[384px] flex-col items-center gap-5 rounded-2.5xl bg-white px-7 pb-15 pt-9 shadow-md`}
      >
        <Skeleton className='size-[118px]' />
        <Skeleton className='h-8 w-full' />
        <Skeleton className='h-[91px] w-full' />
      </div>
    ) : (
      <div
        className={`${className} flex w-[384px] flex-col items-center gap-5 rounded-2.5xl bg-white px-7 pb-15 pt-9 shadow-md`}
      >
        <div
          className='flex h-[118px] w-[118px] items-center justify-center rounded-md'
          style={{ backgroundColor: color }}
        >
          <Image src={logo} width={118} height={118} alt='image' className='max-w-max rounded-md' />
        </div>
        <p className='text-2xl font-semibold'>{title}</p>
        <p className='line-clamp-4 text-center tracking-wide text-slate-blue'>{description}</p>
      </div>
    )}
  </div>
)

export default ReviewCard
