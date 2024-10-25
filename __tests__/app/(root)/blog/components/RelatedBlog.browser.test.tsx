import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'

import RelatedBlog from '@/app/(root)/blog/components/RelatedBlogCard'

const relatedBlogProps = {
  title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
  image: '/images/related-blog.png',
  author: 'Lina',
  description:
    'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
  view: 250000
}

describe('RelatedBlog', () => {
  it('renders the blog title', () => {
    render(<RelatedBlog {...relatedBlogProps} />)
    const title = screen.getByText(/Class adds \$30 million to its balance sheet for a Zoom-friendly edtech solution/i)
    expect(title).toBeInTheDocument()
  })

  it('renders the blog description', () => {
    render(<RelatedBlog {...relatedBlogProps} />)
    const description = screen.getByText(
      /Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively/i
    )
    expect(description).toBeInTheDocument()
  })

  it('renders the blog author', () => {
    render(<RelatedBlog {...relatedBlogProps} />)
    const author = screen.getByText(/Lina/i)
    expect(author).toBeInTheDocument()
  })
})
