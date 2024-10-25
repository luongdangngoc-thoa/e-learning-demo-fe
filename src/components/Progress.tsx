'use client'

import { useEffect, useState } from 'react'

import { Progress as ProgressPrimitive } from '@/components/ui/progress'

interface ProgressProps {
  value: number
}
export function Progress({ value }: ProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500)
    return () => clearTimeout(timer)
  }, [value])

  return <ProgressPrimitive value={progress} className='rounded-0.5 bg-gray-light' />
}
