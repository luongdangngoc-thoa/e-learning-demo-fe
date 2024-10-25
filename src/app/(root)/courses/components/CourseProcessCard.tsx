import Image, { type StaticImageData } from 'next/image'
import React from 'react'

import { Progress } from '@/components/Progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface CourseProcessCardProps {
  image: StaticImageData | string
  title: string
  avatar: string
  name: string
  progressValue: number
  totalLesson?: number
  currentLesson?: number
}
const CourseProcessCard = ({
  avatar,
  image,
  name,
  title,
  progressValue,
  totalLesson,
  currentLesson
}: CourseProcessCardProps) => (
  <div className='w-max rounded-2.5xl bg-white p-5 shadow-xl'>
    {image && <Image src={image} alt='news' width={386} height={258} className='rounded-2.5xl' />}
    <p className='mt-3 text-2xl font-medium leading-10'>{title}</p>
    <div className='mt-2.5 flex items-center gap-3 pb-6'>
      <Avatar>
        <AvatarImage src={avatar} alt='@shadcn' width={60} height={60} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className='text-lg font-medium'>{name}</p>
    </div>
    <Progress value={progressValue} />
    <div className='mt-3 flex items-center gap-1 text-end text-sm font-semibold text-slate-blue'>
      <p>Lesson</p>
      <p>{currentLesson}</p>
      <p>of</p>
      <p>{totalLesson}</p>
    </div>
  </div>
)

export default CourseProcessCard
