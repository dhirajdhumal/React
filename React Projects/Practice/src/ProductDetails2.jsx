import React from 'react'

const ProductDetails2 = (props) => {
    const {name, age} = props
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}

export default ProductDetails2
