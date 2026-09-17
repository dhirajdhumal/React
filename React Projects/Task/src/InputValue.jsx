import React, { useState } from 'react'

const InputValue = () => {
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")

    const [email, setEmail] = useState("")
    const [userEmail, setUserEmail] = useState("")

    const [age, setAge] = useState("")
    const [userAge, setUserAge] = useState("")

    const [city, setCity] = useState("")
    const [userCity, setUserCity] = useState("")

  return (
    <div>
      
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={()=> setUserName (name)}>Show Name</button>
      <br />
      <br />

      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button onClick={()=> setUserEmail(email)}>Show Email</button>
      <br />
      <br />

      <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
      <button onClick={()=> setUserAge(age)}>Show Name</button>
      <br />
      <br />

      <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
      <button onClick={()=> setUserCity(city)}>Show Name</button>

      <p>Name: {userName}</p>
      <p>Email: {userEmail}</p>
      <p>Age: {userAge}</p>
      <p>City: {userCity}</p>

   
    </div>
  )
}

export default InputValue
