import React, { useState } from 'react'

const GetData = () => {
    const [respose, setResponse] = useState("");

    const [data, setData] = useState([{}]);

    async function getData(){
        const response = await fetch("https://api.github.com/users")
        setResponse(response.status)
        const data = await response.json();
        setData(data);
    }

  return (
    <div>
      <h1>Response from Server: {respose}</h1>
      <h2>Data from server: {data[1]?.login}</h2>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default GetData
