/* eslint-disable react/jsx-one-expression-per-line */
import Image from 'next/image'
import React from 'react'

export interface ArticleProps {
  title: string
  image: string
  time: string
  category: string
  author: string
  avatar: string
  description: string
  price: number
  priceDiscount: number
}

const ArticleCard: React.FC<ArticleProps> = ({
  title,
  image,
  time,
  category,
  author,
  avatar,
  description,
  price,
  priceDiscount
}) => (
  <div className='relative mx-auto w-84'>
    <div className='h-full w-full rounded-2.5xl bg-white p-5 shadow-soft-purple-shadow'>
      <div className='relative h-60 w-full'>
        {image && <Image src={image} width={335} height={239} alt={title} className='rounded-2.5xl object-cover' />}
      </div>

      <div className='mb-4 flex items-center justify-between space-x-2'>
        <div className='flex items-center space-x-2'>
          <Image src='/svg/group-white.svg' width={21} height={21} alt='group' />
          <span className='text-sm font-medium text-turquoise-medium'>{category}</span>
        </div>
        <div className='flex items-center space-x-2'>
          <Image
            src='/svg/clock.svg'
            width={24}
            height={28}
            alt='group'
            className='text-2xl font-normal leading-normal'
          />
          <span className='text-sm font-medium leading-7 tracking-0.36 text-turquoise-medium'>{time}</span>
        </div>
      </div>

      <p className='mt-5 text-xl font-medium not-italic text-blue-charcoal'>{title}</p>
      <p className='mt-5 text-lg leading-8 tracking-0.36 text-slate-blue'>{description}</p>

      <div className='mt-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          {avatar && <Image src={avatar} alt={author} width={44} height={44} className='rounded-2.5xl' />}
          <p className='text-lg font-medium tracking-0.36 text-black'>{author}</p>
        </div>
        <div className='flex items-center gap-4'>
          <p className='text-black-light/40 whitespace-normal text-lg font-light italic tracking-0.36 line-through'>
            ${price}
          </p>
          <p className='whitespace-normal text-2xl font-bold tracking-0.5 text-turquoise-medium'>${priceDiscount}</p>
        </div>
      </div>
    </div>
  </div>
)

export default ArticleCard
