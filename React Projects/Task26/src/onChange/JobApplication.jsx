  import React, { useState } from 'react'
  
  const JobApplication = () => {
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    return (
      <>
        <h1>Job Application Form</h1>

        <form>
            <label htmlFor="username">Name: </label>
            <input type="text" name="" id="username" onChange={(e)=> setUserName(e.target.value)}/> {userName}<br /><br />

            <label htmlFor="useremail">Email: </label>
            <input type="email" id='useremail' onChange={(e)=> setUserEmail(e.target.value)}/> {userEmail}
        </form>
      </>
    )
  }
  
  export default JobApplication
  