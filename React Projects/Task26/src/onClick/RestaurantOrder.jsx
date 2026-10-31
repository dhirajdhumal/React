import React, { useState } from 'react'

const RestaurantOrder = () => {
    const [status, setStatus] = useState("");
  return (
    <>
        <h1>Restaurant Order Confirmation</h1>
        <div>
            <h3>Status: {status}</h3>
            <div style={{border: "2px solid red", width: "15%", padding: "10px"}}>
                <p>Menu: Soyabean vada</p>
                <p>Price: 320Rs</p>
                <button onClick={()=> setStatus("Your order has been confirmed")}>Confirm order</button>
            </div>
        </div>
    </>
  )
}

export default RestaurantOrder
