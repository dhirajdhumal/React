import React, { useRef, useState } from 'react'

const Task = () => {
    const [users, setUsers] = useState(["Dhiraj", "Jay"]);
    const nameRef = useRef();

    function add(e){
        e.preventDefault();
        setUsers([...users, nameRef.current.value]);
    }
  return (
    <>
        {
            users.map((user)=> 
                <div style={{display: "flex"}}>
                    <p>{user}</p>
                </div>
            )
        }
        <form onSubmit={add}>
            <input type="text" name="" id="" ref={nameRef}/>
            <button type='submit'>Add User</button>
        </form>
    </>
  )
}

export default Task
