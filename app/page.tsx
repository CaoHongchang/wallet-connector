import { Button } from '@nextui-org/react'
import Wallet from './components/Wallet'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Wallet />
      <Button>按钮</Button>
    </main>
  )
}
