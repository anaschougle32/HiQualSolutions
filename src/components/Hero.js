import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import ThemeToggle from './ThemeToggle';

const HeroSection = styled.section`
  padding: 120px 0 120px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  
  @media (max-width: 768px) {
    padding: 110px 0 100px;
  }
  
  @media (max-width: 480px) {
    padding: 100px 0 80px;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const ThemeToggleWrapper = styled.div`
  position: relative;
  margin: 0 auto 10px;
  width: fit-content;
  display: flex;
  justify-content: center;
  z-index: 2;
  
  @media (max-width: 768px) {
    display: none; /* Hide on mobile since it will be in the hamburger menu */
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: -2px;
  font-family: 'Satoshi', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: -1px;
    line-height: 1.2;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
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
    background-color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 107, 53, 0.25)' : 'rgba(255, 107, 53, 0.1)'};
    z-index: -1;
    border-radius: 4px;
    border: none;
  }
`;

const HeadingHighlightUnderlined = styled(HeadingHighlight)`
  text-decoration: none !important;
  position: relative !important;
  display: inline-block !important;
  padding: 0 8px !important;
  color: white !important;
  margin: 0 2px;
  z-index: 2;
  
  /* Override the parent's ::after */
  &::after {
    content: '' !important;
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    bottom: 0 !important;
    left: 0 !important;
    background-color: #FF6B35 !important;
    z-index: -1 !important;
    border-radius: 4px !important;
    transform: rotate(-2deg) !important;
    opacity: 1 !important;
  }
  
  @media (max-width: 480px) {
    padding: 0 3px !important;
    margin: 0 2px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.textSecondary};
  font-family: 'Poppins', sans-serif;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    word-wrap: break-word;
    hyphens: auto;
  }
`;

const HighlightedText = styled.span`
  color: #FF6B35;
  font-weight: 700;
  
  @media (max-width: 480px) {
    word-break: normal;
    hyphens: none;
  }
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
  background-color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'white'};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#e2e8f0'};
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
    box-shadow: 0 10px 15px ${({ theme }) => theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)'};
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  
  // Function to detect if we're on a mobile device
  const isMobile = () => {
    return window.innerWidth <= 480;
  };

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <ThemeToggleWrapper>
            <ThemeToggle isHero={true} />
          </ThemeToggleWrapper>
          
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Struggling To Get <HeadingHighlightUnderlined>More Clients</HeadingHighlightUnderlined> in <HeadingHighlight>Real Estate & Interior Design</HeadingHighlight> Business?
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We help <HighlightedText>Real Estate Professionals</HighlightedText> and <HighlightedText>Interior Designers</HighlightedText> attract <HighlightedText>consistent, quality clients</HighlightedText> through strategic <HighlightedText>Lead Generation</HighlightedText> marketing campaign that brings <HighlightedText>Sales not just Leads!!</HighlightedText>
          </Subtitle>
          
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PrimaryButton href="https://calendly.com/hiqualsoftwaresolutions/interior-design-growth-consultation" target="_blank">Book 1:1 Free Call</PrimaryButton>
            <SecondaryButton href="#process">Learn More</SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 