import React from 'react';
import styled from 'styled-components';
import whatsappIcon from '../assets/whatsapp.svg';

const FloatingButton = styled.a`
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  border-radius: 50%;
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
  z-index: 999;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.5);
  }
  
  &:active {
    transform: scale(1.05) translateY(-2px);
  }
  
  img {
    width: 30px;
    height: 30px;
  }
  
  &::before {
    content: "Chat with us";
    position: absolute;
    right: 70px;
    background-color: #333;
    color: white;
    padding: 8px 15px;
    border-radius: 8px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    white-space: nowrap;
  }
  
  &:hover::before {
    opacity: 1;
    visibility: visible;
    right: 75px;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
    
    img {
      width: 25px;
      height: 25px;
    }
    
    &::before {
      display: none;
    }
  }
`;

// Optional animation for the button to make it pulse
const PulseRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #25D366;
  opacity: 0.2;
  z-index: -1;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.2;
    }
    70% {
      transform: scale(1.3);
      opacity: 0;
    }
    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }
`;

const WhatsAppFloat = () => {
  return (
    <FloatingButton 
      href="https://wa.me/917738816466" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <PulseRing />
      <img src={whatsappIcon} alt="WhatsApp" />
    </FloatingButton>
  );
};

export default WhatsAppFloat; 