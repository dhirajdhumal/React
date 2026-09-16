import React from 'react'

const StudentCard = (props) => {
    const {id, name, age, email, city, course, image} = props;
  return (
    <>

        <div className='card' style={{width: "300px", height: "500px"}}>
            <img className='card-image-top' src={image} alt="" height={"200px"} width={"300px"}/>

            <div className='card-header'>
                <h2>Name: {name} - {id} </h2>
                <p>Age: {age}</p>
            </div>

            <div className='card-body'>
                <p>Email: {email}</p>
                <p>City: {city}</p>
                <p>Course: {course}</p>
            </div>
        </div>
    </>
  )
}

export default StudentCard
