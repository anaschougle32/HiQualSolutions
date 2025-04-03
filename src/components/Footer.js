import React from 'react';
import styled from 'styled-components';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: #222;
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  margin-bottom: 2rem;
`;

const FooterLogo = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ff0000;
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: #ff0000;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ff0000;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #999;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterGrid>
          <FooterColumn>
            <FooterLogo>HiQual Solutions</FooterLogo>
            <FooterText>
              We specialize in performance marketing that drives measurable results for interior design businesses. Our data-driven strategies help you acquire high-value clients and maximize ROI.
            </FooterText>
            <SocialIcons>
              <SocialIcon href="#">f</SocialIcon>
              <SocialIcon href="#">t</SocialIcon>
              <SocialIcon href="#">i</SocialIcon>
              <SocialIcon href="#">in</SocialIcon>
            </SocialIcons>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#home">Home</a></FooterLink>
              <FooterLink><a href="#about">About Us</a></FooterLink>
              <FooterLink><a href="#process">Our Process</a></FooterLink>
              <FooterLink><a href="#results">Results</a></FooterLink>
              <FooterLink><a href="#testimonials">Testimonials</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Services</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">Lead Generation</a></FooterLink>
              <FooterLink><a href="#">Brand Awareness</a></FooterLink>
              <FooterLink><a href="#">Sales Funnel Setup</a></FooterLink>
              <FooterLink><a href="#">Performance Marketing</a></FooterLink>
              <FooterLink><a href="#">Conversion Tracking</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="mailto:info@hiqualsolutions.com">info@hiqualsolutions.com</a></FooterLink>
              <FooterLink><a href="tel:+1234567890">+1 (234) 567-890</a></FooterLink>
              <FooterLink>123 Business Avenue, Suite 456, New York, NY 10001</FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterGrid>
        
        <Copyright>
          &copy; {new Date().getFullYear()} HiQual Solutions. All rights reserved.
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer; 