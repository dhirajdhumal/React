import { useEffect, useState } from "react";

export default function FetchData() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(30);

  useEffect(() => {
    async function githubApi() {
      const response = await fetch(
        `https://api.github.com/users?per_page=${count}`,
      );
      const data = await response.json();
      setUsers(data);
    }
    githubApi();
  }, [count]);

  return (
    <>
      <h1>Github Users</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <img src={user.avatar_url} height={200} width={200} />
        ))}
      </div>
    </>
  );
}
