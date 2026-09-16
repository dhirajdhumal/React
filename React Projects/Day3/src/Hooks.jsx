import React from 'react'
import { useState } from 'react'

const Hooks = () => {

    const [count, setCount] = useState(1);

  return (
    
    <>
    
        <h1>Count: { count }</h1>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  )
}

export default Hooks
