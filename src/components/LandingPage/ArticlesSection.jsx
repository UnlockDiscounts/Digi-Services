import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { blogs } from "../../data/dummyblogs.js";
import SvgArrowIcon from "../../components/svg/ArrowIcon.jsx";

export function ArticlesSection() {
  // Use the top 3 blogs from dummy data
  const displayedArticles = blogs.slice(0, 3);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Poppins'] font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          Click to Learn. Click to Grow.
        </motion.h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
          {displayedArticles.map((article, index) => {
            const ArticleImage = article.images?.[0]; // Access the first image (Component or URL)

            return (
              <Link to={`/blog/${article._id}`} key={index}>
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px] overflow-hidden h-[340px] sm:h-[360px] md:h-[375px] flex flex-col cursor-pointer group relative"
                >
                  {/* Image Container */}
                  <div className="relative h-[190px] sm:h-[200px] md:h-[216px] overflow-hidden m-2 sm:m-2.5 md:m-3 rounded-[6px] sm:rounded-[7px] md:rounded-[8px]">
                    <div className="absolute inset-0 bg-[#b5b5b5]" />

                    {/* Render Image */}
                    <motion.div
                      className="w-full h-full relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {typeof ArticleImage === "function" ? (
                        <ArticleImage className="w-full h-full object-cover" />
                      ) : (
                        <img
                          src={ArticleImage}
                          alt={article.header}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </motion.div>

                    {/* Read More Button */}
                    <div className="absolute bottom-3 sm:bottom-3.5 md:bottom-4 left-1/2 -translate-x-1/2 z-10 w-max group/readbtn">
                      <button className="bg-white px-2.5 sm:px-3 py-1 rounded-[14px] sm:rounded-[15px] md:rounded-[16px] shadow-lg text-[#473cf0] text-xs sm:text-sm font-['Poppins'] font-medium flex items-center gap-0 group-hover/readbtn:gap-2 transition-all duration-300 cursor-pointer">
                        <span>Read more</span>
                        <SvgArrowIcon className="w-6 h-6 origin-left transition-all duration-300 scale-0 group-hover/readbtn:scale-100" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-5 md:px-6 text-center">
                    <p className="font-['Poppins'] text-[rgba(0,0,0,0.5)] text-[10px] sm:text-xs mb-2 sm:mb-2.5 md:mb-3">
                      {article.date}
                    </p>
                    <h3 className="font-['Poppins'] font-medium text-[#202020] text-lg sm:text-xl md:text-xl lg:text-2xl leading-[1.2] tracking-[-0.48px]">
                      {article.header}
                    </h3>
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
