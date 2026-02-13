import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getAllServices,
  getAllCards,
  getAllWork,
  getAllTestimonials,
  getAllFAQs,
} from "../api/serviceService.js";

import ServiceFeatures from "../components/services/ServiceFeatures.jsx";
import ServiceSolutions from "../components/services/ServiceSolutions.jsx";
import ServiceTestimonial from "../components/services/ServiceTestimonial.jsx";
import ServicePricing from "../components/services/ServicePricing.jsx";
import ServicePortfolio from "../components/services/ServicePortfolio.jsx";
import ServiceFAQ from "../components/services/ServiceFAQ.jsx";

import { serviceDetails } from "../data/serviceDetails.js";

const SECTION_HEADERS = {
  "website-development": {
    features: {
      title: "Transform your business with",
      highlight: "Innovative Technologies",
    },
    solutions: {
      title: "Achieve your business goals with",
      highlight: "Website Development Solutions",
    },
    portfolio: {
      title: "Highlight real impact with our curated",
      highlight: "Portfolio Showcase",
    },
    testimonial: {
      title: "Showcase success with genuine",
      highlight: "Customer experiences",
    },
    faq: {
      title: "Get clarity through our most asked",
      highlight: "Client Questions",
    },
  },
  "social-media-management": {
    features: {
      title: "Supercharge your brand with",
      highlight: "Strategic Social Media",
    },
    solutions: {
      title: "Grow your audience with",
      highlight: "Social Media Solutions",
    },
    portfolio: {
      title: "See our results in",
      highlight: "Social Media Success",
    },
    testimonial: {
      title: "Hear from our happy",
      highlight: "Social Media Clients",
    },
    faq: {
      title: "Common questions about",
      highlight: "Social Media Management",
    },
  },
  "resume-building": {
    features: {
      title: "Craft your career with",
      highlight: "Expert Resume Services",
    },
    solutions: {
      title: "Secure your dream job with",
      highlight: "Career Solutions",
    },
    portfolio: { title: "View our professional", highlight: "Resume Samples" },
    testimonial: { title: "Success stories from", highlight: "Job Seekers" },
    faq: {
      title: "Frequently asked questions about",
      highlight: "Resume Writing",
    },
  },
};

const ServiceDetail = () => {
  const { serviceType } = useParams();

  // Static/Dummy Data
  const dummyData = serviceDetails[serviceType];

  const [apiData, setApiData] = useState(null);
  const [featuresData, setFeaturesData] = useState(null);
  const [solutionsData, setSolutionsData] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);
  const [testimonialData, setTestimonialData] = useState(null);
  const [faqData, setFaqData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper to make slug from Title
  const makeSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchServiceData = async () => {
      setLoading(true);
      try {
        const [allServices, allCards, allWork, allTestimonials, allFAQs] =
          await Promise.all([
            getAllServices(),
            getAllCards(),
            getAllWork(),
            getAllTestimonials(),
            getAllFAQs(),
          ]);

        const found = allServices.find(
          (s) => makeSlug(s.title) === serviceType,
        );

        if (found) {
          setApiData(found);

          // Filter Cards for this Service
          const validCards = allCards.filter((c) => c.service === found._id);

          // Flatten all sections from all matching cards
          const allSections = validCards.flatMap((c) => c.sections || []);

          // Features Logic (Filter sections with 'Features' in title)
          const featureSections = allSections.filter(
            (s) =>
              s.sectionTitle &&
              s.sectionTitle.toLowerCase().includes("features"),
          );
          if (featureSections.length > 0) {
            setFeaturesData({
              title: SECTION_HEADERS[serviceType]?.features.title || "",
              highlight: SECTION_HEADERS[serviceType]?.features.highlight || "",
              cards: featureSections.map((s, i) => ({
                id: "0" + (i + 1),
                title: s.title,
                tools: s.description,
              })),
            });
          }

          // Solutions Logic (Filter sections with 'Solutions' in title)
          const solutionSections = allSections.filter(
            (s) =>
              s.sectionTitle &&
              s.sectionTitle.toLowerCase().includes("solutions"),
          );
          if (solutionSections.length > 0) {
            setSolutionsData({
              title: SECTION_HEADERS[serviceType]?.solutions.title || "",
              highlight:
                SECTION_HEADERS[serviceType]?.solutions.highlight || "",
              cards: solutionSections.map((s) => ({
                title: s.title,
                description: s.description,
              })),
            });
          }

          // Portfolio/Work Logic
          const validWork = allWork.filter((w) => w.service === found._id);

          if (validWork.length > 0) {
            // Flatten all files from all work items to create one gallery
            const allImages = validWork.flatMap((w) => w.files || []);
            if (allImages.length > 0) {
              setPortfolioData({
                title: SECTION_HEADERS[serviceType]?.portfolio.title || "",
                highlight:
                  SECTION_HEADERS[serviceType]?.portfolio.highlight || "",
                items: allImages.map((imgUrl) => ({ image: imgUrl })),
              });
            }
          }

          // Testimonial Logic
          const validTestimonials = allTestimonials.filter(
            (t) => t.service === found._id,
          );
          if (validTestimonials.length > 0) {
            setTestimonialData({
              title: SECTION_HEADERS[serviceType]?.testimonial.title || "",
              highlight:
                SECTION_HEADERS[serviceType]?.testimonial.highlight || "",
              reviews: validTestimonials.map((t) => ({
                id: t._id,
                image: t.file,
                text: t.description,
                authorName: t.name,
                authorRole: "", // Empty for now
              })),
            });
          }

          // FAQ Logic
          const validFAQs = allFAQs.filter((f) => f.service === found._id);
          if (validFAQs.length > 0) {
            setFaqData({
              title: SECTION_HEADERS[serviceType]?.faq.title || "",
              highlight: SECTION_HEADERS[serviceType]?.faq.highlight || "",
              questions: validFAQs.map((f) => ({
                question: f.question,
                answer: f.answer,
              })),
            });
          }
        }
      } catch (error) {
        console.error("Failed to fetch service detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceType]);

  if (!loading && !apiData && !dummyData) {
    return <div className="text-center pt-32">Service Not Found</div>;
  }

  // Section below is currently relying on dummyData
  const pricing = dummyData?.pricing || null;

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
          {loading ? "Loading..." : apiData?.title}
        </h1>
        <p className="font-normal text-xl md:text-2xl leading-[1.4] text-white text-center max-w-[1177px] mx-auto mt-6 md:mt-9 px-4 md:px-0">
          {loading ? "" : apiData?.description}
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
      {!loading && featuresData ? (
        <ServiceFeatures data={featuresData} />
      ) : (
        !loading && (
          <div className="text-center py-10 text-gray-500">
            Features not found
          </div>
        )
      )}

      {/* Solutions Section */}
      {!loading && solutionsData ? (
        <ServiceSolutions data={solutionsData} />
      ) : (
        !loading && (
          <div className="text-center py-10 text-gray-500">
            Solutions not found
          </div>
        )
      )}

      {/* Testimonial Section */}
      {!loading && testimonialData ? (
        <ServiceTestimonial data={testimonialData} />
      ) : (
        !loading && (
          <div className="text-center py-10 text-gray-500">
            Testimonials not found
          </div>
        )
      )}

      {/* Pricing Section */}
      {pricing && <ServicePricing data={pricing} />}

      {/* Portfolio Section */}
      {!loading && portfolioData ? (
        <ServicePortfolio data={portfolioData} />
      ) : (
        !loading && (
          <div className="text-center py-10 text-gray-500">
            Portfolio not found
          </div>
        )
      )}

      {/* FAQ Section */}
      {!loading && faqData ? (
        <ServiceFAQ data={faqData} />
      ) : (
        !loading && (
          <div className="text-center py-10 text-gray-500">FAQs not found</div>
        )
      )}
    </div>
  );
};

export default ServiceDetail;
