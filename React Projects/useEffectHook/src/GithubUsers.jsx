import { useEffect, useState } from "react";

export default function Githubusers() {
  const [users, setUsers] = useState([]);

  const [exactcount, setExactCount] = useState(0);

  const [count, setCount] = useState(1);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users?per_page=${count}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        return response.json();
      })
      .then(data => {
        setUsers(data);
        setError("");
      })
      .catch((error) => {
        setUsers([]);
        setError(error.message || "An error occurred while fetching data.");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [count]);

  return (
    <>
      {!loading ? (
        <>
          <div className="p-5 bg-success">
            <h1>
              <label htmlFor="count">
                Enter the Count of users which you want to display:{" "}
              </label>
              <input
                type="number"
                value={exactcount}
                name=""
                id="count"
                onChange={(e) => setExactCount(Number(e.target.value))}
              />
              <button
                onClick={() => {
                  if (exactcount < 1) {
                    setMessage("Please enter a number greater than 0");
                    setUsers([]);
                    return;
                  }
                  setMessage("");
                  setCount(exactcount);
                }}
              >
                View users
              </button>
            </h1>
          </div>

          {!error && message === "" && (
            <p className="bg-light p-5 mb-0 text-center">
              We are showing <b>{count}</b> {count > 1 ? "Users" : "User"}...
            </p>
          )}
          {error && (
            <p className="bg-danger p-5 mb-0 text-center text-white">{error}</p>
          )}
          {message && (
            <p className="bg-danger p-5 mb-0 text-center text-white">
              {message}
            </p>
          )}

          <div
            className="bg-light p-5"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {users.map((user) => (
              <div key={user.id} className="card">
                <img
                  className="card-img-top"
                  src={user.avatar_url}
                  height="200px"
                  width={300}
                />
                <div className="card-body">
                  <h2>Username: {user.login}</h2>
                  <p>
                    Github:{" "}
                    <a href={user.html_url}>
                      Click here to see github Profile
                    </a>{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
