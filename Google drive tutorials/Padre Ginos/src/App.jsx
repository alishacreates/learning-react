import React from "react"; //default import yeh hai
import {createRoot} from "react-dom"; //named import
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <Pizza
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
      />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
      />
      <Pizza
        name="The Big Meat Pizza"
        description="Pepperoni, Italian Sausage, Chorizo Sausage"
      />
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
