import Image, { type StaticImageData } from 'next/image'

interface ExploreSubHeaderProps {
  icon: StaticImageData | string
  title: string
}
const ExploreSubHeader = ({ icon, title }: ExploreSubHeaderProps) => (
  <div className='flex items-center justify-between'>
    <div className='flex items-center gap-4'>
      {icon && <Image src={icon} alt='color-palette' width={30} height={30} className='h-7.5 w-7.5' />}
      <p className='text-2.5xl font-bold'>{title}</p>
    </div>
    <div className='flex cursor-pointer items-center gap-12'>
      <p className='text-2xl font-medium text-turquoise-cyan'>Lorem Ipsum</p>
      <Image src='/svg/arrow-blue.svg' alt='arrow-blue' width={32} height={32} className='h-8 w-8' />
    </div>
  </div>
)

export default ExploreSubHeader
