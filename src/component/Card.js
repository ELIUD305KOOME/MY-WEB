import React, { useState } from 'react';
import './Hero';
import './CardList.css';

const Card = ({ title, description, imageUrl }) => {
  // const [contactMethod, setContactMethod] = useState('');

  const handleOrderClick = () => {
    const message = `I would like to order ${title}.`;
    const phoneNumber = '254792182559'; // Use the number without the '+' sign
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};


  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img-top" />
      <div className="card-body">
     
        <button 
          type="button" 
          className="btn btn-primary position-relative" 
          onClick={handleOrderClick}
        >
          Make an order
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
            Available
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
