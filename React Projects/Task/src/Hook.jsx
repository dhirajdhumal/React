import React, { useState } from 'react'

const Hook = () => {
    const [name, setName] = useState("Dhiraj");
  return (
    <>
        <p>Name: {name}</p>
        <button onClick={()=> setName("Jay")}>Change Name</button>
    </>
  )
}
export default Hook
