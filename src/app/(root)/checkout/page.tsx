import DealCard from '@/components/DealCard'

import CartSummary from './components/CartSummary'
import CheckoutForm from './components/CheckoutForm'

const CartSummaries = [
  {
    id: 1,
    image: '/images/news-meeting.png',
    title: 'adipising elit, sed do eiusmod tempor',
    description: 'Lorem ipsum dollar...',
    price: 24.69
  },
  {
    id: 2,
    image: '/images/news-meeting.png',
    title: 'adipising elit, sed do eiusmod tempor',
    description: 'Lorem ipsum dollar...',
    price: 24.69
  }
]

const dealsList = [
  {
    id: 1,
    backgroundImage: '/images/deal-1.png',
    discount: 50,
    title: 'adipising elit, sed do eiusmod tempor',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil magni nesciunt blanditiis consequuntur illum totam sequi recusandae eaque ipsam, repellendus reiciendis accusantium cumque consequatur hic quibusdam, fuga libero tempore neque!',
    color: '#49BBBD'
  },
  {
    id: 2,
    backgroundImage: '/images/deal-2.png',
    discount: 10,
    title: 'adipising elit, sed do eiusmod tempor',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil magni nesciunt blanditiis consequuntur illum totam sequi recusandae eaque ipsam, repellendus reiciendis accusantium cumque consequatur hic quibusdam, fuga libero tempore neque!',
    color: '#49BBBD'
  },
  {
    id: 3,
    backgroundImage: '/images/deal-3.png',
    discount: 50,
    title: 'adipising elit, sed do eiusmod tempor',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil magni nesciunt blanditiis consequuntur illum totam sequi recusandae eaque ipsam, repellendus reiciendis accusantium cumque consequatur hic quibusdam, fuga libero tempore neque!',
    color: '#49BBBD'
  }
]
const Checkout = () => (
  <div className='mx-auto max-w-screen-2xl'>
    <div className='flex gap-13'>
      <CheckoutForm />
      <div className='h-max w-[662px] rounded-2.5xl bg-blue-light/20 p-7.5'>
        <p className='mb-12.5 text-2xl'>Summary</p>
        {CartSummaries.map((item) => (
          <div key={item.id} className='border-b border-gray-charcoal py-5'>
            <CartSummary />
          </div>
        ))}
        <div>
          <div className='flex items-center justify-between border-b border-gray-charcoal px-2 py-3'>
            <p className='text-xl font-semibold leading-9 text-slate-blue'>Subtotal</p>
            <p className='text-xl font-semibold leading-9 text-slate-blue'>$51.38</p>
          </div>
          <div className='flex items-center justify-between border-b border-gray-charcoal px-2 py-3'>
            <p className='text-xl font-semibold leading-9 text-slate-blue'>Coupon Discount</p>
            <p className='text-xl font-semibold leading-9 text-slate-blue'>0%</p>
          </div>
          <div className='flex items-center justify-between border-b border-gray-charcoal px-2 py-3'>
            <p className='text-xl font-semibold leading-9 text-slate-blue'>TAX</p>
            <p className='text-xl font-semibold leading-9 text-slate-blue'>5</p>
          </div>
          <div className='flex items-center justify-between px-2 py-3'>
            <p className='text-xl font-semibold leading-9'>Total</p>
            <p className='text-xl font-semibold leading-9'>$56.38</p>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-40'>
      <p className='text-3xl font-medium'>Top Education offers and deals are listed here</p>
      <div className='mb-20 mt-16 flex items-center justify-around gap-16'>
        {dealsList.map((deal) => (
          <DealCard key={deal.id} {...deal} />
        ))}
      </div>
    </div>
  </div>
)

export default Checkout
