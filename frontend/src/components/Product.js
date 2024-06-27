import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product, addToCart }) => {
    const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div className="p-4 border rounded shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-xl mt-2">{product.name}</h2>
      <p className="mt-1"> <b>₹ </b>{product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white p-2 rounded">
        Add to Cart
      </button>
      <button onClick={handleBuyNow} className="mt-2 bg-green-500 text-white p-2 rounded">
        Buy Now
      </button>
    </div>
  );
};

export default Product;

