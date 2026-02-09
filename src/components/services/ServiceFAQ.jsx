import { useState, useEffect } from "react";  

import FaqPlus from "../svg/FaqPlus";
import FaqClose from "../svg/FaqClose";


const ServiceFAQ = ({ data: propData }) => {
  const [faqData, setFaqData] = useState(null);  //  state for API data
  const [loading, setLoading] = useState(true);  //  loading state
  const [openIndex, setOpenIndex] = useState(null);

  //  API fetch with fallback
  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://digiservices-backend.onrender.com/api/v1/faqs');  
        if (!response.ok) throw new Error('API failed');
        const apiData = await response.json();
        if (apiData && apiData.questions?.length > 0) {
          setFaqData(apiData);
        } else {
          throw new Error('No API data');
        }
      } catch (error) {
        console.error('API failed, using prop fallback:', error);
        setFaqData(propData); 
      } finally {
        setLoading(false);
      }
    };

    fetchFAQ();
  }, []);

  if (loading || !faqData) return null;  // ADDED: loading check

  const { title, highlight, questions } = faqData;  // Uses API or fallback


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className="w-full pt-12 md:pt-20 pb-12 px-4 md:px-16 bg-white flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-medium leading-[1.4] text-black">
          {title} <br />
          <span className="text-[#6364FF]">{highlight}</span>
        </h2>
      </div>

      {/* FAQ List */}
      <div className="w-full max-w-[1315px] flex flex-col gap-4 md:gap-9">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "bg-[#6364FF]"
                : "bg-white shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]"
            }`}
          >
            {/* Question Header */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 gap-2.5 text-left focus:outline-none"
            >
              <span
                className={`text-lg md:text-2xl font-semibold leading-none ${
                  openIndex === index ? "text-white" : "text-[#6364FF]"
                }`}
              >
                {item.question}
              </span>
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6">
                {openIndex === index ? <FaqClose /> : <FaqPlus />}
              </span>
            </button>

            {/* Answer Content */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 pt-0 text-white text-base md:text-xl font-normal leading-normal md:leading-none">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFAQ;
