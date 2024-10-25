import Image, { type StaticImageData } from 'next/image'
import React from 'react'

import { Button } from './Button'

interface NewsCardProps {
  type?: string
  title: string
  description: string
  image: StaticImageData | string
  variant?: 'horizontal' | 'vertical'
}
const NewsCard = ({ type, title, description, image, variant = 'vertical' }: NewsCardProps) => (
  <div className='bg-white'>
    <div className={`flex ${variant === 'vertical' ? 'w-[797px] flex-row gap-10' : 'w-[640px] flex-col gap-5'}`}>
      <div className={`${variant === 'vertical' ? 'relative' : 'flex flex-col gap-10'}`}>
        {image && (
          <Image
            src={image}
            alt='news'
            width={280}
            height={200}
            className={`h-full max-w-max object-cover ${variant === 'vertical' ? 'h-[200px] w-[280px]' : 'h-[340px] min-w-[640px] rounded-3xl'}`}
          />
        )}
        <p
          className={`${variant === 'vertical' ? 'absolute' : ''} bottom-5 right-5 w-max rounded-full bg-turquoise-medium px-3 py-1 text-lg uppercase tracking-wider text-white`}
        >
          {type}
        </p>
      </div>
      <div className='space-y-5'>
        <p className='line-clamp-2 text-1.5xl font-medium leading-10 text-blue-charcoal'>{title}</p>
        <p className='line-clamp-2 text-xl leading-10 tracking-wide text-slate-blue'>{description}</p>
      </div>
    </div>

    {variant === 'vertical' ? null : (
      <Button variant='link' className='w-max p-0 text-1.5xl leading-9 text-slate-blue underline'>
        Read more
      </Button>
    )}
  </div>
)

export default NewsCard
