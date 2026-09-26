import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(10);
    const [data, setData] = useState([]);


    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => setData(data));
    }, [])

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increase Count</button>

        {
            data.map((user)=>(
                <div>
                    <h1>Username: {user.login}</h1>
                    <p>Id: {user.id}</p>
                    <p>Github: <a href={user.html_url}>See Github Profile</a></p>
                </div>
                
            ))
        }
    </div>
  )
}

export default Effect
