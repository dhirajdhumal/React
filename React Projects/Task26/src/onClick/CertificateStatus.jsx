import React, { useState } from 'react'

const CertificateStatus = () => {
    const [message, setMessage] = useState("")
  return (
    <>
        <h1>Download Certificate Status</h1>
        <div>
            <h3>Status: {message}</h3>
            <button onClick={()=> setMessage("Your certificate is ready to view.")}>View Certificate</button>
        </div>
    </>
  )
}

export default CertificateStatus
