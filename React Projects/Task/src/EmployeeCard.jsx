import React from "react";

const EmployeeCard = (props) => {
  const {name, age, salary} = props
  return (
  <>

    <div style={{border: "1px solid black"}}>
   
        <h1>Employee Details</h1>
        <p>Employee Name: {name}</p>
        <p>Employee Age: {age}</p>
        <p>Employee Salary: {salary}</p>
  
    </div>
  </>
  
  );
};

export default EmployeeCard;
