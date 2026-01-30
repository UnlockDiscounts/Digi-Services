import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { PricingSection } from "./PricingSection";
import { ComparisonSection } from "./ComparisonSection";
import { AboutSection } from "./AboutSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ArticlesSection } from "./ArticlesSection";
import { useEffect } from "react";

export function LandingPage() {
  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div 
      className="font-['Poppins',sans-serif] relative w-full min-h-screen overflow-x-hidden" 
      style={{ 
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 7125\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(4.4087e-15 356.25 -72 2.1814e-14 720 3562.5)\\' opacity=\\'1\\'><rect height=\\'190\\' width=\\'190\\' fill=\\'url(%23grad)\\' id=\\'quad\\' shape-rendering=\\'crispEdges\\'/><use href=\\'%23quad\\' transform=\\'scale(1 -1)\\'/><use href=\\'%23quad\\' transform=\\'scale(-1 1)\\'/><use href=\\'%23quad\\' transform=\\'scale(-1 -1)\\'/></g><defs><linearGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' x2=\\'5\\' y2=\\'5\\'><stop stop-color=\\'rgba(164,127,223,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(131,114,239,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(99,100,255,1)\\' offset=\\'1\\'/></linearGradient></defs></svg>')" 
      }}
    >
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ComparisonSection />
      <AboutSection />
      <TestimonialsSection />
      <ArticlesSection />
    </div>
  );
}