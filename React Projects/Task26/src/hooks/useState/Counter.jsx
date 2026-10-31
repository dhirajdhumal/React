import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <>
        <h1>Counter Application</h1>
        <h3>Count: {count}</h3>
        <div>
            <button onClick={()=> setCount(count + 1)}>Increase</button>
            <button onClick={()=> setCount(count > 0 ? count-1 : count)}>Decrease</button>
        </div>
    </>
  )
}

export default Counter
