'use client'

import { WagmiProvider } from 'wagmi'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { NextUIProvider } from '@nextui-org/react'
import { config } from './config'

const queryClient = new QueryClient()
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>{children}</NextUIProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
