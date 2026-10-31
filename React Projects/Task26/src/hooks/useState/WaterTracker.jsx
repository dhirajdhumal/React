import React, { useState } from 'react'

const WaterTracker = () => {
    const [intake, setIntake] = useState(0);
  return ( 
    <>
        <h1>Water Tracker</h1>
        <div>
            <h3>Total Intake: {intake}ml</h3>
            <button onClick={()=> setIntake(intake + 250)}>Add 250ml</button><button onClick={()=> setIntake(0)}>Reset</button><button onClick={()=> setIntake(intake + 500)}>Add 500ml</button>
        </div>
    </>
  )
}

export default WaterTracker
