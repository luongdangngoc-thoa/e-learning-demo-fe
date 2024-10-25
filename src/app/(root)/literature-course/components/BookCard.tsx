import Image from 'next/image'
import React from 'react'

import { Card, CardContent, CardFooter } from '@/components/ui/card'

const BookCard = () => (
  <Card className='w-max'>
    <CardContent className='pt-6.5'>
      <Image src='/images/book.png' alt='book' width={450} height={518} />
    </CardContent>
    <CardFooter className='flex items-center justify-between'>
      <p className='text-2xl text-black/80'>All Benefits of PLUS</p>
      <p className='text-3xl font-extrabold text-turquoise-medium'>$24</p>
    </CardFooter>
  </Card>
)

export default BookCard
