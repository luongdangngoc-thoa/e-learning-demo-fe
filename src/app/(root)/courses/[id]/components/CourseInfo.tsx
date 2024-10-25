import Image from 'next/image'
import React, { useMemo } from 'react'

import { Button } from '@/components/Button'
import { Skeleton } from '@/components/ui/skeleton'

const courseIncluded = [
  {
    thumbnail: '/images/guarantee.png',
    title: 'Money Back Guarantee',
    key: 'hasMoneyBackGuarantee'
  },
  {
    thumbnail: '/images/camera.png',
    title: 'Access on all devices',
    key: 'hasAccessAllDevice'
  },
  {
    thumbnail: '/images/certificate.png',
    title: 'Certification of completion',
    key: 'hasCertidication'
  },
  {
    thumbnail: '/images/module.png',
    title: '32 Moduls',
    key: 'has_modules'
  }
]

const socialMedia = [
  {
    thumbnail: '/svg/facebook.svg'
  },
  {
    thumbnail: '/svg/youtube.svg'
  },
  {
    thumbnail: '/svg/ig.svg'
  },
  {
    thumbnail: '/svg/telegram.svg'
  },
  {
    thumbnail: '/svg/whatsapp.svg'
  }
]

const CourseDetailSkeleton = () => (
  <div>
    <Skeleton className='h-[266px] w-full' />
    <Skeleton className='h-12 w-full' />
    <Skeleton className='mt-7.5 h-12 w-full' />
    <Skeleton className='mb-9 mt-10 h-7 w-full' />
    <Skeleton className='h-12 w-full' />
    <hr className='my-7.5 text-slate-blue' />
    <Skeleton className='h-[200px] w-full' />
    <hr className='my-7.5 text-slate-blue' />
    <Skeleton className='h-[200px] w-full' />
    <hr className='my-7.5 text-slate-blue' />
    <Skeleton className='h-[200px] w-full' />
  </div>
)

interface CourseInfoProps {
  title: string
  cost: number
  salePrice: number
  description: string
  banner?: string
  duration: number
  discount: number
  hasAccessAllDevice: boolean
  hasCertidication: boolean
  hasMoneyBackGuarantee: boolean
  isFetchingCourse?: boolean
}
const CourseInfo = ({
  title,
  cost,
  salePrice,
  description,
  banner = '/images/course-detail-pricing.png',
  duration,
  discount,
  hasAccessAllDevice,
  hasCertidication,
  hasMoneyBackGuarantee,
  isFetchingCourse
}: CourseInfoProps) => {
  const visibleItems = useMemo(() => {
    courseIncluded.filter((item) => {
      switch (item.key) {
        case 'hasMoneyBackGuarantee':
          return hasMoneyBackGuarantee
        case 'hasAccessAllDevice':
          return hasAccessAllDevice
        case 'hasCertidication':
          return hasCertidication
        case 'has_modules':
          return true
        default:
          return true
      }
    })

    return courseIncluded
  }, [hasAccessAllDevice, hasCertidication, hasMoneyBackGuarantee])

  return (
    <div className='w-[500px] translate-y-[-30%] rounded-2.5xl bg-white px-7.5 pt-7.5'>
      {isFetchingCourse ? (
        <CourseDetailSkeleton />
      ) : (
        <div>
          {banner && <Image src={banner} width={443} height={268} alt='bg-course detail' className='bg-gray-light' />}

          <div className='flex items-center gap-1 text-2.5xl font-semibold text-slate-blue'>
            <p>$</p>
            <p>{title}</p>
          </div>
          <div className='mt-7.5 flex items-center justify-between'>
            <div className='flex items-center gap-1 text-4.5xl font-semibold'>
              <p>$</p>
              <p>{salePrice}</p>
            </div>
            <div className='flex items-center text-2.5xl font-semibold text-slate-blue line-through'>
              <p>$</p>
              <p>{cost}</p>
            </div>

            <div className='flex items-center gap-1 text-2.5xl font-semibold text-slate-blue'>
              <p>{discount}</p>
              <p>% Off</p>
            </div>
          </div>
          <div className='mb-9 mt-10 flex items-center justify-center gap-1 text-center text-xl font-semibold text-turquoise-medium'>
            <p>{duration}</p>
            <p> hour left at this price</p>
          </div>
          <Button className='w-full rounded-xl text-xl font-bold'>Buy Now</Button>
          <hr className='mt-7.5 text-slate-blue' />
          <div className='pt-7.5'>
            <p className='text-3xl font-semibold'>This Course included</p>
            <div className='mt-7.5 space-y-2.5'>
              {visibleItems.map((item) => (
                <div key={item.thumbnail} className='flex items-center gap-2.5'>
                  {item?.thumbnail && (
                    <Image src={item.thumbnail} width={23} height={23} alt={item.thumbnail} className='max-w-max' />
                  )}
                  <p className='text-sm font-semibold text-slate-blue'>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <hr className='mt-7.5 text-slate-blue' />
          <div className='pt-7.5'>
            <p className='text-3xl font-semibold'>Training 5 or more people</p>
            <p className='mt-7.5 line-clamp-2 leading-7 text-slate-blue'>{description}</p>
          </div>
          <hr className='mt-7.5 text-slate-blue' />
          <div className='pt-7.5'>
            <p className='text-3xl font-semibold'>Share this course</p>
            <div className='mt-12.5 flex items-center gap-6'>
              {socialMedia.map((item) => (
                <div key={item.thumbnail}>
                  {item?.thumbnail && <Image src={item.thumbnail} width={32} height={32} alt={item.thumbnail} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseInfo
