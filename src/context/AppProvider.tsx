'use client'

import { createContext, type PropsWithChildren, useContext, useMemo, useState } from 'react'

const AppContext = createContext({
  sessionToken: '',
  setSessionToken: (sessionToken: string) => {}
})

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }

  return context
}

const AppProvider = ({ children, initialSessionToken }: PropsWithChildren<{ initialSessionToken: string }>) => {
  const [sessionToken, setSessionToken] = useState(initialSessionToken)

  const value = useMemo(() => ({ sessionToken, setSessionToken }), [sessionToken])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
