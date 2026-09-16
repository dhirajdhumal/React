import React from 'react'

const StudentCard = (props) => {

    const {student, msg} = props

  return (
    <div>
      <p>Name: {student.name}</p>
      <p>Marks: {student.marks}</p>
      <p>Status: {student.isPassed ? "Passed" : "Failed"}</p>
      {student.isPassed && <button onClick={()=>msg("Selected Student: " + student.name)}>Select Student</button>}
      <hr />
    </div>
  )
}

export default StudentCard
