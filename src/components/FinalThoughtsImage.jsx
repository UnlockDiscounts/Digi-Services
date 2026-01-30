import { useState, useEffect } from "react";

import { FinalThoughts1, FinalThoughts2 } from "./svg";

const FinalThoughtsImage = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center my-10">
      <div className="relative w-full h-auto flex justify-center">
        <div
          className={`w-full transition-opacity duration-500 ${
            showFirst ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <FinalThoughts1 className="w-full h-auto" />
        </div>

        <div
          className={`w-full transition-opacity duration-500 ${
            !showFirst ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <FinalThoughts2 className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default FinalThoughtsImage;
