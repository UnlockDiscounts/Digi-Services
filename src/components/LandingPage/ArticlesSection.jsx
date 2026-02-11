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
          className="font-['Poppins'] font-medium text-white text-3xl sm:text-[48px] text-center mb-12 sm:mb-16"
        >
          Click to Learn. Click to Grow.
        </motion.h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
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
                  className="bg-white rounded-[16px] overflow-hidden h-[375px] flex flex-col cursor-pointer group relative"
                >
                  {/* Image Container */}
                  <div className="relative h-[216px] overflow-hidden m-3 rounded-[8px]">
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
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-max">
                      <div className="bg-white px-3 py-1 rounded-[16px] shadow-lg text-[#473cf0] text-sm font-['Poppins'] font-medium flex items-center gap-0 group-hover:gap-2 transition-all duration-300">
                        Read more
                        <SvgArrowIcon className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                    <p className="font-['Poppins'] text-[rgba(0,0,0,0.5)] text-xs mb-3">
                      {article.date}
                    </p>
                    <h3 className="font-['Poppins'] font-medium text-[#202020] text-xl sm:text-2xl leading-[1.2] tracking-[-0.48px]">
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
