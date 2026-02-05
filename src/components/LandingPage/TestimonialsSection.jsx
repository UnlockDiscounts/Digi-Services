import { motion } from "motion/react";
import { useState, useEffect } from "react";
import noimage from "../../assets/noimage.svg";
import { getTestimonials } from "../../services/testimonialsApi";

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch testimonials from API on mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await getTestimonials();
        if (data && Array.isArray(data)) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
        // Fallback to empty array if API fails
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-['Poppins'] font-medium text-white text-3xl sm:text-[48px] leading-normal">
            Showcase success with genuine{" "}
            <span className="text-[#473cf0]">Customer experiences</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                  style={{
                    filter: index !== currentIndex ? 'blur(2px)' : 'none',
                    opacity: index !== currentIndex ? 0.6 : 1
                  }}
                >
                  <div className="bg-white rounded-[16px] p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-16 items-center max-w-5xl mx-auto">
                    {/* Image */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                      <div className="aspect-[1200/801.583740234375] rounded-[8px] overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <p className="font-['Poppins'] text-black text-lg sm:text-[20px] leading-normal">
                        {testimonial.text}
                      </p>
                      <div>
                        <p className="font-['Poppins'] font-semibold text-[#473cf0] text-xl sm:text-2xl">
                          {testimonial.name}
                        </p>
                        <p className="font-['Poppins'] text-black text-base sm:text-[16px]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  rounded-[50px] transition-all
                  ${index === currentIndex 
                    ? 'bg-[#9ca3af] w-[30px] h-[10px]' 
                    : 'bg-[#d9d9d9] w-[10px] h-[10px]'
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}