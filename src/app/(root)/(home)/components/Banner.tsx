import { Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/Button'

const Banner = () => (
  <div className='flex min-h-screen justify-between overflow-hidden rounded-banner bg-turquoise-medium px-35 pt-56'>
    <div className='pt-28'>
      <div className='text-5.5xl w-170 font-bold text-white'>
        <span className='text-orange-yellow'>Studying</span>
        <h1>Online is now much easier</h1>
      </div>
      <p className='mb-12 mt-8 w-[523px] text-2xl leading-10 text-white'>
        TOTC is an interesting platform that will teach you in more an interactive way
      </p>
      <div className='flex items-center'>
        <Button variant='secondary' className='h-20 px-9 py-5 text-2xl font-semibold'>
          Join for free
        </Button>
        <Button variant='ghost' className='h-20 w-[403px] pr-0 text-1.5xl'>
          <div className='mr-8 flex size-20 items-center justify-center rounded-full bg-white'>
            <Play fill='#23BDEE' stroke='#23BDEE' />
          </div>
          Write your assessment
        </Button>
      </div>
    </div>
    <div className='relative pr-35'>
      <Image src='/images/teenage-girl.png' alt='banner' width={544} height={892} />
      <Image
        src='/images/banner-item.png'
        alt='banner-item'
        width={911}
        height={577}
        className='absolute left-[40%] top-[50%] translate-x-[-50%] translate-y-[-50%]'
      />
    </div>
  </div>
)

export default Banner
