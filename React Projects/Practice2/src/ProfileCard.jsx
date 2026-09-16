import React, { useState } from 'react'

const ProfileCard = (props) => {

    const {user, changeCity, ctmsg} = props

  return (
    <>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>
        <p>Status: {user.isOnline ? "Online" : "Offline"}</p>
        <button onClick={changeCity}>Change City</button>
        <button onClick={()=>ctmsg("Message: " + user.name + " Wants to Contact You")}>Contact</button>
    </>
  )
}

export default ProfileCard
