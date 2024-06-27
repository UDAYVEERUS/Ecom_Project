import React, { useState, useEffect } from "react";
import Product from "./Product";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://ecom-project-ebon.vercel.app/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="text-4xl mb-4">Product Listing Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
