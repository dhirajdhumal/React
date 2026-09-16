import { useState } from "react";
import Counter from "./Counter";
import NewProduct from "./NewProduct";
import Product from "./Product";
import Rendering from "./Rendering";
import UserDetails from "./UserDetails";

const App = () => {
  const [message, setMessage] = useState("");

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics",
      inStock: true,
    },
    {
      id: 2,
      name: "Shoes",
      price: 3000,
      category: "Fashion",
      inStock: false,
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      category: "Electronics",
      inStock: true,
    },
  ];
  function onBuy(message) {
    setMessage(message);
  }


  return (
    <>
      {products.map((product) => (
        <NewProduct key={product.id} product={product} onSend={onBuy} />
      ))}{message}
    </>
  );
};

export default App;
