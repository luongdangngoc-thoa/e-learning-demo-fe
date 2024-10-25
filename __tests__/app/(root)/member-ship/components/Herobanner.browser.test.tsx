import { render, screen } from '@testing-library/react'

import HeroBanner from '@/components/HeroBanner'

describe('HeroBanner', () => {
  const defaultProps = {
    title: 'Welcome to Our Website',
    description: 'This is a brief description of what we do.',
    buttonLabel: 'Get Started'
  }

  it('renders the title correctly', () => {
    render(<HeroBanner {...defaultProps} />)
    expect(screen.getByText('Welcome to Our Website')).toBeInTheDocument()
  })

  it('renders the description correctly', () => {
    render(<HeroBanner {...defaultProps} />)
    expect(screen.getByText('This is a brief description of what we do.')).toBeInTheDocument()
  })

  it('renders the button label correctly', () => {
    render(<HeroBanner {...defaultProps} />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('uses default button label when none is provided', () => {
    render(<HeroBanner {...defaultProps} buttonLabel={undefined} />)
    expect(screen.getByText('Click here')).toBeInTheDocument()
  })
})
