import Image from 'next/image'
import React from 'react'

import { Ratings } from '@/components/RatingStar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const CourseReview = () => (
  <div className='border-b border-slate-blue py-6'>
    <div className='flex justify-between'>
      <div className='flex gap-2.5'>
        <Avatar className='size-15'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-1'>
          <p className='text-lg font-medium'>John Doe</p>
          <Ratings rating={5} variant='yellow' />
        </div>
      </div>
      <div className='flex items-center gap-2.5'>
        <Image src='/images/oclock.png' width={24} height={24} alt='oclock' />
        <p className='text-sm font-medium text-slate-blue'>3 Month</p>
      </div>
    </div>
    <p className='mt-6 text-xl text-slate-blue'>
      Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
    </p>
  </div>
)

export default CourseReview
