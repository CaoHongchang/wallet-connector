'use client'
import React from 'react'
import { Button } from '@nextui-org/react'
import { useConnect } from 'wagmi'

interface WalletButton {
  name: string
  imgPath: string
  onClick: () => void
}

const Wallet = () => {
  const { connectors, connect } = useConnect()

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
      },
    },
    {
      name: 'POLYGON',
      imgPath: '/polygon.png',
      onClick: () => {
        console.log('POLYGON')
      },
    },
  ]

  return (
    <div className="flex flex-wrap w-72">
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
