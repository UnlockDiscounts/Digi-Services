const ServiceOverviewCard = ({ service }) => {
  const { title, description, Icon } = service;


  return (
    <div className="group relative bg-white rounded-2xl w-full max-w-[400px] h-auto min-h-[400px] md:h-[500px] py-6 px-3 md:px-8 gap-[27px] overflow-hidden transition-all duration-300 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]">
      {/* DEFAULT VIEW (Image + Title) */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-6 px-6 md:px-8 gap-[27px] transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none group-hover:pointer-events-none">
        {/* Image Container (Top) */}
        <div className="w-full h-[180px] md:h-56 overflow-hidden rounded-t-2xl">
          <Icon
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          />
        </div>

        {/* Title (Bottom) */}
        <h3 className="w-full h-auto md:h-24 text-3xl md:text-[40px] font-medium leading-[1.2] text-black text-center flex items-center justify-center tracking-tight px-2 md:px-0">
          {title}
        </h3>
      </div>

      {/* HOVER VIEW (Title + Desc + Button) */}
      <div className="absolute inset-0 flex flex-col items-start justify-start pt-6 px-3 md:px-8 gap-4 bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        {/* Top: Title */}
        <h3 className="w-full text-3xl md:text-[40px] font-medium leading-[1.2] text-black text-left tracking-tight flex-shrink-0">
          {title}
        </h3>

        {/* Middle: Description */}
        <p className="w-full text-lg md:text-xl font-normal leading-normal text-black text-left">
          {description}
        </p>

        {/* Bottom: Explore Button */}
        <button className="w-[120px] h-12 py-2 px-5 gap-2.5 rounded-2xl bg-[#6364FF] text-white flex items-center justify-center font-medium">
          Explore
        </button>
      </div>
    </div>
  );
};

export default ServiceOverviewCard;
