'use client'

import { getProvider } from '@/app/utils/SolanaProvider'
import { Button } from '@nextui-org/react'

const SolanaFun = () => {
  const provider = getProvider()

  return (
    <div>
      SolanaFun
      <Button onClick={() => provider.signMessage('hello')}>签名</Button>
    </div>
  )
}

export default SolanaFun
