import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { FaUsers, FaChessKnight, FaLeaf, FaDollarSign, FaCogs, FaBullseye } from 'react-icons/fa';

const ProcessSection = styled.section`
  padding: 8rem 0;
  background-color: #f8f9fa;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, rgba(255, 107, 53, 0.02) 50%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    z-index: 0;
    border: none;
    filter: blur(5px);
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 50px;
    right: -50px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, rgba(255, 107, 53, 0.02) 50%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    z-index: 0;
    border: none;
    filter: blur(5px);
  }
`;

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ProcessTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 3rem;
  color: #2d3748;
  letter-spacing: -1px;
  font-family: 'Satoshi', sans-serif;
  
  span {
    color: #FF6B35;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 107, 53, 0.3);
    
    &::before {
      transform: scale(1.2);
    }
    
    .step-icon {
      transform: scale(1.1);
      background-color: rgba(255, 107, 53, 0.2);
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, rgba(255, 107, 53, 0.02) 50%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    transform-origin: top right;
    transition: transform 0.5s ease;
    z-index: -1;
    border: none;
    filter: blur(3px);
  }
`;

const StepNumber = styled.div`
  font-size: 4.5rem;
  font-weight: 800;
  color: rgba(255, 107, 53, 0.15);
  position: absolute;
  top: 10px;
  right: 20px;
  line-height: 1;
  font-family: 'Satoshi', sans-serif;
`;

const StepIcon = styled.div`
  font-size: 2.2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 107, 53, 0.1);
  color: #FF6B35;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px dashed rgba(255, 107, 53, 0.2);
    border-radius: 12px;
    top: 5px;
    left: 5px;
    z-index: -1;
    opacity: 0.7;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2d3748;
  position: relative;
  display: inline-block;
  font-family: 'Satoshi', sans-serif;
  
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
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #4a5568;
  font-weight: 400;
  margin-top: 1.2rem;
  font-family: 'Poppins', sans-serif;
`;

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: "🔍",
      title: "Discovery & Strategy",
      description: "We start by understanding your unique business goals, target clientele, and market positioning to create a customized marketing strategy specifically for your design firm."
    },
    {
      number: "02",
      icon: "🏛️",
      title: "Brand Development",
      description: "Next, we refine your brand messaging and visual identity to appeal to consistent clients, ensuring your brand stands out in the real estate and interior design market."
    },
    {
      number: "03",
      icon: "📸",
      title: "Content Creation",
      description: "We create premium content that showcases your design expertise, including project portfolios, property listings, behind-the-scenes insights, and thought leadership content."
    },
    {
      number: "04",
      icon: "📱",
      title: "Digital Marketing",
      description: "We implement targeted digital marketing campaigns across select channels most relevant to your audience, including paid advertising, SEO, and social media."
    },
    {
      number: "05",
      icon: "📊",
      title: "Lead Generation",
      description: "Our strategies focus on attracting and converting high-quality leads, implementing automated systems that nurture prospects into paying clients consistently."
    },
    {
      number: "06",
      icon: "📈",
      title: "Analysis & Optimization",
      description: "We continuously monitor campaign performance, analyze results, and make data-driven optimizations to maximize your marketing ROI and ensure a consistent client flow."
    }
  ];

  return (
    <ProcessSection id="process">
      <ProcessContainer>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ProcessTitle>Our <span>Process</span></ProcessTitle>
        </motion.div>
        
        <ProcessGrid>
          {steps.map((step, index) => (
            <ProcessCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <StepNumber>{step.number}</StepNumber>
              <StepIcon className="step-icon">{step.icon}</StepIcon>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </ProcessContainer>
    </ProcessSection>
  );
};

export default Process; 