import React from 'react'

const StudentDetails = (props) => {
    const {name, age, city, email} = props.student
  return (
    <div>
      <h1>Student name: {name}</h1>
      <p>Student Age: {age}</p>
      <p>Student City: {city}</p>
      <p>student email: {email}</p>
    </div>
  )
}

export default StudentDetails
