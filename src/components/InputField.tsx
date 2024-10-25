'use client'

import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/shared/utils/tailwind.util'

import { Button } from './Button'

const InputVariants = cva(
  'flex h-14 w-full rounded-md border border-gray-light border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        roundedFull: 'rounded-full border border-turquoise-medium focus-visible:ring-turquoise-medium'
      },
      inputSize: {
        default: 'h-[60px] px-5',
        sm: 'h-[54px] px-8'
      }
    },

    defaultVariants: {
      variant: 'default'
    }
  }
)
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'roundedFull'
  inputSize?: 'default' | 'sm'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', inputSize = 'default', type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const toggleShowPassword = () => setShowPassword(!showPassword)
    return (
      <div className='relative w-full'>
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          className={cn(InputVariants({ variant, inputSize, className }))}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <Button
            variant='ghost'
            size='icon'
            type='button'
            className='absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent hover:text-primary'
            onClick={toggleShowPassword}
          >
            {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </Button>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
