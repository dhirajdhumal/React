import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex align-items-center bg-light p-2">
      <div className="d-flex justify-content-center align-items-center mx-2">
        <img className="navbar-brand" src="/images/Logo.png" alt="" height={"40"} />
      </div>
      <div className="mx-3">
        <select name="" id="" className="p-1 py-2 rounded">
          <option className="bg-dark text-white" value="">All Categories</option>
          <option value="">Electronics</option>
          <option value="">Mobiles</option>
          <option value="">Fashion</option>
          <option value="">Men's Clothing</option>
          <option value="">Womens Clothing</option>
        </select>
      </div>

      <div className="mx-2 d-flex justify-content-center w-100 align-items-center" style={{gap:"40px"}}>
        <Link className="text-decoration-none text-black fw-bold" to={"/"}>Home</Link>
        <Link className="text-decoration-none text-black fw-bold" to={"/product"}>Product</Link>
        <Link className="text-decoration-none text-black fw-bold" to={"/deals"}>Deals</Link>
        <Link className="text-decoration-none text-black fw-bold" to={"/about-us"}>About Us</Link>
        <Link className="text-decoration-none text-black fw-bold"  to={"/contact-us"}>Contact</Link>
        {/* {isLoggedIn && <Link to={"/register"}>Register</Link>} */}

       
      </div>

     <div className="d-flex justify-content-end w-100" style={{gap:"40px"}}> 

        <div className="search-box">
          <input className="p-1" type="text" name="" placeholder="search for products..." id="search" />
          <label for="search" style={{marginLeft: "-25px"}}><i className="bi bi-search fs-5"></i></label>
        </div>

        <div>
          <i className="bi bi-heart fs-4"></i>
        </div>

        <div className="position-relative d-inline-block">
          <i className ="bi bi-cart3 fs-4"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle text-white" style={{backgroundColor: "#f3942e", marginTop: "5px"}}>22</span>
        </div>

         <button className="btn" style={{border: "1px solid #ccc", backgroundColor: "#f3942e"}}>
          <Link  className="text-decoration-none text-black fw-bold" to={"/login"}>Login</Link>
        </button>


    
     </div>
    </nav>
  );
};

export default Navbar;
