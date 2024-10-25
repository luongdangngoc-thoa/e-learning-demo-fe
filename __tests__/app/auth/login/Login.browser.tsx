import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import LoginForm from '@/app/(auth)/auth/components/LoginForm'

describe('LoginForm', () => {
  it('renders the login form with required fields', () => {
    render(<LoginForm />)

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('shows validation errors when fields are empty and submit button is clicked', async () => {
    render(<LoginForm />)

    fireEvent.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() => {
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument()
      expect(screen.getByText(/password must be between 8 and 20 characters/i)).toBeInTheDocument()
    })
  })

  it('shows validation errors for invalid password', async () => {
    render(<LoginForm />)

    fireEvent.input(screen.getByLabelText(/Email/i), {
      target: { value: 'testuser@gmail.com' }
    })
    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: 'short' }
    })
    fireEvent.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() => {
      expect(screen.getByText(/password must be between 8 and 20 characters/i)).toBeInTheDocument()
    })
  })

  it('submits the form with valid data', async () => {
    const consoleLogSpy = jest.spyOn(console, 'log')

    render(<LoginForm />)

    fireEvent.input(screen.getByLabelText(/user name/i), {
      target: { value: 'testuser@gmail.com' }
    })
    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: 'ValidPassword1' }
    })
    fireEvent.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() => {
      expect(consoleLogSpy).toHaveBeenCalledWith({
        username: 'testuser@gmail.com',
        password: 'ValidPassword1'
      })
    })

    consoleLogSpy.mockRestore()
  })
})
