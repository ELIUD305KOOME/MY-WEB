
import React from 'react';
import CardList from './cardlist';

const Services = () => {
  

  return (
    <div id='services' className="services-container" style={{ padding: '20px' }}>
      <h2>Services</h2>
      <p>Below are some of services I offer</p>
      <CardList /> {/* Replace this with your own CardList component */}
      
    </div>
  );
};

export default Services;
