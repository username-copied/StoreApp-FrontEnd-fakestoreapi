import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const url = `https://fakestoreapi.com/products/${params.productId}`;

  console.log(product);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1 className="bg-black text-white text-center text-2xl font-bold font-sans p-4 m-4">
        Shop Mart
      </h1>
      <div className=" md:flex p-4 m-4">
        <img
          className="mx-auto p-4 m-4 h-[500px] w-full md:w-[40%] duration-[300ms] hover:scale-110 "
          src={product.image}
          alt="xd"
        />
        <div>
          <p className="p-8 md:p-4 m-4 text-xl md:text-2xl md:text-start text-center">
            {product.title}
          </p>
          <p className="p-4 m-4 text-xl md:text-2xl">${product.price}</p>
          <p className="p-4 m-4 text-xl md:text-2xl uppercase">
            {product.category}
          </p>
          <p className="p-4 m-4 text-xl md:text-2xl">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
