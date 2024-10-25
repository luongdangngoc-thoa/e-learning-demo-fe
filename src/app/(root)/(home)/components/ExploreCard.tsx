import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/Button'
import { Ratings } from '@/components/RatingStar'
import { cn } from '@/shared/utils/tailwind.util'

const exploreCardVariants = cva('flex gap-7 shadow-sm max-w-[684px] rounded-3xl p-7 bg-white', {
  variants: {
    variant: {
      default: 'border border-2 border-turquoise-medium',
      destructive: 'border border-destructive'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export interface ExploreCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof exploreCardVariants> {
  className?: string
}

const ExploreCard = ({ className, variant }: ExploreCardProps) => (
  <div className={cn(exploreCardVariants({ variant, className }))}>
    <Image src='/images/quizzes.png' alt='quizzes' width={100} height={200} className='h-full grow object-cover' />
    <div className='flex w-2/4 flex-col justify-between'>
      <div>
        <h3 className='text-xl font-bold leading-10'>Integer id Orc Sed Ante Tincidunt</h3>
        <p className='text-sm text-gray-charcoal'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit
        </p>
      </div>
      <div className='flex flex-col gap-2.5'>
        <div className='flex items-center justify-between'>
          <Ratings rating={5} variant='yellow' />
          <span className='font-bold'>$ 450</span>
        </div>
        <Button variant='outline' className='w-full rounded-xl'>
          EXPLORE
        </Button>
      </div>
    </div>
  </div>
)

export default ExploreCard
