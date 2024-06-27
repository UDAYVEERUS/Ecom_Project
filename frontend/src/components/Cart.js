import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
      navigate('/checkout');
    };

  if (cartItems.length === 0) {
    return <div className="container mx-auto p-4">Your cart is empty</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item._id} className="border p-2 flex items-center">
            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover" />
            <div className="ml-4">
              <h3 className="text-lg">{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white p-2 rounded">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
