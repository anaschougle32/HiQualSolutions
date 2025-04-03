import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
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

// Define themes
const lightTheme = {
  primary: '#FF6B35',
  background: '#ffffff',
  cardBackground: '#ffffff',
  text: '#2d3748',
  textSecondary: '#4a5568',
  borderColor: 'rgba(255, 107, 53, 0.15)',
  gradientStart: 'rgba(255, 107, 53, 0.2)',
  gradientMiddle: 'rgba(255, 107, 53, 0.1)',
  gradientEnd: 'rgba(255, 255, 255, 0)',
  headerBackground: 'rgba(255, 255, 255, 0.9)',
  sectionBackground: '#ffffff',
  sectionGradientTop: 'linear-gradient(to top, transparent 0%, #ffffff 100%)',
  sectionGradientBottom: 'linear-gradient(to bottom, transparent 0%, #ffffff 100%)',
  mode: 'light'
};

const darkTheme = {
  primary: '#FF6B35',
  background: '#121212',
  cardBackground: '#1e1e1e',
  text: '#f5f5f5',
  textSecondary: '#d1d1d1',
  borderColor: 'rgba(255, 107, 53, 0.35)',
  gradientStart: 'rgba(255, 107, 53, 0.4)',
  gradientMiddle: 'rgba(255, 107, 53, 0.2)',
  gradientEnd: 'rgba(18, 18, 18, 0)',
  headerBackground: 'rgba(18, 18, 18, 0.95)',
  sectionBackground: '#121212',
  sectionGradientTop: 'linear-gradient(to top, transparent 0%, #121212 100%)',
  sectionGradientBottom: 'linear-gradient(to bottom, transparent 0%, #121212 100%)',
  mode: 'dark'
};

// Create context
export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {}
});

function App() {
  // Get theme preference from localStorage or default to light
  const savedTheme = localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme.mode === 'light' ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme.mode);
    
    // Update CSS variables for section transitions
    document.documentElement.style.setProperty('--section-gradient-top', newTheme.sectionGradientTop);
    document.documentElement.style.setProperty('--section-gradient-bottom', newTheme.sectionGradientBottom);
    document.documentElement.style.setProperty('--background-color', newTheme.background);
  };

  useEffect(() => {
    // Update body background color when theme changes
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
    
    // Set CSS variables for global styling
    document.documentElement.style.setProperty('--section-gradient-top', theme.sectionGradientTop);
    document.documentElement.style.setProperty('--section-gradient-bottom', theme.sectionGradientBottom);
    document.documentElement.style.setProperty('--background-color', theme.background);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App" style={{ backgroundColor: theme.background }} data-theme={theme.mode}>
            {/* Global gradients */}
            <div className="global-gradient top-left"></div>
            <div className="global-gradient top-right"></div>
            <div className="global-gradient bottom-left"></div>
            
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
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App; 