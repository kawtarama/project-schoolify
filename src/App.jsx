
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import Login from './pages/Login';
import BlogPage from './pages/BlogPage';



function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
            <Route path="/BlogPage" element={<BlogPage />} /> 
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;