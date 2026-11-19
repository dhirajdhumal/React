import { useState } from 'react';
import {useForm} from 'react-hook-form';

export default function GetData(){
    const {register, handleSubmit} = useForm();
    const [formData, setFormData] = useState();

    const getData =  (data) => {
        console.log(data);
        setFormData(data);
    } 
    return(
        <>
            {formData && 
                <h3>Username: {formData.name}</h3>
            }
            <form onSubmit={handleSubmit(getData)}>
                Name: <input type="text" {...register("name")}/> <br /> <br />
                Email: <input type="email" {...register("email")}/> <br /> <br />
                Password: <input type="password" {...register("password")} /> <br /> <br />
                Confirm Password: <input type="password" {...register("cpassword")} /> <br /> <br />
                DOB: <input type="date" {...register("dob")}/> <br /> <br />
                <input type="submit" />
            </form>
        </>
    )
}

