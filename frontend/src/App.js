import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item._id === product._id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const completeOrder = (address, cardInfo) => {
    console.log('Order placed to:', address, 'with card info:', cardInfo);
    alert('Order placed successfully!');
    setCartItems([]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mx-auto p-4">
          {/* <h1 className="text-4xl mb-4">Product List</h1> */}
          <Routes>
            <Route path="/" element={<ProductList addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/checkout" element={<Checkout completeOrder={completeOrder} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          {showPopup && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded shadow-lg">
              Product added to cart!
              <button onClick={() => window.location.href='/cart'} className="ml-4 underline">
                View Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
