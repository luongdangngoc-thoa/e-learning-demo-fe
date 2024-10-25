import Image from 'next/image'
import React from 'react'

const CreatorCard = () => (
  <div className='relative h-[440px]'>
    <Image
      src='/images/jane-cooper.png'
      alt='avatar'
      width={277}
      height={277}
      className='absolute left-[50%] top-[-100%] translate-x-[-50%] translate-y-[100%]'
    />
    <div className='flex h-[300px] flex-col justify-end space-y-5 px-16.5 pb-7.5 text-center shadow-md'>
      <h3 className='text-2xl font-medium'>Jane Cooper</h3>
      <p className='line-clamp-2 text-center text-lg text-slate-blue'>
        Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
      </p>
    </div>
  </div>
)

export default CreatorCard
