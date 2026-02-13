import { Link } from "react-router-dom";

const ServiceOverviewCard = ({ service }) => {
  const { title, description, Icon } = service;
  // Create slug from title
  const slug = title.toLowerCase().replace(/\s+/g, '-');


  return (
    <>
      {/* MOBILE VIEW - Responsive Layout */}
      <div className="md:hidden group relative bg-white rounded-2xl w-full h-auto overflow-hidden transition-all duration-300 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] hover:shadow-[0px_8px_16px_0px_#00000040]">
        <div className="flex flex-col items-start justify-start pt-4 px-4 gap-3">
          {/* Image Container */}
          <div className="w-full h-[140px] overflow-hidden rounded-xl">
            <img 
              src={service.files?.[0] || ""} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Title */}
          <h3 className="w-full text-lg font-medium leading-[1.2] text-black text-left tracking-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="w-full text-sm font-normal leading-normal text-black text-left">
            {description}
          </p>

          {/* Explore Button */}
          <Link to={`/services/${slug}`} className="w-full pb-4">
            <button className="w-full h-10 py-2 px-4 rounded-xl bg-[#6364FF] text-white flex items-center justify-center font-medium text-sm hover:bg-[#5253E8] transition-colors duration-200">
              Explore
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP VIEW - Hover Effect */}
      <div className="hidden md:block group relative bg-white rounded-2xl w-full h-auto min-h-[450px] lg:min-h-[500px] overflow-hidden transition-all duration-300 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] hover:shadow-[0px_8px_16px_0px_#00000040]">
        {/* DEFAULT VIEW (Image + Title) */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-6 md:pt-8 px-6 md:px-8 gap-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none group-hover:pointer-events-none">
          {/* Image Container (Top) */}
          <div className="w-full h-48 lg:h-56 overflow-hidden rounded-2xl">
            <img 
              src={service.files?.[0] || ""} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Title (Bottom) */}
          <h3 className="w-full h-auto text-3xl lg:text-[40px] font-medium leading-[1.2] text-black text-center flex items-center justify-center tracking-tight px-2 line-clamp-3">
            {title}
          </h3>
        </div>

        {/* HOVER VIEW (Title + Desc + Button) */}
        <div className="absolute inset-0 flex flex-col items-start justify-start pt-6 md:pt-8 px-6 md:px-8 gap-4 bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 overflow-y-auto">
          {/* Top: Title */}
          <h3 className="w-full text-3xl lg:text-[40px] font-medium leading-[1.2] text-black text-left tracking-tight flex-shrink-0">
            {title}
          </h3>

          {/* Middle: Description */}
          <p className="w-full text-lg lg:text-xl font-normal leading-normal text-black text-left flex-grow">
            {description}
          </p>

          {/* Bottom: Explore Button */}
          <Link to={`/services/${slug}`} className="flex-shrink-0">
            <button className="w-[120px] h-12 py-2 px-5 gap-2.5 rounded-2xl bg-[#6364FF] text-white flex items-center justify-center font-medium hover:bg-[#5253E8] transition-colors duration-200">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceOverviewCard;
