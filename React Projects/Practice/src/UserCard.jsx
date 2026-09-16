import React from 'react'

const UserCard = (props) => {
    const {name, role, isAdmin}= props
  return (
    <div>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p>Admin: {isAdmin ? "Yes":"No"}</p>
    </div>
  )
}

export default UserCard
