import { z } from 'zod'

export const schemas = z.object({
  username: z.string().min(1, { message: 'User name is required' }),
  password: z
    .string()
    .min(8, { message: 'Password must be between 8 and 20 characters' })
    .max(20, { message: 'Password must be between 8 and 20 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/^\S*$/, { message: 'Password must not contain spaces' })
    .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, { message: 'Password must contain at least one special character' }),
  email: z.string().min(1, { message: 'Email address is required' }).email({ message: 'Invalid email address' }),
  payment: z.enum(['paypal', 'americanExpress', 'visa', 'creditCard'], {
    required_error: 'Payment method is required.'
  }),
  cardName: z.string().min(1, { message: 'Card name is required' }),
  cardNumber: z.string().min(1, { message: 'Card number is required' }),
  expiry: z.date({
    required_error: 'A date is required.'
  }),
  cvc: z.string().min(1, { message: 'CVC is required' }),
  savePaymentSetting: z.boolean()
})

export const LoginSchema = schemas.pick({
  email: true,
  password: true
})

export const RegisterSchema = schemas.pick({
  email: true,
  username: true,
  password: true
})

export const PaymentSchema = schemas.pick({
  payment: true,
  cardName: true,
  cardNumber: true,
  expiry: true,
  cvc: true,
  savePaymentSetting: true
})

export type TLoginSchema = z.infer<typeof LoginSchema>
export type TRegisterSchema = z.infer<typeof RegisterSchema>
export type TPaymentSchema = z.infer<typeof PaymentSchema>
