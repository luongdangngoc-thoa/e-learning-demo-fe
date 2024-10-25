'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

import courseApiRequest from '@/api-requests/course-api-request'
import ArticleCard, { type ArticleProps } from '@/components/ArticleCard'
import { Button } from '@/components/Button'
import DealCard from '@/components/DealCard'
import { Progress } from '@/components/Progress'
import { Ratings } from '@/components/RatingStar'

import CourseInfo from './components/CourseInfo'
import CourseReview from './components/CourseReview'

const articles: ArticleProps[] = [
  {
    title: 'AWS Certified solutions Architect',
    image: '/images/marketing-article-1.png',
    time: '3 Month',
    category: 'Design',
    author: 'Lina',
    avatar: '/images/avatar.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price: 100,
    priceDiscount: 80
  },
  {
    title: 'AWS Certified solutions Architect',
    image: '/images/marketing-article-2.png',
    time: '3 Month',
    category: 'Design',
    author: 'Lina',
    avatar: '/images/avatar.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price: 100,
    priceDiscount: 80
  },
  {
    title: 'AWS Certified solutions Architect',
    image: '/images/marketing-article-3.png',
    time: '3 Month',
    category: 'Design',
    author: 'Lina',
    avatar: '/images/avatar.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price: 100,
    priceDiscount: 80
  },
  {
    title: 'AWS Certified solutions Architect',
    image: '/images/marketing-article-4.png',
    time: '3 Month',
    category: 'Design',
    author: 'Lina',
    avatar: '/images/avatar.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price: 100,
    priceDiscount: 80
  }
]

const dealsList = [
  {
    id: 1,
    backgroundImage: '/images/deal-1.png',
    discount: 50,
    title: 'FOR INSTRUCTORS',
    description: 'TOTC’s school management software helps traditional and online schools manage scheduling,',
    color: '#FF000099'
  },
  {
    id: 2,
    backgroundImage: '/images/deal-2.png',
    discount: 10,
    title: 'FOR INSTRUCTORS',
    description: 'TOTC’s school management software helps traditional and online schools manage scheduling,',
    color: '#FF000099'
  },
  {
    id: 3,
    backgroundImage: '/images/deal-3.png',
    discount: 50,
    title: 'FOR INSTRUCTORS',
    description: 'TOTC’s school management software helps traditional and online schools manage scheduling,',
    color: '#FF000099'
  }
]
const CourseDetail = () => {
  const { id } = useParams()
  const { data: CourseDetailQuery, isFetching: isFetchingCourse } = useQuery({
    queryKey: ['GET_COURSE_DETAIL', id],
    queryFn: () => courseApiRequest.getCourseById(String(id)),
    select: (data) => data.data.data
  })

  return (
    <div>
      <Image
        src='/images/bg-course-detail.png'
        width={1440}
        height={652}
        alt='bg-course detail'
        className='w-full object-cover'
      />
      <div className='mx-auto mt-16 max-w-screen-2xl'>
        <div className='flex justify-between'>
          <div className='w-[950px]'>
            <div className='mb-20 grid w-full grid-cols-4 gap-12.5'>
              <Button className='rounded-xl bg-gray-light text-gray-charcoal'>Overview</Button>
              <Button className='rounded-xl bg-gray-light text-gray-charcoal'>Overview</Button>
              <Button className='rounded-xl bg-gray-light text-gray-charcoal'>Overview</Button>
              <Button className='rounded-xl'>Overview</Button>
            </div>
            <div className='w-[950px] rounded-2.5xl bg-blue-light/30 p-12.5'>
              <div className='flex items-center gap-11'>
                <div className='flex w-max flex-col items-center gap-7 rounded-2.5xl bg-white px-12 py-6'>
                  <p className='text-3xl font-semibold text-slate-blue'>4 out of 5</p>
                  <Ratings rating={5} variant='yellow' />
                  <p className='text-xl text-slate-blue'>Top raiting</p>
                </div>
                <div className='w-full space-y-3'>
                  <div className='flex items-center gap-11'>
                    <p className='whitespace-nowrap text-xl text-slate-blue'>5 Stars</p>
                    <Progress value={90} />
                  </div>
                  <div className='flex items-center gap-11'>
                    <p className='whitespace-nowrap text-xl text-slate-blue'>4 Stars</p>
                    <Progress value={90} />
                  </div>
                  <div className='flex items-center gap-11'>
                    <p className='whitespace-nowrap text-xl text-slate-blue'>3 Stars</p>
                    <Progress value={90} />
                  </div>
                  <div className='flex items-center gap-11'>
                    <p className='whitespace-nowrap text-xl text-slate-blue'>2 Stars</p>
                    <Progress value={90} />
                  </div>
                  <div className='flex items-center gap-11'>
                    <p className='whitespace-nowrap text-xl text-slate-blue'>1 Stars</p>
                    <Progress value={90} />
                  </div>
                </div>
              </div>
              <div className='mt-14'>
                <div>
                  <CourseReview />
                  <CourseReview />
                </div>
              </div>
            </div>
          </div>

          <CourseInfo {...CourseDetailQuery} isFetchingCourse={isFetchingCourse} />
        </div>
      </div>
      <div className='bg-blue-light/20 pb-40 pt-12.5'>
        <div className='mx-auto max-w-screen-2xl py-12.5'>
          <div className='flex items-center justify-between'>
            <h3 className='text-4xl font-semibold'>Marketing Articles</h3>
            <p className='text-xl font-bold text-turquoise-medium'>See all</p>
          </div>
          <div className='mt-12.5 grid grid-cols-4 gap-12.5'>
            {articles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='mt-40 flex items-center gap-16'>
          <div className='relative flex flex-col items-start justify-start gap-7'>
            <h3 className='text-4xl font-medium leading-10'>
              Everything you can do in a physical classroom,
              <span className='text-turquoise-bright'> you can do with TOTC</span>
            </h3>
            <p className='text-2xl leading-10 tracking-wider text-slate-blue'>
              TOTC’s school management software helps traditional and online schools manage scheduling, attendance,
              payments and virtual classrooms all in one secure cloud-based system.
            </p>
            <Button variant='link' className='p-0 underline'>
              Learn more
            </Button>

            <Image
              src='/images/ellipse-green.png'
              alt='ellipse-green.png'
              width={73}
              height={73}
              className='absolute top-0 -z-10 translate-x-[-40%] translate-y-[-30%]'
            />
            <Image
              src='/images/ellipse-green.png'
              alt='ellipse-green.png'
              width={30}
              height={30}
              className='absolute right-0 top-[50%] -z-10'
            />
          </div>
          <div className='relative w-full'>
            <Image src='/images/confident-teacher.png' alt='confident-teacher.png' width={705} height={471} />
            <Image
              src='/images/soft-square-blue.png'
              alt='soft-square-blue.png'
              width={138}
              height={138}
              className='absolute left-0 right-0 top-0 -z-10 -translate-x-5 -translate-y-5'
            />
            <Image
              src='/images/soft-square-green.png'
              alt='soft-square-green.png'
              width={231}
              height={231}
              className='absolute bottom-0 right-0 -z-10 translate-x-5 translate-y-5'
            />
          </div>
        </div>
        <div className='mt-40'>
          <p className='text-3xl font-medium'>Top Education offers and deals are listed here</p>
          <div className='mb-20 mt-16 flex items-center justify-around gap-16'>
            {dealsList.map((deal) => (
              <DealCard key={deal.id} {...deal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
