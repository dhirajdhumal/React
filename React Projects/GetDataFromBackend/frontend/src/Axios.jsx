import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios';

export default function Axios(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        async function getData(){
            const response = await axios.get('http://localhost:5000/api/users');
            setUsers(response.data);
        }
        getData();
    },[])

    return(
        <>
            {
                users.map((user)=>(
                    <div key={user.id}>
                        <h1>Name: {user.name}</h1>
                        <p>Age: {user.age}</p>
                        <p>City: {user.city}</p>
                    </div>
                ))
            }
        </>
    )
}