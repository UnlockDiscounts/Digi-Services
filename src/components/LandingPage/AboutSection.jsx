import { motion } from "motion/react";
import about1 from "../../assets/about1.svg";
import about2 from "../../assets/about2.svg";

export function AboutSection() {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Poppins'] font-medium text-white text-3xl sm:text-[48px] text-center mb-12 sm:mb-16"
        >
          ABOUT US
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <div className="relative w-full max-w-[650px] aspect-[4/3] flex items-center">
              {/* Larger Background Image (about1) */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-[85%] h-auto z-10"
              >
                <img
                  src={about1}
                  alt="Working on laptop"
                  className="w-full h-auto rounded-[32px] object-cover"
                />
              </motion.div>

              {/* Smaller Overlapping Foreground Image (about2) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute bottom-0 right-0 w-[60%] z-20 h-[48%]"
              >
                <img
                  src={about2}
                  alt="Team meeting"
                  className="w-full h-24/25 rounded-[24px] border-[12px] border-transparent object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="font-['Poppins'] font-medium text-white text-lg sm:text-2xl leading-normal">
                UnlockDigiServices is your trusted digital partner for business growth.
                We simplify GST & ITR filing, social media management and website development
                with fast, expert-driven solutions. Whether you're a freelancer, startup, or
                growing brand, we help you stay compliant, scale faster, and succeed online.
                All this make us your best digital partner.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Who We Are & What We Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="font-['Poppins'] font-bold text-white text-2xl sm:text-[32px]">
              Who we are
            </h3>
            <p className="font-['Poppins'] text-white text-lg sm:text-2xl leading-normal">
              We're a team of passionate professionals committed to making digital services
              accessible, affordable, and reliable for all types of businesses and individuals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="font-['Poppins'] font-bold text-white text-2xl sm:text-[32px]">
              What we do
            </h3>
            <p className="font-['Poppins'] text-white text-lg sm:text-2xl leading-normal">
              We offer end-to-end services including tax filings, social media marketing,
              web development, and more—designed to support you at every stage of your
              digital journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}