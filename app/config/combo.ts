import { defineChain } from 'viem'

export const combo = defineChain({
  id: 9980,
  name: 'Combo Mainnet',
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.combonetwork.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'ComboTrace',
      url: 'https://combotrace.nodereal.io',
    },
  },
})
