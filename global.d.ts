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

    solana: any
  }
}
