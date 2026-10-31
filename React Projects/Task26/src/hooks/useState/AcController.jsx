import React, { useState } from 'react'

const AcController = () => {
    const [temp, setTemp] = useState(24);
  return (
    <>
        <h1>Ac Controller</h1>
        <div>
            <h3>Temparature: {temp}&deg;C</h3>
            <button onClick={()=> setTemp(temp > 0 ? temp - 1 : temp)}>-</button><button onClick={()=> setTemp(24)}>Reset</button><button onClick={()=> setTemp(temp < 100 ? temp + 1 : temp)}>+</button>
        </div>
    </>
  )
}

export default AcController
