import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Button } from '@/components/Button'

describe('Button component', () => {
  test('renders correctly with default props', () => {
    render(<Button>Click Me</Button>)
    const buttonElement = screen.getByText('Click Me')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('bg-turquoise-medium text-primary-foreground')
  })

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    const buttonElement = screen.getByText('Click Me')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click Me</Button>)
    const buttonElement = screen.getByText('Click Me')
    expect(buttonElement).toBeDisabled()
  })
})
