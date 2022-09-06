import React from "react";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:productId" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
