import React, { useState } from 'react'

const Objects = () => {
    const [student, setStudent] = useState({
        id: 101,
        name: "Dhiraj",
        age: 22
    })

    function updateData(){
        setStudent({...student, name: "Jay"});
    }
    
  return (
    <>
        <h1>Object Rendering</h1>
        <div>
            <p>Id: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>

            <button onClick={updateData}>Change Name</button>
        </div>
    </>
  )
}

export default Objects
