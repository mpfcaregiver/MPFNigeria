
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Benefits from './pages/Benefits';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Membership from './pages/Membership';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
