import React from 'react'

const NewProduct = (props) => {

    const {product, onSend} = props;

  return (
     <>
         
    
        <div>
            <p>Product Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>{product.inStock ? "Available" : "Out of Stock"}</p>
            {product.inStock && <button onClick={()=>onSend(product.name + " Added to cart")}>Buy</button>}
        </div>
        <hr />
     </>
  )
}

export default NewProduct
