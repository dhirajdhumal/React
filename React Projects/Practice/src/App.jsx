import React from 'react'

const App = () => {
  const arr = [1,2,3,4,6];
  return (
    <div>
      {arr[0]}
      {arr[1]}
      {arr[2]}
      {arr[3]}
      {arr[4]}
          
      {
        arr.map((arr)=>(
          <p>{arr}</p>
        ))
      }
    </div>
  )
}

export default App
