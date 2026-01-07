import React, { useState } from 'react'
import './Dosa.css'

const  Dosa = ({number, name, price}) => {

  const [quantity, setQuantity] = useState(1);
  
  let increaseQuantity = () => {
    if(quantity<10){
      setQuantity(quantity => quantity+1)
    } else {
      alert("can only order 10 dosas at one time.")
    }
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
            <h2> Dosa {number} </h2>
            <p>Dosa name: {name}</p>
            <p>Dosa price: ${price}</p>
            <h4 className='quantity'>Quantity {quantity}</h4>
            <h5><button className='btn' onClick={increaseQuantity}>+</button>  Increase </h5>
            <h5><button className='btn' onClick={decreaseQuantity}>-</button>  Decrease </h5>
            <h4 className='quantity'>Total Price: {price * quantity}</h4>
    </div>
  )
}

export default Dosa