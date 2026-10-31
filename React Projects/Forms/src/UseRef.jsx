import React, { useRef, useState } from "react";

const UseRef = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setEmail(emailRef.current.value);
    setPass(passRef.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Email: <input type="email" ref={emailRef} />
        Password; <input type="password" ref={passRef} />
        <button type="submit">Login</button>
      </form>

      <h2>Display Users Login Credentials</h2>
      <p>Email: {email}</p>
      <p>PassWord: {pass}</p>
    </>
  );
};

export default UseRef;
