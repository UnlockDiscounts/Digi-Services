import { useState } from "react";
import { 
  SquarePen, 
  Settings, 
  UserCircle, 
  ChevronRight, 
  ChevronLeft,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react";
import LogoutPopup from "./logout.jsx";
import Blogs from "../blogs/blogs.jsx";
import Service from "../services/service.jsx";

export default function Sidebar({ activeItem: initialActive = "Blogs", onLogout }) {
  const [showLogout, setShowLogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(initialActive);

  const handleLogout = () => {
    setShowLogout(false);
    if (onLogout) {
      onLogout();
    }
  };

  const menuItems = [
    { name: "Blogs", icon: SquarePen }, // Corrected icon for writing/blogs
    // { name: "Services", icon: Settings }, // Corrected icon for services/tools
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div 
        className={`bg-gray h-screen border-r border-[#fdcbf2] flex flex-col fixed left-0 top-0 z-10 transition-all duration-300 ${
          isCollapsed ? "w-[80px]" : "w-[285px]"
        }`}
      >
        {/* Logo and Title / Collapse Toggle */}
        <div 
          className={`flex items-center pt-[33px] pb-[30px] cursor-pointer ${
            isCollapsed ? "justify-center" : "pl-[39px] gap-[10px]"
          }`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {/* <div className="bg-[#7466BD] p-2 rounded-md text-white shrink-0"> */}
             {isCollapsed ? <PanelLeftOpen size={24} /> : <PanelLeftClose size={24} />}
          {/* </div> */}
          {!isCollapsed && <p className="text-[24px] text-black font-bold">Admin Panel</p>}
        </div>

        {/* Menu Items */}
        <div className="flex flex-col px-[14px] space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.name === activeItem;
            
            return (
              <div
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`flex items-center rounded-[16px] cursor-pointer transition-all ${
                  isCollapsed ? "justify-center px-0 py-[10px]" : "px-[24px] py-[10px] gap-[10px]"
                } ${
                  isActive
                    ? "bg-gradient-to-r from-[#fdcbf2] to-[#907aff]"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className={isActive ? "text-white" : "text-black"}>
                  <Icon size={24} />
                </div>
                {!isCollapsed && (
                  <p className={`text-[20px] ${isActive ? "text-white" : "text-black"}`}>
                    {item.name}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Profile Section */}
        <div className="mt-auto mb-[32px] px-[17px] relative">
          <div
            className={`bg-gradient-to-r from-[rgba(253,203,242,0.66)] to-[rgba(144,122,255,0.66)] rounded-[16px] py-[10px] flex items-center cursor-pointer ${
                isCollapsed ? "justify-center px-0" : "px-[15px] gap-[10px]"
            }`}
            onClick={() => setShowLogout(!showLogout)}
          >
            <div className="text-[rgba(0,0,0,0.52)] shrink-0">
              <UserCircle size={32} />
            </div>
            {!isCollapsed && (
              <div className="truncate">
                <p className="text-[18px] text-[rgba(0,0,0,0.52)] font-medium leading-[normal] truncate">
                  Bella William
                </p>
                <p className="text-[12px] text-[rgba(0,0,0,0.52)] leading-[normal]">
                  Editor
                </p>
              </div>
            )}
          </div>

          {/* Logout Popup */}
          {showLogout && (
            <div className={`absolute bottom-full mb-2 w-[251px] ${isCollapsed ? "left-0" : "left-1/2 -translate-x-1/2"}`}>
              <LogoutPopup onLogout={handleLogout} />
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div 
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-[80px]" : "ml-[285px]"
        }`}
      >
        <div className="p-8">
            {/* {activeItem === "Services" && <div><Service /></div>} */}
            {activeItem === "Blogs" && <div><Blogs /></div>}
        </div>
      </div>
    </div>
  );
}