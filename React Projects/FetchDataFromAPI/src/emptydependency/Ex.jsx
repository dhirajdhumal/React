import {useEffect, useState} from 'react'

const Ex = () => {
    const [count, setCount] = useState(0);
    const [name, SetName] = useState(false);

    useEffect(()=>{
        console.log("Dhiraj"); // This Message Appears only On First Render
    },[])
  return (
    <>
        <h3>Count: {count}</h3>
        <button onClick={()=> setCount(count + 2)}>Increase</button>
        <hr />
        <h3>Name: {name ? "Jay" : "Dhiraj"}</h3>
        <button onClick={()=> SetName(!name)}>Change Name</button>
    </>
  )
}

export default Ex
