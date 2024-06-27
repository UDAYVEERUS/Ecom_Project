import React, { useState } from 'react';

const Checkout = ({ completeOrder }) => {
  const [address, setAddress] = useState('');
  const [cardInfo, setCardInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    completeOrder(address, cardInfo);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 w-full mt-2"
          required
        />
        <input
          type="text"
          placeholder="Card Information"
          value={cardInfo}
          onChange={(e) => setCardInfo(e.target.value)}
          className="border p-2 w-full mt-2"
          required
        />
        <button type="submit" className="mt-2 bg-green-500 text-white p-2 rounded">
          Complete Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
