import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const AboutSection = styled.section`
  padding: 8rem 0;
  background-color: transparent;
  position: relative;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutContent = styled.div``;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
`;

const AboutTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: -1px;
  font-family: 'Satoshi', sans-serif;
  
  span {
    color: #FF6B35;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 16px;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 10px 30px rgba(0, 0, 0, ${({ theme }) => theme.mode === 'dark' ? '0.2' : '0.05'});
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, ${({ theme }) => theme.mode === 'dark' ? '0.3' : '0.1'});
    border-color: rgba(255, 107, 53, 0.3);
    
    &::before {
      transform: scale(1.2);
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, ${({ theme }) => theme.gradientStart} 0%, ${({ theme }) => theme.gradientStart} 50%, ${({ theme }) => theme.gradientEnd} 70%);
    border-radius: 50%;
    transform-origin: top right;
    transition: transform 0.5s ease;
    z-index: -1;
    border: none;
    filter: blur(3px);
  }
  
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    font-family: 'Satoshi', sans-serif;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: #FF6B35;
      border: none;
    }
  }
  
  p {
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Poppins', sans-serif;
  }
`;

const AboutUs = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <AboutSection id="about">
      <AboutContainer>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AboutTitle>About <span>Us</span></AboutTitle>
        </motion.div>
        
        <AboutGrid>
          <AboutContent>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <AboutText>
                We help real estate professionals and interior designers elevate their digital presence and attract consistent clients. Our specialized marketing strategies are tailored for design professionals who want to showcase their premium services and build a reliable client pipeline.
              </AboutText>
              <AboutText>
                With over a decade of experience in real estate and interior design marketing, we understand what resonates with audiences seeking these services. Our approach combines sophisticated visual storytelling with strategic digital marketing tactics that position your business for consistent growth and client acquisition.
              </AboutText>
            </motion.div>
          </AboutContent>
          
          <FeaturesGrid>
            {[
              {
                title: "Strategic Brand Positioning",
                description: "We develop a distinctive identity for your services that appeals to your ideal clients and sets you apart from competitors in the real estate and interior design market."
              },
              {
                title: "Consistent Client Acquisition",
                description: "Our marketing approach focuses on building systems that deliver a steady stream of qualified leads, ensuring your business enjoys sustainable growth."
              },
              {
                title: "High-End Portfolio Development",
                description: "We create stunning digital presentations of your work that highlight your unique aesthetic and consistently attract the right type of clients to your business."
              }
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </AboutGrid>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutUs; 