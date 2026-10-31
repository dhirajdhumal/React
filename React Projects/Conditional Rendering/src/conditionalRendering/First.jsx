import React from 'react'
import Dashboard from './Dashboard';
import Login from './Login';

const First = () => {
    const isLoggedIn = true;
  return (
    <>
        {isLoggedIn ? "Welcome Dhiraj" : "Plz Login"} 
        {isLoggedIn ? <Dashboard /> : <Login />}
    </>
  )
}

export default First
