import React, { useState } from 'react'
import './Pizza.css'

const Pizza = ({number, name, price}) => {

  const [quantity, setQuantity] = useState(1);
  
  let increaseQuantity = () => {
    setQuantity(quantity => quantity+1)
  }

   let decreaseQuantity = () => {
    if(quantity>1){
     setQuantity(quantity => quantity-1)
    } else{
        alert("quantity can't be less than 1")
    }
  }
  
  return (
    <div className='container'>
            <h2> Pizza {number} </h2>
            <p>Pizza name: {name}</p>
            <p>Pizza price: ${price}</p>
            <h4 className='quantity'>Quantity {quantity}</h4>
            <h5><button onClick={increaseQuantity}>+</button>  Increase </h5>
            <h5><button onClick={decreaseQuantity}>-</button>  Decrease </h5>
    </div>
  )
}

export default Pizza