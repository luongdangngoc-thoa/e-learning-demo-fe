'use client'

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Input } from '@/components/InputField'

export default function Footer() {
  return (
    <footer className='bg-blue-charcoal py-10 text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center gap-20 pt-10'>
          <div className='relative'>
            <Image width={114} height={83} src='/images/logo-dark.png' alt='' />
          </div>
          <div className='mb-4 border-l-2 border-gray-mauve pl-10'>
            <h2 className='w-[156px] text-1.5xl'>Virtual Class for Zoom</h2>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 pt-24'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-1.6xl text-gray-hex'>Subscribe to get our Newsletter</h2>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-center p-5'>
          <form className='flex items-center'>
            <Input
              variant='roundedFull'
              placeholder='Your email'
              className='h-[60px] w-[400px] border border-gray-granny text-lg'
            />

            <Button className='h-[60px] w-[179px] rounded-full bg-turquoise-medium text-1.5xl font-normal text-white hover:bg-turquoise-medium'>
              Subscribe
            </Button>
          </form>
        </div>

        <div className='flex items-center justify-center pt-24'>
          <div className='flex flex-wrap items-center justify-between gap-5'>
            <div className='gap-5'>
              <h2 className='text-1.5xl text-gray-hex'>Careers</h2>
            </div>
            <div className='border-l border-gray-mauve pl-5'>
              <h2 className='text-1.5xl text-gray-hex'>Privacy Policy</h2>
            </div>
            <div className='border-l border-gray-mauve pl-5'>
              <h2 className='text-1.5xl text-gray-hex'>Terms & Conditions</h2>
            </div>
          </div>
        </div>
        <div className='pt-4 text-center text-1.5xl text-gray-hex'>&copy; 2021 Class Technologies Inc.</div>
      </div>
    </footer>
  )
}
