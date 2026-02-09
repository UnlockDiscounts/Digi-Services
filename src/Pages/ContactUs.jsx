
import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import { motion } from "motion/react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ 
    fullname: '', 
    companyName: '', 
    email: '', 
    contactNumber: '', 
    message: '' 
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  setLoading(true);
  setStatus('');

  try {
    const response = await fetch('https://digiservices-backend.onrender.com/api/v1/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 201) {
      setStatus('Message sent successfully! We\'ll contact you soon.');
      setFormData({ fullname: '', companyName: '', email: '', contactNumber: '', message: '' });
    } else if (response.status === 400) {
      setStatus('Please fill all required fields.');
    } else {
      setStatus('Server error. Please try again.');
    }
  } catch (error) {
    setStatus('Network error. Please check your connection.');
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      {/* Full viewport gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#F8C7F3]  h-screen overflow-hidden via-[#917BFF] to-[#0737FF] z-0" />
      
      <div className="relative z-10 min-h-screen overflow-hidden flex 1 flex-col">
        
        {/* Navbar - DEAD CENTER */}
        <div className="w-full flex justify-center items-center py-4 sm:py-6 lg:py-6 px-4 lg:px-15">
          {/* <Navbar /> */}
        </div>

        
<motion.p 
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-[48px] text-white text-center 
             px-4 lg:px-0 w-full lg:w-[min(1377px,95%)] mx-auto
              pt-24 pb-12 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-20 
             lg:max-w-[1377px] lg:mx-auto"
>
  Get In Touch With Us
</motion.p>


        {/* Card - DEAD CENTER */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-50 pb-8 sm:pb-12 lg:pb-12 mt-10 sm:mt-10 md:mt-[60px] overflow-hidden lg:mt-[80px]">
          <div className="w-full max-w-[95vw] lg:max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row rounded-none shadow-2xl overflow-hidden mx-auto">
              
              {/* Left purple card */}
              <div className="lg:w-1/2 bg-[#8A72EB] text-white px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-8 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 lg:mb-6 leading-tight">
                  Digitizing Your Business Growth
                </h2>
                <div className="space-y-3 sm:space-y-4 lg:space-y-4 text-xs sm:text-sm lg:text-base">
                  <p className="font-semibold">How It's Works:</p>
                  <p><span className="font-semibold ">Step 1:</span> Select the service you need.</p>
                  <p><span className="font-semibold ">Step 2:</span> Share your details via WhatsApp or Email.</p>
                  <p><span className="font-semibold ]">Step 3:</span> Your service will be delivered within 2–3 days.</p>
                  <p className="pt-3 sm:pt-4 lg:pt-4">
                    Reach us at :{' '}
                    <a href="mailto:info@unlockdigiservices.com" className="underline !text-white/100 font-semibold">
                      info@unlockdigiservices.com
                    </a>
                  </p>
                  <p className="pt-3 sm:pt-4 ">
                    Thank you for choosing UnlockDigiServices!
                    <br className="sm:hidden" />
                    <span className="hidden sm:inline"> </span>
                    We look forward to connecting with you.
                  </p>
                </div>
              </div>

              {/* Right white form card */}
              <div className="lg:w-1/2 bg-white px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-8 flex flex-col justify-center">
                <div className="mb-6 sm:mb-8 text-center">
                  <p className=" font-medium text-[16px] sm:text-[18px] lg:text-[19.78px] text-[#000000] tracking-wide">
                    LET'S GROW YOUR BRAND ONLINE
                  </p>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium mt-2 text-[#000000]">
                    Start A Conversation
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-none lg:rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8A72EB] lg:first:rounded-none"
                    required
                  />
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
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
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
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
                  disabled={loading}
                  className={`w-full !bg-[#6364FF] !text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#7a64d6] transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                  {loading ? 'Sending...' : 'Submit'}
                  </button>

                  {status && (
                  <p className={`text-center py-3 px-4 rounded-lg text-sm font-medium mt-2 ${
                   status.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                 {status}
                 </p>
                 )}

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





