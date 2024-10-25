import { render, screen } from '@testing-library/react'

import ApplyCard from '@/app/(root)/membership/components/ApplyCard'

describe('ApplyCard', () => {
  const defaultProps = {
    image: '/images/apply-teacher.png',
    title: 'Become a Teacher',
    description:
      'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
    buttonLabel: 'Apply as a Teacher'
  }

  it('renders the image with correct attributes', () => {
    render(<ApplyCard {...defaultProps} />)
    const image = screen.getByAltText('apply')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
    expect(image.getAttribute('src')).toContain('/_next/image?url=%2Fimages%2Fapply-teacher.png')
    expect(image).toHaveAttribute('width', '720')
    expect(image).toHaveAttribute('height', '382')
  })

  it('renders the title correctly', () => {
    render(<ApplyCard {...defaultProps} />)
    expect(screen.getByText('Become a Teacher')).toBeInTheDocument()
  })

  it('renders the description correctly', () => {
    render(<ApplyCard {...defaultProps} />)
    expect(
      screen.getByText(
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
      )
    ).toBeInTheDocument()
  })

  it('renders the button with correct label', () => {
    render(<ApplyCard {...defaultProps} />)
    expect(screen.getByText('Apply as a Teacher')).toBeInTheDocument()
  })

  it('renders the button with correct styles', () => {
    render(<ApplyCard {...defaultProps} />)
    const button = screen.getByText('Apply as a Teacher')
    expect(button).toHaveClass('rounded-xl text-xl font-medium')
  })

  it('renders with default props if no props are provided', () => {
    render(<ApplyCard />)
    const image = screen.getByAltText('apply')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
    expect(image.getAttribute('src')).toContain('/_next/image?url=%2Fimages%2Fapply-teacher.png')
    expect(screen.queryByText(defaultProps.title)).not.toBeInTheDocument()
    expect(screen.queryByText(defaultProps.description)).not.toBeInTheDocument()
    expect(screen.queryByText(defaultProps.buttonLabel)).not.toBeInTheDocument()
  })
})
