import React from 'react'

const DoctorCard = ({ doctors }) => {
  return (
    <div className='' style={{border: "1px solid black", padding: "10px"}}>
      <h3>Doctor: {doctors.name}</h3>
      <p>Specialization: {doctors.specialization}</p>
      <p>Fee: {doctors.fees}</p>
    </div>
  )
}

export default DoctorCard
