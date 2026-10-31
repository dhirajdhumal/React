import React from 'react'
import First from './conditionalRendering/First'

const App = () => {
  const isLoggedIn = false;

  return (
    <>
      <button>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </>
  )
}

export default App