import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleProduct = ({ title, fetchURL, rowID }) => {
  const [product, setProduct] = useState([]);
  const [modal, setModal] = useState(false);
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
      <h1 className="bg-black text-white text-center p-4 m-4">Shooping App</h1>
      <div className="grid grid-cols-4 gap-[100px] p-4 m-4 items-center justify-center">
        {product.map((productItem) => (
          <div className="rounded-md" key={productItem.id}>
            <img
              className="p-4 m-4  h-[300px]"
              src={productItem.image}
              alt={productItem.title}
            />
            <p className=" text-center">{productItem.title}</p>
            <div className="text-center p-2 m-2">
              <button className="align-center">View Item</button>
            </div>
            {/* <div className={setModal(true) ? `visible` : `invisible`}>
              <div className="fixed h-[500px] w-[500px] l-[50%] r-[50%] flex flex-col">
                <p>{productItem.title}</p>
                <img
                  className="p-4 m-4"
                  src={productItem.image}
                  alt={productItem.title}
                />
                <p>{productItem.price}</p>
                <p>{productItem.description}</p>
              </div> */}
            {/* </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleProduct;
