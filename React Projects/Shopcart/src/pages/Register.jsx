import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {registerUser} from '../services/authService'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { register, handleSubmit, getValues, formState: {errors} } = useForm();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const getData = async (data)=>{
    try {
      const userData = await registerUser(data);
      navigate("/login");
    } catch (error) {
      setInfo(error.response.data.message || "An error occurred during registration.");
      console.error("Error registering user:", error);
    }
  }


  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center m-2'>
        <div className='col-lg-4 shadow p-4'>
          <div className='d-flex flex-column justify-content-center align-items-center bg-light rounded'>
            <img src="/images/Logo.png" alt="" height={"50px"}/>
            <h3 className='fw-bold m-0'>Create Your Account</h3>
            <h5 style={{color: "#ff3300"}}>{info}</h5>
            <p className='text-muted'>Register to cart ordering with shopcart</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(getData)}>
              <label htmlFor="" className='form-label fw-bold'>Full Name</label>
              <input type="text" id="" className='form-control' placeholder='Enter your full name' 
                {...register("name",{
                  required: "Full name is required"
                })}
              />  
              <p className='text-danger mb-3'>{errors.fullName && errors.fullName.message}</p>

              <label htmlFor="" className='form-label fw-bold'>Username</label>
              <input type="text" id="" className='form-control' placeholder='Enter your username'
                {...register("username",{
                  required: "Username is required",
                  pattern: {
                    value: /^[a-z0-9_]{3,20}$/,
                    message: "Username must contain only lowercase letters, numbers, and underscores (3–20 characters)"
                  }
                })}
              />
              <p className='text-danger mb-3'>{errors.username && errors.username.message}</p>

              <label htmlFor="" className='form-label fw-bold'>Email</label>
              <input type="text" name="" id="" className='form-control' placeholder='Enter your email'
                {...register("email",{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter email in format"
                  }
                })}
              />
              <p className='text-danger mb-3'>{errors.email && errors.email.message}</p>

              <label htmlFor="" className='form-label fw-bold'>Password</label>
              <input type="text" id="" className='form-control' placeholder='Enter your password'
                {...register("password",{
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                    message:
                      "Password must contain uppercase, lowercase, a number, a special character, and at least 8 characters to 16 characters"
                  }
                })}
              />
              <p className='text-danger mb-3'>{errors.password && errors.password.message}</p>

              <label htmlFor="" className='form-label fw-bold'>Confirm Password</label>
              <input type="text" id="" className='form-control' placeholder='Re-enter your password'
                {...register("cPassword",{
                  required: "Confirm Password is required",
                  validate: (value) => value === getValues("password") || "Passwords do not match"
                })}
              />
              <p className='text-danger mb-3'>{errors.cPassword && errors.cPassword.message}</p>

              <button className='btn text-white fw-bold  w-100 mb-3' style={{backgroundColor: "#f3942e"}}>Register</button>

              <p className='text-center m-0'>Already have an account? <Link className='text-decoration-none' to="/login"><span className='fw-bold' style={{color: "#f3942e"}}>Login</span></Link></p>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Register
