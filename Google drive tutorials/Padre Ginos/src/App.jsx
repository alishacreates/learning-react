import React from "react"; //default import yeh hai
import {createRoot} from "react-dom"; //named import
import Pizza from "./Pizza";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <Order/>
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
