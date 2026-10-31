import React, { useState } from 'react'

const TableBooking = () => {
    const [seating, setSeating] = useState("Indoor");
  return (
    <>
        <h1>Restaurant Table Booking</h1>
        <div>
            <h3>Selected Seating: {seating}</h3>
            <label htmlFor="seatings">Choose Seating Type: </label>
            <select id='seatings' onChange={(e)=> setSeating(e.target.value)}>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Rooftop">Rooftop</option>
            </select>
        </div>
    </>
  )
}

export default TableBooking
