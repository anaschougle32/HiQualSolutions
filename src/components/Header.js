import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.2rem 0;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  img {
    height: 40px;
    transition: all 0.3s ease;
  }
`;

const NavLinksDesktop = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #4a5568;
  text-decoration: none;
  position: relative;
  font-family: 'Satoshi', sans-serif;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -3px;
    left: 0;
    background-color: #FF6B35;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #FF6B35;
    
    &:after {
      width: 100%;
    }
  }
`;

const ContactButton = styled.a`
  padding: 0.6rem 1.3rem;
  margin-left: 1.5rem;
  background-color: #FF6B35;
  color: white;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Satoshi', sans-serif;
  
  &:hover {
    background-color: #e05a2b;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px rgba(255, 107, 53, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(255, 107, 53, 0.2);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #2d3748;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinksMobile = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  background-color: white;
  z-index: 1001;
  padding: 6rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
`;

const MobileNavLink = styled(NavLink)`
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

const MobileContactButton = styled(ContactButton)`
  margin: 1rem 0;
  text-align: center;
  display: block;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  backdrop-filter: blur(3px);
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };
  
  const overlayVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  
  return (
    <HeaderContainer scrolled={scrolled}>
      <NavContainer>
        <Logo href="#">
          <img src={logo} alt="HiQual Logo" />
        </Logo>
        
        <NavLinksDesktop>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#process">Process</NavLink>
          <NavLink href="#results">Results</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <ContactButton href="#contact">Get Started</ContactButton>
        </NavLinksDesktop>
        
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <Overlay
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                onClick={toggleMenu}
              />
              
              <NavLinksMobile
                initial="closed"
                animate="open"
                exit="closed"
                variants={navVariants}
              >
                <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
                <MobileNavLink href="#process" onClick={toggleMenu}>Process</MobileNavLink>
                <MobileNavLink href="#results" onClick={toggleMenu}>Results</MobileNavLink>
                <MobileNavLink href="#testimonials" onClick={toggleMenu}>Testimonials</MobileNavLink>
                <MobileContactButton href="#contact" onClick={toggleMenu}>Get Started</MobileContactButton>
              </NavLinksMobile>
            </>
          )}
        </AnimatePresence>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 