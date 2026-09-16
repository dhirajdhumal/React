import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [login, setLogin] = useState(true);

  const [admin, setAdmin] = useState(false);

  function loginFunction(){
    setLogin(!login)
    setAdmin(!admin)
  }


  
  return (
    <div style={{display: "flex", justifyContent: "flex-end", gap: 20}}>
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/product"}>Product</Link>     
       {admin && <Link to={"/register"}>Admin Dashboard</Link>}


      <button onClick={loginFunction}><Link to={"/login"}>{login ? "Login" : "Logout"}</Link></button>
    </div>
  );
};

export default Navbar;
