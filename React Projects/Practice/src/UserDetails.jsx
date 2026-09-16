import React, { useState } from 'react'

const UserDetails = () => {

    const [user, setUser] = useState(
        {
            name: "Dhiraj",
            age: 22,
            city: "Pune"
        }
    )

  return (
    <>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>

        <button onClick={()=> setUser({...user, name: "Developer"})}>Change Name</button>
    </>
  )
}

export default UserDetails
