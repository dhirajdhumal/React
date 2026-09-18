import { useEffect, useState } from "react";

export default function Githubusers(){
    const [users, setUsers] = useState([]);

    const [exactcount, setExactCount] = useState(1);

    const [count, setCount] = useState(1);
   
    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState("");

    const [error, setError] = useState("");

    useEffect(()=>{
        setLoading(true);
        fetch(`https://api.github.com/users?per_page=${count}`)
        .then(response=>{
            if(!response.ok){
                throw new Error(`HTTP Error: ${response.status}`)
            }
           
            return response.json();
        }).then(data=>{
            setUsers(data);
            setError("");
        }).catch(error=>{
            setUsers([]);
            setError(error.message || "An error occurred while fetching data.");
            setLoading(true);
        }).finally(()=>{
            setLoading(false)
        })

    },[count])

    return(
        <>

           
            {!loading ? (
                <>
                    <h1><label htmlFor="count">Enter the Count of users which you want to display: </label><input type="number" value={exactcount} name="" id="count" onChange={(e)=>setExactCount(Number(e.target.value))}/>
                    <button onClick={()=>{
                        if(exactcount < 1){ 
                            setMessage("Please enter a number greater than 0");
                            setUsers([]);
                           return;
                        } 
                        setMessage("");  
                        setCount(exactcount)
                    }}>View users</button></h1>
                    {!error && message === "" &&<p>We are showing <b>{count}</b> {count > 1 ? "Users" : "User"}...</p>}
                    {error && <p style={{color: "red"}}>{error}</p>}
                    {message && <p style={{color: "red"}}>{message}</p>}

                    <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px"}}>
                        {
                        users.map((user)=>(
                            <div key={user.id}>
                        
                            <img src={user.avatar_url} height= "200px" width={300}/>
                            <h2>Username: {user.login}</h2>
                            <p>Github: <a href={user.html_url}>Click here to see github Profile</a> </p>

                            </div>
                        ))
                        }   
                    </div>
                 </>
        ): ( 
            <h1 style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>Loading...</h1>
        )}

            
        
        </>
    )
}

