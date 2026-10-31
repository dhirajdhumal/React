import React, { useContext } from 'react'
import { NameContext } from './NameContext'

const Contact = () => {
  const {name, age} = useContext(NameContext);
  return (
    <div>
      Welcome {name} on Contact Page. You are {age}.
    </div>
  )
}

export default Contact
