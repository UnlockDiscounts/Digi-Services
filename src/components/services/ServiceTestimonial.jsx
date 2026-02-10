import { useState, useEffect } from "react";
import { getTestimonials } from "../../services/testimonialsApi";

const ServiceTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
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
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (loading) {
    return <section className="w-full py-16 text-center text-gray-600">Loading testimonials...</section>;
  }

  if (testimonials.length === 0) {
    return <section className="w-full py-16 text-center text-gray-600">No testimonials available</section>;
  }

  return (
    <section className="w-full py-16 px-4 md:px-16 bg-white flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-medium leading-[1.4] text-black">
          Client <br />
          <span className="text-[#6364FF]">Testimonials</span>
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="w-full max-w-[1150px] min-h-[399px] bg-white rounded-2xl shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((review, idx) => (
            <div
              key={review._id || review.id || idx}
              className="min-w-full flex-shrink-0 flex flex-col md:flex-row p-8 gap-16 items-center"
            >
              {/* Image Placeholder (Left) */}
              <div className="w-[326px] h-[175px] md:w-[511px] md:h-[341.34px] bg-gray-200 rounded-[20px] md:rounded-lg opacity-100 flex-shrink-0 flex items-center justify-center text-gray-400 overflow-hidden">
                {typeof review.image === "string" ? (
                  <img
                    src={review.image}
                    alt={review.authorName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-24 h-24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>

              {/* Content (Right) */}
              <div className="w-full md:w-[511px] h-auto md:h-[192px] flex flex-col items-start md:items-start gap-4 opacity-100">
                {/* Review Text */}
                <p className="w-[326px] md:w-full h-auto md:h-[120px] text-base md:text-xl font-normal text-black leading-[1.4] tracking-normal opacity-100 overflow-visible md:overflow-hidden text-left md:text-left break-words whitespace-normal max-w-full">
                  {review.text}
                </p>

                {/* Author Info */}
                <div className="w-auto md:w-full h-auto md:h-14 opacity-100 flex flex-col items-start md:items-start mt-4 md:mt-0">
                  <h4 className="w-full text-2xl font-semibold text-[#473CF0] leading-none tracking-normal opacity-100 block">
                    {review.authorName}
                  </h4>
                  {/* <p className="w-full text-base font-normal text-black leading-none tracking-normal opacity-100 block">
                    {review.authorRole}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="w-full max-w-[1150px] h-[30px] flex justify-center items-center gap-2.5 p-2.5 opacity-100 mt-2">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "w-[30px] h-2.5 bg-[#9CA3AF] opacity-100"
                : "w-2.5 h-2.5 bg-[#D9D9D9] opacity-100"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceTestimonial;
