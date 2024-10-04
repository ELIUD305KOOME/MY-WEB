import React, { useState } from 'react';
import './Hero';

const Card = ({ title, description, imageUrl }) => {
  const [contactMethod, setContactMethod] = useState('');

  const handleOrderClick = () => {
    if (contactMethod === 'email') {
      window.location.href = `mailto:eliudkoome305@gmail.com?subject=Order for ${title}&body=I would like to order ${title}.`;
    } else if (contactMethod === 'whatsapp') {
      const message = `I would like to order ${title}.`;
      const phoneNumber = '+254792182559';
      window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    } else {
      alert("Please select a contact method.");
    }
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img-top" />
      <div className="card-body">
        <select 
          value={contactMethod} 
          onChange={(e) => setContactMethod(e.target.value)} 
          className="form-select mb-3"
        >
          <option value="">Select a contact method</option>
          <option value="email">Email</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
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
