import { render, screen } from '@testing-library/react'

import ReviewCard from '@/components/ReviewCard'

describe('ReviewCard component', () => {
  const props = {
    logo: '/images/avatar.png',
    title: 'Title',
    description: 'Lorem ipsum vip',
    color: '#333',
    isFetching: false
  }

  it('renders correctly', () => {
    render(<ReviewCard {...props} />)

    // Check if name and comment are rendered
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument()

    // Check if the avatar image is rendered
    const avatarImage = screen.getByAltText('image')
    expect(avatarImage).toBeInTheDocument()
  })
})
