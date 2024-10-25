import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'

import ArticleCard from '@/components/ArticleCard'

const articleProps = {
  title: 'AWS Certified solutions Architect 1',
  image: '/images/marketing-article-1.png',
  time: '3 Month',
  category: 'Design',
  author: 'Lina',
  avatar: '/images/avatar.png',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  price: 100,
  priceDiscount: 80
}

describe('ArticleCard', () => {
  it('renders the article title', () => {
    render(<ArticleCard {...articleProps} />)
    const title = screen.getByText(/AWS Certified solutions Architect 1/i)
    expect(title).toBeInTheDocument()
  })

  it('renders the article description', () => {
    render(<ArticleCard {...articleProps} />)
    const description = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/i)
    expect(description).toBeInTheDocument()
  })

  it('renders the article author', () => {
    render(<ArticleCard {...articleProps} />)
    const author = screen.getByText(/Lina/i)
    expect(author).toBeInTheDocument()
  })
})
