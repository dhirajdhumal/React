import React from "react";
import Card from "./Card";
import Rendering from "./Rendering";
import Hooks from "./Hooks";

const App = () => {

  
  return (
    <>
      <Hooks />
      <Rendering />
      <Card user={"Dhiraj"} age={22} city={"Akole"} />
      <Card user={"Jay"} age={17} city={"Mumbai"} />
      <Card user={"Adesh"} age={15} city={"Lingdev"} />
    </>
  );
};

export default App;
