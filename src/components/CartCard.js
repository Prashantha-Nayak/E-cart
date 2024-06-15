import React from 'react';
import './CartCard.css';

const CartCard = ({ item }) => {
  return (
    <div className="cart-card">
      <img src={`http://localhost:5000/images/${item.imageUrl}`} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.title}</h3>
        <p className="cart-item-price">&#x20B9; {item.price}</p>
      </div>
    </div>
  );
};

export default CartCard;
