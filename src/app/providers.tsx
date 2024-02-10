import { UIProvider } from '@yamada-ui/react'
import React from 'react'

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <UIProvider>
      {children}
    </UIProvider>
  )
}

export default Providers
