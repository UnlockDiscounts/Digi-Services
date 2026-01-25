// import { Menu, ChevronDown } from 'lucide-react';
// import { useState } from 'react';
// import logo from "../assets/logo.svg";

// export default function NavBar() {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (

  
//     <nav className="bg-[#6364FF33] border-2 border-[#6364FF33] rounded-lg mx-4 my-4 shadow-lg backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <img src={logo} alt="Logo" className="w-10 h-10" />
//             </div>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="#home"
//               className="text-white font-medium"
//             >
//               Home
//             </a>

//             <div className="relative">
//               <button
//                 onClick={() => setIsServicesOpen(!isServicesOpen)}
//                 className="!text-white font-medium flex items-center gap-1"
//               >
//                 Services
//                 <ChevronDown className="w-4 h-4"/>
//               </button>
//               {isServicesOpen && (
//                 <div className="absolute top-full mt-2 w-48 bg-[#6364FF33] border-2 border-white/50 rounded-lg shadow-lg py-2 z-50 backdrop-blur-sm">
//                   <a
//                     href="#service1"
//                     className="block px-4 py-2 text-[#FFFFFF] hover:bg-white/20 hover:rounded transition-all"
//                   >
//                     Service 1
//                   </a>
//                   <a
//                     href="#service2"
//                     className="block px-4 py-2 text-white hover:bg-white/20 hover:rounded transition-all"
//                   >
//                     Service 2
//                   </a>
//                   <a
//                     href="#service3"
//                     className="block px-4 py-2 text-[#FFFFFF] hover:bg-white/20 hover:rounded transition-all"
//                   >
//                     Service 3
//                   </a>
//                 </div>
//               )}
//             </div>
//             <a
//               href="#about"
//               className="text-[#FFFFFF] hover:opacity-80 transition-opacity font-medium"
//             >
//               About
//             </a>

//             <a
//               href="#blogs"
//               className="text-[#FFFFFF] hover:opacity-80 transition-opacity font-medium"
//             >
//               Blogs
//             </a>

//             <button className="bg-[#FFFFFF] text-[#000000] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg transition-all">
//               Contact Us
//             </button>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-[#FFFFFF] hover:opacity-80 transition-opacity"
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//         {isMobileMenuOpen && (
//           <div className="md:hidden pb-4 space-y-3 bg-[#6364FF33] rounded-b-lg backdrop-blur-sm p-4">
//             <a
//               href="#home"
//               className="block text-[#FFFFFF] hover:opacity-80 transition-opacity font-medium"
//             >
//               Home
//             </a>

//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="w-full text-left text-[#FFFFFF] hover:opacity-80 transition-opacity font-medium flex items-center gap-1"
//             >
//               Services
//               <ChevronDown className="w-4 h-4" />
//             </button>

//             {isServicesOpen && (
//               <div className="pl-4 space-y-2">
//                 <a
//                   href="#service1"
//                   className="block text-[#FFFFFF] hover:bg-white/20 px-4 py-2 rounded transition-all"
//                 >
//                   Service 1
//                 </a>
//                 <a
//                   href="#service2"
//                   className="block text-[#FFFFFF] hover:bg-white/20 px-4 py-2 rounded transition-all"
//                 >
//                   Service 2
//                 </a>
//                 <a
//                   href="#service3"
//                   className="block text-[#FFFFFF] hover:bg-white/20 px-4 py-2 rounded transition-all"
//                 >
//                   Service 3
//                 </a>
//               </div>
//             )}

//             <a
//               href="#about"
//               className="block text-[#FFFFFF] hover:opacity-80 transition-opacity font-medium"
//             >
//               About
//             </a>

//             <a
//               href="#blogs"
//               className="block text-[#FFFFFF] hover:opacity-80 transition-opacity font-medium"
//             >
//               Blogs
//             </a>

//             <button className="w-full bg-[#FFFFFF] text-[#000000] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg transition-all">
//               Contact Us
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
    
//   );
// }




import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/logo.svg";

export default function NavBar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#6364FF33] border-2 border-[#6364FF33] rounded-lg mx-4 my-4 shadow-lg backdrop-blur-sm w-full max-w-[1177px] mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="w-10 h-10" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">  {/* space-x-12 = proper gaps */}
            <a href="#home" className="!text-[#FFFFFF]/100 hover:!text-[#FFFFFF] font-medium transition-colors"
>
              Home
            </a>

            {/* Services as <a> tag with dropdown */}
            <div className="relative">
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); setIsServicesOpen(!isServicesOpen); }}
                className="block text-white hover:opacity-80 !text-white/90 hover:!text-white transition-opacity font-medium flex items-center gap-1"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </a>
              {isServicesOpen && (
                <div className="absolute top-full mt-2 w-48 bg-[#6364FF33] border-2 border-white/50 rounded-lg shadow-lg py-2 z-50 backdrop-blur-sm">
                  <a href="#service1" className="!text-[#FFFFFF]/100 hover:!text-white font-medium transition-colors"
>
                    Website Development
                  </a>
                  <a href="#service2" className="!text-[#FFFFFF]/100 hover:!text-white font-medium transition-colors"
>
                    Social Media Management
                  </a>
                  <a href="#service3" className="!text-[#FFFFFF]/100 hover:!text-white font-medium transition-colors"
>
                    Resume Building
                  </a>
                </div>
              )}
            </div>

            <a href="#about" className="!text-[#FFFFFF]/100 hover:!text-white font-medium transition-colors"
>
              About
            </a>

            <a href="#blogs" className="!text-[#FFFFFF]/100 hover:!text-white font-medium transition-colors"
>
              Blogs
            </a>

            <button className="bg-[#FFFFFF] text-[#000000] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg transition-all">
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 bg-[#6364FF33] rounded-b-lg backdrop-blur-sm p-4">
            <a href="#home" className="block text-white hover:opacity-80 transition-opacity font-medium">
              Home
            </a>

            <div className="relative">
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); setIsServicesOpen(!isServicesOpen); }}
                className="block text-white hover:opacity-80 transition-opacity font-medium flex items-center gap-1"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </a>
              {isServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <a href="#service1" className="block text-white hover:bg-white/20 px-4 py-2 rounded transition-all">
                    Website Development
                  </a>
                  <a href="#service2" className="block text-white hover:bg-white/20 px-4 py-2 rounded transition-all">
                    Social Media Management
                  </a>
                  <a href="#service3" className="block text-white hover:bg-white/20 px-4 py-2 rounded transition-all">
                    Resume Building
                  </a>
                </div>
              )}
            </div>

            <a href="#about" className="block text-white hover:opacity-80 transition-opacity font-medium">
              About
            </a>

            <a href="#blogs" className="block text-white hover:opacity-80 transition-opacity font-medium">
              Blogs
            </a>

            <button className="w-full bg-[#FFFFFF] text-[#000000] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg transition-all">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}




