import React, { useContext } from 'react'
import { NameContext } from './NameContext'

const About = () => {
  const {name, age} = useContext(NameContext);
  return (
    <div>
      Welcome {name} on About Page. You are {age}.
    </div>
  )
}

export default About
