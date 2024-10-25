import Image from 'next/image'
import React from 'react'

import ArticleCard, { type ArticleProps } from '@/components/ArticleCard'
import { Button } from '@/components/Button'
import DealCard from '@/components/DealCard'
import { Input } from '@/components/InputField'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import CreatorCard from './components/CreatorCard'

const socialMedia = [
  {
    thumbnail: '/svg/facebook.svg'
  },
  {
    thumbnail: '/svg/ig.svg'
  },
  {
    thumbnail: '/svg/whatsapp.svg'
  }
]

const dealsList = [
  {
    id: 1,
    backgroundImage: '/images/deal-1.png',
    discount: 50,
    title: 'adipising elit, sed do eiusmod tempor',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil magni nesciunt blanditiis consequuntur illum totam sequi recusandae eaque ipsam, repellendus reiciendis accusantium cumque consequatur hic quibusdam, fuga libero tempore neque!',
    color: '#49BBBD'
  },
  {
    id: 2,
    backgroundImage: '/images/deal-2.png',
    discount: 10,
    title: 'adipising elit, sed do eiusmod tempor',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil magni nesciunt blanditiis consequuntur illum totam sequi recusandae eaque ipsam, repellendus reiciendis accusantium cumque consequatur hic quibusdam, fuga libero tempore neque!',
    color: '#49BBBD'
  },
  {
    id: 3,
    backgroundImage: '/images/deal-3.png',
    discount: 50,
    title: 'adipising elit, sed do eiusmod tempor',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil magni nesciunt blanditiis consequuntur illum totam sequi recusandae eaque ipsam, repellendus reiciendis accusantium cumque consequatur hic quibusdam, fuga libero tempore neque!',
    color: '#49BBBD'
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
const SearchPage = () => (
  <div>
    <div className='bg-[url(/images/search-banner.png)] bg-cover bg-center bg-no-repeat py-[100px]'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex items-center rounded-lg bg-white p-1'>
          <Input placeholder='Search your favourite course' className='h-16 border-none focus:outline-none' />
          <Button className='h-16 rounded-xl px-11 text-2xl font-bold'>Search</Button>
        </div>
        <div className='mt-5 flex items-center gap-5'>
          <Select>
            <SelectTrigger className='h-16 bg-white p-4 text-lg font-medium'>
              <SelectValue placeholder='Subject' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='h-16 bg-white p-4 text-lg font-medium'>
              <SelectValue placeholder='Subject' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Partner</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='h-16 bg-white p-4 text-lg font-medium'>
              <SelectValue placeholder='Program' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Program</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='h-16 bg-white p-4 text-lg font-medium'>
              <SelectValue placeholder='Language' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='h-16 bg-white p-4 text-lg font-medium'>
              <SelectValue placeholder='Abaliability' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Abaliability</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='h-16 bg-white p-4 text-lg font-medium'>
              <SelectValue placeholder='Learning Type' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Learning Type</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
    <div className='mx-auto mt-16 max-w-screen-2xl'>
      <div className='grid grid-cols-4 gap-15'>
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>

      <div className='my-16 flex w-full items-center justify-evenly rounded-2.5xl bg-blue-light/20 px-25 py-7.5'>
        <div className='space-y-8'>
          <p className='text-balance text-3xl font-semibold'>Know about learning learning platform</p>
          <ul className='space-y-7.5'>
            <li className='flex items-center gap-4 text-lg leading-8'>
              <div className='size-5 rounded-full bg-turquoise-green/45' />
              Free E-book, video & consolation
            </li>
            <li className='flex items-center gap-4 text-lg leading-8'>
              <div className='size-5 rounded-full bg-turquoise-green/45' />
              Top instructors from around world
            </li>
            <li className='flex items-center gap-4 text-lg leading-8'>
              <div className='size-5 rounded-full bg-turquoise-green/45' />
              Top courses from your team
            </li>
          </ul>
        </div>
        <Image src='/images/search-meeting.png' alt='search-meeting.png' width={814} height={474} />
      </div>
    </div>
    <div className='mt-16 bg-blue-light/20 py-25'>
      <div className='mx-auto mt-16 max-w-screen-2xl'>
        <h1 className='mb-12.5 text-3xl font-semibold'>Recommended for you</h1>
        <div className='grid grid-cols-4 gap-15'>
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </div>
    <div className='mx-auto mt-24 max-w-screen-2xl'>
      <h2 className='text-3xl font-medium'>Classes tought by real creators</h2>
      <div className='mt-52 grid grid-cols-3 gap-12 gap-y-15'>
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
      </div>
    </div>
    <div className='mt-16 bg-blue-light/20 py-25'>
      <div className='mx-auto mt-16 max-w-screen-2xl'>
        <h1 className='text-3xl font-semibold'>What our students have to say</h1>
        <div className='mt-16 flex items-center gap-28 rounded-3xl bg-white pb-8 pl-25 pr-15 pt-20'>
          <Image src='/images/student-say.png' alt='student' width={522} height={515} />
          <div>
            <p className='text-3xl font-bold'>Savannah Nguyen</p>
            <p className='mb-5 mt-7.5 text-2xl font-medium'>Lorem ipsum dolor sit amet</p>
            <p className='text-balance text-lg leading-8 text-slate-blue'>
              Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit,
              sed do eiusmod tempor
            </p>
            <div className='mt-12.5 flex items-center gap-6'>
              {socialMedia.map((item) => (
                <Image key={item.thumbnail} src={item.thumbnail} width={32} height={32} alt={item.thumbnail} />
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <Image
              src='/images/avatar.png'
              alt='avatar'
              width={80}
              height={80}
              objectFit='cover'
              className='size-20 max-w-max rounded-full'
            />
            <Image
              src='/images/avatar.png'
              alt='avatar'
              width={80}
              height={80}
              objectFit='cover'
              className='size-20 max-w-max rounded-full'
            />
            <Image
              src='/images/avatar.png'
              alt='avatar'
              width={80}
              height={80}
              objectFit='cover'
              className='size-20 max-w-max rounded-full'
            />
            <Image
              src='/images/avatar.png'
              alt='avatar'
              width={80}
              height={80}
              objectFit='cover'
              className='size-20 max-w-max rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
    <div className='mx-auto mt-24 max-w-screen-2xl'>
      <p className='text-3xl font-medium'>Top Education offers and deals are listed here</p>
      <div className='mb-20 mt-16 flex items-center justify-around gap-16'>
        {dealsList.map((deal) => (
          <DealCard key={deal.id} {...deal} />
        ))}
      </div>
    </div>
  </div>
)
export default SearchPage
