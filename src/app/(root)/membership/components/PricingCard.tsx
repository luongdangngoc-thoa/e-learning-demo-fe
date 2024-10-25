import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/Button'

interface PricingCardProps {
  type: string
  price: number
  per: string
  isBest: boolean
  services: string[]
  checkColor?: string
  buttonLabel: string
}
const PricingCard = ({
  type,
  price,
  per,
  isBest = false,
  services,
  checkColor = '#C2C2C2',
  buttonLabel
}: PricingCardProps) => (
  <div className={`${isBest ? 'shadow-xl' : ''} flex w-[370px] flex-col justify-between rounded-2xl p-8`}>
    <div>
      <div className='flex items-center justify-between'>
        <h5 className='text-lg font-bold leading-8 text-turquoise-medium'>{type}</h5>
        {isBest && (
          <div className='w-24 rounded-full border border-[#6C5CE7] p-2'>
            <p className='text-center text-xs font-extrabold uppercase tracking-widest'>Best !</p>
          </div>
        )}
      </div>
      <div className='mt-4 flex items-end'>
        <p className='text-5xl font-bold leading-10'>{price > 0 ? `$${price}` : 'FREE'}</p>
        <p className='text-xs font-extrabold uppercase tracking-widest'>
          <span> / </span>
          {per}
        </p>
      </div>
      <div className='mt-6 space-y-6'>
        {services.map((service) => (
          <div key={service} className='flex items-center gap-4'>
            <div
              className='flex h-8 w-8 items-center justify-center rounded-full p-1'
              style={{ backgroundColor: checkColor }}
            >
              <Image src='/svg/check-icon.svg' alt='check-icon' width={22} height={22} />
            </div>
            <p className='text-lg leading-8'>{service}</p>
          </div>
        ))}
      </div>
    </div>
    <Button
      variant={isBest ? 'default' : 'outline'}
      className={`${isBest ? 'text-2xl' : 'text-lg'} mt-4 h-16 w-full rounded-2xl font-bold`}
    >
      {buttonLabel}
    </Button>
  </div>
)

export default PricingCard
