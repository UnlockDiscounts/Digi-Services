
import React, { useState } from 'react';
import Navbar from '../Components/NavBar';
import Footer from "../Components/Footer"
import { motion } from "motion/react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    company: '', 
    email: '', 
    contact: '', 
    message: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Full viewport gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#F8C7F3] via-[#917BFF] to-[#0737FF] z-0" />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Navbar - DEAD CENTER */}
        <div className="w-full flex justify-center items-center py-4 sm:py-6 lg:py-6 px-4 lg:px-15">
          <Navbar />
        </div>

        {/* Title - Responsive positioning */}
        <motion.p 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-['Poppins'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-white text-center mb-8 sm:mb-12 lg:mb-[54px] px-4 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[194px] w-full lg:w-[min(1377px,95%)]"
        >
          Get In Touch With Us
        </motion.p>

        {/* Card - DEAD CENTER */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-50 pb-8 sm:pb-12 lg:pb-12 mt-16 sm:mt-20 md:mt-[200px] lg:mt-[200px]">
          <div className="w-full max-w-[95vw] lg:max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row rounded-none shadow-2xl overflow-hidden mx-auto">
              
              {/* Left purple card */}
              <div className="lg:w-1/2 bg-[#8A72EB] text-white px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-['Poppins'] font-bold mb-4 sm:mb-6 lg:mb-6 leading-tight">
                  Digitizing Your Business Growth
                </h2>
                <div className="space-y-3 sm:space-y-4 lg:space-y-4 text-xs sm:text-sm lg:text-base">
                  <p className="font-semibold font-['Poppins']">How It's Works:</p>
                  <p><span className="font-semibold font-['Poppins']">Step 1:</span> Select the service you need.</p>
                  <p><span className="font-semibold font-['Poppins']">Step 2:</span> Share your details via WhatsApp or Email.</p>
                  <p><span className="font-semibold font-['Poppins']">Step 3:</span> Your service will be delivered within 2–3 days.</p>
                  <p className="pt-3 sm:pt-4 lg:pt-4">
                    Reach us at :{' '}
                    <a href="mailto:info@unlockdigiservices.com" className="underline !text-white/100 font-semibold">
                      info@unlockdigiservices.com
                    </a>
                  </p>
                  <p className="pt-3 sm:pt-4 font-['Poppins']">
                    Thank you for choosing UnlockDigiServices!
                    <br className="sm:hidden" />
                    <span className="hidden sm:inline"> </span>
                    We look forward to connecting with you.
                  </p>
                </div>
              </div>

              {/* Right white form card */}
              <div className="lg:w-1/2 bg-white px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 flex flex-col justify-center">
                <div className="mb-6 sm:mb-8 text-center">
                  <p className="font-['Poppins'] font-medium text-[16px] sm:text-[18px] lg:text-[19.78px] text-[#000000] tracking-wide">
                    LET'S GROW YOUR BRAND ONLINE
                  </p>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-['Poppins'] font-medium mt-2 text-[#000000]">
                    Start A Conversation
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-none lg:rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8A72EB] lg:first:rounded-none"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8A72EB]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8A72EB]"
                    required
                  />
                  <input
                    type="tel"
                    name="contact"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8A72EB]"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#8A72EB]"
                    required
                  />
                  
                  <button
                    type="submit"
                    className="w-full !bg-[#6364FF] !text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#7a64d6] transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;





