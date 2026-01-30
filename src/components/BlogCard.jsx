import { Link } from "react-router-dom";

import { ArrowIcon } from "./svg";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-auto min-h-[438px] w-full max-w-[377px] mx-auto hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full pt-3 px-2.5">
        <blog.image className="w-full h-54 object-cover rounded-lg bg-[#B5B5B5]" />
      </div>

      <div className="pb-7 pt-0 flex flex-col flex-1 items-center">
        <p className="mt-[9px] w-full max-w-[262px] mx-auto text-xs font-normal leading-none text-center text-[#00000080]">
          {blog.author} {blog.date}
        </p>

        <h3 className="mt-[15px] w-full max-w-[353px] px-2 mx-auto font-medium text-2xl leading-[1.2] tracking-[-0.02em] text-center text-black">
          {blog.title}
        </h3>

        <div className="mt-auto w-[78px] h-[21px] mx-auto flex justify-center items-center gap-2 pt-4">
          <Link
            to={`/blog/${blog.id}`}
            className="text-sm font-medium leading-none whitespace-nowrap inline-flex items-center gap-2 group transition-transform duration-300 hover:-translate-x-1 text-[#473CF0]"
          >
            Read more
            <ArrowIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#473CF0]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
