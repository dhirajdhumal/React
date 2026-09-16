const Student = ({student}) => {
    const {name, age, course, city} = student;
    return(
        <>
            <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Course: {course}</p>
                <p>city: {city}</p>
            </div>
        </>
    )
}
export default Student;