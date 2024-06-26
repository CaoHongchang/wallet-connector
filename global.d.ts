import { Transaction } from '@solana/web3.js'

export {}

declare global {
  interface Window {
    okxwallet: {
      bitcoin: {
        connect: () => Promise<void> // 根据需要替换具体的返回类型
      }
    }

    phantom: {
      solana: {
        isPhantom: any
        connect: () => Promise<void>
      }
    }

    solana: {
      signAndSendTransaction(
        transaction: Transaction
      ): { signature: any } | PromiseLike<{ signature: any }>
      isPhantom: boolean
      connect: () => Promise<any>
      signMessage: (message: string) => Promise<string>
    }
  }
}
