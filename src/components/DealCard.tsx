/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

interface DealCardProps {
  discount: number
  title: string
  description: string
  backgroundImage: string
  color: string
}

const DealCard = ({
  discount,
  title,
  description,
  backgroundImage = '/images/news-meeting.png',
  color = '#49BBBD'
}: DealCardProps) => (
  <div
    className='relative h-[500px] w-[509px] overflow-hidden rounded-2.5xl bg-cover bg-center bg-no-repeat p-11'
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className='w-max rounded-lg px-2 py-8' style={{ backgroundColor: color }}>
      <span className='text-5xl font-bold text-white'>{discount}%</span>
    </div>
    <p className='mt-7 line-clamp-2 text-2xl font-bold text-white'>{title}</p>
    <p className='mt-2 line-clamp-6 w-[360px] text-xl font-medium leading-9 text-white'>{description}</p>
  </div>
)

export default DealCard
