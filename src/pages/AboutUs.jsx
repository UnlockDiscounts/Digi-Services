import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import svgPaths from "../assets/svgPaths.js";
import React from 'react';

import ArticlesHeroCurve1 from "../components/svg/ArticlesHeroCurve1";
import ArticlesHeroCurve2 from "../components/svg/ArticlesHeroCurve2";


// Assets
import imgchart from "../assets/chart.svg";
import imggraph from "../assets/graph.svg";
import imgHighfi from "../assets/Highfi.svg";
import imginterview from "../assets/interview.jpg";
import imgreading from "../assets/reading.svg";
import imgmanstanding from "../assets/manstanding.svg";
import imgshooting from "../assets/shooting.svg";
import imgcoffee from "../assets/coffee.svg";
import imgguidance from "../assets/guidance.svg";
import imgImage52 from "../assets/mobile.svg";
import imgImage53 from "../assets/laptop.svg";
import imgImage54 from "../assets/writing.svg";
import imgImage55 from "../assets/youtuber.svg";
import imgImage51 from "../assets/meeting.svg";
import imgpresent from "../assets/presentation.svg";
import imgBoy from "../assets/Boy.jpg";
import imggirl from "../assets/girl.png";
import imgman from "../assets/man.png";

import AnimatedSection from '../components/AnimatedSection.jsx'; 

const topLeftImages = [imggraph, imgpresent, imgreading];
const topRightImages = [imgImage55, imgmanstanding, imgshooting];
const bottomLeftImages = [imgHighfi, imgguidance, imgcoffee];
const bottomRightImages = [imgImage51, imgchart, imgImage54];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AboutUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [servicesScroll, setServicesScroll] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredValueCard, setHoveredValueCard] = useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

//const [testimonials, setTestimonials] = useState([]);
//const [loading, setLoading] = useState(true);


// useEffect(() => {
//     fetch('https://digiservices-backend-6hc3.onrender.com/api/v1/testimonials')
//       .then(res => res.json())
//       .then(setTestimonials);
//   }, []);
  


  const [testimonials, setTestimonials] = useState([
    {
      text: "Our team consists of certified tax experts, experienced web developers, and skilled resume writers who stay updated with the latest industry trends and regulations.",
      name: "Rahul Mehta",
      role: "Owner, F2 Studios",
      image: imgBoy,
    },
    {
      text: "Our team consists of certified tax experts, experienced web developers, and skilled resume writers who stay updated with the latest industry trends and regulations.",
      name: "Riya Sharma",
      role: "Student",
      image: imggirl,
    },
    {
      text: "Our team consists of certified tax experts, experienced web developers, and skilled resume writers who stay updated with the latest industry trends and regulations.",
      name: "Dinesh Kumar",
      role: "CEO, XYZ",
      image: imgman,
    },
  ]);

  const services = [
    { title: "GST Filing", description: "Accurate and timely GST return filing services...", image: imgImage51, color: "#6364ff" },
    { title: "Social Media Marketing", description: "Expert income tax return preparation...", image: imgImage52, color: "#6364ff" },
    { title: "Website Development", description: "Strategic SMM services to enhance presence...", image: imgImage53, color: "#6364ff" },
    { title: "ITR Filing", description: "Custom, responsive websites designed to convert...", image: imgImage54, color: "#6364ff" },
    { title: "Resume Building", description: "Professionally crafted resumes that highlight...", image: imgImage51, color: "#6364ff" },
  ];

  const scrollServices = (direction) => {
    if (direction === "right") {
      setServicesScroll((prev) => Math.min(prev + 1, services.length - 1));
    } else {
      setServicesScroll((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 4);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleAnimationComplete = () => {
    if (currentIndex === 3) setCurrentIndex(0);
  };

  const transitionProps = { duration: 0.6, ease: [0.32, 0.72, 0, 1] };

  return (
    <div className="bg-white relative min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[350px] sm:h-[420px] md:h-[510px] w-full overflow-hidden"
        style={{ backgroundImage: "linear-gradient(83.9195deg, rgb(254, 203, 242) 1.8178%, rgb(145, 123, 255) 47.22%, rgb(7, 55, 255) 92.159%)" }}
      >
        
    {/* <div className="w-full flex justify-center items-center py-4 sm:py-6 lg:py-6 px-4 lg:px-15">
          <Navbar />
        </div> */}

       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <ArticlesHeroCurve1 className="absolute rotate-[-20deg] md:rotate-0 -top-10 left-[-60px] md:bottom-auto md:top-0 md:-left-2.5 w-[150%] md:w-auto h-auto opacity-60 md:opacity-100" />
          <ArticlesHeroCurve2 className="absolute top-[90px] md:top-[100px] right-[-50px] w-full md:w-auto h-auto opacity-60 md:opacity-100" />
        </div>


        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute font-bold text-[32px] sm:text-[40px] md:text-[48px] text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
        >
          ABOUT US
        </motion.h1>
      </motion.div>

      {/* Who We Are Section */}
      <AnimatedSection className="bg-[rgba(172,173,188,0.2)] flex flex-col gap-[24px] sm:gap-[32px] items-center px-4 sm:px-6 md:px-[64px] py-[24px] sm:py-[32px] w-full">
        <h2 className="font-medium text-[32px] sm:text-[40px] md:text-[48px] text-black text-center w-full">
          Who We Are
        </h2>
        <div className="font-['Poppins'] text-[16px] sm:text-[20px] md:text-[23px] text-black w-full max-w-[1312px] mx-auto">
          <p className="mb-4 text-center md:text-left">At Unlock Digi Services, we are a passionate team of professionals dedicated to simplifying digital and financial services for individuals, freelancers, and small businesses across India.</p>
          <p className="mb-4 text-center md:text-left">Founded with the belief that quality services should be accessible and affordable to everyone, we bridge the gap between complex government processes and modern digital needs. Our team includes certified tax consultants, creative digital marketers, skilled developers, and expert resume writers.</p>
          <p>Whether you're a startup looking to build a professional brand, a job seeker preparing to impress recruiters, or a business owner managing taxes, we're here to make it easy, efficient, and stress-free.</p>
        </div>
      </AnimatedSection>

      {/* Animated Image Gallery */}
      <div className="w-full py-12 px-4">
        <div className="relative mx-auto overflow-hidden rounded-3xl  bg-transparent flex-shrink-0 w-full max-w-[1130px] aspect-[1130/981]">
          
          {/* Top-left */}
          <div className="absolute left-0 top-0 overflow-hidden w-[54%] h-[41%]">
            <motion.div
              className="flex"
              animate={{ x: -(currentIndex * 608) }}
              transition={currentIndex === 0 ? { duration: 0 } : transitionProps}
              onAnimationComplete={handleAnimationComplete}
            >
              {[...topLeftImages, topLeftImages[0]].map((imgSrc, i) => (
                <div key={i} className="flex-shrink-0 w-[608px] h-full p-4">
                  <img src={imgSrc} alt="" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-all" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Top-right */}
          <div className="absolute right-0 top-0 overflow-hidden w-[43%] h-[60%]">
            <motion.div
              className="flex flex-col"
              animate={{ y: -(currentIndex * 587) }}
              transition={currentIndex === 0 ? { duration: 0 } : transitionProps}
            >
              {[...topRightImages, topRightImages[0]].map((imgSrc, i) => (
                <div key={i} className="flex-shrink-0 w-[490px] h-[587px] p-4">
                  <img src={imgSrc} alt="" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-all" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom-left */}
          <div className="absolute left-0 bottom-0 overflow-hidden w-[54%] h-[57%]">
            <motion.div
              className="flex flex-col"
              animate={{ y: -(currentIndex * 558) }}
              transition={currentIndex === 0 ? { duration: 0 } : transitionProps}
            >
              {[...bottomLeftImages, bottomLeftImages[0]].map((imgSrc, i) => (
                <div key={i} className="flex-shrink-0 w-[608px] h-[558px] p-4">
                  <img src={imgSrc} alt="" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-all" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom-right */}
          <div className="absolute right-0 bottom-0 overflow-hidden w-[43%] h-[40%]">
            <motion.div
              className="flex"
              animate={{ x: -(currentIndex * 608) }}
              transition={currentIndex === 0 ? { duration: 0 } : transitionProps}
            >
              {[...bottomRightImages, bottomRightImages[0]].map((imgSrc, i) => (
                <div key={i} className="flex-shrink-0 w-[608px] h-full p-4">
                  <img src={imgSrc} alt="" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-all" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Center divider */}
          <div className="absolute h-full bg-white z-10 opacity-80 " style={{ left: '53.8%' }}></div>
        </div>
      </div>



      {/* Vision & Mission */}
      <AnimatedSection className="flex flex-col gap-[32px] sm:gap-[48px] items-center px-4 sm:px-6 md:px-[64px] py-[24px] sm:py-[32px] w-full max-w-[1440px] mx-auto mt-8 sm:mt-12">
        <h2 className="font-bold text-[28px] sm:text-[36px] md:text-[48px] text-black text-center w-full px-4">
          Our <span className="text-[#6364ff]">Vision</span> & <span className="text-[#6364ff]">Mission</span>
        </h2>
        <div className="text-[16px] sm:text-[20px] md:text-[24px] text-black w-full text-center md:text-left px-4">
          <p className="mb-4">At Unlock Digi Services, our vision is to be India's most trusted and accessible partner for digital and compliance services...</p>
          <p className="mb-4">Our mission is to simplify complex processes like and business compliance by offering expert-led solutions...</p>
          <p>Driven by a client-first approach, we prioritize accuracy, reliability, and fast delivery in everything we do.</p>
        </div>

        {/* Values Cards */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col lg:flex-row gap-[24px] sm:gap-[32px] md:gap-[48px] items-center justify-center w-full px-4"
        >
          {[
            { icon: svgPaths.p32972e90, title: "Result- Driven", description: "We focus on delivering measurable outcomes that drive your business forward." },
            { icon: svgPaths.pbcf7080, title: "Client-Centric", description: "Your success is our priority. We listen to your needs and understand your goals." },
            { icon: svgPaths.p3268a800, title: "Innovation", description: "We embrace cutting-edge technologies and creative approaches to keep you ahead." },
          ].map((value, idx) => (
            <motion.div
              key={idx} variants={fadeInUp} onHoverStart={() => setHoveredValueCard(idx)} onHoverEnd={() => setHoveredValueCard(null)}
              className="bg-white flex flex-col items-center px-[12px] sm:px-[16px] py-[60px] sm:py-[80px] md:py-[99px] rounded-[16px] w-full max-w-[342px] relative overflow-hidden cursor-pointer shadow-lg"
            >
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: hoveredValueCard === idx ? 1 : 0 }} transition={{ duration: 0.3 }}
                className="absolute inset-0" style={{ backgroundImage: "linear-gradient(135deg, rgba(99, 100, 255, 0.9) 0%, rgba(145, 123, 255, 0.9) 50%, rgba(254, 203, 242, 0.9) 100%)" }} />
              <div className="relative z-10 flex flex-col gap-[4px] items-center justify-center w-full">
                <motion.div animate={{ scale: hoveredValueCard === idx ? 0.9 : 1, y: hoveredValueCard === idx ? -30 : 0 }} className="size-[64px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 64 64">
                    <path d={value.icon} fill={hoveredValueCard === idx ? "white" : "#6364FF"} />
                  </svg>
                </motion.div>
                <motion.p animate={{ color: hoveredValueCard === idx ? "#ffffff" : "#6364ff", y: hoveredValueCard === idx ? -30 : 0 }} className="font-['Poppins'] font-semibold text-[28px] text-center mt-2">{value.title}</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: hoveredValueCard === idx ? 1 : 0 }} className="font-['Poppins'] text-[18px] text-white text-center mt-4 px-4">{value.description}</motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Why Clients Choose Us */}
      <AnimatedSection className="bg-[rgba(172,173,188,0.2)] flex flex-col gap-[24px] sm:gap-[32px] items-center px-4 sm:px-6 md:px-[64px] py-[40px] sm:py-[50px] md:py-[60px] w-full mt-8 sm:mt-12">
        <div className="flex flex-col gap-[12px] sm:gap-[16px] items-center text-center w-full px-4">
          <h2 className="font-medium text-[28px] sm:text-[36px] md:text-[48px] text-black">Why Clients Choose Us</h2>
          <p className="text-[16px] sm:text-[20px] md:text-[24px] text-black max-w-[900px]">We combine expertise with personalized service to deliver exceptional results.</p>
        </div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-[1152px] px-4"
        >
          {[
            { icon: svgPaths.p3feda500, title: "Expert Professionals", description: "Our team consists of certified tax experts..." },
            { icon: svgPaths.p148ba500, title: "Cost Efficient", description: "We provide affordable services without compromising quality..." },
            { icon: svgPaths.pf2e1f80, title: "Timely Delivery", description: "We understand the importance of deadlines..." },
            { icon: svgPaths.p30089180, title: "Data Security", description: "Your data is safe with us. We follow strict protocols..." },
            { icon: svgPaths.p2fb77000, title: "Dedicated Support", description: "Our customer support team is always available..." },
            { icon: svgPaths.p10d352c0, title: "Customized Approach", description: "Every client is unique. We tailor our services..." },
          ].map((feature, idx) => (
            <motion.div
              key={idx} variants={fadeInUp} onHoverStart={() => setHoveredCard(idx)} onHoverEnd={() => setHoveredCard(null)}
              className="bg-white h-[280px] sm:h-[312px] rounded-[16px] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer shadow-sm">
            >
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: hoveredCard === idx ? 1 : 0 }} transition={{ duration: 0.3 }}
                className="absolute inset-0" style={{ backgroundImage: "linear-gradient(135deg, rgba(99, 100, 255, 0.9) 0%, rgba(145, 123, 255, 0.9) 50%, rgba(254, 203, 242, 0.9) 100%)" }} />
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
                <motion.div animate={{ scale: hoveredCard === idx ? 0.9 : 1, y: hoveredCard === idx ? -20 : 0 }} className="size-[79px] mb-6">
                  <svg className="block size-full" fill="none" viewBox="0 0 79 79">
                    <rect fill={hoveredCard === idx ? "white" : "#6364FF"} height="79" rx="39.5" width="79" />
                    <path d={feature.icon} fill={hoveredCard === idx ? "#6364FF" : "white"} />
                  </svg>
                </motion.div>
                <motion.p animate={{ color: hoveredCard === idx ? "#ffffff" : "#000000", y: hoveredCard === idx ? -20 : 0 }} className="font-semibold text-[24px] text-center">{feature.title}</motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: hoveredCard === idx ? 1 : 0, y: hoveredCard === idx ? 0 : 20 }} className="text-[18px] text-white text-center leading-relaxed mt-2">{feature.description}</motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Services Carousel */}
      <AnimatedSection className="bg-white py-12 md:py-24 lg:py-32 w-full max-w-[1440px] mx-auto overflow-hidden relative px-4 md:px-0">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="relative h-[680px] md:h-[920px] w-full md:w-[1440px] flex-shrink-0 px-4 md:px-0">

              <div className="absolute left-0 md:left-[600px] top-[20px] md:top-[100px] w-full md:w-[870px] h-[530px] md:h-[620px] overflow-hidden px-2 md:px-0">
              <motion.div className="flex gap-[65px] absolute" animate={{ x: -servicesScroll * 363 }}>
                {services.map((service, idx) => (
                  <div key={idx} className="bg-white h-[480px] md:h-[550px] rounded-[16px] w-[280px] md:w-[331px] flex-shrink-0 relative overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300 my-2 md:my-4">
                    <div className="flex flex-col h-full pt-6 md:pt-8 px-4 md:px-6 pb-2 md:pb-4">
                      <h3 className="font-bold text-[18px] md:text-[24px] text-center mb-2 md:mb-4 leading-tight" style={{ color: service.color }}>{service.title}</h3>
                      <p className="font-medium text-[13px] md:text-[16px] text-black text-center mb-4 md:mb-8 flex-grow line-clamp-2 md:line-clamp-3">{service.description}</p>
                    </div>
                    <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 h-[240px] md:h-[340px] w-[230px] md:w-[310px] overflow-hidden rounded-lg">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            

       <div className="hidden md:block absolute left-[137px] top-0 h-[920px] w-[440px] lg:w-[500px] rounded-[20px] overflow-hidden">
       <img src={imginterview} className="absolute inset-0 object-cover size-full" alt="Interview" />
       <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(145deg, rgba(254, 203, 242, 0.9), rgba(3, 52, 255, 0.9))" }} />
       <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-white">
       <p className="font-bold text-[40px] text-center mb-8 md:text-[40px] text-2xl sm:text-3xl leading-tight">Our Comprehensive Services</p>
       <p className="text-[24px] text-center md:text-[24px] text-lg sm:text-xl leading-relaxed">We combine expertise with personalized service for all your digital needs.</p>
       </div>
       </div>
        </div>
        </div>

        <motion.button
          onClick={() => scrollServices("left")}
          disabled={servicesScroll === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute left-1/2 top-[700px] md:top-[1020px] z-[30] size-[32px] md:size-[40px] rounded-full border-2 border-gray-800 flex items-center justify-center bg-white transition-all -translate-x-[60px] md:-translate-x-[70px] ${
            servicesScroll === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer shadow-md hover:shadow-lg'
          }`}
          style={{ rotate: '180deg' }}
        >
          <svg width="12" height="18" viewBox="0 0 10 16" fill="none">
            <path d={svgPaths.p9338b00} fill="currentColor" className="text-gray-800" />
          </svg>
        </motion.button>
        <motion.button
          onClick={() => scrollServices("right")}
          disabled={servicesScroll === services.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute left-1/2 top-[700px] md:top-[1020px] z-[30] size-[32px] md:size-[40px] rounded-full border-2 border-gray-800 flex items-center justify-center bg-white transition-all -translate-x-[20px] ${
            servicesScroll === services.length - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer shadow-md hover:shadow-lg'
          }`}
        >
          <svg width="12" height="18" viewBox="0 0 10 16" fill="none">
            <path d={svgPaths.pe4e7700} fill="currentColor" className="text-gray-800" />
          </svg>
        </motion.button>
      </AnimatedSection>


    <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] py-12 sm:py-16 md:py-20 bg-gray-100 flex items-center justify-center p-4">
        <AnimatedSection className="bg-[rgba(172,173,188,0.2)] py-8 sm:py-10 md:py-12 w-full max-w-[1305px] mx-auto overflow-hidden rounded-xl sm:rounded-2xl">
          <h2 className="font-medium text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-black text-center mb-8 sm:mb-10 md:mb-12 px-4 leading-tight">
            Client Testimonials
          </h2>
          <div className="w-full px-4 md:px-0">
            <div className="max-w-[1150px] mx-auto">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonial} 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white flex flex-col md:flex-row gap-8 md:gap-[64px] items-center p-6 md:p-[32px] rounded-[16px] shadow-sm"
                >
                  <div className="w-full md:w-[400px] h-[250px] md:h-[330px] rounded-lg overflow-hidden flex-shrink-0">
                    <img src={testimonials[currentTestimonial].image} className="w-full h-full object-cover" alt={testimonials[currentTestimonial].name} />
                  </div>
                  <div className="flex flex-col gap-4 text-center md:text-left">
                    <p className="text-[18px] md:text-[20px] text-black italic leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div>
                      <p className="font-bold text-[20px] md:text-[24px] text-[#473cf0]">{testimonials[currentTestimonial].name}</p>
                      <p className="text-[14px] md:text-[16px] text-gray-500 uppercase tracking-wide">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'w-8 bg-[#473cf0]' : 'w-2 bg-gray-400'}`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>


      {/* Commitment Section */}
      <AnimatedSection className="flex flex-col gap-8 px-4 sm:px-6 md:px-8 lg:px-[64px] py-8 w-full lg:w-[1440px] mx-auto my-12 sm:my-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full text-center"
        >
          <h2 className="font-medium text-[28px] sm:text-[32px] md:text-[48px] text-black leading-tight">Our Commitment</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[16px] sm:text-[18px] md:text-[24px] text-black leading-relaxed max-w-2xl lg:max-w-none mx-auto px-2"
        >
          At Unlock Digi Services, we are committed to providing accurate, transparent, and affordable solutions that help our clients succeed. We deliver every service with professionalism, confidentiality, and care.
        </motion.p>
      </AnimatedSection>

    </div>
  );
}

export default AboutUs;