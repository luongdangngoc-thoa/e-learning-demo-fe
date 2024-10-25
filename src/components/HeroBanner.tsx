import React from 'react'

import { Button } from './Button'

interface HeroBannerProps {
  title?: string
  description?: string
  buttonLabel?: string
}
const HeroBanner = ({ title, description, buttonLabel = 'Click here' }: HeroBannerProps) => (
  <div className='w-full rounded-3xl bg-blue-charcoal pb-20 pt-16 text-center'>
    <h4 className='text-4xl font-semibold text-white'>{title}</h4>
    <p className='mb-16 mt-7.5 px-52 text-2xl leading-10 tracking-wider text-white'>{description}</p>
    <Button className='mt-4 h-16 w-60 rounded-xl font-bold'>{buttonLabel}</Button>
  </div>
)

export default HeroBanner
