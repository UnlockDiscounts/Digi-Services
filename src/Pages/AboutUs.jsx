
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { ChevronDown } from "lucide-react";
import svgPaths from "../assets/svgPaths.js";
import imgGroup from "../assets/imgGroup.js";
import Navbar from '../Components/NavBar';
import React from 'react';

const topLeftImages = [imggraph,imgpresent,imgreading];
const topRightImages = [imgImage55, imgmanstanding, imgshooting];
const bottomLeftImages = [imgHighfi, imgguidance, imgcoffee];
const bottomRightImages = [imgImage51, imgchart, imgImage54];


import imgchart from "../assets/chart.svg";
import imggraph from "../assets/graph.svg";
import imgHighfi from "../assets/Highfi.svg";
import imginterview from "../assets/interview.jpg";
import imgreading from "../assets/reading.svg";
import imgmanstanding from "../assets/manstanding.jpg";
import imgshooting from "../assets/shooting.svg";
import imgcoffee from "../assets/coffee.svg";
import imgguidance from "../assets/guidance.svg";


import imgImage52 from "../assets/mobile.svg";
import imgImage53 from "../assets/laptop.svg";
import imgImage54 from "../assets/writing.jpg";
import imgImage55 from "../assets/youtuber.svg";
import imgImage51 from "../assets/meeting.jpg";
import imgpresent from "../assets/presentation.jpg";

import AnimatedSection from '../Components/AnimatedSection'; 

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
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

const  AboutUs = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [servicesScroll, setServicesScroll] = useState(0);
  const servicesRef = useRef(null); 
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredValueCard, setHoveredValueCard] = useState(null);

  const testimonials = [
    {
      text: "Our team consists of certified tax experts, experienced web developers, and skilled resume writers who stay updated with the latest industry trends and regulations.",
      name: "Rahul Mehta",
      role: "Owner, F2 Studios",
      //image: imgUnsplash0YhIlxeCuhg,
    },
    {
      text: "Our team consists of certified tax experts, experienced web developers, and skilled resume writers who stay updated with the latest industry trends and regulations.",
      name: "Riya Sharma",
      role: "Student",
      //image: imgUnsplash0YhIlxeCuhg1,
    },
    {
      text: "Our team consists of certified tax experts, experienced web developers, and skilled resume writers who stay updated with the latest industry trends and regulations.",
      name: "Dinesh Kumar",
      role: "CEO, XYZ",
      //image: imgUnsplash0YhIlxeCuhg2,
    },
  ];


  const services = [
    {
      title: "GST Filing",
      description:
        "Accurate and timely GST return filing services to keep your business compliant with tax regulations",
      image: imgImage51,
      color: "#6364ff",
    },
    {
      title: "Social Media Marketing",
      description:
        "Expert income tax return preparation and filing for individuals and businesses",
      image: imgImage52,
      color: "#6364ff",
    },
    {
      title: "Website Development",
      description:
        "Strategic SMM services to enhance your online presence and engage your target audience.",
      image: imgImage53,
      color: "#6364ff",
    },
    {
      title: "ITR Filing",
      description:
        "Custom, responsive websites designed to convert visitors into customers.",
      image: imgImage54,
      color: "#6364ff",
    },
    {
      title: "Resume Building",
      description:
        "Professionally crafted resumes that highlight your skills and get you noticed by employers.",
      image: imginterview,
      color: "#6364ff",
    },
  ];

const scrollServices = (direction) => {
  if (direction === "right") {
    setServicesScroll((prev) => {
      const newIndex = Math.min(prev + 1, services.length - 1);
      return newIndex;
    });
  } else {
    setServicesScroll((prev) => {
      const newIndex = Math.max(prev - 1, 0);
      return newIndex;
    });
  }
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prev) => (prev + 1) % testimonials.length,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);



const [currentIndex, setCurrentIndex] = React.useState(0);

// Cycle index: 2s hold + 0.6s animation = 2.6s interval
React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % 4);
  }, 2600);
  return () => clearInterval(interval);
}, []);

// Resets the index instantly when reaching the end of the 4-image loop
const handleAnimationComplete = () => {
  if (currentIndex === 3) {
    setCurrentIndex(0);
  }
};

const transitionProps = {
  duration: 0.6,
  ease: [0.32, 0.72, 0, 1], // Smooth snappy transition
};


  return (
    <div className="bg-white relative min-h-screen overflow-x-hidden">
      {/* Hero Section with Navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[510px] w-full overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(83.9195deg, rgb(254, 203, 242) 1.8178%, rgb(145, 123, 255) 47.22%, rgb(7, 55, 255) 92.159%)",
        }}
      >

        {/* <Navbar/> */}
      <div className="w-full flex justify-center items-center py-6 px-15">
          <Navbar />
        </div>


        {/* Hero Title */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute font-['Poppins'] font-bold text-[48px] text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          ABOUT US
        </motion.h1>
      </motion.div>

      {/* Who We Are Section */}
      <AnimatedSection className="bg-[rgba(172,173,188,0.2)] flex flex-col gap-[32px] items-center px-[64px] py-[32px] w-full mx-auto">
        <h2 className="font-['Poppins'] font-medium text-[48px] text-black text-center w-full">
          Who We Are
        </h2>
        <div className="font-['Poppins'] text-[20px] text-black w-full">
          <p className="mb-4">
            At Unlock Digi Services, we are a passionate team of
            professionals dedicated to simplifying digital and
            financial services for individuals, freelancers, and
            small businesses across India. We specialize in
            website development, social media management, and
            resume building.
          </p>
          <p className="mb-4">
            Founded with the belief that quality services should
            be accessible and affordable to everyone, we bridge
            the gap between complex government processes and
            modern digital needs. Our team includes certified
            tax consultants, creative digital marketers, skilled
            developers, and expert resume writers—all working
            together to help you stay compliant, stand out, and
            grow online.
          </p>
          <p>
            Whether you're a startup looking to build a
            professional brand, a job seeker preparing to
            impress recruiters, or a business owner managing
            taxes and online presence, we're here to make it
            easy, efficient, and stress-free.
          </p>
        </div>
      </AnimatedSection>


      {/* Animated Image Gallery */}
      


  <div className="relative w-[1130px] h-[981px] mx-auto my-12 overflow-hidden rounded-3xl shadow-2xl bg-gray-50">
    
    {/* TOP‑LEFT (608 x 405.3) – Swipe L→R (Horizontal) */}
    <div 
      className="absolute left-0 top-0 overflow-hidden" 
      style={{ width: 608, height: 405.3 }}
    >
      <motion.div
        className="flex"
        animate={{ x: -(currentIndex * 608) }}
        transition={currentIndex === 0 ? { duration: 0 } : transitionProps}
        onAnimationComplete={handleAnimationComplete}
      >
        {[...topLeftImages, topLeftImages[0]].map((src, i) => (
          <img key={i} src={src} style={{ width: 608, height: 405.3 }} className="object-cover flex-shrink-0" alt="" />
        ))}
      </motion.div>
    </div>

    {/* TOP‑RIGHT (483 x 587) – Swipe T→B (Vertical) */}
    <div 
      className="absolute right-0 top-0 overflow-hidden" 
      style={{ width: 483, height: 587 }}
    >
      <motion.div
        className="flex flex-col"
        animate={{ y: -(currentIndex * 587) }}
        transition={currentIndex === 0 ? { duration: 0 } : transitionProps}
      >
        {[...topRightImages, topRightImages[0]].map((src, i) => (
          <img key={i} src={src} style={{ width: 483, height: 587 }} className="object-cover flex-shrink-0" alt="" />
        ))}
      </motion.div>
    </div>

    {/* BOTTOM‑LEFT (608 x 558) – Swipe T→B (Vertical) */}
    <div 
      className="absolute left-0 bottom-0 overflow-hidden" 
      style={{ width: 608, height: 558 }}
    >
      <motion.div
        className="flex flex-col"
        animate={{ y: -(currentIndex * 558) }}
        transition={currentIndex === 0 ? { duration: 0 } : transitionProps}
      >
        {[...bottomLeftImages, bottomLeftImages[0]].map((src, i) => (
          <img key={i} src={src} style={{ width: 608, height: 558 }} className="object-cover flex-shrink-0" alt="" />
        ))}
      </motion.div>
    </div>

    {/* BOTTOM‑RIGHT (483 x 350.5) – Swipe L→R (Horizontal) */}
    <div 
      className="absolute right-0 bottom-0 overflow-hidden" 
      style={{ width: 483, height: 350.5 }}
    >
      <motion.div
        className="flex"
        animate={{ x: -(currentIndex * 483) }}
        transition={currentIndex === 0 ? { duration: 0 } : transitionProps}
      >
        {[...bottomRightImages, bottomRightImages[0]].map((src, i) => (
          <img key={i} src={src} style={{ width: 483, height: 350.5 }} className="object-cover flex-shrink-0" alt="" />
        ))}
      </motion.div>
    </div>

    {/* The Gap "Strip" (Crosshair) */}
    <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
      {/* Horizontal Strip */}
      <div className="absolute w-full h-[18px] bg-white z-10 opacity-80" style={{ top: '41%' }}></div>
      {/* Vertical Strip */}
      <div className="absolute h-full w-[39px] bg-white z-10 opacity-80" style={{ left: '53.8%' }}></div>
      
      {/* Optional dashed lines inside the strip for that Figma look */}
      <div className="absolute top-[42%] left-0 w-full h-px border-t border-dashed border-blue-400 z-20"></div>
      <div className="absolute left-[55.5%] top-0 h-full w-px border-l border-dashed border-blue-400 z-20"></div>
    </div>
  </div>











      {/* Our Vision & Mission Section */}
      <AnimatedSection className="flex flex-col gap-[48px] items-center px-[64px] py-[32px] w-[1440px] mx-auto mt-12">
        <h2 className="font-['Poppins'] font-bold text-[48px] text-black text-center w-full">
          Our <span className="text-[#6364ff]">Vision</span> &{" "}
          <span className="text-[#6364ff]">Mission</span>
        </h2>
        <div className="font-['Poppins'] text-[20px] text-black w-full">
          <p className="mb-4">
            At Unlock Digi Services, our vision is to be India's
            most trusted and accessible partner for digital and
            compliance services. We believe that every
            individual, freelancer, and small business deserves
            the right tools and guidance to succeed in the
            modern economy. Whether it's managing taxes,
            building a website, or creating a digital identity,
            we aim to empower our clients with professional,
            affordable, and easy-to-access services.
          </p>
          <p className="mb-4">
            Our mission is to simplify complex processes like
            and business compliance by offering expert-led
            solutions that are transparent and time-efficient.
            We also support entrepreneurs and startups by
            designing custom websites and managing their social
            media presence, ensuring they stay competitive in
            the digital market. For job seekers and
            professionals, we provide resume building services
            that enhance their chances of landing interviews and
            advancing their careers.
          </p>
          <p>
            Driven by a client-first approach, we prioritize
            accuracy, reliability, and fast delivery in
            everything we do. We're not just a service
            provider—we're a growth partner. With every project,
            our goal is to unlock your potential, reduce stress,
            and help you move forward with confidence in your
            financial and digital journey.
          </p>
        </div>

        {/* Values Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex gap-[48px] items-center justify-center w-full"
        >
          {[
            {
              icon: svgPaths.p32972e90,
              icon2: svgPaths.p3b5a5500,
              title: "Result- Driven",
              description: "We focus on delivering measurable outcomes that drive your business forward. Every strategy we implement is designed to achieve tangible results and maximize your ROI."
            },
            {
              icon: svgPaths.pbcf7080,
              title: "Client-Centric",
              description: "Your success is our priority. We listen to your needs, understand your goals, and tailor our services to ensure you receive personalized solutions that exceed expectations."
            },
            { 
              icon: svgPaths.p3268a800, 
              title: "Innovation",
              description: "We embrace cutting-edge technologies and creative approaches to keep you ahead of the competition. Innovation is at the heart of everything we do."
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              onHoverStart={() => setHoveredValueCard(idx)}
              onHoverEnd={() => setHoveredValueCard(null)}
              className="bg-white flex flex-col items-center px-[16px] py-[99px] rounded-[16px] w-[342px] relative overflow-hidden cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredValueCard === idx ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-[16px]"
                style={{ 
                  backgroundImage: "linear-gradient(135deg, rgba(99, 100, 255, 0.9) 0%, rgba(145, 123, 255, 0.9) 50%, rgba(254, 203, 242, 0.9) 100%)" 
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col gap-[4px] items-center justify-center w-full">
                <motion.div 
                  animate={{ 
                    scale: hoveredValueCard === idx ? 0.9 : 1,
                    y: hoveredValueCard === idx ? -30 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="size-[64px]"
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 64 64"
                  >
                    {idx === 0 ? (
                      <>
                        <path
                          d={value.icon}
                          fill={hoveredValueCard === idx ? "white" : "#6364FF"}
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                        <path
                          d={value.icon2}
                          fill={hoveredValueCard === idx ? "white" : "#6364FF"}
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </>
                    ) : idx === 1 ? (
                      <path
                        d={value.icon}
                        stroke={hoveredValueCard === idx ? "white" : "#6364FF"}
                        strokeWidth="5.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ) : (
                      <path 
                        d={value.icon} 
                        fill={hoveredValueCard === idx ? "white" : "#6364FF"} 
                      />
                    )}
                  </svg>
                </motion.div>
                
                <motion.p 
                  animate={{
                    color: hoveredValueCard === idx ? "#ffffff" : "#6364ff",
                    y: hoveredValueCard === idx ? -30 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-['Poppins'] font-semibold text-[28px] text-center mt-2"
                >
                  {value.title}
                </motion.p>
                
                {/* Description that appears on hover */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredValueCard === idx ? 1 : 0,
                    y: hoveredValueCard === idx ? -20 : 20
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="font-['Poppins'] text-[18px] text-white text-center leading-relaxed mt-4 px-4"
                >
                  {value.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Why Clients Choose Us Section */}
      <AnimatedSection className="bg-[rgba(172,173,188,0.2)] flex flex-col gap-[32px] items-center px-[64px] py-[32px] rounded-[16px] w-[1312px] mx-auto mt-12">
        <div className="flex flex-col gap-[16px] items-center text-center w-full">
          <h2 className="font-['Poppins'] font-medium text-[48px] text-black">
            Why Clients Choose Us
          </h2>
          <p className="font-['Poppins'] text-[20px] text-black w-[900px]">
            At UnlockDigiServices, we combine expertise with
            personalized service to deliver exceptional results
            for all your digital needs.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 gap-8 w-[1152px]"
        >
          {[
            {
              icon: svgPaths.p3feda500,
              title: "Expert Professionals",
              description:
                "Our team consists of certified tax experts, experienced web developers, and skilled resume writers who stay updated with the latest industry trends and regulations.",
            },
            {
              icon: svgPaths.p148ba500,
              title: "Cost Efficient Solutions",
              description:
                "We provide affordable services without compromising on quality, ensuring you get the best value for your investment in digital and compliance solutions.",
            },
            {
              icon: svgPaths.pf2e1f80,
              title: "Timely Delivery",
              description:
                "We understand the importance of deadlines and ensure all projects are completed on time with precision and attention to detail.",
            },
            {
              icon: svgPaths.p30089180,
              title: "Data Security",
              description:
                "Your data is safe with us. We follow strict security protocols and maintain complete confidentiality of all client information.",
            },
            {
              icon: svgPaths.p2fb77000,
              title: "Dedicated Support",
              description:
                "Our customer support team is always available to assist you, answer queries, and ensure a smooth experience throughout your journey with us.",
            },
            {
              icon: svgPaths.p10d352c0,
              title: "Customized Approach",
              description:
                "Every client is unique. We tailor our services to meet your specific needs and deliver personalized solutions that drive results.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white h-[312px] rounded-[16px] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredCard === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-[16px]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(99, 100, 255, 0.9) 0%, rgba(145, 123, 255, 0.9) 50%, rgba(254, 203, 242, 0.9) 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center px-8 h-full">
                <motion.div
                  animate={{
                    scale: hoveredCard === idx ? 0.9 : 1,
                    y: hoveredCard === idx ? -20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="size-[79px] mb-6"
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 79 79"
                  >
                    <rect
                      fill={
                        hoveredCard === idx
                          ? "white"
                          : "#6364FF"
                      }
                      height="79"
                      rx="39.5"
                      width="79"
                    />
                    <path
                      d={feature.icon}
                      fill={
                        hoveredCard === idx
                          ? "#6364FF"
                          : "white"
                      }
                    />
                  </svg>
                </motion.div>

                <motion.p
                  animate={{
                    color:
                      hoveredCard === idx
                        ? "#ffffff"
                        : "#000000",
                    y: hoveredCard === idx ? -20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-['Poppins'] font-semibold text-[24px] text-center mb-4"
                >
                  {feature.title}
                </motion.p>

                {/* Description that appears on hover */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredCard === idx ? 1 : 0,
                    y: hoveredCard === idx ? 0 : 20,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="font-['Poppins'] text-[18px] text-white text-center leading-relaxed"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>






{/* Our Comprehensive Services Carousel */}
<AnimatedSection className="bg-white h-[901px] w-[1440px] mx-auto overflow-hidden mt-12 relative">
  <div className="absolute left-[137px] top-[57px] h-[749px] w-full overflow-hidden">
    {/* Services carousel container - UNCHANGED */}
    <div className="absolute left-[525px] top-[139px] w-[870px] h-[471px] overflow-hidden">
      <motion.div
        className="flex gap-[31px] absolute"
        animate={{
          x: -servicesScroll * 363
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-white h-[471px] rounded-[8px] w-[331px] flex-shrink-0 relative overflow-hidden shadow-lg"
          >
            <h3
              className="font-['Poppins'] font-bold text-[26.629px] text-center mt-[18px] px-4"
              style={{ color: service.color }}
            >
              {service.title}
            </h3>
            <p className="font-['Poppins'] font-medium text-[18px] text-black text-center mt-4 px-4">
              {service.description}
            </p>
            <div className="absolute bottom-0 left-[36px] h-[297.912px] w-[258.8px] rounded-t-[8px] overflow-hidden">
              <img
                alt={service.title}
                className="w-full h-full object-cover rounded-t-[8px]"
                src={service.image}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Left gradient card - UNCHANGED */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="absolute left-0 top-0 h-[749px] w-[525px] rounded-[16px] overflow-hidden z-10"
    >
      <img
        alt=""
        className="absolute inset-0 object-cover size-full rounded-[16px]"
        src={imginterview}
      />
      <div
        className="absolute inset-0 rounded-[16px]"
        style={{
          backgroundImage:
            "linear-gradient(145.443deg, rgba(254, 203, 242, 0.9) 0.28315%, rgba(151, 126, 255, 0.9) 50%, rgba(3, 52, 255, 0.9) 99.717%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-12">
        <p className="font-['Poppins'] font-semibold text-[40px] text-center text-white mb-6">
          Our Comprehensive Services
        </p>
        <p className="font-['Poppins'] text-[24px] text-center text-white">
          At UnlockDigiServices, we combine expertise with
          personalized service to deliver exceptional
          results for all your digital needs.
        </p>
      </div>
    </motion.div>
  </div>

  
{/* Navigation arrows - CENTERED BELOW CARDS */}
<motion.button
  onClick={() => scrollServices("left")}
  disabled={servicesScroll === 0}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className={`absolute left-1/2 top-[850px] z-[30] size-[30px] rounded-full border border-black flex items-center justify-center bg-white transition-all -translate-x-[90px] ${
    servicesScroll === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer shadow-lg'
    
  }`}
  style={{ rotate: '180deg'}}
>
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
    <path d={svgPaths.p9338b00} fill="black" />
  </svg>
</motion.button>
<motion.button
  onClick={() => scrollServices("right")}
  disabled={servicesScroll === services.length - 1}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className={`absolute left-1/2 top-[850px] z-[30] size-[30px] rounded-full border border-black flex items-center justify-center bg-white transition-all -translate-x-[30px] ${
    servicesScroll === services.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer shadow-lg'
  }`}
>
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
    <path d={svgPaths.pe4e7700} fill="black" />
  </svg>
</motion.button>
</AnimatedSection>



      {/* Client Testimonials */}
      <AnimatedSection className="bg-[rgba(172,173,188,0.2)] flex flex-col gap-[48px] items-center px-[64px] py-[32px] rounded-[16px] w-[1305px] mx-auto my-24">
        <h2 className="font-['Poppins'] font-medium text-[48px] text-black text-center">
          Client Testimonials
        </h2>

        <div className="relative w-[1150px] overflow-hidden">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white flex gap-[64px] h-[398.661px] items-center justify-center p-[32px] rounded-[16px] w-[1150px]"
          >
            <div className="flex-1 relative rounded-[8px] overflow-hidden h-full">
              <img
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover rounded-[8px]"
                src={testimonials[currentTestimonial].image}
              />
            </div>
            <div className="flex-1 flex flex-col gap-[16px] items-center justify-center">
              <p className="font-['Poppins'] text-[20px] text-black">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="w-full">
                <p className="font-['Poppins'] font-semibold text-[24px] text-[#473cf0]">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="font-['Poppins'] text-[16px] text-black">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Page Indicator */}
        <div className="flex gap-[10px] items-center justify-center p-[10px]">
          {testimonials.map((_, idx) => (
            <motion.div
              key={idx}
              animate={{
                backgroundColor:
                  currentTestimonial === idx
                    ? "#9ca3af"
                    : "#d9d9d9",
                width:
                  currentTestimonial === idx ? "30px" : "10px",
              }}
              transition={{ duration: 0.3 }}
              className="h-[10px] rounded-[50px] cursor-pointer"
              onClick={() => setCurrentTestimonial(idx)}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Our Commitment */}
      <AnimatedSection className="flex flex-col gap-[48px] items-center px-[64px] py-[32px] w-[1440px] mx-auto my-24">
        <h2 className="font-['Poppins'] font-medium text-[48px] text-black text-center">
          Our Commitment
        </h2>
        <p className="font-['Poppins'] text-[20px] text-black">
          At Unlock Digi Services, we are committed to providing
          accurate, transparent, and affordable solutions that
          help our clients succeed. Whether it's website
          development, social media management, or resume
          building, we deliver every service with
          professionalism, confidentiality, and care. Our goal
          is to make your digital and compliance journey smooth,
          stress-free, and result-oriented—because your growth
          is our priority.
        </p>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#719cff] to-[#a872ff] h-[739px] w-full mx-auto overflow-hidden relative">
        <div className="absolute bg-[rgba(217,217,217,0.52)] h-px left-0 top-[666px] w-[1440px]" />

        {/* Let's Work Together */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute left-[160px] top-[95px]"
        >
          <p className="font-['Poppins'] font-medium text-[48px] text-[#e9e9e9] tracking-[0.96px]">
            Let's <span className="text-white">Work</span>{" "}
            Together
          </p>
          <p className="font-['Poppins'] text-[14px] text-[#e9e9e9] text-center w-[518px] mt-4">
            We deliver top-notch services from Website
            Development, Social Media Management, and Content
            Creation to Resume Building.
          </p>

          {/* Social Icons */}
          <div className="flex gap-[22px] items-center mt-8">
            {[
              { path: svgPaths.p1dd74e80 },
              { path: svgPaths.p39c5ae70 },
              { path: svgPaths.p3c349b00 },
              { path: svgPaths.p824c100 },
            ].map((social, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="size-[20px] cursor-pointer"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 20"
                >
                  <path d={social.path} fill="#E9E9E9" />
                </svg>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <div className="absolute left-[122px] top-[309px]">
          <p className="font-['Poppins'] font-bold text-[20px] text-white mb-4">
            Quick Links
          </p>
          {[
            "Home",
            "About Us",
            "Our Services",
            "Blogs",
            "Contact Us",
          ].map((link, idx) => (
            <motion.p
              key={idx}
              whileHover={{ x: 5, color: "#ffffff" }}
              className="font-['Poppins'] text-[16px] text-white mb-4 cursor-pointer"
            >
              {link}
            </motion.p>
          ))}
        </div>

        {/* Services */}
        <div className="absolute left-[326px] top-[309px]">
          <p className="font-['Poppins'] font-bold text-[20px] text-white mb-4">
            Services
          </p>
          {[
            "Website Development",
            "Social Media Management",
            "Resume Building",
          ].map((service, idx) => (
            <motion.p
              key={idx}
              whileHover={{ x: 5, color: "#ffffff" }}
              className="font-['Poppins'] text-[16px] text-white mb-4 cursor-pointer"
            >
              {service}
            </motion.p>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute left-[811px] top-[153px]"
        >
          <p className="font-['Poppins'] font-medium text-[19.78px] text-[#e9e9e9] mb-2">
            LET'S GROW YOUR BRAND ONLINE
          </p>
          <p className="font-['Poppins'] font-semibold text-[32.967px] text-[#e9e9e9] mb-8">
            Start A Conversation
          </p>

          <div className="flex flex-col gap-[16px] w-[530px]">
            <input
              type="text"
              placeholder="Full Name"
              className="h-[44px] rounded-[8px] border border-[#b5b5b5] px-4 font-['Poppins'] text-[12.363px] text-[#d9d9d9] bg-transparent focus:outline-none focus:border-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="h-[44px] rounded-[8px] border border-[#b5b5b5] px-4 font-['Poppins'] text-[12.363px] text-[#d9d9d9] bg-transparent focus:outline-none focus:border-white"
            />
            <textarea
              placeholder="Your Message"
              className="h-[76px] rounded-[8px] border border-[#b5b5b5] px-4 py-3 font-['Poppins'] text-[12.363px] text-[#d9d9d9] bg-transparent focus:outline-none focus:border-white resize-none"
            />
            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: "#6654e8",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#574dec] h-[48px] rounded-[16px] font-['Poppins'] font-semibold text-[16px] text-white"
            >
              Submit
            </motion.button>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="absolute left-[131px] top-[691px]">
          <p className="font-['Poppins'] text-[16px] text-[#e9e9e9]">
            © Copyright 2025 UNLOCK DIGI Services. All Rights
            Reserved
          </p>
        </div>
        <div className="absolute left-[836px] top-[691px]">
          <p className="font-['Poppins'] text-[16px] text-[#e9e9e9]">
            Terms & Conditions
          </p>
        </div>
        <div className="absolute left-[1076px] top-[691px]">
          <p className="font-['Poppins'] text-[16px] text-[#e9e9e9]">
            Privacy Policy
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;