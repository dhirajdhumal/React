import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const userRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    function registerUser(e){
        e.preventDefault();

        const user = userRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        console.log(`Username: ${user}, email: ${email}, pass: ${pass}`);
    }

  return (
    <>
        <h1>Uncontrolled Form</h1>
        <form onSubmit={registerUser}>
            <input type="text" ref={userRef}/>
            <input type="email" name="" id="" ref={emailRef}/>
            <input type="password" ref={passRef}/>
            <button type='submit'>Register</button>
        </form>
    </>
  )
}

export default UncontrolledForm
