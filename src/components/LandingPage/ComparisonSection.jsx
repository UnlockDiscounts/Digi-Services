import { motion } from "motion/react";
import { X, Check, Users, DollarSign, Zap, TrendingUp } from "lucide-react";

const competitorPoints = [
  "Often charge upfront fees",
  "Complicated Paper Work",
  "Infrequent Communication",
  "No Customize Plan"
];

const ourPoints = [
  "Free Initial Consultation",
  "Hassle-free Documentation Management",
  "Real-Time Updates",
  "Tailored Package"
];

const competitorBadges = [
  { icon: Users, label: "Limited Support", rotate: "20.12deg", top: "40%", left: "51%" },
  { icon: DollarSign, label: "Hidden Charges", rotate: "-46.46deg", top: "30%", left: "5%" },
  { icon: Zap, label: "Lack of Transparency", rotate: "-18.26deg", top: "5%", left: "32%" },
  { icon: TrendingUp, label: "Slower Turnaround", rotate: "-6.22deg", top: "67%", left: "12%" }
];

const ourBadges = [
  { label: "Tailored Package", rotate: "0deg", color: "bg-gradient-to-br from-[#0d37ff] to-[#010101]" },
  { label: "Fixed Price", rotate: "0deg", color: "bg-gradient-to-br from-[#0d37ff] to-[#010101]" },
  { label: "24x7 Support", rotate: "0deg", color: "bg-gradient-to-br from-[#0d37ff] to-[#010101]" },
  { label: "Faster Turnaround", rotate: "0deg", color: "bg-gradient-to-br from-[#0d37ff] to-[#010101]" }
];

export function ComparisonSection() {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Poppins'] font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          The Smart Choice for Complete Digital Service.
        </motion.h2>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Competitors Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-5 sm:p-6 md:p-7 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6"
          >
            <h3 className="font-['Poppins'] font-bold text-[#6c6c6c] text-xl sm:text-2xl md:text-[28px] lg:text-[32px]">
              Competitors
            </h3>

            {/* Competitor Points */}
            <div className="space-y-3 sm:space-y-4">
              {competitorPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#F84747] flex-shrink-0" strokeWidth={3} />
                  <span className="font-['Poppins'] text-black text-sm sm:text-base md:text-lg lg:text-[20px]">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Animated Badges Background */}
            <div className="bg-[#e4e4e4] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] h-[180px] sm:h-[200px] md:h-[240px] lg:h-[270px] relative overflow-hidden mt-4 sm:mt-5 md:mt-6">
              {competitorBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="absolute bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px] px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 shadow-sm"
                  style={{
                    top: badge.top,
                    left: badge.left,
                    transform: `rotate(${badge.rotate})`
                  }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="bg-[rgba(228,75,75,0.2)] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-1.5 sm:p-2">
                      <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F84747]" />
                    </div>
                    <span className="font-['Poppins'] font-medium text-black text-[10px] sm:text-xs md:text-sm lg:text-[16px] whitespace-nowrap">
                      {badge.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* UnlockDigiServices Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-5 sm:p-6 md:p-7 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6"
          >
            <h3 className="font-['Poppins'] font-bold text-[#473cf0] text-xl sm:text-2xl md:text-[28px] lg:text-[32px]">
              UnlockDigiServices
            </h3>

            {/* Our Points */}
            <div className="space-y-3 sm:space-y-4">
              {ourPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#14AE5C] flex-shrink-0" strokeWidth={3} />
                  <span className="font-['Poppins'] text-black text-sm sm:text-base md:text-lg lg:text-[20px]">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Animated Badges Background */}
            <div 
              className="rounded-[16px] sm:rounded-[18px] md:rounded-[20px] h-[180px] sm:h-[200px] md:h-[240px] lg:h-[270px] relative overflow-hidden mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 md:p-6 lg:p-8"
              style={{ backgroundImage: "linear-gradient(115.784deg, rgb(13, 55, 255) 2.7356%, rgb(1, 1, 1) 99.242%)" }}
            >
              <div className="flex flex-col gap-1.5 sm:gap-2">
                {ourBadges.slice(0, 1).map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px] px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="bg-[rgba(43,71,253,0.2)] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-1.5 sm:p-2">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#2B47FD]" />
                      </div>
                      <span className="font-['Poppins'] font-medium text-black text-[10px] sm:text-xs md:text-sm lg:text-[16px]">
                        {badge.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
                
                <div className="flex gap-1.5 sm:gap-2">
                  {ourBadges.slice(1, 3).map((badge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 1) * 0.15, duration: 0.6 }}
                      className="bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px] px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 flex-1"
                    >
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="bg-[rgba(43,71,253,0.2)] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-1.5 sm:p-2">
                          {index === 0 ? <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-[#2B47FD]" /> : <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#2B47FD]" />}
                        </div>
                        <span className="font-['Poppins'] font-medium text-black text-[10px] sm:text-xs md:text-sm lg:text-[16px]">
                          {badge.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {ourBadges.slice(3).map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 3) * 0.15, duration: 0.6 }}
                    className="bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px] px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="bg-[rgba(43,71,253,0.2)] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-1.5 sm:p-2">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#2B47FD]" />
                      </div>
                      <span className="font-['Poppins'] font-medium text-black text-[10px] sm:text-xs md:text-sm lg:text-[16px]">
                        {badge.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
