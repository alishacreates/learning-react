import React, { useState } from 'react'
import './Dosa.css'

const  Dosa = ({number, name, price}) => {

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  
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

  let TotalPrice = () => {
    setTotal(total => total + ({price} * {quantity}))
  }
  
  return (
    <div className='container'>
            <h2> Dosa {number} </h2>
            <p>Dosa name: {name}</p>
            <p>Dosa price: ${price}</p>
            <h4 className='quantity'>Quantity {quantity}</h4>
            <h5><button onClick={increaseQuantity}>+</button>  Increase </h5>
            <h5><button onClick={decreaseQuantity}>-</button>  Decrease </h5>
            <h4 className='quantity'>Total Price: {total}</h4>
    </div>
  )
}

export default Dosa