import { createContext } from "react";

export const NameContext = createContext();

const NameProvider = ({children}) => {
    const name = "Dhiraj";
    const age = 22;
    let additionData;
    function add(){
      return "Dhiraj"
    }
  return (
    <NameContext value={{name, age, add, additionData}}>
        {children}
    </NameContext>
  )
}

export default NameProvider;
