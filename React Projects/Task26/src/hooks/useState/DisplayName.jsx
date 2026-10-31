import React, { useState } from 'react'

const DisplayName = () => {
    const [name, setName] = useState("");
    const [showName, setShowName] = useState("");

    const show = ()=>{
        setShowName(name);
    }

  return (
    <>
        <h1>Display Student Name</h1>
        <div>
            <h3>Student's Name: {showName}</h3>
            <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={show}>Submit</button>
        </div>
    </>
  )
}

export default DisplayName
