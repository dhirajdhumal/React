import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffectRendering = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log("Rendering only First Time because of empty dependency Array");
    },[])
  return (
    <div>
        <p>Count: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Increase Count</button>
    </div>
  )
}

export default UseEffectRendering
