import { motion } from "motion/react";
import article1 from "../../assets/article1.svg";
import article2 from "../../assets/article2.svg";
import article3 from "../../assets/article3.svg";

const articles = [
  {
    title: "7 Proven Tips to Transform Your Resume from Ordinary to Outstanding",
    date: "September 17, 2025",
    image: article1
  },
  {
    title: "The Hidden Dangers of Outdated Websites",
    date: "September 17, 2025",
    image: article2
  },
  {
    title: "12 Powerful ITR Filing Secrets to Unlock Maximum Tax Refunds",
    date: "September 17, 2025",
    image: article3
  }
];

export function ArticlesSection() {
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
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[16px] overflow-hidden h-[375px] flex flex-col cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-[216px] overflow-hidden m-3">
                <div className="absolute inset-0 bg-[#b5b5b5] rounded-[8px]" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={article.image} 
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
                />
                {/* <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#473cf0] font-['Poppins'] font-medium text-sm px-3 py-1 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more
                </button> */}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <p className="font-['Poppins'] text-[rgba(0,0,0,0.5)] text-xs mb-3">
                  {article.date}
                </p>
                <h3 className="font-['Poppins'] font-medium text-[#202020] text-xl sm:text-2xl leading-[1.2] tracking-[-0.48px]">
                  {article.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
