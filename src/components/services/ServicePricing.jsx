import { useEffect, useRef } from "react";
import ServicePricingVector from "../svg/PricingCardBg";
import PricingCheckmark from "../svg/PricingCheckmark";

const RazorpayButton = ({ paymentButtonId }) => {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.dataset.payment_button_id = paymentButtonId;
    script.async = true;

    const currentForm = formRef.current;
    if (currentForm) {
      currentForm.innerHTML = "";
      currentForm.appendChild(script);
    }

    return () => {
      if (currentForm && currentForm.contains(script)) {
        currentForm.removeChild(script);
      }
    };
  }, [paymentButtonId]);

  return <form ref={formRef} className="w-full flex justify-center"></form>;
};

const ServicePricing = ({ data }) => {
  if (!data) return null;
  const { title, highlight, plans } = data;

  return (
    <section className="w-full pt-0 pb-20 px-4 md:px-16 flex justify-center bg-white">
      <div
        className="w-full max-w-[1380px] rounded-2xl flex flex-col items-center pt-8 pb-16 px-4 md:px-8"
        style={{
          background:
            "linear-gradient(298.01deg, #719CFF 3.29%, #A872FF 98.54%)",
        }}
      >
        {/* Heading */}
        <div className="w-full max-w-[1197px] mx-auto text-center mb-12 md:mb-24 mt-0 px-4">
          <h2 className="text-3xl md:text-5xl font-medium leading-[1.4] text-white">
            {title} <br />
            <span className="text-[#473CF0] inline-block mt-2">
              {highlight}
            </span>
          </h2>
        </div>

        {/* Pricing Cards Container */}
        <div className="w-full max-w-[1288px] min-h-0 md:min-h-[676px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[41px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative w-full h-auto md:h-[676px] flex flex-col pt-8 md:pt-[39px] px-6 md:px-[31px] pb-8 md:pb-0 rounded-2xl bg-white text-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Hover Vector Background */}
              <div className="absolute top-[-4.07px] left-[22px] w-[378px] h-[292px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 hidden md:block">
                <ServicePricingVector className="w-full h-full" />
              </div>

              {/* Plan Name */}
              <h3 className="text-xl md:text-2xl font-medium leading-none text-black h-auto md:h-9 flex items-center mb-2 pb-4 ml-0 md:ml-[22px] relative z-10">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6 mt-4 flex items-center ml-0 md:ml-[22px]">
                <span className="text-4xl md:text-5xl font-medium leading-none text-black">
                  {plan.price}
                </span>
                <span className="text-sm md:text-base font-medium leading-none text-[#00000080] ml-1 h-6 flex items-center">
                  per month
                </span>
              </div>

              <p className="text-sm md:text-base font-medium leading-none text-black ml-0 md:ml-[22px] mt-1 mb-8">
                Basic features for up to 10 users
              </p>

              {/* Button */}
              {plan.paymentButtonId ? (
                <RazorpayButton paymentButtonId={plan.paymentButtonId} />
              ) : (
                <button className="w-full h-12 md:h-14 rounded-2xl text-xl md:text-2xl font-medium leading-none bg-[#6364FF] text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#6038FE] group-hover:to-[#9565E5] group-hover:shadow-[0px_4px_38.2px_0px_#8658EC94]">
                  Get Started
                </button>
              )}

              {/* Features Container */}
              <div className="w-full ml-0 md:ml-2 mt-8 md:mt-[53px]">
                {/* Label */}
                <h4 className="text-xl md:text-2xl font-medium leading-none text-black h-auto md:h-9 flex items-center ml-0 md:ml-[14px] mb-[18px]">
                  FEATURES
                </h4>

                {/* Features List */}
                <ul className="flex-grow space-y-6 md:space-y-10">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 md:gap-[13px]"
                    >
                      <PricingCheckmark className="w-5 h-5 md:w-6 md:h-6 text-black flex-shrink-0" />
                      <span className="text-lg md:text-2xl font-medium leading-none text-black tracking-tight whitespace-normal md:whitespace-nowrap">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
