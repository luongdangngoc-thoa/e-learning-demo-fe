import React from 'react'

interface IntroBadgeProps {
  title: string
  coreColor: string
}
const IntroBadge = ({ title, coreColor }: IntroBadgeProps) => (
  <div className='h-[418px] w-25 -rotate-6 rounded-3xl bg-white px-4 py-5 shadow-md'>
    <div className='h-full w-full rounded-3xl bg-turquoise-green px-3 py-8'>
      <div className='flex size-full items-center justify-center rounded-3xl' style={{ backgroundColor: coreColor }}>
        <p className='rotate-360' style={{ writingMode: 'vertical-rl' }}>
          {title}
        </p>
      </div>
    </div>
  </div>
)

export default IntroBadge
