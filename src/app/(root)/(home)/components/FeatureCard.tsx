import Image, { type StaticImageData } from 'next/image'
import React from 'react'

interface FeatureCardProps {
  title: string
  description: string
  thumbnail: StaticImageData | string
  color?: string
}
const FeatureCard = ({ title, description, thumbnail, color = '#c2c2c2' }: FeatureCardProps) => (
  <div className='relative flex size-[450px] flex-col justify-end rounded-2.5xl px-14 pb-12 pt-28 shadow-2xl'>
    <div
      className='absolute left-[50%] top-0 flex h-25 w-25 translate-x-[-50%] translate-y-[-45%] items-center justify-center rounded-full'
      style={{ backgroundColor: color }}
    >
      {thumbnail && <Image src={thumbnail} alt='icon' width={40} height={40} />}
    </div>

    <p className='text-center text-3xl font-medium text-blue-dark'>{title}</p>
    <p className='mt-6 text-center text-xl leading-9 text-slate-blue'>{description}</p>
  </div>
)

export default FeatureCard
