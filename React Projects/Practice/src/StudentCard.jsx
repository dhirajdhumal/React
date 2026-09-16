import React from 'react'

const StudentCard = (props) => {
    const {student} = props;

  return (
    <div>
    
      <h2>Student Name: {student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city} </p>
      <hr/>
    </div>
  )
}

export default StudentCard
