import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Process from './components/Process';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <AboutUs />
        <Process />
        <Results />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App; 