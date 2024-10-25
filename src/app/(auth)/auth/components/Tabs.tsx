'use client'

import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import Image from 'next/image'
import { useState } from 'react'

import { TabsContent } from '@/components/ui/tabs'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export function TabsAuth() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <div className='flex items-center justify-center gap-10'>
      <div className='flex h-screen max-w-[1440px] items-center justify-center gap-[111px]'>
        <div className='relative'>
          {activeTab === 'login' ? (
            <Image className='hidden sm:block' width={731} height={825} src='/images/login1.png' alt={activeTab} />
          ) : (
            <Image className='hidden sm:block' width={731} height={825} src='/images/register.png' alt={activeTab} />
          )}
          <div className='absolute bottom-7 left-10 flex flex-col justify-center text-white'>
            <h2 className='hidden p-1 text-4xl sm:block'>Lorem Ipsum is simply </h2>
            <h3 className='hidden p-1 text-2xl sm:block'>Lorem Ipsum is simply </h3>
          </div>
        </div>
      </div>
      <div className='jtify-center items-center'>
        <div className='flex items-center justify-center p-10 text-base font-normal not-italic text-black'>
          Welcome to lorem..!
        </div>
        <Tabs
          onValueChange={(tabValue) => {
            setActiveTab(tabValue)
          }}
          defaultValue='login'
          className='flex w-[435px] flex-col justify-center'
        >
          <div className='px-15'>
            <TabsList className='mx-auto grid h-[60px] w-full grid-cols-2 items-center gap-2 rounded-full bg-turquoise-light px-2.5'>
              <TabsTrigger
                value='login'
                className={`${activeTab === 'login' ? 'bg-turquoise-medium' : 'bg-transparent'} h-10 w-full rounded-full text-sm font-medium text-white hover:bg-turquoise-light`}
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value='register'
                className={`${activeTab === 'register' ? 'bg-turquoise-medium' : 'bg-transparent'} h-10 w-full rounded-full text-sm font-medium text-white hover:bg-turquoise-light`}
              >
                Register
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value='login'>
            <LoginForm />
          </TabsContent>
          <TabsContent value='register'>
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
