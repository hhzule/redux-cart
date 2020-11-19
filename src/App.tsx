import React from "react";
import { Product } from "./Products";
import { Basket } from "./Basket";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div></div>
      <div>
        <Product />
      </div>

      {/* <Basket /> */}
    </div>
  );
}

export default App;
