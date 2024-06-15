import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia],
  // 增加 connector 的数量, 直接取出 用户内置钱包 来直连, 不用通过 injected 的窗口进行选择
  multiInjectedProviderDiscovery: false,
  // injected 可以检查出用户所有的浏览器内置钱包
  connectors: [injected()],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
