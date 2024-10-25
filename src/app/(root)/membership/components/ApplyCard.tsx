import Image, { type StaticImageData } from 'next/image'
import React from 'react'

import { Button } from '@/components/Button'

interface ApplyCardProps {
  image?: StaticImageData | string
  title?: string
  description?: string
  buttonLabel?: string
}

const ApplyCard = ({ image = '/images/apply-teacher.png', title, description, buttonLabel }: ApplyCardProps = {}) => (
  <div className='rounded-2xl bg-white px-8 py-14 shadow-2xl'>
    {image && <Image src={image} width={720} height={382} alt='apply' className='object-cover' />}
    <p className='my-3 text-2xl font-medium leading-10'>{title}</p>
    <p className='mb-12 line-clamp-2 text-xl leading-9 text-slate-blue'>{description}</p>
    <div className='flex justify-end'>
      <Button className='rounded-xl text-xl font-medium'>{buttonLabel}</Button>
    </div>
  </div>
)

export default ApplyCard
