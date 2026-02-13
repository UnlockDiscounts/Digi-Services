import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
    svgr(),
  ],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         "react-vendor": ["react", "react-dom", "react-router-dom"],
  //         "ui-components": [
  //           "./src/components/NavBar.jsx",
  //           "./src/components/Footer.jsx",
  //           "./src/components/sidebar/sidebar.jsx",
  //         ],
  //         landing: [
  //           "./src/components/LandingPage/LandingPage.tsx",
  //           "./src/components/LandingPage/HeroSection.jsx",
  //           "./src/components/LandingPage/AboutSection.jsx",
  //           "./src/components/LandingPage/ServicesSection.jsx",
  //           "./src/components/LandingPage/PricingSection.jsx",
  //           "./src/components/LandingPage/TestimonialsSection.jsx",
  //           "./src/components/LandingPage/ArticlesSection.jsx",
  //           "./src/components/LandingPage/ComparisonSection.jsx",
  //         ],
  //         services: [
  //           "./src/pages/ServiceCategory.jsx",
  //           "./src/pages/ServiceDetail.jsx",
  //           "./src/components/services/service.jsx",
  //         ],
  //         blogs: [
  //           "./src/pages/Articles.jsx",
  //           "./src/pages/Blog.jsx",
  //           "./src/components/blogs/blogs.jsx",
  //         ],
  //       },
  //     },
  //   },
  //   chunkSizeWarningLimit: 1000,
  // },
});
