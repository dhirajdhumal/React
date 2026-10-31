import React, { useState } from 'react'
import {useForm} from 'react-hook-form';

const FormHook = () => {
    const [data, setData] = useState({});
    const { register, handleSubmit, formState:{errors} } = useForm(); 

    const formSubmit = (data) => {
        console.log("Form Submitted Successfully");
        setData(data);
    }

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <input type="text" {...register('name',{
            required: 'Name is required',
        })} />

        <input type="email" {...register('email',{
            required: 'Email is required',
        })} />

        <p style={{color: "red"}}>{errors.name && errors.name.message}</p>

        <p>{data && data.name}</p>
        <p>{data && data.email}</p>

        <input type="submit" value={"Submit"} />
      </form>
    </div>
  )
}

export default FormHook
