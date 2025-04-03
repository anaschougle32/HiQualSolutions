import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import CountUp from 'react-countup';

const ResultsSection = styled.section`
  padding: 8rem 0;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, rgba(255, 107, 53, 0.03) 50%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    z-index: 0;
    border: none;
    filter: blur(10px);
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, rgba(255, 107, 53, 0.02) 50%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    z-index: 0;
    border: none;
    filter: blur(8px);
  }
`;

const ResultsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ResultsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #2d3748;
  letter-spacing: -1px;
  font-family: 'Satoshi', sans-serif;
  text-align: center;
  
  span {
    color: #FF6B35;
  }
`;

const ResultsSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  font-weight: 400;
  text-align: center;
  max-width: 750px;
  margin: 0 auto 4rem;
  font-family: 'Poppins', sans-serif;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #2d3748;
  font-family: 'Satoshi', sans-serif;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #FF6B35;
    border: none;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 16px;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 107, 53, 0.3);
    
    .stat-icon {
      transform: scale(1.1);
      background-color: rgba(255, 107, 53, 0.2);
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, rgba(255, 107, 53, 0.02) 50%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    z-index: 0;
    border: none;
    filter: blur(5px);
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 107, 53, 0.1);
  color: #FF6B35;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px dashed rgba(255, 107, 53, 0.2);
    border-radius: 50%;
    top: 5px;
    left: 5px;
    z-index: -1;
    opacity: 0.7;
  }
`;

const StatNumber = styled.h4`
  font-size: 2.2rem;
  font-weight: 800;
  color: #FF6B35;
  margin-bottom: 0.5rem;
  font-family: 'Satoshi', sans-serif;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #4a5568;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 1) 0%, 
    rgba(255, 107, 53, 0.3) 50%, 
    rgba(255, 255, 255, 1) 100%
  );
  margin: 4rem auto;
  max-width: 800px;
  border: none;
`;

const Results = () => {
  const clientGrowthStats = [
    {
      icon: "📈",
      number: "+68%",
      label: "Average Increase in Consistent Lead Generation"
    },
    {
      icon: "🔄",
      number: "+42%",
      label: "Improved Client Retention Rate"
    },
    {
      icon: "📱",
      number: "+155%",
      label: "Boost in Monthly Customer Inquiries"
    },
    {
      icon: "💰",
      number: "+83%",
      label: "Increase in Conversion from Leads to Clients"
    }
  ];
  
  const trackRecordStats = [
    {
      icon: "👥",
      number: "25+",
      label: "Satisfied Clients"
    },
    {
      icon: "🏆",
      number: "30+",
      label: "Projects Completed"
    },
    {
      icon: "📊",
      number: "9500+",
      label: "Leads Generated"
    },
    {
      icon: "💵",
      number: "$5M+",
      label: "Revenue Generated for Clients"
    }
  ];

  return (
    <ResultsSection id="results">
      <ResultsContainer>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ResultsTitle>Real <span>Results</span></ResultsTitle>
          <ResultsSubtitle>
            We don't just promise results - we deliver them. Here's what our marketing approach has achieved for real estate and interior design businesses just like yours.
          </ResultsSubtitle>
        </motion.div>
        
        <SectionTitle>Client Growth Metrics</SectionTitle>
        <StatsGrid>
          {clientGrowthStats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <StatIcon className="stat-icon">{stat.icon}</StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
        
        <Divider />
        
        <SectionTitle>Our Track Record</SectionTitle>
        <StatsGrid>
          {trackRecordStats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <StatIcon className="stat-icon">{stat.icon}</StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </ResultsContainer>
    </ResultsSection>
  );
};

export default Results; 