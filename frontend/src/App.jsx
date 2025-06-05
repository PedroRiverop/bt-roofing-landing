
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import './App.css'
{/* import Gallery from './views/Gallery';*/}
import Landing from './views/Hero'; // si tu Hero inicial es toda la landing

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
       {/* <Route path="/gallery" element={<Gallery />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
