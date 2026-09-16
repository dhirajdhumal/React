import React from "react";

const Product = () => {
  const user = {
    name: "Dhiraj",
    isLoggedIn: true,
    isAdmin: true,
  };

  const products = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Shoes", price: 3000, inStock: false },
    { id: 3, name: "Headphones", price: 2000, inStock: true },
  ];

  const discount = "";

  let message;
  if(user.isLoggedIn){
    message = "Welcome Dhiraj";
  }else{
    message = "Please Login";
  }

  return (
  <>
    <h1>{message}</h1>

    <h1>{user.isAdmin && "⭐ Admin Controls"}</h1>

    <h1>Discount: {discount || "No Discount"}</h1>


    { 
        products.map((product)=>(
            <p key={product.id}> {product.name} - {product.price} - {product.inStock ? "Available" : "Out of Stock"} </p>
        ))
    }


  </>
  )

};

export default Product;
