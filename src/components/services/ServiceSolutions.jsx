import { useState } from "react";

const ServiceSolutions = ({ data }) => {
  if (!data) return null;
  const { title, highlight, cards } = data;

  // Group cards into columns of 2
  const columns = [];
  for (let i = 0; i < cards.length; i += 2) {
    if (cards[i + 1]) {
      columns.push([cards[i], cards[i + 1]]);
    }
  }

  return (
    <section className="w-full py-12 px-4 md:px-16 bg-white">
      <div className="w-full max-w-[1441px] mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-medium leading-[1.4] text-black">
            {title} <br />
            <span className="text-[#6364FF]">{highlight}</span>
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full max-w-[1324px]">
          {columns.map((columnCards, colIndex) => (
            <SolutionColumn key={colIndex} columnCards={columnCards} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Component for a Single Column handling its own hover state
const SolutionColumn = ({ columnCards }) => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <div className="flex flex-col gap-8 w-full md:w-[420px] h-auto md:h-[550px]">
      {columnCards.map((card, index) => {
        // Determine state: 'expanded', 'compressed', or 'default'
        let state = "default";
        if (hoveredCardIndex !== null) {
          state = hoveredCardIndex === index ? "expanded" : "compressed";
        }

        // Dynamic classes based on state
        const heightClass =
          state === "expanded"
            ? "h-[300px]"
            : state === "compressed"
            ? "h-[218px]"
            : "h-[259px]";

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            className={`w-full ${heightClass} bg-[#6364FF] rounded-2xl flex flex-col items-start justify-center px-8 transition-all duration-300 ease-in-out overflow-hidden`}
          >
            <p className="text-[32px] font-bold leading-[1.4] text-white">
              {card.title}
            </p>

            {/* Description - Visible only when expanded */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                state === "expanded"
                  ? "max-h-40 opacity-100 mt-4"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <p
                className="text-white text-xl font-normal leading-[1.4] tracking-normal"
                style={{ fontFamily: "Poppins" }}
              >
                {card.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSolutions;
