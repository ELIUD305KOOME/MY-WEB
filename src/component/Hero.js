import React from 'react';
import './Hero.css'; // Import your CSS for styling
import CardList from './cardlist';
import VideoPlayer from './VideoPlayer';

const HorizontalDivs = () => {
    
  return (
    <section className="horizontal-section"style={{ backgroundImage: `url('https://www.open.edu.au/-/media/blog/2022/05-may/computer-science-vs-software-engineering.jpg?h=536&iar=0&w=715&rev=f73ec0e28548423bbb4e5db96519d7da&extension=webp&hash=3C2660EF3B9250ADDA7D1DFD9062C75C')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }}>
    <h1 className='heading'>Sofware-Engineer & Medical-Biller</h1>
      


    </section>
  );
};

export default HorizontalDivs;
