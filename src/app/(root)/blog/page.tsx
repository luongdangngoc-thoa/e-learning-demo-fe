'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import blogApiRequest from '@/api-requests/blog-api-request'
import ArticleCard, { type ArticleProps } from '@/components/ArticleCard'
import { Button } from '@/components/Button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { type IBlog } from '@/shared/types'

import ReadingBlogListCard, { type ReadingBlogListCardProps } from './components/ReadingBlogListCard'
import RelatedBlog from './components/RelatedBlogCard'

const ReadingBlogList: ReadingBlogListCardProps[] = [
  {
    image: '/images/reading-blog.png',
    variant: 'outline',
    buttonLabel: 'UX/UI'
  },
  {
    image: '/images/reading-blog-1.png',
    variant: 'outline',
    buttonLabel: 'React'
  },
  {
    image: '/images/reading-blog-2.png',
    variant: 'outline',
    buttonLabel: 'PHP'
  },
  {
    image: '/images/reading-blog-3.png',
    variant: 'outline',
    buttonLabel: 'JavaScript'
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

const BlogPage = () => {
  const router = useRouter()

  const { data: blogsData, isFetching: blogIsFetching } = useQuery({
    queryKey: ['GET_ALL_BLOG'],
    queryFn: () => blogApiRequest.getAllBlog(),
    select: (data) => data.data.data
  })

  console.log(blogIsFetching)

  return (
    <div>
      <div className='bg-blue-light/20 py-16.5'>
        <div className='mx-auto max-w-screen-2xl'>
          <div className='flex justify-between gap-43.5'>
            <div className='flex w-170 flex-col justify-center py-10'>
              <p className='text-lg text-slate-blue'>
                <span className='text-black'>By Themadbrains in </span>
                <span className='font-bold text-turquoise-medium'>inspiration</span>
              </p>
              <h2 className='mt-5 text-4.5xl font-semibold text-blue-dark'>
                Why Swift UI Should Be on the Radar of Every Mobile Developer
              </h2>
              <p className='mt-4 text-2xl leading-11 text-slate-blue'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor
                sitamet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <div className='mt-6'>
                <Button variant='default' className='h-12 w-48 rounded-xl bg-turquoise-medium font-bold'>
                  Start learning now
                </Button>
              </div>
            </div>
            <div className='relative h-96 w-full md:h-auto md:w-1/2'>
              <Image
                src='/images/blog-introduce.png'
                alt='Swift UI on Laptop'
                layout='fill'
                className='rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='mx-auto max-w-screen-2xl'>
          <p className='text-black-light w-max text-3xl font-bold'>Reading blog list</p>
          <div className='flex w-full justify-between gap-19 py-10 pt-6'>
            {ReadingBlogList.map((readingBlog) => (
              <ReadingBlogListCard
                key={readingBlog.buttonLabel}
                image={readingBlog.image}
                variant={readingBlog.variant}
                buttonLabel={readingBlog.buttonLabel}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='bg-blue-light/20 pb-35 pt-25'>
        <div className='mx-auto max-w-screen-2xl'>
          <div className='flex justify-between'>
            <p className='text-3xl font-medium tracking-0.5 text-black'>Related Blog</p>
            <p className='text-xl font-bold text-turquoise-medium'>See all</p>
          </div>
          <div className='mt-10 flex w-full justify-between gap-25'>
            <Carousel className='relative flex'>
              <CarouselContent className='flex justify-around gap-20'>
                {blogsData?.map((blog: IBlog) => (
                  <CarouselItem className='basis-1/2' key={blog.id} onClick={() => router.push(`/blog/${blog.id}`)}>
                    <RelatedBlog
                      title={blog.title}
                      image={blog.logo}
                      author={blog.userId}
                      description={blog.description}
                      view={blog.view}
                      isFetching={blogIsFetching}
                    />
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
      <div className='mt-20'>
        <div className='mx-auto max-w-screen-2xl'>
          <div className='flex justify-between'>
            <p className='text-3xl font-medium tracking-0.5 text-black'>Marketing Articles</p>
            <p className='text-xl font-bold text-turquoise-medium'>See all</p>
          </div>
          <div className='mb-44 mt-12 flex justify-between gap-12 px-3'>
            {articles.map((article) => (
              <ArticleCard
                key={article.title}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
