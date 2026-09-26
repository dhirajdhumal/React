import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap:"20px"}}>
      {data.map((user) => (
        <div className="card bg-light" style={{height: "330px", width: "300px"} }>
          <img className="card-img-top p-2" src={user.image} alt="" height={200} width={300}/>
          <div className="card-title p-2">
            <p>{user.title}</p>
          </div>
          <div className="card-body">
            <p>Price: {user.price}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Product;
