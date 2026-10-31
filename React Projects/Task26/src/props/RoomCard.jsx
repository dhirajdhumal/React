import React from 'react'

const RoomCard = ({rooms}) => {
  return (
    <div style={{border: "1px solid black", padding: "10px"}}>
      <h3>Room Type: {rooms.roomType}</h3>
      <p>PricePerNight: {rooms.pricePerNight}</p>
      <p>Maximum Guests: {rooms.maximumGuests}</p>
    </div>
  )
}

export default RoomCard
