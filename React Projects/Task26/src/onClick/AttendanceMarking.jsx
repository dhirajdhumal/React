import React, { useState } from 'react'

const AttendanceMarking = () => {
    const [status, setStatus] = useState(false)
  return (
    <>
        <h1>Attendance Marking</h1>
        <div>
            <h3>Attendance Status: {status ? "Present" : "Not Marked"}</h3>
            <h3>Learner's Name: Dhiraj <button onClick={()=> setStatus(!status)}>{status === true ? "Mark Absent" : "Mark Present"}</button></h3>
        </div>
      
    </>
  )
}

export default AttendanceMarking
