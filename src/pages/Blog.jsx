import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ExploreBlogCard from "../components/ExploreBlogCard";
import StackSlider from "../components/StackSlider";
import FinalThoughtsImage from "../components/FinalThoughtsImage";

import { getPostById, getPosts } from "../services/blogApi";

const Blog = () => {
  const { id } = useParams();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-rotate slider every 4 seconds
  useEffect(() => {
    if (relatedBlogs.length === 0) return undefined;
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 3) % relatedBlogs.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [relatedBlogs.length]);

  const displayedBlogs = relatedBlogs.slice(
    currentSlideIndex,
    currentSlideIndex + 3
  );

  const contentBlocks = useMemo(() => {
    if (blog?.content && Array.isArray(blog.content)) {
      return blog.content;
    }

    const blocks = [];
    if (blog?.description) {
      blocks.push({ type: "paragraph", text: blog.description });
    }
    if (blog?.images?.length) {
      blocks.push({ type: "image", src: blog.images[0] });
    } else if (blog?.image) {
      blocks.push({ type: "image", src: blog.image });
    }

    return blocks;
  }, [blog]);

  useEffect(() => {
    let isActive = true;

    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        if (id) {
          const blogData = await getPostById(id);
          if (isActive) {
            setBlog(blogData);
          }
        }

        const posts = await getPosts();
        if (isActive) {
          setRelatedBlogs(posts.filter((item) => item.id !== id));
        }
      } catch (error) {
        if (isActive) {
          setErrorMessage(error?.message || "Failed to load blog.");
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    fetchBlog();
    return () => {
      isActive = false;
    };
  }, [id]);

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
              {blog?.title || (isLoading ? "Loading blog..." : "Blog")}
            </h1>
            <p className="text-xs font-semibold text-[#E6E6E6E5] leading-none text-left">
              {blog?.author} &nbsp;&nbsp; {blog?.date}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1312px] mx-auto px-6 mt-14 mb-20 space-y-6">
        {errorMessage && (
          <p className="text-red-600 text-center">{errorMessage}</p>
        )}
        {isLoading && !blog && (
          <p className="text-center">Loading blog content...</p>
        )}
        {!isLoading && contentBlocks.length === 0 && (
          <p className="text-center">No content available.</p>
        )}
        {contentBlocks.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <p
                key={index}
                className="text-black leading-normal text-lg md:text-2xl font-normal mb-6"
              >
                {block.text}
              </p>
            );
          }

          if (block.type === "heading") {
            const isFinalThoughts = block.className === "final-thoughts";
            return (
              <h2
                key={index}
                className={`text-black leading-normal w-full ${
                  isFinalThoughts
                    ? "text-3xl md:text-5xl font-medium text-center mt-20 mb-10"
                    : "text-2xl md:text-[32px] font-medium text-left mt-12 mb-4"
                } ${
                  block.className === "final-thoughts"
                    ? ""
                    : block.className || ""
                }`}
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === "image") {
            if (block.src === "placeholder_final_thoughts") {
              return <FinalThoughtsImage key={index} />;
            }
            return (
              <img
                key={index}
                src={block.src}
                alt="content-img"
                className="rounded-2xl shadow-lg mx-auto my-10 w-full"
              />
            );
          }

          if (block.type === "stack_slider") {
            return (
              <div key={index} className="-mx-6">
                <StackSlider />
              </div>
            );
          }

          return null;
        })}
      </section>

      {/* EXPLORE MORE BLOGS */}
      <section className="pb-20 pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-medium mb-12 text-black text-center leading-none">
            Explore More Blogs
          </h3>

          {/* Animated Grid Container */}
          <div className="grid gap-x-8 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ease-in-out">
            {displayedBlogs.map((item) => (
              <ExploreBlogCard key={item.id} blog={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
