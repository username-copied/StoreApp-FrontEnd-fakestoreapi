import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);

  const url = `https://fakestoreapi.com/products`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1 className="bg-black text-white text-center text-2xl font-bold font-sans p-4 m-4">
        Shop Mart
      </h1>
      <div className="grid  border-black border-[10px] md:grid-cols-4 gap-[100px] p-4 m-4 items-center justify-center">
        {product.map((productItem) => (
          <div className=" border-black border rounded-md" key={productItem.id}>
            <img
              className="p-4 m-4 mx-auto h-[200px]"
              src={productItem.image}
              alt={productItem.title}
            />
            <p className=" text-center">{productItem.title}</p>
            <Link to={`/${productItem.id}`}>
              <div className="text-center p-2 m-2">
                <button className=" bg-black text-white p-2 m-2 rounded-md font-bold">
                  View Item
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
