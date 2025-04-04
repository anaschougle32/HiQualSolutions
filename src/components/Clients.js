import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

// Import all logos
import logo1 from '../assets/logos/VGK-white-logo.svg';
import logo2 from '../assets/logos/The-Nature-Titwala-65x110-1.png';
import logo3 from '../assets/logos/Uma-Logo-70x80-1.png';
import logo4 from '../assets/logos/LOGO-2.png';
import logo5 from '../assets/logos/new_logo-removebg-preview.png';
import logo6 from '../assets/logos/Logo-1 (1).svg';
import logo7 from '../assets/logos/dwi_krafi_logo.jpeg';
import logo8 from '../assets/logos/kurlaproperties-LOgo-1.jpg';
import logo9 from '../assets/logos/logo.webp';
import logo10 from '../assets/logos/image (3).png';
import logo11 from '../assets/logos/image (2).png';
import logo12 from '../assets/logos/image (1).png';
import logo13 from '../assets/logos/image.png';

const ClientsSection = styled.section`
  padding: 6rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;
`;

const ClientsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ClientsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: -1px;
  font-family: 'Satoshi', sans-serif;
  text-align: center;
  
  span {
    color: #FF6B35;
  }
`;

const ClientsSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-family: 'Poppins', sans-serif;
`;

const LogoSliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 2rem 0;
  padding: 2rem 0;
  
  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, ${({ theme }) => theme.background}, transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, ${({ theme }) => theme.background}, transparent);
  }
`;

const LogoSlider = styled.div`
  display: flex;
  align-items: center;
  animation: scrollX 30s linear infinite;
  width: fit-content;
  
  @keyframes scrollX {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  &:hover {
    animation-play-state: paused;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 0 2.5rem;
  opacity: ${({ theme }) => theme.mode === 'dark' ? '0.9' : '0.9'};
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const LogoImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.95)'};
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  min-width: 220px;
  height: 100px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.03)'};
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: ${({ theme, isWhiteLogo }) => {
      if (theme.mode === 'dark') {
        return 'brightness(1.2)';
      } else if (isWhiteLogo) {
        return 'invert(1) brightness(0.2)';
      } else {
        return 'none';
      }
    }};
  }
  
  svg {
    height: 50px;
    width: auto;
    fill: ${({ theme }) => theme.mode === 'dark' ? '#ffffff' : '#000000'};
  }
`;

const Clients = () => {
  const { theme } = useContext(ThemeContext);
  const sliderRef = useRef(null);
  
  useEffect(() => {
    // Clone the logos for smooth infinite scroll
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const clone = slider.innerHTML;
      slider.innerHTML = clone + clone;
    }
  }, []);
  
  const clientLogos = [
    { image: logo1, alt: "VGK Logo", isWhiteLogo: true },
    { image: logo2, alt: "The Nature Titwala", isWhiteLogo: false },
    { image: logo3, alt: "Uma Logo", isWhiteLogo: false },
    { image: logo4, alt: "Client Logo", isWhiteLogo: false },
    { image: logo5, alt: "Client Brand", isWhiteLogo: false },
    { image: logo6, alt: "Client Logo", isWhiteLogo: true },
    { image: logo7, alt: "Dwi Krafi", isWhiteLogo: false },
    { image: logo8, alt: "Kurla Properties", isWhiteLogo: false },
    { image: logo9, alt: "Client Logo", isWhiteLogo: false },
    { image: logo10, alt: "Client Logo", isWhiteLogo: false },
    { image: logo11, alt: "Client Logo", isWhiteLogo: false },
    { image: logo12, alt: "Client Logo", isWhiteLogo: false },
    { image: logo13, alt: "Client Logo", isWhiteLogo: false }
  ];

  return (
    <ClientsSection id="clients">
      <ClientsContainer>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ClientsTitle>Our <span>Clients</span></ClientsTitle>
          <ClientsSubtitle>
            We've had the privilege of working with these amazing real estate and interior design businesses to help them achieve consistent growth.
          </ClientsSubtitle>
        </motion.div>
        
        <LogoSliderContainer theme={theme}>
          <LogoSlider ref={sliderRef}>
            {clientLogos.map((client, index) => (
              <LogoWrapper key={index} theme={theme}>
                <LogoImage theme={theme} isWhiteLogo={client.isWhiteLogo}>
                  <img src={client.image} alt={client.alt} />
                </LogoImage>
              </LogoWrapper>
            ))}
          </LogoSlider>
        </LogoSliderContainer>
      </ClientsContainer>
    </ClientsSection>
  );
};

export default Clients; 