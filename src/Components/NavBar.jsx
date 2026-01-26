// import { Menu, ChevronDown } from 'lucide-react';
// import { useState } from 'react';
// import logo from "../assets/logo.svg";

// export default function NavBar() {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//   <nav className="w-[1100px] h-[80px] mx-auto bg-[#6364FF33] border-2 border-[#6364FF33] rounded-lg shadow-lg backdrop-blur-sm">
//   <div className="h-full px-[60px] flex items-center">
//     {/* Logo - left fixed */}
//     <div className="w-[40px] h-[40px] flex-shrink-0">
//       <img src={logo} alt="Logo" className="w-full h-full object-cover" />
//     </div>

//     {/* Links - start right after logo with fixed gaps */}
//     <div className="ml-[145px] flex items-center gap-[90px] flex-1">
//       <a href="/" className="!text-white font-medium text-[20px] font-semibold hover:opacity-80 transition-opacity">
//         Home
//       </a>

//       <div className="relative">
//         <button
//           onClick={() => setIsServicesOpen(!isServicesOpen)}
//           className="!text-white font-medium text-[20px] font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity"
//         >
//           Services
//           <ChevronDown className="w-6 h-6" />
//         </button>
//         {isServicesOpen && (
//           <div className="absolute top-full mt-2 w-48 bg-[#6364FF33] border-2 border-white/50 rounded-lg shadow-lg py-2 z-50 backdrop-blur-sm left-0">
//             <a href="/service1" className="block px-4 py-2 !text-white hover:bg-white/20 hover:rounded transition-all">
//               Service 1
//             </a>
//             <a href="/service2" className="block px-4 py-2 !text-white hover:bg-white/20 hover:rounded transition-all">
//               Service 2
//             </a>
//             <a href="/service3" className="block px-4 py-2 !text-white hover:bg-white/20 hover:rounded transition-all">
//               Service 3
//             </a>
//           </div>
//         )}
//       </div>

//       <a href="/about" className="!text-white font-medium text-[20px] font-semibold hover:opacity-80 transition-opacity">
//         About
//       </a>

//       <a href="/blogs" className="!text-white font-medium text-[20px] font-semibold hover:opacity-80 transition-opacity">
//         Blogs
//       </a>
//     </div>

//     {/* Contact button - fixed right */}
    
// <a href="/contact" className="block">
//   <button className="bg-white !text-black ml-45px px-6 py-2 rounded-lg font-semibold text-[20px] hover:bg-gray-100 hover:shadow-lg transition-all w-[160px]">
//       Contact Us
//     </button>
// </a>


//     {/* Mobile menu button - hidden on desktop */}
//     <div className="md:hidden ml-4">
//       <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="!text-white hover:opacity-80 transition-opacity">
//         <Menu className="w-6 h-6" />
//       </button>
//     </div>
//   </div>

//   {/* Mobile menu dropdown - unchanged */}
//   {isMobileMenuOpen && (
//     <div className="md:hidden pb-4 space-y-3 bg-[#6364FF33] rounded-b-lg backdrop-blur-sm p-4 absolute top-full left-0 w-full z-50">
//       {/* Your existing mobile menu code */}
//       <a href="#home" className="block !text-white hover:opacity-80 transition-opacity font-medium">Home</a>
//       {/* ... rest unchanged */}
//     </div>
//   )}
// </nav>
//   );
// }




import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/logo.svg";

export default function NavBar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1100px] lg:w-[1100px] h-20 lg:h-[80px] mx-auto bg-[#6364FF33] border-2 border-[#6364FF33] rounded-lg shadow-lg backdrop-blur-sm px-4 sm:px-6 lg:px-[60px]">
      <div className="h-full flex items-center justify-between lg:justify-start">
        {/* Logo - left fixed */}
        <div className="w-10 h-10 lg:w-[40px] lg:h-[40px] flex-shrink-0">
          <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-full" />
        </div>

        {/* Desktop Links - hidden on mobile */}
        <div className="hidden lg:ml-[145px] lg:flex lg:items-center lg:gap-[90px] lg:flex-1">
          <a href="/" className="!text-white font-medium text-base lg:text-[20px] font-semibold hover:opacity-80 transition-opacity">
            Home
          </a>

          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="!text-white font-medium text-base lg:text-[20px] font-semibold flex items-center gap-1 lg:gap-2 hover:opacity-80 transition-opacity"
            >
              Services
              <ChevronDown className="w-4 h-4 lg:w-6 lg:h-6" />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full mt-2 w-48 bg-[#6364FF33] border-2 border-white/50 rounded-lg shadow-lg py-2 z-50 backdrop-blur-sm left-0 lg:left-auto">
                <a href="/service1" className="block px-4 py-2 !text-white hover:bg-white/20 hover:rounded transition-all text-sm">
                  Service 1
                </a>
                <a href="/service2" className="block px-4 py-2 !text-white hover:bg-white/20 hover:rounded transition-all text-sm">
                  Service 2
                </a>
                <a href="/service3" className="block px-4 py-2 !text-white hover:bg-white/20 hover:rounded transition-all text-sm">
                  Service 3
                </a>
              </div>
            )}
          </div>

          <a href="/about" className="!text-white font-medium text-base lg:text-[20px] font-semibold hover:opacity-80 transition-opacity">
            About
          </a>

          <a href="/blogs" className="!text-white font-medium text-base lg:text-[20px] font-semibold hover:opacity-80 transition-opacity">
            Blogs
          </a>
        </div>

        {/* Contact button - right side */}
        <a href="/contact" className="hidden sm:block lg:ml-[45px]">
          <button className="bg-white !text-black px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-semibold text-sm lg:text-[20px] hover:bg-gray-100 hover:shadow-lg transition-all w-32 lg:w-[160px] ml-auto lg:ml-0">
            Contact Us
          </button>
        </a>

        {/* Mobile menu button */}
        <div className="ml-4 lg:hidden">
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
        <div className="lg:hidden pb-4 space-y-3 bg-[#6364FF33] border-t border-white/20 rounded-b-lg backdrop-blur-sm p-4 mt-1">
          <a href="/" className="block !text-white hover:opacity-80 transition-opacity font-medium py-2 px-2 rounded">Home</a>
          <div className="pl-4 space-y-2">
            <details className="group">
              <summary className="!text-white font-medium py-2 px-2 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2">
                Services <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-1 space-y-1 pl-2">
                <a href="/service1" className="block !text-white/90 hover:opacity-100 py-1 px-3 rounded text-sm hover:bg-white/10 transition-all">Service 1</a>
                <a href="/service2" className="block !text-white/90 hover:opacity-100 py-1 px-3 rounded text-sm hover:bg-white/10 transition-all">Service 2</a>
                <a href="/service3" className="block !text-white/90 hover:opacity-100 py-1 px-3 rounded text-sm hover:bg-white/10 transition-all">Service 3</a>
              </div>
            </details>
          </div>
          <a href="/about" className="block !text-white hover:opacity-80 transition-opacity font-medium py-2 px-2 rounded">About</a>
          <a href="/blogs" className="block !text-white hover:opacity-80 transition-opacity font-medium py-2 px-2 rounded">Blogs</a>
          <a href="/contact" className="block">
            <button className="w-full bg-white !text-black px-4 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 hover:shadow-lg transition-all mt-2">
              Contact Us
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

