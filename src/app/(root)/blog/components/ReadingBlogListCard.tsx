import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/Button'

export interface ReadingBlogListCardProps {
  image: string
  variant: 'default' | 'outline'
  buttonLabel?: string
}

const ReadingBlogListCard: React.FC<ReadingBlogListCardProps> = ({ image, variant = 'default', buttonLabel }) => (
  <div className='relative w-max'>
    {image && <Image src={image} alt='blog' width={356} height={327} className='bg-cover bg-[50%_50%] object-cover' />}
    <div className='absolute left-1/2 top-3/4 z-20 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-4'>
      <Button
        variant={variant}
        className={`w-60 rounded-2xl bg-white/80 text-1.5xl font-medium ${
          variant === 'outline' ? 'border-white text-black' : 'bg-blue-electric/90 text-black'
        }`}
      >
        {buttonLabel}
      </Button>
    </div>
  </div>
)

export default ReadingBlogListCard
