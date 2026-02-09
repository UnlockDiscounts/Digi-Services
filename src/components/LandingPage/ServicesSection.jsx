import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import website from "../../assets/website.svg";
import media from "../../assets/media.svg";
import resume from "../../assets/resume.svg";

const services = [
  {
    title: "Website Development",
    description: "Build a website that works as hard as you do.",
    image: website,
    delay: 0.2,
    link: "/services/website-development",
  },
  {
    title: "Social Media Management",
    description: "Stay relevant, consistent, and ahead of trends.",
    image: media,
    delay: 0.4,
    link: "/services/social-media-management",
  },
  {
    title: "Resume Building",
    description: "Make a strong first impression, every time.",
    image: resume,
    delay: 0.6,
    link: "/services/resume-building",
  },
];

const floatingIcons = [
  { name: "Instagram", rotate: "17.85deg", left: "28%", top: "18%" },
  { name: "Facebook", rotate: "-13.1deg", left: "33%", top: "24%" },
  { name: "LinkedIn", rotate: "11.45deg", left: "59%", top: "25%" },
  { name: "Snapchat", rotate: "-22.18deg", left: "54%", top: "22%" },
  { name: "YouTube", rotate: "-10.38deg", left: "65%", top: "23%" },
  { name: "Java", rotate: "16.33deg", left: "37.5%", top: "20%" },
  { name: "JavaScript", rotate: "-17.3deg", left: "24%", top: "26%" },
  { name: "NodeJS", rotate: "-14.09deg", left: "42%", top: "27%" },
];

export function ServicesSection() {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6"
        >
          <h2 className="font-['Poppins'] font-medium text-white text-3xl sm:text-[48px]">
            Our Services
          </h2>
          <p className="font-['Poppins'] font-bold text-white text-xl sm:text-2xl lg:text-[36px] leading-[1.3] max-w-4xl mx-auto px-4">
            Magnetic content. Modern websites. Career-winning resumes. All in
            one place.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.8 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 60px rgba(99, 100, 255, 0.4)",
              }}
              className="bg-[#c7d3fc] rounded-[32px] overflow-hidden p-8 flex flex-col items-center text-center h-[480px] sm:h-[541px] relative group transition-shadow duration-300"
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay + 0.2, duration: 0.6 }}
                className="w-[180px] h-[180px] sm:w-[215px] sm:h-[215px] mb-6 sm:mb-8"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-contain"
                />
              </motion.div>

              <h3 className="w-5/6 font-['Poppins'] font-semibold text-[#00003a] text-lg sm:text-[38px] leading-[1.3] mb-4">
                {/* {service.title.split(' ').map((word, i) => (
                  <span key={i}>
                    {word}
                    {i < service.title.split(' ').length - 1 && <br />}
                  </span>
                ))} */}
                {service.title}
              </h3>

              <p className="font-['Poppins'] text-black text-sm sm:text-[16px] leading-[1.2] tracking-[-0.32px] mb-auto max-w-[240px]">
                {service.description}
              </p>

              <Link to={service.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#6364ff] text-white font-['Poppins'] font-semibold text-xl sm:text-2xl px-5 py-3 rounded-[24px] flex items-center gap-2 mt-6 group-hover:bg-[#5253ee] transition-colors"
                >
                  Learn more
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
