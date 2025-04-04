import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const ServicesSection = styled.section`
  padding: 8rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ServicesTitle = styled.h2`
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

const ServicesSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  font-family: 'Poppins', sans-serif;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, ${({ theme }) => theme.mode === 'dark' ? '0.2' : '0.05'});
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, ${({ theme }) => theme.mode === 'dark' ? '0.3' : '0.1'});
    border-color: rgba(255, 107, 53, 0.4);
    
    .service-icon {
      transform: scale(1.1);
      background-color: rgba(255, 107, 53, ${({ theme }) => theme.mode === 'dark' ? '0.4' : '0.25'});
      box-shadow: 0 8px 20px ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 107, 53, 0.4)' : 'rgba(255, 107, 53, 0.3)'};
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 120px;
    background: radial-gradient(
      circle at top right,
      ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 107, 53, 0.4)' : 'rgba(255, 107, 53, 0.25)'} 0%,
      ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 107, 53, 0.2)' : 'rgba(255, 107, 53, 0.12)'} 40%,
      transparent 70%
    );
    border-radius: 0;
    transform-origin: top right;
    transition: transform 0.5s ease;
    z-index: -1;
    filter: blur(6px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.2rem;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 107, 53, 0.25)' : 'rgba(255, 107, 53, 0.15)'};
  color: #FF6B35;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 107, 53, 0.3)' : 'rgba(255, 107, 53, 0.2)'};
  position: relative;
  text-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 2px 8px rgba(255, 107, 53, 0.4)' : 'none'};
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px dashed rgba(255, 107, 53, ${({ theme }) => theme.mode === 'dark' ? '0.6' : '0.4'});
    border-radius: 16px;
    top: 6px;
    left: 6px;
    z-index: -1;
    opacity: 0.8;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  display: inline-block;
  font-family: 'Satoshi', sans-serif;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 45px;
    height: 3px;
    background-color: #FF6B35;
    box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 1px 4px rgba(255, 107, 53, 0.4)' : 'none'};
    border: none;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
  margin-top: 1.2rem;
  font-family: 'Poppins', sans-serif;
`;

const Services = () => {
  const { theme } = useContext(ThemeContext);
  
  const services = [
    {
      icon: "📱",
      title: "Meta Ads Campaigns",
      description: "Strategic Facebook & Instagram ad campaigns specifically designed for real estate and interior design businesses to generate high-quality leads with detailed targeting based on location, interests, and behaviors."
    },
    {
      icon: "🔍",
      title: "Google Ads Management",
      description: "Targeted Google search and display campaigns that capture potential clients when they're actively searching for real estate or interior design services in your service area."
    },
    {
      icon: "🎯",
      title: "Lead Generation Funnels",
      description: "Custom-built conversion funnels with optimized landing pages designed to convert visitors into qualified leads for your real estate or interior design business."
    },
    {
      icon: "📊",
      title: "Lead Tracking & Analytics",
      description: "Advanced tracking systems that follow your leads from initial click to conversion, providing actionable data on campaign performance and ROI."
    },
    {
      icon: "🤝",
      title: "Lead Nurturing Systems",
      description: "Automated follow-up sequences that keep your business top-of-mind and guide prospects through the decision-making process until they become paying clients."
    },
    {
      icon: "📈",
      title: "Campaign Optimization",
      description: "Ongoing performance analysis and optimization of your ad campaigns to continuously improve lead quality, reduce acquisition costs, and maximize your marketing ROI."
    }
  ];

  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ServicesTitle>Our <span>Services</span></ServicesTitle>
          <ServicesSubtitle>
            We specialize in generating consistent, high-quality leads for real estate professionals and interior designers through strategic Meta and Google advertising campaigns.
          </ServicesSubtitle>
        </motion.div>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon className="service-icon">{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services; 