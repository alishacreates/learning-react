import React from "react";
import { Routes, Route } from "react-router-dom";
import Dosa from "./components/Dosa";
import Nav from "./components/Nav";
import MenuPage from "./components/MenuPage";
import "./App.css";

const Home = () => {
  return (
    <>
      <h1 className="heading">Dosa Buying Website</h1>
      <div className="main-container">
        <Dosa number={1} name="Paneer Dosa" price={200} />
        <Dosa number={2} name="Masala Dosa" price={300} />
        <Dosa number={3} name="Cheese Dosa" price={250} />
        <Dosa number={4} name="Rava Dosa" price={230} />
      </div>
    </>
  );
};

const About = () => {
  return <h2 style={{ textAlign: "center" }}>About Us</h2>;
};

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;


