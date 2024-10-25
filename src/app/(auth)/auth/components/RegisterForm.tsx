/* eslint-disable react/jsx-one-expression-per-line */
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import authApiRequest from '@/api-requests/auth-api.request'
import { Button } from '@/components/Button'
import { Input } from '@/components/InputField'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { RegisterSchema, type TRegisterSchema } from '@/shared/schemas/schemas'

export const ConditionItem = ({ condition, text }: { condition: boolean; text: string }) => (
  <li className={`flex items-center gap-1 ${condition ? 'text-green-500' : 'text-red-500'}`}>
    {condition ? <CheckIcon /> : <Cross2Icon />} <p>{text}</p>
  </li>
)
const RegisterForm = () => {
  const navigate = useRouter()
  const { toast } = useToast()

  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      username: '',
      password: ''
    }
  })

  const password = form.watch('password', '')

  const conditions = useMemo(
    () => ({
      length: password.length >= 8 && password.length <= 20,
      number: /\d/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
      noSpaces: /^\S*$/.test(password)
    }),
    [password]
  )

  const { mutate: registerMutation } = useMutation({
    mutationFn: (payload: TRegisterSchema) => authApiRequest.register(payload),
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message || 'An error occurred'
        toast({
          title: 'Login failed',
          variant: 'destructive',
          description: errorMessage
        })
      } else {
        toast({
          title: 'Login failed',
          variant: 'destructive',
          description: 'An unknown error occurred'
        })
      }
    },
    onSuccess: () => {
      toast({
        title: 'Register successfully',
        variant: 'success'
      })
      navigate.push('/auth')
    }
  })

  const onSubmit: SubmitHandler<TRegisterSchema> = (data) => {
    registerMutation(data)
  }

  return (
    <Card className='border-none shadow-none'>
      <CardHeader>
        <CardDescription className='text-base font-normal text-gray-charcoal'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-7.5'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='mb-2 text-base font-normal text-black'>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      variant='roundedFull'
                      placeholder='Enter your Email Address'
                      className='placeholder:text-gray-silver text-1.5sm font-normal'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='mb-2 text-base font-normal text-black'>User name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      variant='roundedFull'
                      placeholder='Enter your User name'
                      className='placeholder:text-gray-silver text-1.5sm font-normal'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='mb-2 text-base font-normal text-black'>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      variant='roundedFull'
                      placeholder='Enter your Password'
                      type='password'
                      className='placeholder:text-gray-silver text-1.5sm font-normal'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {password && (
              <div className='space-y-1 px-2.5 text-xs'>
                <span>Password must contain: </span>
                <ConditionItem condition={conditions.length} text='8-20 Characters' />
                <ConditionItem condition={conditions.uppercase} text='At least one capital letter' />
                <ConditionItem condition={conditions.lowercase} text='At least one lower letter' />
                <ConditionItem condition={conditions.specialChar} text='At least one special letter' />
                <ConditionItem condition={conditions.number} text='At least one number' />
                <ConditionItem condition={conditions.noSpaces} text='No spaces' />
              </div>
            )}
            <div className='mt-5 flex items-end justify-end'>
              <Button type='submit' className='h-12 w-60 text-base font-normal not-italic text-white'>
                Register
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
export default RegisterForm
