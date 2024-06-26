import SolanaFun from './components/SolanaFun'
import Wallet from './components/Wallet'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Wallet />
      <div className="border border-black">
        <SolanaFun />
      </div>
    </main>
  )
}
