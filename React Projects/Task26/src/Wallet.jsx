import React, { useState } from 'react'

const Wallet = () => {
    const [wallet, setWallet] = useState(0);
  return (
    <>
        <h3>Wallet Balance: {wallet}</h3>
        <button onClick={()=> setWallet(wallet + 500)}>500</button>
        <button onClick={()=> setWallet(wallet + 1000)}>1000</button>
        <button onClick={()=> setWallet(wallet + 2000)}>2000</button>
    </>
  )
}

export default Wallet
