import React from 'react'

interface StatItemProps {
  title: string
  description: string
}
const StatItem = ({ title, description }: StatItemProps) => (
  <div className='flex flex-col items-center'>
    <p className='inline-block bg-gradient-to-r from-blue-bright to-turquoise-medium bg-clip-text text-8xl font-light text-transparent'>
      {title}
    </p>
    <p className='text-3xl leading-10'>{description}</p>
  </div>
)

export default StatItem
