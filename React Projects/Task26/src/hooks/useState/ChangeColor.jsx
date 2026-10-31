import { useState } from "react";

function ChangeColor() {
    const [backgroundColor, setBackgroundColor] = useState("pink");
    return ( 
        <>
            <h1>Change Background Color</h1>
            <div style={{backgroundColor: backgroundColor, height: "50px", padding: "10px"}}>
                <button onClick={()=>setBackgroundColor("gray")}> Change Color </button>
            </div>
        </>
    );
}

export default ChangeColor;