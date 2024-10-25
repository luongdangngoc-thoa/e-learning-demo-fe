import { render, screen } from '@testing-library/react'

import CourseProcessCard from '@/app/(root)/courses/components/CourseProcessCard'

describe('CourseProcessCard component', () => {
  const props = {
    image: '/images/news-meeting.png',
    title: 'AWS Certified Solutions Architect',
    avatar: '/images/avatar.png',
    name: 'John Doe',
    progressValue: 90,
    totalLesson: 15,
    currentLesson: 10
  }

  it('renders correctly', () => {
    render(<CourseProcessCard {...props} />)

    expect(screen.getByText(/AWS Certified Solutions Architect/i)).toBeInTheDocument()
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
    expect(screen.getByText(/15/i)).toBeInTheDocument()
    expect(screen.getByText(/10/i)).toBeInTheDocument()
  })

  it('renders the image correctly', () => {
    render(<CourseProcessCard {...props} />)

    const image = screen.getByAltText('news')
    expect(image).toBeInTheDocument()
  })

  it('displays progress correctly', () => {
    render(<CourseProcessCard {...props} />)

    const progressText = screen.getByText(/Lesson/i)
    const progressTextCurrentLesson = screen.getByText(/10/i)
    const progressTextOf = screen.getByText(/of/i)
    const progressTextTotalLesson = screen.getByText(/15/i)
    expect(progressText).toBeInTheDocument()
    expect(progressTextCurrentLesson).toBeInTheDocument()
    expect(progressTextOf).toBeInTheDocument()
    expect(progressTextTotalLesson).toBeInTheDocument()
  })
})
