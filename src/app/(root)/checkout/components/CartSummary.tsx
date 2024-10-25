import Image from 'next/image'
import React from 'react'

const CartSummary = () => (
  <div className='flex w-full gap-5'>
    <Image src='/images/news-meeting.png' alt='news' width={160} height={107} className='rounded-2.5xl' />
    <div>
      <p className='text-lg leading-8'>adipising elit, sed do eiusmod tempor</p>
      <p className='text-lg leading-8 text-gray-charcoal'>Lorem ipsum dollar...</p>
      <p className='text-2xl leading-11'>$24.69</p>
    </div>
  </div>
)

export default CartSummary
