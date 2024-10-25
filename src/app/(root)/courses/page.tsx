'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'

import categoryApiRequest from '@/api-requests/category-api.request'
import ArticleCard, { type ArticleProps } from '@/components/ArticleCard'
import HeroBanner from '@/components/HeroBanner'
import ReviewCard from '@/components/ReviewCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { type ICategory } from '@/shared/types'

import CourseProcessCard from './components/CourseProcessCard'

const CourseProcessList = [
  {
    id: 1,
    image: '/images/news-meeting.png',
    title: 'AWS Certified Solutions Architect',
    avatar: 'https://github.com/shadcn.png',
    name: 'John Doe',
    progressValue: 90,
    totalLesson: 15,
    currentLesson: 10
  },
  {
    id: 2,
    image: '/images/news-meeting.png',
    title: 'AWS Certified Solutions Architect',
    avatar: 'https://github.com/shadcn.png',
    name: 'John Doe',
    progressValue: 10,
    totalLesson: 15,
    currentLesson: 10
  },
  {
    id: 3,
    image: '/images/news-meeting.png',
    title: 'AWS Certified Solutions Architect',
    avatar: 'https://github.com/shadcn.png',
    name: 'John Doe',
    progressValue: 70,
    totalLesson: 15,
    currentLesson: 10
  },
  {
    id: 4,
    image: '/images/news-meeting.png',
    title: 'AWS Certified Solutions Architect',
    avatar: 'https://github.com/shadcn.png',
    name: 'John Doe',
    progressValue: 70,
    totalLesson: 15,
    currentLesson: 10
  },
  {
    id: 5,
    image: '/images/news-meeting.png',
    title: 'AWS Certified Solutions Architect',
    avatar: 'https://github.com/shadcn.png',
    name: 'John Doe',
    progressValue: 70,
    totalLesson: 4,
    currentLesson: 10
  }
]

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

const Courses = () => {
  const { data: categoriesData, isFetching: categoriesIsFetching } = useQuery({
    queryKey: ['GET_CATEGORIES'],
    queryFn: () => categoryApiRequest.getCategories(),
    select: (data) => data.data.data
  })

  return (
    <div>
      <div className='bg-blue-light/70 pb-40 pt-12.5'>
        <div className='mx-auto max-w-screen-2xl py-12.5'>
          <div className='flex items-center justify-between'>
            <h3 className='text-4xl font-semibold'>Welcome back, ready for your next lesson?</h3>
            <p className='text-xl font-bold text-turquoise-medium'>View history</p>
          </div>
          <div className='mt-12.5'>
            <Carousel className='relative flex'>
              <CarouselContent className='flex justify-around'>
                {CourseProcessList.map((item) => (
                  <CarouselItem key={item.id} className='flex basis-1/3'>
                    <CourseProcessCard {...item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className='absolute bottom-[-100px] right-[-120px] flex -translate-x-[100%] -translate-y-1/2 justify-end gap-5'>
                <div>
                  <label
                    htmlFor='prev'
                    className='flex size-12.5 cursor-pointer select-none items-center justify-center rounded-sm bg-turquoise-medium hover:bg-turquoise-medium/50'
                  >
                    <Image src='/svg/chevron-left.svg' alt='Left' width={12} height={28} />
                  </label>
                  <CarouselPrevious id='prev' className='hidden' />
                </div>
                <div>
                  <label
                    htmlFor='next'
                    className='flex size-12.5 cursor-pointer select-none items-center justify-center rounded-sm bg-turquoise-medium hover:bg-turquoise-medium/50'
                  >
                    <Image src='/svg/chevron-right.svg' alt='Left' width={12} height={28} />
                  </label>
                  <CarouselNext id='next' className='hidden' />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-screen-2xl pb-25 pt-20'>
        <h3 className='mb-12.5 text-4xl font-semibold'>Choice favourite course from top category</h3>
        <div className='grid grid-cols-4 gap-20'>
          {categoriesData?.map((category: ICategory) => (
            <ReviewCard
              key={category?.id}
              logo={category?.logo}
              title={category?.title}
              description={category?.description}
              className='h-[377px] w-[349px] px-8'
              isFetching={categoriesIsFetching}
            />
          ))}
        </div>
      </div>
      <div className='bg-blue-light/70 pb-40 pt-12.5'>
        <div className='mx-auto max-w-screen-2xl py-12.5'>
          <div className='flex items-center justify-between'>
            <h3 className='text-4xl font-semibold'>Recommended for you</h3>
            <p className='text-xl font-bold text-turquoise-medium'>See all</p>
          </div>

          <div className='mt-12.5'>
            <Carousel className='relative flex'>
              <CarouselContent className='flex justify-around gap-12.5'>
                {articles.map((article) => (
                  <CarouselItem key={article.title} className='flex basis-1/4'>
                    <ArticleCard
                      title={article.title}
                      image={article.image}
                      time={article.time}
                      category={article.category}
                      author={article.author}
                      avatar={article.avatar}
                      description={article.description}
                      price={article.price}
                      priceDiscount={article.priceDiscount}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className='absolute bottom-[-100px] right-[-120px] flex -translate-x-[100%] -translate-y-1/2 justify-end gap-5'>
                <div>
                  <label
                    htmlFor='prev-recommended'
                    className='flex size-12.5 cursor-pointer select-none items-center justify-center rounded-sm bg-turquoise-medium hover:bg-turquoise-medium/50'
                  >
                    <Image src='/svg/chevron-left.svg' alt='Left' width={12} height={28} />
                  </label>
                  <CarouselPrevious id='prev-recommended' className='hidden' />
                </div>
                <div>
                  <label
                    htmlFor='next-recommended'
                    className='flex size-12.5 cursor-pointer select-none items-center justify-center rounded-sm bg-turquoise-medium hover:bg-turquoise-medium/50'
                  >
                    <Image src='/svg/chevron-right.svg' alt='Left' width={12} height={28} />
                  </label>
                  <CarouselNext id='next-recommended' className='hidden' />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-screen-2xl pb-25 pt-20'>
        <div className='mb-20 flex items-center justify-between'>
          <h3 className='text-4xl font-semibold'>Get choice of your course</h3>
          <p className='text-xl font-bold text-turquoise-medium'>See all</p>
        </div>
        <div className='mb-20 grid grid-cols-4 gap-20'>
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
        <HeroBanner
          title='Online coaching lessons for remote learning.'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'
          buttonLabel='Start learning now'
        />

        <div className='my-20 flex items-center justify-between'>
          <h3 className='text-4xl font-semibold'>The course in personal development</h3>
          <p className='text-xl font-bold text-turquoise-medium'>See all</p>
        </div>
        <div className='grid grid-cols-4 gap-20'>
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
      <div className='bg-blue-light/70 pb-40 pt-12.5'>
        <div className='mx-auto max-w-screen-2xl py-12.5'>
          <div className='flex items-center justify-between'>
            <h3 className='text-4xl font-semibold'>Student are viewing</h3>
            <p className='text-xl font-bold text-turquoise-medium'>See all</p>
          </div>
          <div className='mt-12.5 grid grid-cols-4 gap-12.5'>
            {articles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Courses
