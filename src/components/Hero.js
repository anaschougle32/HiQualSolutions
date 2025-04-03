import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  padding: 180px 0 120px;
  position: relative;
  overflow: hidden;
  background-color: white;
  
  &::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, rgba(255, 107, 53, 0.03) 50%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    z-index: 0;
    border: none;
    filter: blur(5px);
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: -200px;
    left: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, rgba(255, 107, 53, 0.02) 50%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    z-index: 0;
    border: none;
    filter: blur(5px);
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #2d3748;
  letter-spacing: -2px;
  font-family: 'Satoshi', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeadingHighlight = styled.span`
  color: #FF6B35;
  font-family: 'Satoshi', sans-serif;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 12px;
    bottom: 8px;
    left: 0;
    background-color: rgba(255, 107, 53, 0.1);
    z-index: -1;
    border-radius: 4px;
    border: none;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  color: #4a5568;
  font-family: 'Poppins', sans-serif;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled.a`
  padding: 1rem 2rem;
  background-color: #FF6B35;
  color: white;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px rgba(255, 107, 53, 0.2);
  
  &:hover {
    background-color: #e05a2b;
    transform: translateY(-3px);
    box-shadow: 0 15px 20px rgba(255, 107, 53, 0.25);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.a`
  padding: 1rem 2rem;
  background-color: white;
  color: #2d3748;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    border-color: #FF6B35;
    color: #FF6B35;
    transform: translateY(-3px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Market Your <HeadingHighlight>Real Estate & Interior Design</HeadingHighlight> Business To Consistent Clients
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We help real estate professionals and interior designers attract consistent, quality clients through strategic marketing, stunning portfolio design, and data-driven campaigns.
          </Subtitle>
          
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PrimaryButton href="#contact">Get Started</PrimaryButton>
            <SecondaryButton href="#process">Learn More</SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 