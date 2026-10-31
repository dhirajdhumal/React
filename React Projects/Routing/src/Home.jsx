import React, { useContext } from 'react'
import { NameContext } from './NameContext'

const Home = () => {
  const {name, age, add} = useContext(NameContext);
  return (
    <div>
      Welcome Home {name}! You are {age}.
      {add()};
      <br />
      
    </div>
  )
}

export default Home
