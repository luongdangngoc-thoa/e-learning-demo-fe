// __tests__/ReadingBlogListCard.test.tsx

import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'

import ReadingBlogListCard from '@/app/(root)/blog/components/ReadingBlogListCard'

const readingBlogProps = {
  image: '/images/reading-blog.png',
  variant: 'outline' as const,
  buttonLabel: 'UX/UI'
}

describe('ReadingBlogListCard', () => {
  it('renders the button label', () => {
    render(<ReadingBlogListCard {...readingBlogProps} />)
    const buttonLabel = screen.getByText(/UX\/UI/i)
    expect(buttonLabel).toBeInTheDocument()
  })
})
