import React, { useState } from 'react'

const Arrays = () => {
    const [users, setusers] = useState(["Dhiraj", "Jay", "Adesh"]);

    function add(){
        setusers([...users, "Suyash"]);
    }

  return (
    <>
        <h1>Array Rendering</h1>   
        {
            users.map((user) => <p>{user}</p>)
        }

        <button onClick={add}>Add Item</button>
    </>
  )
}

export default Arrays
