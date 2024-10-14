// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Welcome from './component/Welcome';
import OffcanvasNavbar from './component/Nav';
import HorizontalDivs from './component/Hero';
import AboutMe from './component/AboutMe';
import Services from './component/Services'; // Import the Services component
import GetInTouch from './component/getintouch';
import Footer from './component/Footer';

function App() {
  return (

      <div className="App">
        <OffcanvasNavbar />
        {/* <Welcome/> */}
        <HorizontalDivs />
        <AboutMe/>
        <Services /> {/* Replace Welcome with AboutMe */}
        <GetInTouch />
        <Footer />
        </div>
  );
}

export default App;
