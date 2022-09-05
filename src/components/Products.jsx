import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <>
      <SingleProduct rowId="1" title="electronics" fetchUrl="electronics" />
      <SingleProduct rowId="2" title="jewelery" fetchUrl="jewelery" />
      <SingleProduct
        rowId="3"
        title="men's clothing"
        fetchUrl="men's clothing"
      />
      <SingleProduct
        rowId="4"
        title="women's clothing"
        fetchUrl="women's clothing"
      />
    </>
  );
};

export default Products;
