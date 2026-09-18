import { useState } from "react";
import axios from "axios";

export default function UserForm() {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [age, setAge] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        const user = {
            name: name,
            age: Number(age),
            city: city
        };

        try {

            const response = await axios.post(
                "http://localhost:5000/api/users",
                user
            );

            console.log("User saved:", response.data);

        } catch (error) {

            console.log("Error:", error);

        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <br /><br />

            <button type="submit">
                Save User
            </button>

        </form>
    );
}