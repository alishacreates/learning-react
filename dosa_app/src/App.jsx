import React, { useState } from 'react';
import Dosa from './components/Dosa';
import './App.css';
import Nav from './components/Nav';
import Summary from './components/Summary';

const App = () => {
  const [dosaList, setDosaList] = useState([
    { id: 1, name: "Paneer Dosa", price: 200, quantity: 1 },
    { id: 2, name: "Masala Dosa", price: 300, quantity: 1 },
    { id: 3, name: "Cheese Dosa", price: 250, quantity: 1 },
    { id: 4, name: "Rava Dosa", price: 230, quantity: 1 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setDosaList(prev =>
      prev.map(d => (d.id === id ? { ...d, quantity: newQuantity } : d))
    );
  };

  return (
    <>
      <Nav />
      <h1 className='heading'>Dosa Buying Website</h1>
      <div className='main-container'>
        {dosaList.map(dosa => (
          <Dosa
            key={dosa.id}
            number={dosa.id}
            name={dosa.name}
            price={dosa.price}
            quantity={dosa.quantity}           
            setQuantity={newQty => updateQuantity(dosa.id, newQty)} 
          />
        ))}
      </div>
      <Summary dosas={dosaList} />  
    </>
  );
};

export default App;

