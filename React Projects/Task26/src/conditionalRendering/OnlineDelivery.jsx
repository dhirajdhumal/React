import React, { useState } from 'react'

const OnlineDelivery = () => {
    const [status, setStatus] = useState("Order Placed");

  return (
    <>
        <h1>Online Delivery Status</h1>
        <div>
            <h3>Delivery Status: {status}</h3>
            <button onClick={()=> setStatus("Out for Delivery")}>Change Status</button>
        </div>
    </>
  )
}

export default OnlineDelivery
