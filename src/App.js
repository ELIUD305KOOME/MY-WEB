// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './component/Welcome';
import OffcanvasNavbar from './component/Nav';
import HorizontalDivs from './component/Hero';
import AboutMe from './component/AboutMe';
import Services from './component/Services'; // Import the Services component

function App() {
  return (
    <Router>
      <div className="App">
        <OffcanvasNavbar />
        <Welcome/>
        <HorizontalDivs /> {/* Replace this with your own Hero component */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} /> {/* Route for Services */}
          {/* <Route path="/contact" element={<Contact />} /> Add a Contact component when ready */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
