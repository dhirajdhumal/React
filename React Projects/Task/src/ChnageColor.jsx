import React, { useState } from 'react'

const ChnageColor = () => {

    const [change , setChange] = useState("pink");
  return (
    <>
    <div style={{backgroundColor: change}}>
       Dhiraj
    </div>

    <br />
    <br />

    <button onClick={()=>setChange("red")}>Change Color</button>

    </>
  )
}

export default ChnageColor
