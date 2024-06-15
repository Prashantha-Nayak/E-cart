import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';
import NavBar from './NavBar';

const CartPage = ({ cartItems, toggleTheme, isDarkMode, removeFromCart, emptyCart }) => {
  return (
    <div>
      <NavBar cartItemCount={cartItems.length} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className={`cart-page ${isDarkMode ? 'dark-mode' : ''}`}>
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <button className="empty-cart-btn" onClick={emptyCart}>Empty Cart</button>
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item-card">
                <img src={`http://localhost:5000/images/${item.imageUrl}`} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2 className="cart-item-name">{item.title}</h2>
                  <p className="cart-item-price">&#x20B9; {item.price}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item._id)}>Remove</button>
                  <Link to={`/buy/${item._id}`} className="buy-now-btn">Buy Now</Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
