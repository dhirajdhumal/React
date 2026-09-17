import { useState } from "react";
import Counter from "./Counter";
import NewProduct from "./NewProduct";
import Product from "./Product";
import Rendering from "./Rendering";
import UserDetails from "./UserDetails";

const App = () => {

  const [count, setCount] = useState(7)

   function increaseCount(){
      setCount(count + 1);
   }

   function decreaseCount(){
      setCount(count-1);
   }


  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase Count</button> 
      <br />
      <br />
      <button onClick={decreaseCount}>Decrease Count</button>
      
    </>
  );
};

export default App;
