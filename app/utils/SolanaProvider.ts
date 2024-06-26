export const getProvider = () => {
  if ('solana' in window) {
    const provider = window.solana

    console.log('provider', provider)

    if (provider?.isPhantom) {
      return provider
    } else {
      throw new Error('Phantom wallet not found. Please install Phantom.')
    }
  } else {
    throw new Error('Solana provider not found in window object.')
  }
}
