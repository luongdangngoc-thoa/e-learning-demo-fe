'use client'

import { Label } from '@radix-ui/react-context-menu'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/Button'
import { useAppContext } from '@/context/AppProvider'
import { API_URL } from '@/shared/config/routes/api.route'
import { cookieStoreClient } from '@/shared/utils/cookies/client.util'
import { axiosInterceptor } from '@/shared/utils/http.util'

const navList = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Courses',
    href: '/courses'
  },
  {
    label: 'Membership',
    href: '/membership'
  },
  {
    label: 'Blog',
    href: '/blog'
  }
  // {
  //   label: 'About Us',
  //   href: '/about'
  // }
]

function Header() {
  const { sessionToken, setSessionToken } = useAppContext()

  const { data: userInfoQuery } = useQuery({
    queryKey: ['GET_USER_INFO'],
    queryFn: () => axiosInterceptor.get(API_URL.USER.ME),
    select: (data) => data.data.data
  })

  const router = useRouter()
  const handleLogout = () => {
    // Xóa cookie và cập nhật trạng thái người dùng
    setSessionToken('')
    cookieStoreClient.remove('accessToken')
    cookieStoreClient.set('isLoggedIn', 'false')
    router.push('/auth')
  }

  const pathname = usePathname()

  return (
    <header className={`${pathname === '/' ? 'bg-turquoise-medium' : 'bg-white'}`}>
      <div className='mx-auto flex items-center justify-between px-32 py-10'>
        {/* Logo */}
        <div>
          <Link href='/'>
            {pathname === '/' ? (
              <Image className='hidden sm:block' width={83} height={83} src='/images/logo-dark.png' alt='logo-dark' />
            ) : (
              <Image className='hidden sm:block' width={83} height={83} src='/images/logo-light.png' alt='logo-light' />
            )}
          </Link>
        </div>
        <div className='hidden items-center gap-16 space-x-4 md:flex'>
          {/* Navigation Links */}
          <nav className='hidden gap-16 space-x-4 md:flex'>
            {navList.map((nav) => (
              <Link key={nav.label} href={nav.href}>
                <h1 className={`text-1.5xl ${pathname === '/' ? 'text-white' : 'text-black'}`}>{nav.label}</h1>
              </Link>
            ))}
          </nav>

          {/* Login/Register or Logout Button */}
          <div className='hidden md:flex'>
            {sessionToken ? (
              <div className='flex items-center justify-center gap-4'>
                <Image className='hidden sm:block' width={63} height={63} src='/images/profile.png' alt='profile' />
                <Label className='text-lg'>{userInfoQuery?.user_metadata?.username}</Label>
                <Image className='hidden sm:block' width={13} height={13} src='/images/down.png' alt='down' />
                <Button
                  onClick={handleLogout}
                  variant='secondary'
                  className={`${pathname === '/' ? 'bg-white text-black hover:bg-white' : 'bg-turquoise-medium'} h-15 w-40 rounded-full`}
                >
                  {' '}
                  Logout
                </Button>
              </div>
            ) : (
              <div className='hidden gap-10 md:flex'>
                <Link href='/auth'>
                  <Button
                    className={`${pathname === '/' ? 'bg-white text-black hover:bg-white' : 'bg-turquoise-medium text-white hover:bg-turquoise-medium'} h-15 w-40 rounded-full`}
                  >
                    Login
                  </Button>
                </Link>
                <Link href='/auth'>
                  <Button
                    variant='secondary'
                    className={`${pathname === '/' ? 'text-white' : 'bg-turquoise-medium'} h-15 w-40 rounded-full`}
                  >
                    Sing Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
