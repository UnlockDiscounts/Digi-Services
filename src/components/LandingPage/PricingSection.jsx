import { motion } from "motion/react";
import { Check } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { serviceDetails } from "../../data/serviceDetails";

// Razorpay Button Component
const RazorpayButton = ({ paymentButtonId }) => {
  const formRef = useRef(null);

  useEffect(() => {
    const currentForm = formRef.current;

    if (currentForm) {
      currentForm.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.dataset.payment_button_id = paymentButtonId;
    script.async = true;

    if (currentForm) {
      currentForm.appendChild(script);
    }

    return () => {
      if (currentForm && currentForm.contains(script)) {
        currentForm.removeChild(script);
      }
    };
  }, [paymentButtonId]);

  return (
    <form
      ref={formRef}
      className="w-full flex justify-center mb-8 sm:mb-10"
    ></form>
  );
};

export function PricingSection() {
  const [active, setActive] = useState("Website Building");

  const pricingCategories = [
    { name: "Website Building", active: active === "Website Building" },
    {
      name: "Social Media Management",
      active: active === "Social Media Management",
    },
    { name: "Resume Building", active: active === "Resume Building" },
  ];

  /* HARDCODED PRICING DATA
  const pricingPlans = [
    {
      name: "Starter",
      price: "3,999",
      description: "Basic features for up to 10 users",
      features: [
        "1 Page",
        "Mobile Responsive",
        "Contact Form",
        "Basic SEO"
      ]
    },
    {
      name: "Standard",
      price: "8,999",
      description: "Basic features for up to 10 users",
      features: [
        "5 Page",
        "SEO Setup",
        "WhatsApp Chat",
        "Google Maps Integration"
      ]
    },
    {
      name: "Premium",
      price: "14,999",
      description: "Basic features for up to 10 users",
      features: [
        "10+ Page",
        "E-commerce Functionality",
        "Payment Gateway",
        "Maintenance Support"
      ] 
    }
  ]; */

  // Map active tab to serviceDetails key
  const categoryMap = {
    "Website Building": "website-development",
    "Social Media Management": "social-media-management",
    "Resume Building": "resume-building",
  };

  const selectedServiceKey = categoryMap[active];
  // Dynamically get plans from serviceDetails. Fallback to empty array if not found.
  const pricingPlans = serviceDetails[selectedServiceKey]?.pricing?.plans || [];

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Poppins'] font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          Invest in Your Digital & Career Future.
        </motion.h2>

        {/* Pricing Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {pricingCategories.map((category, index) => (
            <button
              key={index}
              className={`
                font-['Poppins'] font-medium text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-[20px] sm:rounded-[24px] transition-all
                ${
                  category.active
                    ? "bg-[#473cf0] text-white shadow-[0px_4px_30.5px_0px_rgba(71,60,240,0.25)]"
                    : "bg-transparent text-white border border-[#473cf0]"
                }
              `}
              onClick={() => {
                setActive(category.name);
              }}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 60px rgba(99, 100, 255, 0.35)",
              }}
              className="bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-9 lg:p-10 flex flex-col transition-shadow duration-300"
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Plan Header */}
              <div className="mb-4 sm:mb-6 md:mb-7 lg:mb-8">
                <h3 className="font-['Poppins'] font-medium text-black text-lg sm:text-xl md:text-xl lg:text-2xl mb-3 sm:mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                  {/* <span className="font-['Poppins'] font-medium text-black text-3xl sm:text-[32px]">₹</span> */}
                  <span className="font-['Poppins'] font-medium text-black text-3xl sm:text-4xl md:text-[42px] lg:text-[48px]">
                    {plan.price}
                  </span>
                  <span className="font-['Poppins'] font-medium text-[rgba(0,0,0,0.5)] text-xs sm:text-sm md:text-[15px] lg:text-[16px]">
                    per month
                  </span>
                </div>
                <p className="font-['Poppins'] font-medium text-black text-xs sm:text-sm md:text-[15px] lg:text-[16px]">
                  Basic features for up to 10 users
                </p>
              </div>

              {/* Get Started Button */}
              {plan.paymentButtonId ? (
                <RazorpayButton paymentButtonId={plan.paymentButtonId} />
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#6364ff] text-white font-['Poppins'] font-medium text-lg sm:text-xl md:text-xl lg:text-2xl py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-[14px] sm:rounded-[16px] mb-6 sm:mb-8 md:mb-9 lg:mb-10 hover:bg-[#5253ee] transition-colors"
                >
                  Get started
                </motion.button>
              )}

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-['Poppins'] font-medium text-black text-lg sm:text-xl md:text-xl lg:text-2xl mb-3 sm:mb-4">
                  FEATURES
                </h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={2.5} />
                    </div>
                    <span className="font-['Poppins'] font-medium text-black text-base sm:text-lg md:text-xl lg:text-2xl">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
