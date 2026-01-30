const ServiceFeatures = ({ data }) => {
  if (!data) return null;
  const { title, highlight, cards } = data;

  return (
    <section className="w-full py-12 px-4 md:px-16 bg-white">
      <div className="w-full max-w-[1313px] bg-[#EEEFF2] rounded-2xl mx-auto pt-[30px] px-4 md:px-[30px] pb-[70px] flex flex-col items-center">
        {/* Headings */}
        <div className="text-center mb-[53px]">
          <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] text-black">
            {title} <br />
            <span className="text-[#6364FF]">{highlight}</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1056px]">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-xs md:w-80 h-[306px] bg-white rounded-2xl flex flex-col items-center pt-6 px-8 pb-[90px] gap-[27px] hover:shadow-md transition-all duration-300 hover:bg-[#6364FF] hover:pb-6 group relative overflow-hidden"
              style={{
                boxShadow:
                  "0px 1px 3px 0px #0000004D, 0px 4px 8px 3px #00000026",
              }}
            >
              <div className="w-64 flex flex-col items-center flex-shrink-0 transition-all duration-1000 text-[32px] group-hover:text-2xl font-bold leading-[1.4] group-hover:leading-[1.4] text-[#6364FF] group-hover:text-white text-center gap-[52px] group-hover:gap-1">
                <span>{card.id}</span>
                <p>{card.title}</p>
              </div>

              {/* Tools List (Visible on Hover) */}
              <div className="w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-end justify-center">
                <p className="font-normal text-xl leading-normal text-white text-center">
                  {card.tools}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
