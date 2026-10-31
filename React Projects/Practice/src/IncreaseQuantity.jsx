import React from 'react'
import { useState } from 'react'

const IncreaseQuantity = () => {

    const [quantity, setQuantity] = useState(1);

    const title = "Iphone 14 Pro Max";
    const price = 120000;

    function decreseQuantity() {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

  return (
    <div style={{textAlign: "center", marginTop: "50px", border: "1px solid black", width: "400px"}}>
        <h3>Title : {title}</h3>
        <h3>Price : {price}</h3>
        <h3>Quantity: <button onClick={decreseQuantity}>-</button> {quantity} <button onClick={() => setQuantity(quantity + 1)}>+</button></h3>
    </div>
  )
}

export default IncreaseQuantity
