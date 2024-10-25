'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/InputField'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { PaymentSchema, type TPaymentSchema } from '@/shared/schemas/schemas'
import { cn } from '@/shared/utils/tailwind.util'

const paymentMethods = [
  {
    thumbnail: '/images/paypal.png',
    value: 'paypal'
  },
  {
    thumbnail: '/images/am-express.png',
    value: 'americanExpress'
  },
  {
    thumbnail: '/images/visa.png',
    value: 'visa'
  },
  {
    thumbnail: '/images/credit.png',
    value: 'creditCard'
  }
]
const CheckoutForm = () => {
  const form = useForm<TPaymentSchema>({
    resolver: zodResolver(PaymentSchema),
    defaultValues: {
      payment: 'paypal',
      cardName: '',
      cardNumber: '',
      expiry: new Date(0),
      cvc: '',
      savePaymentSetting: false
    }
  })

  const onSubmit = (data: TPaymentSchema) => {
    console.log(data)
  }
  return (
    <div className='rounded-2.5xl p-12.5 shadow-2xl'>
      <p className='text-4xl font-semibold'>Checkout</p>
      <p className='mb-10 text-lg font-semibold text-slate-blue'>Cart Type</p>
      <Form {...form}>
        <form className='space-y-7.5' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='payment'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup defaultValue={field.value} className='flex gap-5' onValueChange={field.onChange}>
                    {paymentMethods.map((method) => (
                      <div key={method.value}>
                        <RadioGroupItem value={method.value} id={method.value} hidden />
                        <Label htmlFor={method.value}>
                          {method?.thumbnail && (
                            <Image
                              src={method.thumbnail}
                              className={`h-[92px] w-[167px] cursor-pointer rounded-2.5xl border object-cover ${method.value === form.getValues('payment') ? 'border-turquoise-medium' : ''}`}
                              alt={method.thumbnail}
                              width={167}
                              height={92}
                            />
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='cardName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg font-semibold text-slate-blue'>Name on Card</FormLabel>
                <FormControl>
                  <Input placeholder='Enter name on Card' {...field} className='placeholder:text-lg' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='cardNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg font-semibold text-slate-blue'>Card Number</FormLabel>
                <FormControl>
                  <Input placeholder='Enter Card Number' {...field} className='placeholder:text-lg' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex items-center gap-9'>
            <FormField
              control={form.control}
              name='expiry'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='text-lg font-semibold text-slate-blue'>Expiration Date ( MM/YY )</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant='outline'
                          className={cn(
                            'h-15 w-full rounded-lg border border-gray-light pl-5 text-left text-lg font-normal text-gray-charcoal shadow-none hover:bg-transparent hover:text-gray-charcoal focus:border-black',
                            !field.value && 'text-gray-charcoal'
                          )}
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Enter Expiration Date</span>}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={field.onChange}
                        disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='cvc'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='text-lg font-semibold text-slate-blue'>CVC</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter CVC' {...field} className='placeholder:text-lg' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='savePaymentSetting'
            render={({ field }) => (
              <FormItem className='flex flex-row items-start space-x-2 space-y-0 rounded-md'>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel className='text-slate-blue/90'>Use different settings for my mobile devices</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button type='submit' variant='default' className='w-full rounded-xl'>
            Confirm Payment
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CheckoutForm
