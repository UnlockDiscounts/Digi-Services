import { useState, useEffect } from "react";
import ServiceOverviewCard from "../components/ServiceOverviewCard";
import ServiceProcessAutomation from "../components/ServiceProcessAutomation";

import { getServices } from "../services/servicesApi";

const ServiceCategory = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        setServices(data || []);
      } catch (err) {
        console.error('Failed to fetch services:', err);
        setError('Failed to load services');
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="min-h-[400px] md:min-h-[600px] flex flex-col justify-end items-center text-center text-white relative overflow-hidden pb-16 md:pb-32"
        style={{
          background:
            "linear-gradient(90deg, #FDCBF2 0%, #907AFF 50%, #0435FF 100%)",
        }}
      >
        <div className="w-full max-w-5xl mx-auto px-6 relative z-10 -mt-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-[1.3] text-[#E6E6E6] drop-shadow-sm tracking-normal">
            Smart Digital Services to <br /> Build, Grow, and Stand Out
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-9 mt-8">
            <button className="w-full md:w-[321px] h-[60px] md:h-[79px] bg-[#6364FF] text-white rounded-2xl font-semibold text-xl md:text-2xl leading-none shadow-lg flex items-center justify-center tracking-normal">
              Start Your Journey
            </button>
            <button className="w-full md:w-[321px] h-[60px] md:h-[79px] bg-white text-black rounded-2xl font-medium text-xl md:text-2xl leading-none shadow-lg opacity-80 flex items-center justify-center tracking-normal">
              Get a quote
            </button>
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className="max-w-[1312px] mx-auto px-6 pt-12 md:pt-24 pb-8 md:pb-16">
        <h2 className="text-3xl md:text-5xl font-medium mb-10 text-black leading-none tracking-normal text-center">
          Our Services
        </h2>

        <p className="text-lg md:text-2xl font-normal text-black leading-normal tracking-normal">
          UnlockDigiServices provides affordable digital solutions for
          individuals, freelancers, startups, and small businesses across India.
          We help simplify the digital journey by offering practical,
          easy-to-access services that support personal branding and business
          growth.
        </p>

        <p className="text-lg md:text-2xl font-normal text-black leading-normal tracking-normal mt-8">
          Our services include custom website development, social media
          management, and professional resume building. Whether you’re launching
          a brand, improving your online presence, or preparing for new career
          opportunities, our team of skilled developers, marketers, and resume
          experts delivers reliable, secure, and timely results—all under one
          roof.
        </p>
      </section>

      {/* SERVICES WE PROVIDE SECTION */}
      <section className="py-10 md:py-20">
        <h3 className="text-3xl md:text-5xl font-medium text-black text-center mb-12">
          Services We Provide
        </h3>

        <div className="w-full max-w-[1440px] mx-auto min-h-auto md:min-h-[500px] px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
          {loading ? (
            <p className="text-center py-10 text-gray-600">Loading services...</p>
          ) : error ? (
            <p className="text-center py-10 text-red-600">{error}</p>
          ) : services.length > 0 ? (
            services.map((service) => (
              <ServiceOverviewCard key={service._id || service.id} service={service} />
            ))
          ) : (
            <p className="text-center py-10 text-gray-600">No services available</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServiceCategory;
