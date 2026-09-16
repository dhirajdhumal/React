import React from 'react'

const Rendering = () => {

    let loggedIn = true;

    let name = true;


  return (
    <div>
    {/* Conditional Rendering Using ternary operator */}
      {loggedIn ? "User is Logged In" : "user are Logged Out"};


    {/* Using logical and */}
       <div>{name && "Dhiraj"}</div> 

    </div>
  )
}

export default Rendering
