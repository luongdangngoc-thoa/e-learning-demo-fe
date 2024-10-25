import { render, screen } from '@testing-library/react'

import PricingCard from '@/app/(root)/membership/components/PricingCard'

const props = {
  type: 'Like a pussy',
  price: 0,
  per: 'forever',
  checkColor: '#C2C2C2',
  isBest: false,
  services: ['Components-driven system', 'Sales-boosting landing pages', 'Awesome Feather icons pack'],
  buttonLabel: 'Try for free'
}

describe('PricingCard', () => {
  it('renders with the provided props', () => {
    render(<PricingCard {...props} />)

    expect(screen.getByText('Like a pussy')).toBeInTheDocument()
    expect(screen.getByText('FREE')).toBeInTheDocument()
    expect(screen.getByText('Try for free')).toBeInTheDocument()

    expect(screen.getByText('Components-driven system')).toBeInTheDocument()
    expect(screen.getByText('Sales-boosting landing pages')).toBeInTheDocument()
    expect(screen.getByText('Awesome Feather icons pack')).toBeInTheDocument()
  })

  it('renders with best is true', () => {
    render(<PricingCard {...props} isBest />)
    expect(screen.getByText(/Best !/i)).toBeInTheDocument()
  })
})
