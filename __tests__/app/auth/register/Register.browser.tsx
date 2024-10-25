import { fireEvent, render, screen } from '@testing-library/react'

import RegisterForm from '@/app/(auth)/auth/components/RegisterForm'

describe('RegisterForm', () => {
  it('renders form fields', () => {
    render(<RegisterForm />)

    expect(screen.getByPlaceholderText(/Enter your Email Address/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Enter your User name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Enter your Password/i)).toBeInTheDocument()
  })

  it('shows password conditions when password is entered', () => {
    render(<RegisterForm />)

    const passwordInput = screen.getByPlaceholderText('Enter your Password')
    fireEvent.change(passwordInput, { target: { value: 'Pass123' } })

    expect(screen.getByText(/8-20 Characters/i)).toBeInTheDocument()
    expect(screen.getByText(/At least one capital letter/i)).toBeInTheDocument()
    expect(screen.getByText(/At least one lower letter/i)).toBeInTheDocument()
    expect(screen.getByText(/At least one special letter/i)).toBeInTheDocument()
    expect(screen.getByText(/At least one number/i)).toBeInTheDocument()
    expect(screen.getByText(/No spaces/i)).toBeInTheDocument()
  })

  it('displays validation errors on submit', async () => {
    render(<RegisterForm />)

    const submitButton = screen.getByText('Register')
    fireEvent.click(submitButton)

    expect(await screen.findByText(/Email address is required/i)).toBeInTheDocument()
    expect(await screen.findByText(/User name is required/i)).toBeInTheDocument()
    expect(await screen.findByText(/Password must be between 8 and 20 characters/i)).toBeInTheDocument()
  })

  it('submits form with valid data', async () => {
    const consoleSpy = jest.spyOn(console, 'log')
    render(<RegisterForm />)

    fireEvent.change(screen.getByPlaceholderText('Enter your Email Address'), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByPlaceholderText('Enter your User name'), { target: { value: 'testuser' } })
    fireEvent.change(screen.getByPlaceholderText('Enter your Password'), { target: { value: 'Pass123!' } })

    fireEvent.click(screen.getByText('Register'))

    await screen.findByText('Register')

    expect(consoleSpy).toHaveBeenCalledWith({
      email: 'test@example.com',
      username: 'testuser',
      password: 'Pass123!'
    })
  })
})
