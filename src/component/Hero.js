import React from 'react';
import './Hero.css'; // Import your CSS for styling
import CardList from './cardlist';
import VideoPlayer from './VideoPlayer';

const HorizontalDivs = () => {
    
  return (
    <section className="horizontal-section">
    <h1 className='heading'>Sofware_Engineer <br></br>& <br></br>Medical_biller </h1>
    <div className='links-rich'>
    <a href="./Resume(1).pdf" download className="download-link">
        Resume  <i class="bi bi-download"></i>
    </a>
    <br></br>
    <a href="https://www.linkedin.com/in/koome-eliud-b19bb52b5/"  className="down">
     <i class="bi bi-linkedin"></i>
    </a>
    <br></br>
    <a href="https://github.com/ELIUD305KOOME" className="down">
    <i class="bi bi-github"></i>
    </a>
    <br></br>
    <a href="https://www.instagram.com/cycyl32/"  className="down">
    <i class="bi bi-instagram"></i>
    </a>
    <br></br>
    <a href="https://web.whatsapp.com/"  className="down">
    <i class="bi bi-whatsapp"></i>
    </a>
    </div>


    </section>
  );
};

export default HorizontalDivs;
