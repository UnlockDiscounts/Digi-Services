import { motion } from "motion/react";
import { useState, useEffect } from "react";
import ServiceTestimonial from "../services/ServiceTestimonial";
import { getAllTestimonials } from "../../api/serviceService";

export function TestimonialsSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const result = await getAllTestimonials();
        if (result && Array.isArray(result)) {
          const formattedReviews = result.map((item) => ({
            id: item._id,
            authorName: item.name,
            authorRole: "",
            text: item.description,
            image: item.file,
          }));

          setData({
            title: "Showcase success with genuine",
            highlight: "Customer experiences",
            reviews: formattedReviews,
          });
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Pass the transformed data to the component with transparent background
  return <ServiceTestimonial data={data} isTransparent={true} />;
}

/*  Previous Testimonial Section Code
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
        {/* Section Title * /}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="font-['Poppins'] font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-normal">
            Showcase success with genuine{" "}
            <span className="text-[#473cf0]">Customer experiences</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel * /}
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
                  className="w-full flex-shrink-0 px-1 sm:px-2 md:px-3 lg:px-4"
                  style={{
                    filter: index !== currentIndex ? 'blur(2px)' : 'none',
                    opacity: index !== currentIndex ? 0.6 : 1
                  }}
                >
                  <div className="bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
                    {/* Image * /}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                      <div className="aspect-[1200/801.583740234375] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content * /}
                    <div className="flex-1 space-y-3 sm:space-y-4">
                      <p className="font-['Poppins'] text-black text-base sm:text-lg md:text-lg lg:text-[20px] leading-normal">
                        {testimonial.text}
                      </p>
                      <div>
                        <p className="font-['Poppins'] font-semibold text-[#473cf0] text-lg sm:text-xl md:text-xl lg:text-2xl">
                          {testimonial.name}
                        </p>
                        <p className="font-['Poppins'] text-black text-sm sm:text-base md:text-[16px]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Page Indicators * /}
          <div className="flex justify-center gap-2 sm:gap-2.5 md:gap-3 mt-6 sm:mt-7 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  rounded-[50px] transition-all
                  ${index === currentIndex 
                    ? 'bg-[#9ca3af] w-[24px] sm:w-[28px] md:w-[30px] h-[8px] sm:h-[9px] md:h-[10px]' 
                    : 'bg-[#d9d9d9] w-[8px] sm:w-[9px] md:w-[10px] h-[8px] sm:h-[9px] md:h-[10px]'
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
*/
