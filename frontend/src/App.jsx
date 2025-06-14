
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlainLayout from './layouts/PlainLayout';
import MainLayout from './layouts/MainLayout';
import Landing from './views/Hero'; // Hero inicial es toda la landing
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import './App.css'
{/* import Gallery from './views/Gallery';*/}


function App() {
  return (
    <Router>
      <Routes>
        {/* Landing: sin navbar ni footer */}
        <Route element={<PlainLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* Páginas principales: navbar + footer */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Route>
      
        
       {/* <Route path="/gallery" element={<Gallery />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
