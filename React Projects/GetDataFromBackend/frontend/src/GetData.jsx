import { useEffect, useState } from "react";
import axios from "axios";

export default function GetData() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function getUsers() {

            try {

                const response = await axios.get(
                    "http://localhost:5000/api/users"
                );

                console.log(response.data);

                setUsers(response.data);

            } catch (error) {

                console.log(error);

            }

        }

        getUsers();

    }, []);

    return (
        <>
            <h1>Users</h1>

            {
                users.map((user) => (

                    <div key={user._id}>

                        <h2>{user.name}</h2>

                        <p>Age: {user.age}</p>

                        <p>City: {user.city}</p>

                        <hr />

                    </div>

                ))
            }

        </>
    );
}