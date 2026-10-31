import React, { useState } from 'react'

const ElectricityBill = () => {
    const [bill, setBill] = useState(0);
  return (
    <>
        <h1>Electricity Bill Estimator</h1>
        <div>
            <h3>Electricity Bill: {bill}Rs</h3>
            <label htmlFor="units">Consumed Units: </label>
            <input type="number" id='units' onChange={(e)=> setBill(e.target.value * 8)}/>
        </div>
    </>
  )
}

export default ElectricityBill
