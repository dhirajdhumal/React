import React from 'react'

const Message = (props) => {
  return (
    <div>
      <button onClick={()=> props.onSend("Hello Dhiraj")}>Hello</button>
      <button>Welcome</button>
    </div>
  )
}

export default Message
