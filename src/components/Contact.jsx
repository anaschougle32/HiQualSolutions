import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    
    console.log('Sending email with form data:', form);
    console.log('Using service ID:', 'service_cmiw6jm');
    console.log('Using template ID:', 'template_v5rbyou');
    
    // Make sure that the form field names match the template variables
    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      to_name: 'Admin',
      subject: form.subject,
      message: form.message,
    };
    
    emailjs.send(
      'service_cmiw6jm', 
      'template_v5rbyou',
      templateParams,
      'qweTfqKCLT703h1Ov'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setLoading(false);
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, (error) => {
        console.error('Failed to send email:', error);
        setLoading(false);
        setError(error.text || 'Failed to send message. Please try again.');
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-12 flex flex-col gap-8'
    >
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Name</span>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          required
        />
      </label>
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Email</span>
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          required
        />
      </label>
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Subject</span>
        <input
          type='text'
          name='subject'
          value={form.subject}
          onChange={handleChange}
          placeholder="What's the subject of your message?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          required
        />
      </label>
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Message</span>
        <textarea
          rows='7'
          name='message'
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          required
        />
      </label>

      <button
        type='submit'
        className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
      
      {success && (
        <p className='text-green-500 mt-2'>Thank you. I will get back to you as soon as possible.</p>
      )}
      
      {error && (
        <p className='text-red-500 mt-2'>Error: {error}</p>
      )}
    </form>
  );
};

export default Contact; 