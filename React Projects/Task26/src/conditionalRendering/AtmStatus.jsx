import React, { useState } from 'react'

const AtmStatus = () => {
    const [accountBalance, setAccountBalance] = useState(100);
    const [withdrawalAmount, setWithdrawalAmount] = useState(20)
  return (
    <>
        <h1>ATM Withdrawal Status</h1>
        <div>
            <h3>Status: {accountBalance > withdrawalAmount ? `${withdrawalAmount}Rs Withdraw Successfully`: 'Transaction Failed - Because of Low Account Balance'}</h3>
        </div>
    </>
  )
}

export default AtmStatus
