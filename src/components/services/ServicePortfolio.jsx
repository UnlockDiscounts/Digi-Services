const ServicePortfolio = ({ data }) => {
  if (!data) return null;
  const { title, highlight, items } = data;

  return (
    <section className="w-full pt-0 pb-12 md:pb-20 px-4 md:px-16 bg-white flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-medium leading-[1.4] text-black">
          {title} <br />
          <span className="text-[#6364FF]">{highlight}</span>
        </h2>
      </div>

      {/* Images Grid (Static only) */}
      <div className="w-full max-w-[1445px] flex flex-wrap justify-center gap-8 md:gap-x-40 md:gap-y-[84px]">
        {items.map((item, index) => {
          const PortfolioComponent = item.image;
          return (
            <div
              key={index}
              className="w-full md:w-[498px] h-auto md:h-[300px] aspect-video md:aspect-auto overflow-hidden md:rounded-none"
            >
              {PortfolioComponent ? (
                <PortfolioComponent className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <span>Image {index + 1}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicePortfolio;
