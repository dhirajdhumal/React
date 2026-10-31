import { useState } from "react";

function ShowHidePassword(){
    const [password, setPassword] = useState();
    const [showHidePass, setShowHidePass] = useState(false);

    return(
        <>
            <h1>Show Hide Password</h1>
            <h3>Password: {showHidePass ? password : ""}</h3>
            <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={()=> setShowHidePass(!showHidePass)}>Show/Hide</button>
            
        </>
    )
}

export default ShowHidePassword;