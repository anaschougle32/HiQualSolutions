import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../App';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.svg';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.2rem 0;
  background-color: ${props => props.scrolled ? 
    props.theme.mode === 'dark' ? 
      'rgba(18, 18, 18, 0.75)' : 
      'rgba(255, 255, 255, 0.75)'
    : 'transparent'
  };
  backdrop-filter: ${props => props.scrolled ? 'blur(12px)' : 'none'};
  box-shadow: ${props => props.scrolled ? 
    props.theme.mode === 'dark' ? 
      '0 4px 30px rgba(0, 0, 0, 0.3)' : 
      '0 4px 30px rgba(0, 0, 0, 0.1)'
    : 'none'
  };
  transition: all 0.3s ease;
  border-bottom: ${props => props.scrolled ? 
    props.theme.mode === 'dark' ? 
      '1px solid rgba(255, 255, 255, 0.1)' : 
      '1px solid rgba(0, 0, 0, 0.05)'
    : 'none'
  };
  
  &::after {
    content: '';
    position: absolute;
    bottom: ${props => props.scrolled ? '-1px' : '0'};
    left: 0;
    width: 100%;
    height: ${props => props.scrolled ? '1px' : '0'};
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${props => props.theme.mode === 'dark' ? 
        'rgba(255, 107, 53, 0.3)' : 
        'rgba(255, 107, 53, 0.2)'
      } 50%,
      transparent 100%
    );
    opacity: ${props => props.scrolled ? '1' : '0'};
    transition: all 0.3s ease;
  }
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
    transition: filter 0.5s ease-in-out;
    filter: ${({ theme }) => theme.mode === 'dark' ? 'invert(1)' : 'invert(0)'};
  }
`;

const NavLinksDesktop = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NavLink = styled.a`
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme, scrolled }) => 
    scrolled ? 
      theme.text : 
      theme.mode === 'dark' ? 
        'rgba(255, 255, 255, 0.9)' : 
        'rgba(45, 55, 72, 0.9)'
  };
  text-decoration: none;
  position: relative;
  font-family: 'Satoshi', sans-serif;
  transition: color 0.3s ease;
  padding: 5px 0;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FF6B35;
    transition: all 0.3s ease;
    border-radius: 2px;
    box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 0 8px rgba(255, 107, 53, 0.5)' : 'none'};
  }
  
  &:hover {
    color: #FF6B35;
    
    &:after {
      width: 100%;
    }
  }
`;

const ContactButton = styled.a`
  padding: 0.7rem 1.4rem;
  margin-left: 1.5rem;
  background-color: #FF6B35;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Satoshi', sans-serif;
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.2);
  
  &:hover {
    background-color: #e05a2b;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 107, 53, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(255, 107, 53, 0.2);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: ${({ theme, isOpen }) => isOpen ? 
    theme.mode === 'dark' ? 
      'rgba(255, 107, 53, 0.2)' : 
      'rgba(255, 107, 53, 0.1)' : 
    'none'
  };
  border: none;
  color: ${({ theme, isOpen }) => isOpen ? '#FF6B35' : theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  padding: 5px 10px;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => 
      theme.mode === 'dark' ? 
        'rgba(255, 107, 53, 0.15)' : 
        'rgba(255, 107, 53, 0.05)'
    };
  }
  
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
  background-color: ${({ theme }) => 
    theme.mode === 'dark' ? 
      'rgba(25, 25, 25, 0.85)' : 
      'rgba(255, 255, 255, 0.9)'
  };
  backdrop-filter: blur(15px);
  z-index: 1001;
  padding: 6rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, ${({ theme }) => theme.mode === 'dark' ? '0.5' : '0.15'});
  border-left: 1px solid ${({ theme }) => 
    theme.mode === 'dark' ? 
      'rgba(255, 255, 255, 0.05)' : 
      'rgba(0, 0, 0, 0.05)'
  };
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => 
      theme.mode === 'dark' ? 
        'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, transparent 100%)' : 
        'none'
    };
    opacity: 0.5;
    pointer-events: none;
  }
`;

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  margin: 0.7rem 0;
  padding: 8px 0;
  width: 100%;
  font-family: 'Satoshi', sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #FF6B35;
    transition: all 0.3s ease;
    border-radius: 2px;
    box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 0 8px rgba(255, 107, 53, 0.5)' : 'none'};
  }
  
  &:hover {
    color: #FF6B35;
    
    &:after {
      width: 50%;
    }
  }
`;

const MobileContactButton = styled.a`
  display: inline-block;
  background-color: #FF6B35;
  color: #fff;
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  margin: 1.5rem 0 0;
  text-align: center;
  width: 100%;
  font-family: 'Satoshi', sans-serif;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${({ theme }) => theme.mode === 'dark' ? '0.7' : '0.5'});
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ThemeToggleWrapper = styled.div`
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

const MobileThemeToggle = styled.div`
  display: none;
  background: transparent;
  border: none;
  outline: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 15px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 50%,
    transparent 100%
  );
  margin: 1rem 0 1.5rem;
  width: 100%;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useContext(ThemeContext);
  
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
        
        <NavActions>
          <NavLinksDesktop>
            <NavLink href="#about" scrolled={scrolled}>About</NavLink>
            <NavLink href="#services" scrolled={scrolled}>Services</NavLink>
            <NavLink href="#portfolio" scrolled={scrolled}>Portfolio</NavLink>
            <NavLink href="#results" scrolled={scrolled}>Results</NavLink>
            <NavLink href="#testimonials" scrolled={scrolled}>Testimonials</NavLink>
            <ContactButton href="https://calendly.com/hiqualsoftwaresolutions/interior-design-growth-consultation" target="_blank">Book 1:1 Free Call</ContactButton>
          </NavLinksDesktop>
          
          <MobileThemeToggle>
            <ThemeToggleWrapper theme={theme}>
              <ThemeToggle />
            </ThemeToggleWrapper>
          </MobileThemeToggle>
          
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </MenuButton>
        </NavActions>
        
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
                isOpen={isMenuOpen}
              >
                <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
                <MobileNavLink href="#services" onClick={toggleMenu}>Services</MobileNavLink>
                <MobileNavLink href="#portfolio" onClick={toggleMenu}>Portfolio</MobileNavLink>
                <MobileNavLink href="#results" onClick={toggleMenu}>Results</MobileNavLink>
                <MobileNavLink href="#testimonials" onClick={toggleMenu}>Testimonials</MobileNavLink>
                <MobileContactButton href="https://calendly.com/hiqualsoftwaresolutions/interior-design-growth-consultation" target="_blank" onClick={toggleMenu}>Book 1:1 Free Consultation</MobileContactButton>
              </NavLinksMobile>
            </>
          )}
        </AnimatePresence>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 