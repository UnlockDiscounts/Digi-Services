import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import hero from "../../assets/hero.svg";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 lg:pt-24 pb-16 overflow-hidden">
      {/* Decorative blur effects */}
      <div className="absolute left-1/2 top-1/4 w-16 h-16 -translate-x-1/2 opacity-70">
        <div className="absolute inset-0 blur-[85px] bg-[#473CF0] rounded-full" />
      </div>
      <div className="absolute left-1/4 top-1/3 w-16 h-16 opacity-50">
        <div className="absolute inset-0 blur-[85px] bg-[#166CE7] rounded-full" />
      </div>
      <div className="absolute right-1/4 top-1/2 w-16 h-16 opacity-50">
        <div className="absolute inset-0 blur-[85px] bg-[#473CF0] rounded-full" />
      </div>

      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-['Poppins'] font-medium text-white text-4xl sm:text-5xl lg:text-[72px] leading-[1.3] md:leading-[1.4] mb-4 md:mb-6"
          >
            Unlock Your Digital Potential
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-3 md:space-y-4"
          >
            <p className="font-['Poppins'] font-medium text-white text-2xl sm:text-[32px]">
              Create. Scale. Innovate.
            </p>
            <p className="font-['Poppins'] text-[#d6d6d6] text-lg sm:text-[20px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Build your digital presence with services
              <br />
              crafted to help you grow, earn, and
              <br />
              evolve.
            </p>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4 md:pt-6"
>
  {/* Button 1: Start Your Journey (Floating Animation) */}
  <button className="cursor-pointer relative bg-[#574dec] text-white font-['Poppins'] font-medium text-xl sm:text-2xl px-8 py-4 rounded-[16px] group hover:bg-[#473bd0] transition-colors shadow-lg">
    <motion.div
      animate={{ 
        y: [0, -6, 0], // Subtle floating up and down
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      Start Your Journey
    </motion.div>
  </button>

  {/* Button 2: Explore Services (Identical Roundedness & Hidden Bracket) */}
  <button 
    onClick={() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }}
    className="group relative bg-white text-black font-['Poppins'] font-medium text-xl sm:text-2xl px-8 py-4 rounded-[16px] hover:bg-gray-100 transition-all shadow-lg overflow-hidden min-w-[240px] cursor-pointer"
  >
    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-3 block">
      Explore Services
    </span>
    
    {/* Bracket: Positioned absolutely so it takes up NO space when not hovered */}
    <motion.div
      className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0"
    >
      <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2]" />
    </motion.div>
  </button>
</motion.div>
        </motion.div>

        {/* Right Content - Laptop Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 1, type: "spring" }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-md lg:max-w-lg"
          >
            <div className="relative rounded-[195.118px] overflow-hidden aspect-[1073/916]">
              <img
                src={hero}
                alt="3D Laptop"
                className="object-cover origin-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
