import React, { useState } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { fadeIn } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const Contact = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e : React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_vpp7lf5', 
      'template_47qp8q8', 
      {
      from_name: form.name,
      to_name: 'Eric',
      from_email: form.email,
      to_email: 'eric.mh.wang@gmail.com',
      message: form.message
      },
      '_aKw-okcrkKWEz5gp')
      .then(() => {
        setLoading(false);
        alert('Thank you for reaching out to me, I will get back to you soon!');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Email could not be sent. Something went wrong :(');
      })
      
  };
  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setForm({ ...form, [name]: value });
  };

  return (
    <motion.div variants={fadeIn('down', 'tween', 0.2, 1)} className='rounded-2xl'>
      <div className='flex items-center'>
        <div className='w-[8px] h-[8px] shrink-0 bg-blue-600 rounded-full'/>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'/>
        <h2 className='text-[32px] font-medium'>Contact</h2>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'/>
        <div className="w-[8px] h-[8px] shrink-0 bg-blue-600 rounded-full"/>
      </div>
      <div className='flex flex-col mt-10 bg-[#1a1440] rounded-xl max-w-5xl mx-auto px-10'>
        <p className='text-white text-[30px] font-bold pt-10'>Your Information.</p>
        <p className='text-gray-300 text-[15px] py-5'>
          Want to connect or chat? Enter your details below and I will get back to you as soon as possible!
          </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8 my-5'
        >
          <label className='flex flex-col'>
            <span className='text-white font-bold mb-4'>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your name?"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aa6c3] text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-bold mb-4'>Your Email</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your Email?"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aa6c3] text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-bold mb-4'>Your Message</span>
            <textarea 
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Hi Eric, I'd love to talk to you about..."
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aa6c3] text-white rounded-lg outlined-none border-none font-medium'/>
          </label>

          <button
            type='submit'
            className='bg-[#4330ad] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-[#050816] rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Contact, 'contact')