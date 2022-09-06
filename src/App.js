import React from "react";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import { Routes, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Products /> */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:productId" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
