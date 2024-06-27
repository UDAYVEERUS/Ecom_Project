import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleOrderNow = () => {
    navigate('/checkout');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
      <h2 className="text-4xl mt-2">{product.name}</h2>
      <p className="mt-1">${product.price}</p>
      <p className="mt-1">{product.description}</p>
      <button onClick={handleOrderNow} className="mt-2 bg-green-500 text-white p-2 rounded">
        Order Now
      </button>
    </div>
  );
};

export default ProductDetail;
