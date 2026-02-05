import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceSolutions from "../components/services/ServiceSolutions";
import ServiceTestimonial from "../components/services/ServiceTestimonial";
import ServicePricing from "../components/services/ServicePricing";
import ServicePortfolio from "../components/services/ServicePortfolio";
import ServiceFAQ from "../components/services/ServiceFAQ";

import { getServiceById } from "../services/servicesApi";

const ServiceDetail = () => {
  const { serviceType } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        setLoading(true);
        const service = await getServiceById(serviceType);
        setServiceData(service);
      } catch (err) {
        console.error('Failed to fetch service:', err);
        setError('Service not found');
      } finally {
        setLoading(false);
      }
    };
    if (serviceType) {
      fetchServiceData();
    }
  }, [serviceType]);

  if (loading) {
    return <div className="text-center pt-32">Loading service...</div>;
  }

  if (error || !serviceData) {
    return <div className="text-center pt-32 text-red-500">{error || 'Service Not Found'}</div>;
  }

  const { hero, features } = serviceData;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="w-full h-auto min-h-[550px] md:h-[550px] flex flex-col items-center justify-center pt-24 md:pt-24 pb-16 md:pb-0 text-center text-white relative overflow-hidden px-6 md:px-0"
        style={{
          background:
            "linear-gradient(86.68deg, #F3C3F4 2.74%, #B292FC 52.67%, #6364FF 97.26%)",
        }}
      >
        <h1 className="font-semibold text-3xl md:text-5xl leading-[1.4] text-white text-center max-w-[1177px] mx-auto">
          {hero.title}
        </h1>
        <p className="font-normal text-xl md:text-2xl leading-[1.4] text-white text-center max-w-[1177px] mx-auto mt-6 md:mt-9 px-4 md:px-0">
          {hero.subtitle}
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[678px] h-auto md:h-[79px] gap-4 md:gap-9 mx-auto mt-8 md:mt-6">
          <button className="w-full md:w-[321px] h-[60px] md:h-[79px] bg-[#6364FF] rounded-2xl text-white flex items-center justify-center gap-2.5 px-5 py-2.5 text-xl md:text-2xl font-semibold leading-none shadow-lg">
            Start your journey
          </button>
          <button className="w-full md:w-[321px] h-[60px] md:h-[79px] bg-white rounded-2xl text-black flex items-center justify-center gap-2.5 px-5 py-2.5 text-xl md:text-2xl font-semibold leading-none shadow-lg">
            Get a quote
          </button>
        </div>
      </section>

      {/* Features Section */}
      <ServiceFeatures data={features} />

      {/* Solutions Section */}
      <ServiceSolutions data={serviceData.solutions} />

      {/* Testimonial Section */}
      <ServiceTestimonial data={serviceData.testimonial} />

      {/* Pricing Section */}
      <ServicePricing data={serviceData.pricing} />

      {/* Portfolio Section */}
      <ServicePortfolio data={serviceData.portfolio} />

      {/* FAQ Section */}
      <ServiceFAQ data={serviceData.faq} />
    </div>
  );
};

export default ServiceDetail;
