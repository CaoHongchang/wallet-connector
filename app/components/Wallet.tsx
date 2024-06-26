'use client'
import React from 'react'
import { Button } from '@nextui-org/react'
import { useConnect } from 'wagmi'
import { useSwitchChain } from 'wagmi'
import {
  bsc,
  polygon,
  arbitrum,
  optimism,
  opBNB,
  base,
  blastSepolia,
  sei,
} from 'wagmi/chains'
import { combo } from '@/app/config/combo'
import { getProvider } from '@/app/utils/SolanaProvider'

interface WalletButton {
  name: string
  imgPath: string
  onClick: () => void
}

const Wallet = () => {
  const { connectors, connect } = useConnect()
  const { chains, switchChain } = useSwitchChain()

  console.log('chains', chains)

  const items: WalletButton[] = [
    {
      name: 'Ethereum',
      imgPath: '/ethereum.png',
      onClick: () => {
        console.log('Ethereum')
        connect({ connector: connectors[0] })
      },
    },
    {
      name: 'BNBCHAIN',
      imgPath: '/bnbchain.png',
      onClick: () => {
        console.log('BNBCHAIN')
        switchChain({ chainId: bsc.id })
      },
    },
    {
      name: 'POLYGON',
      imgPath: '/polygon.png',
      onClick: () => {
        console.log('POLYGON')
        switchChain({ chainId: polygon.id })
      },
    },
    {
      name: 'ARBITRUM',
      imgPath: '/arbitrum.png',
      onClick: () => {
        console.log('ARBITRUM')
        switchChain({ chainId: arbitrum.id })
      },
    },
    {
      name: 'OPTIMISM',
      imgPath: '/optimism.png',
      onClick: () => {
        console.log('OPTIMISM')
        switchChain({ chainId: optimism.id })
      },
    },
    {
      name: 'OP_BNB',
      imgPath: '/op_bnb.png',
      onClick: () => {
        console.log('OP_BNB')
        switchChain({ chainId: opBNB.id })
      },
    },
    {
      name: 'BASE',
      imgPath: '/base.png',
      onClick: () => {
        console.log('BASE')
        switchChain({ chainId: base.id })
      },
    },
    {
      name: 'BLAST_SEPOLIA',
      imgPath: '/blast_sepolia.png',
      onClick: () => {
        console.log('BLAST_SEPOLIA')
        switchChain({ chainId: blastSepolia.id })
      },
    },
    {
      name: 'SEI',
      imgPath: '/sei.png',
      onClick: () => {
        console.log('SEI')
        switchChain({ chainId: sei.id })
      },
    },
    {
      name: 'COMBO',
      imgPath: '/combo.png',
      onClick: () => {
        console.log('COMBO')
        switchChain({ chainId: combo.id })
      },
    },
    {
      name: 'BTC',
      imgPath: '/btc.png',
      onClick: async () => {
        console.log('BTC')
        const res = await window.okxwallet.bitcoin.connect()
      },
    },
    {
      name: 'Solana',
      imgPath: '/sol.png',
      onClick: async () => {
        console.log('SOL')
        const provider = getProvider() // see "Detecting the Provider"
        try {
          console.log('provider', provider)

          await provider?.connect()
        } catch (err) {
          console.log('err', err)

          // { code: 4001, message: 'User rejected the request.' }
        }
      },
    },
  ]

  return (
    <div className="flex flex-wrap w-81">
      {items.map((item, index) => (
        <Button
          key={index}
          className="w-1/3 p-2 border text-center"
          onClick={item.onClick}>
          {item.name}
        </Button>
      ))}
    </div>
  )
}

export default Wallet
