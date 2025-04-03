import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../App';
import whatsappIcon from '../assets/whatsapp.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

const FooterSection = styled.section`
  padding: 5rem 0 2rem;
  background-color: ${({ theme }) => theme.mode === 'dark' ? '#0a0a0a' : '#222'};
  color: #B0B0B0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 107, 53, 0.3) 50%, 
      transparent 100%
    );
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  
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
  margin-bottom: 1.2rem;
  font-family: 'Satoshi', sans-serif;
  letter-spacing: -0.5px;
  color: white;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #B0B0B0;
  margin-bottom: 1.8rem;
  font-family: 'Poppins', sans-serif;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FF6B35;
    transform: translateY(-3px);
    box-shadow: 0 10px 15px rgba(255, 107, 53, 0.2);
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: #FF6B35;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 1rem;
  
  a {
    color: #B0B0B0;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    display: inline-block;
    
    &:hover {
      color: #FF6B35;
      transform: translateX(5px);
    }
  }
`;

const ContactItem = styled(FooterLink)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #B0B0B0;
  font-family: 'Poppins', sans-serif;
  
  a {
    display: inline-block;
  }
`;

const ContactIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  background-color: rgba(255, 107, 53, 0.15);
  color: #FF6B35;
  border-radius: 8px;
  margin-right: 10px;
  font-size: 1rem;
  box-shadow: 0 3px 10px rgba(255, 107, 53, 0.15);
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px dashed rgba(255, 107, 53, 0.3);
    border-radius: 8px;
    top: 3px;
    left: 3px;
    opacity: 0.7;
    z-index: -1;
  }
`;

const LocationTitle = styled.h5`
  color: white;
  font-family: 'Satoshi', sans-serif;
  font-size: 1rem;
  margin: 1.2rem 0 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  padding: 8px 15px;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);
  
  img {
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(37, 211, 102, 0.4);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #888;
  font-family: 'Poppins', sans-serif;
`;

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <FooterSection>
      <FooterContainer>
        <FooterGrid>
          <FooterColumn>
            <FooterLogo>HiQual Solutions</FooterLogo>
            <FooterText>
              We specialize in strategic marketing for real estate professionals and interior designers. Our data-driven approach helps you attract consistent clients, showcase your properties and designs effectively, and build a strong market presence.
            </FooterText>
            <SocialIcons>
              <SocialIcon href="#" aria-label="Facebook">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Pinterest">
                <FaPinterestP />
              </SocialIcon>
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
              <FooterLink><a href="#contact">Contact Us</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Our Services</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">Property Marketing</a></FooterLink>
              <FooterLink><a href="#">Design Portfolio Development</a></FooterLink>
              <FooterLink><a href="#">Targeted Lead Generation</a></FooterLink>
              <FooterLink><a href="#">Social Media Management</a></FooterLink>
              <FooterLink><a href="#">SEO for Design Businesses</a></FooterLink>
              <FooterLink><a href="#">Client Acquisition Systems</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterLinks>
              <ContactItem>
                <ContactIcon>📧</ContactIcon>
                <a href="mailto:contact@hiqualsolutions.com">contact@hiqualsolutions.com</a>
              </ContactItem>
              
              <LocationTitle>Canada Office</LocationTitle>
              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <a href="tel:+19808423695">+1 980-842-3695</a>
              </ContactItem>
              <ContactItem>
                <ContactIcon style={{ alignSelf: 'flex-start', marginTop: '3px' }}>📍</ContactIcon>
                <span>
                  4143 SETON DRIVE SE, CALGARY,<br />
                  ALBERTA, CANADA. T3M 3A6
                </span>
              </ContactItem>
              
              <LocationTitle>India Office</LocationTitle>
              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <a href="tel:+919867975473">+91 986-797-5473</a>
              </ContactItem>
              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <a href="tel:+917738816466">+91 773-881-6466</a>
              </ContactItem>
              <ContactItem>
                <ContactIcon style={{ alignSelf: 'flex-start', marginTop: '3px' }}>📍</ContactIcon>
                <span>
                  L-205, Old Nasheman Colony, Mumbra,<br />
                  Thane-400612, Maharashtra, India
                </span>
              </ContactItem>
              
              <WhatsAppButton href="https://wa.me/917738816466" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp" />
                Chat on WhatsApp
              </WhatsAppButton>
              
              <ContactItem style={{ marginTop: "15px" }}>
                <a href="#contact" style={{ color: "#FF6B35", fontWeight: "500" }}>
                  Get a Free Consultation →
                </a>
              </ContactItem>
            </FooterLinks>
          </FooterColumn>
        </FooterGrid>
        
        <Copyright>
          &copy; {new Date().getFullYear()} HiQual Solutions. All rights reserved. | Specialized in marketing for real estate & interior design.
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer; 