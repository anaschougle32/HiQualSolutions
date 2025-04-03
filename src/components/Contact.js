import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

const ContactSection = styled.section`
  padding: 8rem 0;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, rgba(255, 107, 53, 0.02) 50%, rgba(255, 255, 255, 0) 70%);
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

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ContactTitle = styled.h2`
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

const ContactSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  font-weight: 400;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  font-family: 'Poppins', sans-serif;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  padding-right: 2rem;
  
  @media (max-width: 920px) {
    padding-right: 0;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2d3748;
  font-family: 'Satoshi', sans-serif;
`;

const InfoText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 2.5rem;
  font-family: 'Poppins', sans-serif;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  font-size: 1.3rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 107, 53, 0.1);
  color: #FF6B35;
  border-radius: 12px;
  margin-right: 1rem;
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

const ContactDetailText = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.2rem;
    font-family: 'Satoshi', sans-serif;
  }
  
  p {
    font-size: 0.95rem;
    color: #4a5568;
    font-family: 'Poppins', sans-serif;
  }
`;

const ContactForm = styled.form`
  background-color: #fff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: -30px;
    right: -30px;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, rgba(255, 107, 53, 0.02) 50%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    z-index: 0;
    border: none;
    filter: blur(8px);
  }
  
  @media (max-width: 640px) {
    padding: 2rem;
  }
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    font-size: 0.95rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #2d3748;
    font-family: 'Poppins', sans-serif;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #FF6B35;
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: #f8f9fa;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #FF6B35;
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`;

const SubmitButton = styled.button`
  background-color: #FF6B35;
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
  margin-top: 0.5rem;
  
  &:hover {
    background-color: #e85a25;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 107, 53, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
  }
  
  &:disabled {
    background-color: #cbd5e0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
  }
  
  &:hover::after {
    left: 100%;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: rgba(72, 187, 120, 0.1);
  color: #2f855a;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    width: 20px;
    height: 20px;
  }
`;

const ErrorMessage = styled(motion.div)`
  background-color: rgba(245, 101, 101, 0.1);
  color: #c53030;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    width: 20px;
    height: 20px;
  }
`;

const FormCheckbox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  input {
    margin-top: 0.3rem;
    margin-right: 0.75rem;
  }
  
  label {
    font-size: 0.9rem;
    color: #4a5568;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
    
    a {
      color: #FF6B35;
      text-decoration: none;
      border-bottom: 1px solid;
      
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
      setError("Please complete all required fields");
      return;
    }
    
    try {
      console.log("Submitting form with data:", { ...formData });
      setIsSubmitting(true);
      
      console.log("Supabase URL:", process.env.REACT_APP_SUPABASE_URL || "Not defined");
      console.log("Supabase key available:", !!process.env.REACT_APP_SUPABASE_ANON_KEY);
      
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          { ...formData }
        ]);

      console.log("Supabase response:", { data, error });
      
      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message || "Error submitting form");
      }

      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false
      });
      
      // Show success message
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err.message || "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactTitle>Get In <span>Touch</span></ContactTitle>
          <ContactSubtitle>
            Ready to grow your real estate or interior design business with consistent clients? Let's discuss your specific needs and create a tailored marketing strategy.
          </ContactSubtitle>
        </motion.div>
        
        <ContactGrid>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactInfo>
              <InfoTitle>Let's Build Your Market Strategy</InfoTitle>
              <InfoText>
                Our team is ready to help you create a customized marketing strategy that will attract consistent, high-quality clients to your real estate or interior design business.
              </InfoText>
              
              <ContactDetail>
                <ContactIcon>📧</ContactIcon>
                <ContactDetailText>
                  <h4>Email Us</h4>
                  <p><a href="mailto:contact@hiqualsolutions.com">contact@hiqualsolutions.com</a></p>
                </ContactDetailText>
              </ContactDetail>
              
              <div style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "#2d3748", fontFamily: "'Satoshi', sans-serif" }}>Canada Office</h4>
              </div>
              
              <ContactDetail>
                <ContactIcon>📞</ContactIcon>
                <ContactDetailText>
                  <h4>Call Us (Canada)</h4>
                  <p><a href="tel:+19808423695">+1 980-842-3695</a></p>
                </ContactDetailText>
              </ContactDetail>
              
              <ContactDetail>
                <ContactIcon style={{ alignSelf: 'flex-start', marginTop: '5px' }}>📍</ContactIcon>
                <ContactDetailText>
                  <h4>Visit Us (Canada)</h4>
                  <p>4143 SETON DRIVE SE, CALGARY, ALBERTA, CANADA. T3M 3A6</p>
                </ContactDetailText>
              </ContactDetail>
              
              <div style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "#2d3748", fontFamily: "'Satoshi', sans-serif" }}>India Office</h4>
              </div>
              
              <ContactDetail>
                <ContactIcon>📞</ContactIcon>
                <ContactDetailText>
                  <h4>Call Us (India)</h4>
                  <p><a href="tel:+919867975473">+91 986-797-5473</a></p>
                  <p><a href="tel:+917738816466">+91 773-881-6466</a></p>
                </ContactDetailText>
              </ContactDetail>
              
              <ContactDetail>
                <ContactIcon style={{ alignSelf: 'flex-start', marginTop: '5px' }}>📍</ContactIcon>
                <ContactDetailText>
                  <h4>Visit Us (India)</h4>
                  <p>L-205, Old Nasheman Colony, Mumbra, Thane-400612, Maharashtra, India</p>
                </ContactDetailText>
              </ContactDetail>
              
              <ContactDetail style={{ marginTop: "1rem" }}>
                <ContactIcon>
                  <img src={require('../assets/whatsapp.svg').default} alt="WhatsApp" style={{ width: "24px", height: "24px" }} />
                </ContactIcon>
                <ContactDetailText>
                  <h4>WhatsApp</h4>
                  <p>
                    <a 
                      href="https://wa.me/917738816466" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        color: "#25D366", 
                        fontWeight: "500",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px"
                      }}
                    >
                      +91 773-881-6466
                      <span style={{ fontSize: "0.8rem" }}>→</span>
                    </a>
                  </p>
                </ContactDetailText>
              </ContactDetail>
            </ContactInfo>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm onSubmit={handleSubmit}>
              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you! Your message has been sent successfully.
                </SuccessMessage>
              )}
              
              {error && (
                <ErrorMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {error}
                </ErrorMessage>
              )}
              
              <InputRow>
                <InputGroup>
                  <label htmlFor="name">Full Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Smith" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
                
                <InputGroup>
                  <label htmlFor="email">Email Address</label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </InputRow>
              
              <InputGroup>
                <label htmlFor="phone">Phone Number</label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="+1 (555) 123-4567" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </InputGroup>
              
              <InputGroup>
                <label htmlFor="message">Your Message</label>
                <TextArea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your business and your marketing goals..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              
              <FormCheckbox>
                <input 
                  type="checkbox" 
                  id="consent" 
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="consent">
                  I agree that my submitted data is being collected and stored. For details, please see our <a href="#">Privacy Policy</a>.
                </label>
              </FormCheckbox>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 