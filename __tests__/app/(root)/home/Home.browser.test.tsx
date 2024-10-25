import { render, screen } from '@testing-library/react'
import { type StaticImageData } from 'next/image'

import ExploreSubHeader from '@/app/(root)/(home)/components/ExploreSubHeader'
import FeatureCard from '@/app/(root)/(home)/components/FeatureCard'
import IntroCard, { type IntroCardProps } from '@/app/(root)/(home)/components/IntroCard'
import StatItem from '@/app/(root)/(home)/components/StatItem'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string | StaticImageData; alt: string }) => (
    <img src={typeof src === 'string' ? src : src.src} alt={alt} {...props} />
  )
}))

describe('Home page', () => {
  it('render StatItem', () => {
    const statItemProps = {
      title: 'Total Users',
      description: '1000'
    }
    render(<StatItem {...statItemProps} />)

    expect(screen.getByText(/Total Users/i)).toBeInTheDocument()
    expect(screen.getByText(/1000/i)).toBeInTheDocument()
  })

  it('render FeatureCard', () => {
    const featureCardProps = {
      title: 'Online Billing, Invoicing, & Contracts',
      description:
        "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
      thumbnail: '/images/file-invoice.png',
      color: '#5B72EE'
    }
    render(<FeatureCard {...featureCardProps} />)
    expect(screen.getByText(/Online Billing, Invoicing, & Contracts/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts./i
      )
    ).toBeInTheDocument()
  })

  it('render IntroCard', () => {
    const introCardProps: IntroCardProps = {
      backgroundImage: '/images/for-instructors.png',
      title: 'FOR INSTRUCTORS',
      variant: 'outline',
      buttonLabel: 'Start a class today'
    }
    render(<IntroCard {...introCardProps} />)
    const buttonElement = screen.getByText(/Start a class today/i)

    expect(screen.getByText(/FOR INSTRUCTORS/i)).toBeInTheDocument()
    expect(buttonElement).toHaveClass('border-white bg-transparent text-white')
    expect(buttonElement).toBeInTheDocument()
  })

  it('render ExploreSubHeader', () => {
    const icon = '/images/icon.png'
    const title = 'Explore Title'

    render(<ExploreSubHeader icon={icon} title={title} />)

    const iconElement = screen.getByAltText('color-palette')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveAttribute('src', icon)

    const titleElement = screen.getByText(/Explore Title/i)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass('text-2.5xl font-bold')

    const loremIpsumElement = screen.getByText(/Lorem Ipsum/i)
    expect(loremIpsumElement).toBeInTheDocument()
    expect(loremIpsumElement).toHaveClass('text-2xl font-medium text-turquoise-cyan')

    const arrowElement = screen.getByAltText('arrow-blue')
    expect(arrowElement).toBeInTheDocument()
    expect(arrowElement).toHaveAttribute('src', '/svg/arrow-blue.svg')
  })
})
