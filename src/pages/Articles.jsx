import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

import BlogCard from "../components/BlogCard";
import ArticlesHeroCurve1 from "../components/svg/ArticlesHeroCurve1";
import ArticlesHeroCurve2 from "../components/svg/ArticlesHeroCurve2";

import { blogs as dummyBlogs } from "../data/dummyblogs";
// import { getAllBlogs } from "../api/blogService";

const Articles = () => {
  const [activeTab, setActiveTab] = useState("All Blogs");
  const [blogs, setBlogs] = useState(dummyBlogs);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const data = await getAllBlogs();
  //       setBlogs(data);
  //     } catch (error) {
  //       console.error("Failed to fetch blogs:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  const filteredBlogs =
    activeTab === "All Blogs"
      ? blogs
      : blogs.filter((blog) => blog.category === activeTab);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[350px] md:min-h-[425px] flex flex-col justify-center text-center text-white overflow-hidden py-10 md:py-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(90deg, #FFCCF2 0%, #977DFF 50%, #0033FF 100%)",
          }}
        ></div>

        {/* Hero Curves (Static only) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <ArticlesHeroCurve1 className="absolute rotate-[-20deg] md:rotate-0 -top-10 left-[-60px] md:bottom-auto md:top-0 md:-left-2.5 w-[150%] md:w-auto h-auto opacity-60 md:opacity-100" />
          <ArticlesHeroCurve2 className="absolute top-[90px] md:top-[30px] right-[-50px] w-full md:w-auto h-auto opacity-60 md:opacity-100" />
        </div>

        <div className="relative z-10 px-6">
          <h1 className="h-auto md:h-[72px] flex items-center justify-center text-3xl md:text-5xl font-bold leading-tight md:leading-none tracking-normal mb-6 md:mb-9">
            Explore our Blogs
          </h1>

          <p className="max-w-[1184px] mx-auto text-base md:text-xl font-normal leading-6 tracking-[-0.02em] text-center text-white">
            Read our latest Articles authored by industry specialists. Stay
            informed on regulatory updates and digital trends, empowering you
            with trusted expertise for every business and career decision.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="max-w-[1215px] mx-auto mt-6 md:mt-10 mb-10 md:mb-[67px]">
        {/* Mobile: Horizontal Scroll */}
        <div className="flex flex-nowrap md:flex-wrap gap-3 md:gap-5 h-auto lg:h-14 items-center mb-8 md:mb-14 overflow-x-auto justify-start md:justify-center px-4 md:px-0 scrollbar-hide">
          {[
            "All Blogs",
            "Website Development",
            "Social Media Management",
            "Resume Building",
          ].map((label, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(label)}
              className={`flex-shrink-0 h-auto px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl border text-sm md:text-2xl font-normal leading-none whitespace-nowrap transition-all cursor-pointer hover:shadow-xl ${
                activeTab === label
                  ? "bg-[#6364FF] text-white border-[#B5B5B5] shadow-lg shadow-indigo-200"
                  : "bg-white text-black border-[#B5B5B5] hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CONDITIONALLY RENDER CONTENT */}
        {loading ? (
          <div className="text-center py-20 text-xl font-medium">
            Loading blogs...
          </div>
        ) : (
          <>
            {/* BLOG GRID */}
            <div className="max-w-[1193px] mx-auto rounded-2xl grid gap-x-8 gap-y-8 md:gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 text-xl py-10">
                  No blogs found in this category.
                </div>
              )}
            </div>

            {/* LOAD MORE BLOGS BUTTON */}
            {activeTab === "All Blogs" && filteredBlogs.length > 0 && (
              <div className="text-center mt-16">
                <button className="w-[264px] h-14 px-[15px] py-2.5 rounded-3xl flex items-center justify-center gap-2.5 mx-auto bg-white border border-[#0412C0] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] text-2xl font-normal leading-none text-black transition-all duration-300 hover:bg-[#6364FF] hover:text-white hover:border-[#6364FF]">
                  Load More Blogs <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Articles;
