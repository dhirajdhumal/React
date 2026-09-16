import { useState } from "react"

export default function UserForm(){
    const [name, setName] = useState("");

    return(
        <>
            <h1><label for="uname">Enter Your Name:</label></h1>
            <input type="text" id="uname" value={name} onChange={(e)=>setName(e.target.value)}/>
            <h1>Name: {name}</h1>
        </>
    )
}