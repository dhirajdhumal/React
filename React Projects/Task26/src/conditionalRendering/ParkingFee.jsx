import React, { useState } from 'react'

const ParkingFee = () => {
    const [parkingFee, setParkingFee] = useState();

  return (
    <>
        <h1>Parking Fee Eligibility</h1>
        <div>
            <h3>Message: {parkingFee > 15 ? "Parking Charges Applicable" : "Free parking"}</h3>
            <input type="number" name="" id="" onChange={(e)=> setParkingFee(e.target.value)}/>
        </div>
    </>
  )
}

export default ParkingFee
