import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
// import { FaStar } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 8rem 0;
  background-color: transparent;
  position: relative;
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: -1px;
  font-family: 'Satoshi', sans-serif;
  text-align: center;
  
  span {
    color: #FF6B35;
  }
`;

const TestimonialsSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  font-family: 'Poppins', sans-serif;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, ${({ theme }) => theme.mode === 'dark' ? '0.2' : '0.05'});
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, ${({ theme }) => theme.mode === 'dark' ? '0.3' : '0.1'});
    border-color: rgba(255, 107, 53, 0.4);
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
    z-index: 0;
    border-radius: 0;
    filter: blur(6px);
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 140px;
    height: 70px;
    background: ${({ theme }) => theme.mode === 'dark' ? 
      'linear-gradient(135deg, rgba(18, 18, 18, 0.4) 0%, transparent 100%)' : 
      'linear-gradient(135deg, rgba(240, 240, 240, 0.4) 0%, transparent 100%)'
    };
    z-index: 0;
    opacity: 0.6;
  }
`;

const QuoteSymbol = styled.div`
  font-size: 4rem;
  color: rgba(255, 107, 53, ${({ theme }) => theme.mode === 'dark' ? '0.4' : '0.2'});
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: 'Georgia', serif;
  line-height: 1;
  text-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 2px 8px rgba(255, 107, 53, 0.2)' : 'none'};
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 1;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`;

const ClientImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 107, 53, 0.2)' : 'rgba(255, 107, 53, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF6B35;
  font-size: 1.5rem;
  border: none;
  box-shadow: 0 4px 10px rgba(255, 107, 53, ${({ theme }) => theme.mode === 'dark' ? '0.25' : '0.15'});
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.2rem;
  font-family: 'Satoshi', sans-serif;
`;

const ClientRole = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  font-family: 'Poppins', sans-serif;
`;

const ClientLogo = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  font-family: 'Satoshi', sans-serif;
  display: flex;
  align-items: center;
  
  span {
    color: #FF6B35;
    margin-right: 0.3rem;
    text-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 1px 3px rgba(255, 107, 53, 0.3)' : 'none'};
  }
`;

const StarRating = styled.div`
  color: #FF6B35;
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  text-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 1px 5px rgba(255, 107, 53, 0.3)' : 'none'};
`;

const Testimonials = () => {
  const { theme } = useContext(ThemeContext);
  
  const testimonials = [
    {
      text: "HiQual Solutions transformed our real estate marketing strategy. We've seen a 68% increase in consistent lead generation, and our client acquisition has never been more steady. Their approach is both innovative and results-driven.",
      name: "Michael Thompson",
      role: "CEO, Metropolitan Properties",
      logo: "Metropolitan Properties",
      rating: 5
    },
    {
      text: "As an interior designer, I struggled with inconsistent client flow until I partnered with HiQual. Their targeted marketing approach has not only increased my inquiries by over 150% but also helped me attract the right kind of clients for my business.",
      name: "Jennifer Wilson",
      role: "Principal Designer, J.W. Interiors",
      logo: "J.W. Interiors",
      rating: 5
    },
    {
      text: "We've worked with several marketing agencies before, but HiQual Solutions truly understands the real estate market. Their strategies have helped us maintain a consistent client base even during traditionally slow seasons.",
      name: "David Rodriguez",
      role: "Managing Partner, Luxury Homes Co.",
      logo: "Luxury Homes Co.",
      rating: 5
    },
    {
      text: "The team at HiQual developed a comprehensive marketing strategy that perfectly showcased our interior design portfolio. The results speak for themselves—our client retention rate has improved by 42% in just six months.",
      name: "Sarah Chen",
      role: "Founder, Modern Space Design",
      logo: "Modern Space Design",
      rating: 5
    },
    {
      text: "What sets HiQual apart is their understanding of both real estate and interior design markets. They crafted messaging that resonated with our target audience, resulting in an 83% increase in conversion from leads to clients.",
      name: "Robert Foster",
      role: "Director, Elite Properties & Design",
      logo: "Elite Properties & Design",
      rating: 5
    },
    {
      text: "The consistent flow of high-quality leads we've received since working with HiQual has transformed our business. Their data-driven approach ensures we're always targeting the right audience with the right message.",
      name: "Amanda Patel",
      role: "Owner, Signature Interiors",
      logo: "Signature Interiors",
      rating: 5
    }
  ];

  const renderStars = (count) => {
    return "★".repeat(count);
  };

  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsContainer>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <TestimonialsTitle>Client <span>Testimonials</span></TestimonialsTitle>
          <TestimonialsSubtitle>
            Don't just take our word for it. Here's what our clients have to say about our marketing solutions for real estate and interior design businesses.
          </TestimonialsSubtitle>
        </motion.div>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <QuoteSymbol>"</QuoteSymbol>
              <StarRating>{renderStars(testimonial.rating)}</StarRating>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <ClientInfo>
                <ClientImage>{testimonial.name.charAt(0)}</ClientImage>
                <ClientDetails>
                  <ClientName>{testimonial.name}</ClientName>
                  <ClientRole>{testimonial.role}</ClientRole>
                </ClientDetails>
              </ClientInfo>
              <ClientLogo><span>→</span> {testimonial.logo}</ClientLogo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials; 