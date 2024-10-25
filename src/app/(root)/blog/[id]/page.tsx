'use client'

import { useQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

import blogApiRequest from '@/api-requests/blog-api.request'
import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import { type IBlog } from '@/shared/types'

import RelatedBlog from '../components/RelatedBlogCard'

const BlogDetail = () => {
  const { id } = useParams()
  const router = useRouter()

  const { data: blogDetailData, isFetching: blogDetailIsFetching } = useQuery({
    queryKey: ['GET_BLOG_BY_ID', id],
    queryFn: () => blogApiRequest.getById(String(id)),
    select: (data) => data.data.data
  })

  const { data: blogsData, isFetching: blogIsFetching } = useQuery({
    queryKey: ['GET_ALL_BLOG'],
    queryFn: () => blogApiRequest.getAllBlog(),
    select: (data) => data.data.data
  })

  return (
    <div>
      <div className='max-w-full'>
        {blogIsFetching ? (
          <Skeleton className='h-[648px] w-full' />
        ) : (
          <Image alt='Banner' src={blogDetailData?.logo} width={1903} height={652} className='h-[648px] object-cover' />
        )}
      </div>

      <div className='mx-auto my-20 max-w-screen-2xl'>
        {blogDetailIsFetching ? (
          <div className='space-y-7'>
            <Skeleton className='h-15 w-full' />
            <Skeleton className='h-20 w-full' />
            <Skeleton className='h-80 w-full' />
            <Skeleton className='my-8 h-0.25' />
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2.5'>
                <Skeleton className='size-[77px]' />
                <div>
                  <Skeleton className='h-4 w-20' />
                  <Skeleton className='mt-5 h-4 w-20' />
                </div>
              </div>
              <Skeleton className='h-12 w-56' />
            </div>
          </div>
        ) : (
          <div>
            <p className='mb-5 text-center text-4.5xl font-semibold leading-20 text-blue-dark'>
              {blogDetailData?.title}
            </p>
            <p className='mb-7 text-2xl leading-10 tracking-0.5 text-slate-blue'>{blogDetailData?.description}</p>
            <div
              className='mb-7 text-2xl leading-10 tracking-0.5 text-slate-blue'
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogDetailData?.content) }}
            />
            <div className='mt-6 flex justify-start gap-9'>
              {blogDetailData?.tags?.map((tag: string) => <Badge key={tag}>{tag}</Badge>)}
            </div>
            <hr className='my-8 h-0.25 border-slate-blue' />
            <div className='mb-8 flex justify-between'>
              <div className='flex items-center gap-5'>
                <Image
                  alt='Author'
                  src={blogDetailData?.users?.avatar ?? '/images/avatar.png'}
                  width={77}
                  height={77}
                  className='rounded-md bg-gray-charcoal/60'
                />
                <div className='flex flex-col gap-1'>
                  <p className='text-xs font-medium tracking-0.36 text-slate-blue'>Written by</p>
                  <p className='text-lg font-medium tracking-wider text-black'>{blogDetailData?.users?.name}</p>
                </div>
              </div>
              <Button className='h-12 w-56 rounded-lg border border-solid border-turquoise-medium bg-white font-bold text-turquoise-medium'>
                Follow
              </Button>
            </div>
          </div>
        )}
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
    </div>
  )
}
export default BlogDetail
