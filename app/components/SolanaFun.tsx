'use client'
import React from 'react'
import {
  Connection,
  clusterApiUrl,
  Transaction,
  GetVersionedBlockConfig,
  PublicKey,
  TransactionInstruction,
  SystemProgram,
} from '@solana/web3.js'
import { getProvider } from '../utils/SolanaProvider'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'

const SolanaComponent = () => {
  const provider = getProvider()

  const transfer = async () => {
    // Create connection
    const connection = new Connection(clusterApiUrl('devnet'))
    let slot = await connection.getSlot()
    console.log(slot)

    let block = await connection.getBlock(slot, {
      maxSupportedTransactionVersion: 0,
    } as GetVersionedBlockConfig)
    console.log(block)
    console.log('provider', provider)
    const payer = await provider.connect()
    console.log('payer', payer)

    console.log('TOken Program ID', TOKEN_PROGRAM_ID.toBase58())

    const transaction = new Transaction()
    const toPubkey = new PublicKey(
      '6YsyeFK9p6VAxeVckGWQzceRLtLge3qcsswjeC3Yz1TC'
    )

    const programId = new PublicKey(
      'B3zbfLFVZhcyC2CDtjkkMR6ZgtJJHQ389XkWzhWpijG8'
    )

    const instruction = new TransactionInstruction({
      keys: [],
      programId,
    })

    // 通过 SystemProgram.transfer 方法将 2000 lamports 从 payer 转移到 toPubkey
    // transaction.add(
    //   SystemProgram.transfer({
    //     fromPubkey: payer.publicKey,
    //     toPubkey: toPubkey,
    //     lamports: 2000,
    //   })
    // )

    // 调用合约
    transaction.add(instruction)

    transaction.feePayer = payer.publicKey

    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash

    const { signature } = await provider.signAndSendTransaction(transaction)
    const res = await connection.getSignatureStatus(signature)

    console.log('res', res)
  }

  return (
    <div>
      <h1>Solana React Component</h1>
      <button onClick={transfer}>main</button>
    </div>
  )
}

export default SolanaComponent
