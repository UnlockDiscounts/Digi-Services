import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ExploreBlogCard from "../components/ExploreBlogCard";
// import StackSlider from "../components/StackSlider";
// import FinalThoughtsImage from "../components/FinalThoughtsImage";

// import { blogDetails } from "../data/dummyBlogContent";
// import { blogs } from "../data/dummyblogs";
import { blogs as dummyBlogs } from "../data/dummyblogs.js";
// import { getBlogById, getAllBlogs } from "../api/blogService";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [exploreBlogs, setExploreBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);
    //   try {
    //     // Fetch the single blog
    //     const blogData = await getBlogById(id);
    //     console.log(blogData);
    //     setBlog(blogData);
    //
    //     // Fetch all blogs for "Explore More"
    //     const allBlogs = await getAllBlogs();
    //     // Filter out current blog from explore more section
    //     setExploreBlogs(allBlogs.filter((b) => b._id !== id));
    //   } catch (error) {
    //     console.error("Failed to fetch blog data:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // Dummy Data Implementation
    if (id) {
      window.scrollTo(0, 0);
      const foundBlog = dummyBlogs.find((b) => b._id === id);
      setBlog(foundBlog || null);
      if (foundBlog) {
        // Filter out current blog from explore more section
        const others = dummyBlogs.filter((b) => b._id !== id);
        setExploreBlogs(others);
      }
      setLoading(false);
    }
  }, [id]);

  // Auto-rotate slider every 4 seconds
  useEffect(() => {
    if (exploreBlogs.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 3) % exploreBlogs.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [exploreBlogs.length]);

  // Get current 3 blogs
  const displayedBlogs = exploreBlogs.slice(
    currentSlideIndex,
    currentSlideIndex + 3,
  );

  if (!loading && !blog)
    return <div className="text-center py-20">Blog not found.</div>;

  return (
    <div>
      {/* HERO */}
      <section
        className="h-[400px] md:h-[595px] text-white relative flex flex-col justify-start"
        style={{
          background:
            "linear-gradient(90deg, #0334FF 0%, #977EFF 50%, #F8C7F3 100%)",
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto relative h-full flex flex-col justify-start pt-32 md:pt-[228px] px-6 md:px-[118px]">
          {/* Main Heading Container */}
          <div className="w-full md:w-[796px]">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-snug text-left">
              {loading ? "Loading..." : blog?.header}
            </h1>
            <p className="text-xs font-semibold text-[#E6E6E6E5] leading-none text-left">
              {loading
                ? ""
                : blog?.date ||
                  (blog?.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString()
                    : "")}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1312px] mx-auto px-6 mt-14 mb-20 space-y-6">
        <div className="text-black leading-normal text-lg md:text-2xl font-normal mb-6 whitespace-pre-wrap">
          {loading
            ? "Loading content..."
            : blog?.description || "Content not available."}
        </div>
      </section>

      {/* EXPLORE MORE BLOGS */}
      <section className="pb-20 pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-medium mb-12 text-black text-center leading-none">
            Explore More Blogs
          </h3>

          {/* Animated Grid Container */}
          <div className="grid gap-x-8 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ease-in-out">
            {displayedBlogs.map((blog) => (
              <ExploreBlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
