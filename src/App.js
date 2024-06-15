import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthCard2 from './user/AuthCard2';
import ItemCard from './components/ItemCard';
import CartPage from './components/CartPage';
import NavBar from './components/NavBar';
import BuyingPage from './components/BuyingPage';
import ThankYouPage from './components/ThankYouPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);  // Add user state

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item._id !== id));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <NavBar 
        cartItemCount={cartItems.length} 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
        user={user}  // Pass user to NavBar
      />
      <Routes>
        <Route path="/" element={<AuthCard2 setUser={setUser} />} />
        <Route path="/auth" element={<AuthCard2 setUser={setUser} />} />
        <Route path="/items" element={<ItemCard addToCart={addToCart} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} isDarkMode={isDarkMode} toggleTheme={toggleTheme} removeFromCart={removeFromCart} emptyCart={emptyCart} />} />
        <Route path="/thank-you" element={<ThankYouPage isDarkMode={isDarkMode} />} />
        <Route path="/buy/:id" element={<BuyingPage cartItems={cartItems} />} /> {/* Route for BuyingPage with parameter */}
      </Routes>
    </Router>
  );
};

export default App;
