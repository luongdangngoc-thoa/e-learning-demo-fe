import { type Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/Button'
import Collapsible from '@/components/Collapsible'
import HeroBanner from '@/components/HeroBanner'
import ReviewCard from '@/components/ReviewCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import ApplyCard from './components/ApplyCard'
import PricingCard from './components/PricingCard'

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Pricing card component'
}

const servicePrices = [
  {
    id: 1,
    type: 'Like a pussy',
    price: 0,
    per: 'forever',
    checkColor: '#C2C2C2',
    isBest: false,
    services: ['Components-driven system', 'Sales-boosting landing pages', 'Awesome Feather icons pack'],
    buttonLabel: 'Try for free'
  },
  {
    id: 2,
    type: '👤 Individual',
    price: 24,
    per: 'month',
    checkColor: '#FFC700',
    isBest: true,
    services: [
      'Components-driven system',
      'Sales-boosting landing pages',
      'Awesome Feather icons pack',
      'Themed into 3 different styles',
      'Will help to learn Figma'
    ],
    buttonLabel: 'Regular license'
  },
  {
    id: 3,
    type: '👥 Corporate',
    price: 0,
    per: 'EDITOR',
    checkColor: '#94FFD8',
    isBest: false,
    services: [
      'Components-driven system',
      'Sales-boosting landing pages',
      'Awesome Feather icons pack',
      'Themed into 3 different styles'
    ],
    buttonLabel: 'Extended license'
  }
]

const collapsibleItems = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    title: 'Consectetur adipiscing elit, sed do ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    title: 'Eiusmod tempos Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'
  }
]

const reviewsData = [
  {
    id: 1,
    logo: '/images/avatar.png',
    title: 'Title',
    description: 'Lorem ipsum vip',
    color: '#333'
  },
  {
    id: 2,
    logo: '/images/avatar.png',
    title: 'Title',
    description: 'Lorem ipsum vip',
    color: '#333'
  },
  {
    id: 3,
    logo: '/images/avatar.png',
    title: 'Title',
    description: 'Lorem ipsum vip',
    color: '#333'
  },
  {
    id: 4,
    logo: '/images/avatar.png',
    title: 'Title',
    description: 'Lorem ipsum vip',
    color: '#333'
  },
  {
    id: 5,
    logo: '/images/avatar.png',
    title: 'Title',
    description: 'Lorem ipsum vip',
    color: '#333'
  },
  {
    id: 6,
    logo: '/images/avatar.png',
    title: 'Title',
    description: 'Lorem ipsum vip',
    color: '#333'
  },
  {
    id: 7,
    logo: '/images/avatar.png',
    title: 'Title',
    description: 'Lorem ipsum vip',
    color: '#333'
  }
]

const jobsApply = [
  {
    image: '/images/apply-teacher.png',
    title: 'Become a Teacher',
    description:
      'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
    buttonLabel: 'Apply a Teacher'
  },
  {
    image: '/images/apply-teacher.png',
    title: 'Become a Coursector',
    description:
      'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
    buttonLabel: 'Apply a Coursector'
  }
]

const MemberShip = () => (
  <div>
    <div className='mx-auto mt-56 max-w-screen-2xl'>
      <h1 className='text-center text-6.5xl font-extrabold tracking-tighter text-turquoise-medium'>
        Affordable pricing
      </h1>
      <div className='mt-20 flex justify-center gap-7.5'>
        {servicePrices.map((service) => (
          <PricingCard
            key={service.id}
            type={service.type}
            price={service.price}
            checkColor={service.checkColor}
            per={service.per}
            isBest={service.isBest}
            services={service.services}
            buttonLabel={service.buttonLabel}
          />
        ))}
      </div>
      <div className='mt-48'>
        <HeroBanner
          title='Online coaching lessons for remote learning.'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'
          buttonLabel='Start learning now'
        />
      </div>
      <div className='my-20'>
        <h1 className='text-center text-4xl font-semibold'>Online coaching lessons for remote learning</h1>
        <div>
          <Collapsible collapsibleItems={collapsibleItems} />
        </div>
      </div>
    </div>
    <div className='bg-blue-light/20'>
      <div className='mx-auto mt-56 max-w-screen-2xl pt-20'>
        <h1 className='text-4xl font-semibold'>What our students have to say</h1>
        <div className='mt-12 w-full'>
          <Carousel className='min-w-full max-w-sm'>
            <CarouselContent className='flex gap-7.5'>
              {reviewsData.map((item) => (
                <CarouselItem key={item.id} className='basis-1/4'>
                  <ReviewCard logo={item.logo} title={item.title} description={item.description} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='absolute left-0 -translate-x-1/2 bg-turquoise-bright text-white' />
            <CarouselNext className='absolute right-0 translate-x-1/2 bg-turquoise-bright text-white' />
          </Carousel>
          <div className='flex translate-y-[50%] items-center justify-between rounded-6xl bg-blue-charcoal px-25 py-20'>
            <p className='text-4xl font-semibold text-white'>APP is available for free</p>
            <div className='flex items-center gap-6'>
              <Button className='rounded-xl'>
                <Image src='/images/android.png' alt='android' width={20} height={20} className='mr-2.5' />
                Android APP
              </Button>
              <Button className='rounded-xl'>
                <Image src='/images/ios.png' alt='ios' width={20} height={20} className='mr-2.5' />
                Android APP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='mx-auto grid max-w-screen-2xl grid-cols-2 gap-25 py-44'>
      {jobsApply.map((item) => (
        <ApplyCard key={item.title} {...item} />
      ))}
    </div>
  </div>
)

export default MemberShip
