import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

interface CollapsibleContentProps {
  title: string
  description: string
}
interface CollapsibleProps {
  collapsibleItems?: CollapsibleContentProps[]
}
const collapsible = ({ collapsibleItems }: CollapsibleProps) => (
  <Accordion type='single' collapsible className='w-full'>
    {collapsibleItems?.map((item, index) => (
      <AccordionItem key={item.description} value={`item-${index}`}>
        <AccordionTrigger>
          <div className='flex items-center gap-4'>
            <div className='h-5 w-5 rounded-full bg-green-light' />
            <p className='text-lg leading-8'>{item.title}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className='pl-9 text-sm leading-6 text-slate-blue'>{item.description}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
)

export default collapsible
