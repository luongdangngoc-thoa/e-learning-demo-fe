import React from 'react'

import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'

const MainLayout = ({ children }: React.PropsWithChildren) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

export default MainLayout
