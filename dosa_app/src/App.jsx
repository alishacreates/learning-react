import React, { useState } from 'react';
import Dosa from './components/Dosa';
import './App.css';
import Nav from './components/Nav';

const App = () => {
  const [page, setPage] = useState("Home");

  return (
    <>
      <Nav onSelect={setPage} />

      {page === "Home" && (
        <>
          <h1 className="heading">Dosa Buying Website</h1>
          <div className="main-container">
            <Dosa number={1} name="Paneer Dosa" price={200} />
            <Dosa number={2} name="Masala Dosa" price={300} />
            <Dosa number={3} name="Cheese Dosa" price={250} />
            <Dosa number={4} name="Rava Dosa" price={230} />
          </div>
        </>
      )}

      {page === "Menu" && <h2 style={{ textAlign: "center" }}>Our Menu</h2>}

      {page === "About" && <h2 style={{ textAlign: "center" }}>About Us</h2>}
    </>
  );
};

export default App;


