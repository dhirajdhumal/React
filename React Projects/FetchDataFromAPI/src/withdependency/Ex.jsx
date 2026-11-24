import {useEffect, useState} from 'react'

const Ex = () => {
    const [count, setCount] = useState(0);
    const [name, SetName] = useState(false);

    useEffect(()=>{
        console.log("Count"); //This Message Appears Only When the Count state Change.
    },[count])

    useEffect(()=>{
        console.log("Name"); //This Message Appears Only When the Name state Change.
    },[name])

    useEffect(()=>{
        console.log("Count & Name "); //This Message Appears Both time When Count & names state Change.
    },[count, name])

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