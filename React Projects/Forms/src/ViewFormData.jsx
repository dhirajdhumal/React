import React, { useState } from 'react'

const ViewFormData = () => {
    const [data, setData] = useState({});

    function handleSubmit(e){
        e.preventDefault();
        setData(
            {
                ...data,
                [e.target.name]: e.target.value,
            }
        )
        console.log(data);
        
    }

    function formData(e){
        setData(
            {
                ...data,
                [e.target.name]: e.target.value,
            }
        )
    }
    
  return (
    <>
   
    <form onSubmit={handleSubmit}>
        User: <input type="text" name="user" id="" onChange={formData}/>
        Email: <input type="email" name='email' onChange={formData}/>
        Password: <input type="password" name="pass" id="" onChange={formData}/>
        <input type="submit" name="" id="" />
    </form >


    <div>
        <p>Username: {data.user}</p>
        <p>Email: {data.email}</p>
        <p>Password: {data.pass}</p>
    </div>

     </>
  )
}

export default ViewFormData
