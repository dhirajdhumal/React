const Card = (props) => {
    // Here we are destructuring props because of simplicity
    const {user, age, city} = props;


    return(
        <>
            <div style={{height: "300px", width: "300px", border: "1px solid black"}}>
                <h1>Name: {user}</h1>
                <p>Age: {age}</p>
                <p>City: {city}</p>
            </div>
        </>
    )
}

export default Card;