import React from 'react'

const App = () => {

  let value;
  function getInput(e){
    value = e.target.value
  }

  return (
    <>
      <input type="text"  onChange={getInput}/>

      <p>{value}</p>
    </>
  )
}

export default App
