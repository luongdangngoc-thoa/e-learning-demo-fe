import { EyeOpenIcon, PlayIcon, StarIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/Button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import About from './components/AboutTab'
import Book from './components/BookTab'
import Course from './components/CourseTab'
import Notes from './components/NotesTab'
import Podcast from './components/PodcastTab'
import Project from './components/ProjectTab'
import Review from './components/ReviewTab'

const socialMedia = [
  {
    thumbnail: '/svg/facebook.svg'
  },
  {
    thumbnail: '/svg/youtube.svg'
  },
  {
    thumbnail: '/svg/ig.svg'
  }
]

const literatureCourseTabs = [
  {
    id: 1,
    value: 'about',
    title: 'About',
    content: <About />
  },
  {
    id: 2,
    value: 'course',
    title: 'Course',
    content: <Course />
  },
  {
    id: 3,
    value: 'notes',
    title: 'Notes',
    content: <Notes />
  },
  {
    id: 4,
    value: 'project',
    title: 'Project',
    content: <Project />
  },
  {
    id: 5,
    value: 'podcast',
    title: 'Podcast',
    content: <Podcast />
  },
  {
    id: 6,
    value: 'book',
    title: 'Book',
    content: <Book />
  },
  {
    id: 7,
    value: 'review',
    title: 'Review',
    content: <Review />
  }
]

const LiteratureCourse = () => (
  <div className='mx-auto max-w-screen-2xl'>
    <div className='bg-literature-banner flex items-center gap-8 rounded-2.5xl bg-cover bg-center bg-no-repeat px-12.5 py-6.5'>
      <div className='size-[363px] rounded-full bg-white p-3'>
        <Image
          src='/images/consultant.png'
          width={363}
          height={363}
          alt='consultant'
          className='max-w-max rounded-full object-cover'
        />
      </div>
      <div className='flex-grow rounded-2.5xl bg-white/80 p-12.5'>
        <div className='flex items-start justify-between'>
          <div>
            <p className='text-3xl font-medium'>John Anderson</p>
            <p className='text-lg leading-8 text-slate-blue'>Assistant Professor at Mcmaster University</p>
          </div>
          <Button className='rounded-xl font-bold'>Enroll Now</Button>
        </div>
        <p className='mt-4 text-2xl leading-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore
          magna aliqua. Ut enum ad minim veniam, quis nostrud
        </p>
        <div className='mt-6 flex items-center justify-between'>
          <div className='flex items-center gap-1 text-slate-blue'>
            <StarIcon />
            <p className='text-sm'>4.9 instructor Rating</p>
          </div>
          <div className='flex items-center gap-1 text-slate-blue'>
            <EyeOpenIcon />
            <p className='text-sm'>1,592 Students</p>
          </div>
          <div className='flex items-center gap-1 text-slate-blue'>
            <PlayIcon />
            <p className='text-sm'>Courses</p>
          </div>
          <div className='flex items-center gap-6'>
            {socialMedia.map((item) => (
              <Image key={item.thumbnail} src={item.thumbnail} width={32} height={32} alt={item.thumbnail} />
            ))}
          </div>
        </div>
      </div>
    </div>
    <Tabs defaultValue='book' className='mt-16 w-full'>
      <TabsList className='grid w-full grid-cols-7 bg-transparent'>
        {literatureCourseTabs.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.value}
            className='w-184 h-16 bg-gray-charcoal/50 text-xl text-gray-charcoal'
          >
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {literatureCourseTabs.map((item) => (
        <TabsContent key={item.id} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  </div>
)

export default LiteratureCourse
