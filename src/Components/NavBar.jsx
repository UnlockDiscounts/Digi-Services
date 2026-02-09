
import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1100px] min-w-[350px] h-20 lg:h-[80px] mx-auto bg-[#6364FF33] border-2 border-[#6364FF33] rounded-lg shadow-lg backdrop-blur-sm px-10 md:px-8 lg:px-[60px]">
      <div className="h-full flex items-center justify-between">
        {/* Logo - left fixed */}
        <div className="w-10 h-10 lg:w-[40px] lg:h-[40px] flex-shrink-0">
          <Link to="/">          
            <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-full" />
          </Link>
        </div>

        {/* Desktop Links - hidden below lg */}
        <div className=" hidden md:flex md:ml-[80px] md:items-center md:gap-[40px] md:flex-1 lg:ml-[145px] lg:items-center lg:gap-[90px] lg:flex-1 mx-auto">
          <a href="/" className="!text-white hover:opacity-80 transition-opacity font-medium text-base xl:text-[20px] font-semibold">
            Home
          </a>

          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="!text-white font-medium text-base xl:text-[20px] font-semibold flex items-center gap-1 xl:gap-2 hover:opacity-80 transition-opacity"
            >
              Services
              <ChevronDown className="w-4 h-4 xl:w-6 xl:h-6" />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full mt-2 w-48 bg-[#6364FF33] border-2 border-white/50 rounded-lg shadow-lg py-2 z-50 backdrop-blur-sm left-0 xl:left-auto">
                <a href="/service1" className="block px-4 py-2 !text-white hover:bg-white/20 hover:rounded transition-all text-sm">
                  Website Building
                </a>
                <a href="/service2" className="block px-4 py-2 !text-white hover:bg-white/20 hover:rounded transition-all  text-sm">
                  Resume Building
                </a>
                <a href="/service3" className="block px-4 py-2 !text-white hover:bg-white/20 hover:rounded transition-all  text-sm">
                  Social media management
                </a>
              </div>
            )}
          </div>

          <a href="/about" className="!text-white font-medium text-base xl:text-[20px] font-semibold hover:opacity-80 transition-opacity">
            About
          </a>

          <a href="/articles" className="!text-white font-medium text-base xl:text-[20px] font-semibold hover:opacity-80   transition-opacity">
            Blogs
          </a>
        </div>

        {/* Contact button - ONLY on full screens (xl+) */}
        <a href="/contact" className="hidden md:block md:ml-4 lg:ml-[45px]">
          <button className="cursor-pointer w-[max-content] bg-white !text-black px-4 py-3 xl:px-6 rounded-lg font-semibold text-sm xl:text-[20px] hover:bg-gray-100 hover:shadow-lg transition-all">
            Contact Us
          </button>
        </a>

        {/* Mobile hamburger - always right */}
        <div className="flex-shrink-0 md:hidden ml-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="!text-white hover:opacity-80 transition-opacity p-1"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      
      {isMobileMenuOpen && (
  <div className="lg:hidden pb-4 space-y-3 bg-gradient-to-b from-blue-500/95 via-indigo-600/95 to-purple-600/95 border-t border-white/50 rounded-b-lg shadow-2xl backdrop-blur-md p-6 mt-1">
    <a href="/" className="block text-white font-semibold text-lg hover:[#4F46E5/90] hover:rounded-xl transition-all py-3 px-4">Home</a>
    
    <div className="pl-6 space-y-2">
      <details className="group">
        <summary className="text-white font-semibold py-3 px-4 cursor-pointer hover:bg-white/20 hover:rounded-xl transition-all flex items-center gap-3">
          Services <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
        </summary>
        <div className="mt-2 space-y-2 pl-4">
          <a href="/service1" className="block text-white/95 hover:bg-white/40 hover:rounded-lg py-2 px-4 text-base font-medium transition-all">Website Building</a>
          <a href="/service2" className="block text-white/95 hover:bg-white/40 hover:rounded-lg py-2 px-4 text-base font-medium transition-all">Resume Building</a>
          <a href="/service3" className="block text-white/95 hover:bg-white/40 hover:rounded-lg py-2 px-4 text-base font-medium transition-all">Social media management</a>
        </div>
      </details>
    </div>
    
    <a href="/about" className="block text-white font-semibold text-lg hover:bg-white/30 hover:rounded-xl transition-all py-3 px-4">About</a>
    <a href="/blogs" className="block text-white font-semibold text-lg hover:bg-white/30 hover:rounded-xl transition-all py-3 px-4">Blogs</a>
    
    <a href="/contact" className="block">
      <button className="w-full bg-white text-black px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:bg-gray-50 hover:shadow-2xl transition-all mt-3">
        Contact Us
      </button>
    </a>
  </div>
)}
    </nav>
  );
}


