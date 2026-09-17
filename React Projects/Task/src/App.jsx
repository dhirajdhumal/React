import React from 'react'
import EmployeeCard from './EmployeeCard'
import Hook from './hook'
import StudentCard from './StudentCard';
import StudentDetails from './StudentDetails';
import Card from './Card';
import ComponentA from './ComponentA';
import InputValue from './InputValue';
import ChnageColor from './ChnageColor';

const App = () => {
  const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 21,
    city: "Pune",
    email: "rahul@gmail.com",
    course: "Java Full Stack",
    img: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Priya Patil",
    age: 22,
    city: "Mumbai",
    email: "priya@gmail.com",
    course: "MERN Stack",
    img: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Amit Joshi",
    age: 20,
    city: "Nashik",
    email: "amit@gmail.com",
    course: "Java",
    img: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    age: 21,
    city: "Nagpur",
    email: "sneha@gmail.com",
    course: "React JS",
    img: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 5,
    name: "Rohit Deshmukh",
    age: 23,
    city: "Aurangabad",
    email: "rohit@gmail.com",
    course: "Node JS",
    img: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 6,
    name: "Neha Shinde",
    age: 20,
    city: "Kolhapur",
    email: "neha@gmail.com",
    course: "Python Full Stack",
    img: "https://i.pravatar.cc/150?img=6"
  },
  {
    id: 7,
    name: "Akash Pawar",
    age: 22,
    city: "Ahmednagar",
    email: "akash@gmail.com",
    course: "Web Development",
    img: "https://i.pravatar.cc/150?img=7"
  },
  {
    id: 8,
    name: "Pooja Jadhav",
    age: 21,
    city: "Satara",
    email: "pooja@gmail.com",
    course: "JavaScript",
    img: "https://i.pravatar.cc/150?img=8"
  },
  {
    id: 9,
    name: "Vishal More",
    age: 24,
    city: "Thane",
    email: "vishal@gmail.com",
    course: "Spring Boot",
    img: "https://i.pravatar.cc/150?img=9"
  },
  {
    id: 10,
    name: "Kiran Gaikwad",
    age: 22,
    city: "Solapur",
    email: "kiran@gmail.com",
    course: "MongoDB",
    img: "https://i.pravatar.cc/150?img=10"
  }
];

const student = {
  name: "Dhiraj",
  age: 22,
  city: "Akole",
  email: "dhirajdh9421@gmail.com"
}
  
  return (
    <>
        {/* <div className='d-flex flex-wrap justify-content-between gap-3'>
              {
                students.map((s)=>(
                  <StudentCard id={s.id} name={s.name} age={s.age} city={s.city} email={s.email} course={s.course} image={s.img}  />
                ))
              } 
        </div>

        <StudentDetails student={student} />

        <Card>
            <h1>Dhiraj</h1>
            <p>My name is Dhiraj</p>
        </Card> 

        <Card>
          <h1>Jay</h1>
          <p>My name is Jay</p>
          <p>Age: 17</p>
        </Card>

        <ComponentA name="Dhiraj Dhumal" /> */}

      <ChnageColor />
    </>
  )
}

export default App