import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {loginUser} from '../services/authService'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const getData = async (data) => {
    try {
    const response = await loginUser(data);
    navigate("/");
    } catch (error) {
      setInfo(error.response.data.message || "An error occurred during login.");
      console.error("Error logging in user:", error);
    }
  }
  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center align-items-center' style={{height: "92vh"}}>
        <div className='col-lg-3 shadow p-4'>
        <div className='d-flex flex-column justify-content-center align-items-center bg-light rounded'>
          <img src="/images/Logo.png" alt="" height={"50px"}/>
          <h3 className='fw-bold m-0'>Welcome Back!</h3>
          <h5 style={{color: "#ff3300"}}>{info && info}</h5>
          <p className='text-muted'>Login to continue shopping with shopcart</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(getData)}>
            <label htmlFor="" className='form-label fw-bold'>Username</label>
              <input type="text" id="" className='form-control' placeholder='Enter your username'
                {...register("username")}
              />
            <p className='text-danger mb-3'>{errors.username && errors.username.message}</p>
            
            <label htmlFor="" className='form-label fw-bold'>Password</label>
              <input type="text" id="" className='form-control' placeholder='Enter your password'
                {...register("password")}
              />
            <p className='text-danger mb-3'>{errors.password && errors.password.message}</p>

            <button className='btn text-white fw-bold  w-100 mb-3' style={{backgroundColor: "#f3942e"}}>Login</button>

            <p className='text-center m-0'>Don't have an account? <Link className='text-decoration-none' to="/register"><span className='fw-bold' style={{color: "#f3942e"}}>Register</span></Link></p>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
