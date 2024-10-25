import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/Button'

export interface IntroCardProps {
  backgroundImage: string
  title: string
  variant: 'default' | 'outline'
  buttonLabel?: string
}
const IntroCard = ({ backgroundImage, title, variant = 'default', buttonLabel }: IntroCardProps) => (
  <div className='relative w-max'>
    {backgroundImage && <Image src={backgroundImage} alt='instructors' width={600} height={400} />}
    <div className='absolute left-[50%] top-[50%] z-20 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-4'>
      <p className='text-3.2xl font-semibold uppercase text-white'>{title}</p>
      <Button
        variant={variant}
        className={`h-20 w-72 text-1.5xl font-medium ${
          variant === 'outline' ? 'border-white bg-transparent text-white' : 'bg-blue-electric/90 text-white'
        }`}
      >
        {buttonLabel}
      </Button>
    </div>
  </div>
)

export default IntroCard
