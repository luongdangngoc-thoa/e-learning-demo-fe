'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-context-menu'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'

import authApiRequest from '@/api-requests/auth-api.request'
import { Button } from '@/components/Button'
import { Input } from '@/components/InputField'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { LoginSchema, type TLoginSchema } from '@/shared/schemas/schemas'

const LoginForm = () => {
  const navigate = useRouter()
  const { toast } = useToast()

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const loginMutation = useMutation({
    mutationFn: (payload: TLoginSchema) => authApiRequest.login(payload),

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
        title: 'Login successfully',
        variant: 'success'
      })
      setTimeout(() => {
        navigate.push('/')
      }, 1500)
    }
  })

  const onSubmit: SubmitHandler<TLoginSchema> = (data) => {
    loginMutation.mutate(data)
  }

  return (
    <Card className='border-none shadow-none'>
      <CardHeader>
        <CardDescription className='text-base font-normal not-italic text-gray-charcoal'>
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
                  <FormLabel htmlFor='email' className='mb-2 text-base font-normal text-black'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      variant='roundedFull'
                      id='email'
                      placeholder='Enter your email address'
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
                  <FormLabel htmlFor='password' className='mb-2 text-base font-normal text-black'>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      variant='roundedFull'
                      id='password'
                      placeholder='Enter your Password'
                      type='password'
                      className='placeholder:text-gray-silver text-1.5sm font-normal'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='mt-5 flex items-center justify-between'>
              <div className='flex gap-4'>
                <input type='checkbox' className='h-4 w-4 border-solid' />
                <Label className='text-xs font-light text-black'>Remember me</Label>
              </div>
              <div>
                <a href='/forgot-password' className='text-xs font-light text-black'>
                  Forgot Password ?
                </a>
              </div>
            </div>
            <div className='mt-5 flex items-end justify-end'>
              <Button type='submit' className='h-12 w-60 text-base font-normal text-white'>
                Login
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default LoginForm
