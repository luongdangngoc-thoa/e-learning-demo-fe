import React from 'react'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

interface SlideProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  className: string
}
const Slide = <T,>({ items, renderItem, className }: SlideProps<T>) => (
  <Carousel className={`min-w-full max-w-sm ${className}`}>
    <CarouselContent className='pl-1 md:basis-1/2 lg:basis-1/3'>
      {items.map((item) => (
        <CarouselItem key={JSON.stringify(item)}>
          <div>{renderItem(item)}</div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)

export default Slide
