const User = (props) => {

    const {name, age, course} = props;
    return(
        <>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Role: {course}</li>
        </>
    )
}

export default User;