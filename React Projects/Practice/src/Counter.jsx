import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(10);
    const [name, setName] = useState("Dhiraj");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <>
            <h1>Count: {count}</h1>
            <h1>Name: {name}</h1>
            <h1>Logged In: {isLoggedIn ? "Yes" : "No"}</h1>
            <button onClick={()=>setCount(prev => prev+1)}>Increase</button>
            <button onClick={()=>setName("Developer")}>Chnage Name</button>
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        </>
    )
}

export default Counter;