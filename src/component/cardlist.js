import React from 'react';
import Card from './Card';

const CardList = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      imageUrl: 'https://www.websentra.com/wp-content/uploads/systems-management-730x480.jpg',
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      imageUrl: 'https://i.ytimg.com/vi/aaACaKZnN50/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBCzi0BDXq6IKcQbR1zvJ8t6sSISg',
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      imageUrl: 'https://cdn.prod.website-files.com/66171462efa71abbce3940ce/66171462efa71abbce395d2a_Blog%20Header%20-%20How%20to%20create%20a%20Membership%20site-1280x720.png',
    },
    {
      title: 'Blog',
      description: 'A blog image.',
      imageUrl: `${process.env.PUBLIC_URL}/blog.jpg`,
    },
    {
      title: 'School Websites',
      description: 'A school website image.',
      imageUrl: `${process.env.PUBLIC_URL}/school-websites.jpg`,
    },
    {
      title: 'Portfolio Website',
      description: 'A portfolio website image.',
      imageUrl: `${process.env.PUBLIC_URL}/Portfolio-Website.webp`,
    },
    {
      title: 'UI/UX Design',
      description: 'A UI/UX design image.',
      imageUrl: `${process.env.PUBLIC_URL}/ui-ux.jpeg`,
    },
    {
      title: 'System Management',
      description: 'A system management image.',
      imageUrl: `${process.env.PUBLIC_URL}/system-management.jpeg`,
    },
    {
      title: 'E-commerce Development',
      description: 'An e-commerce development image.',
      imageUrl: `${process.env.PUBLIC_URL}/ecommerce-website-development.webp`,
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardList;
