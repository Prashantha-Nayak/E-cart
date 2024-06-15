import React from 'react';
import './ThankYouPage.css';

const ThankYouPage = ({ isDarkMode }) => {
  return (
    <div className={`thank-you-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="thank-you-message">
        <h1>Thank You for Your Purchase!</h1>
        <p>Your order has been placed successfully.</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
