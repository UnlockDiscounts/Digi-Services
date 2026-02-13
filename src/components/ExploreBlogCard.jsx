import { Link } from "react-router-dom";

import { ArrowIcon } from "./svg";

const ExploreBlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-2xl flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 group/card">
      {/* Image Container */}
      <div className="w-full relative p-3 pb-0 grid place-items-center">
        <div className="relative w-full h-54 overflow-hidden rounded-lg">
          {(() => {
            const MainImage = blog.images?.[0]; // Get the first image (Component or URL)
            return typeof MainImage === "function" ? (
              <MainImage className="w-full h-full object-cover" />
            ) : (
              <img
                src={MainImage || ""}
                alt={blog.header}
                className="w-full h-full object-cover"
              />
            );
          })()}

          {/* Read More Button */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
            <Link
              to={`/blog/${blog._id}`}
              className="bg-white px-2.5 py-0.5 rounded-2xl shadow-lg text-[#473CF0] text-sm font-medium leading-normal inline-flex items-center gap-0 group transition-all duration-300 hover:gap-2 hover:-translate-x-1 hover:bg-gray-50"
            >
              Read more
              <ArrowIcon className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="px-6 pt-4 pb-6 flex flex-col items-center">
        <p className="text-xs font-normal text-black/50 leading-normal mb-2 tracking-normal">
          {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}
        </p>

        <h3 className="text-2xl font-medium leading-[1.2] mb-2 text-black tracking-[-0.02em] flex-1 text-center min-h-16 group-hover/card:text-[#4F46E5] transition-colors duration-300">
          {blog.header}
        </h3>
      </div>
    </div>
  );
};

export default ExploreBlogCard;
