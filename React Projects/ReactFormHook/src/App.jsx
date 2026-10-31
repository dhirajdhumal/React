import React from 'react'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-toastify';

const App = () => {

  const [userData, setUserData] = useState();

  const {register, handleSubmit, formState: { errors } } = useForm();

  const formSubmit = (data) =>{
    console.log(data);
    setUserData(data);
  }

  return (
    <>
      <form>
        <label htmlFor="">Name:</label>
        <input type="text" {...register("name",{
          required : "Name is required"
        })}/>

        <label htmlFor="">Email</label>
        <input type="email" {...register("email",{
          required : "Email is required"
        })}/>

        <label htmlFor="">Age</label>
        <input type="number" {...register("age",{
          required: "Age is required"
        })} />

        <label htmlFor="">City</label>
        <input type="text" {...register("city", {
          required: "City is required"
        })} />

        <button onClick={handleSubmit(formSubmit)}>Submit</button>
      </form>

      <div>
        <p>{errors.name && toast.warning(errors.name.message)}</p>
        {userData && <>
          <h1>UserName: {userData.name}</h1>
          <p>UserEmail: {userData.email}</p>
          <p>UserAge: {userData.age}</p>
          <p>UserCity; {userData.city}</p>
        </>
        }
      </div>
    </>
  )
}

export default App
