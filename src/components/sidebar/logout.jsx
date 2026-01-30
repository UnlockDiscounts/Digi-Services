import { LogOut } from "lucide-react";

function LogoutIcon() {
  return (
    <div className="relative shrink-0 size-[40px] flex items-center justify-center">
      <LogOut 
        size={24} 
        className="text-black opacity-75" 
        strokeWidth={2.33333} 
      />
    </div>
  );
}

export default function LogoutPopup() {
  return (
    <div className="bg-white rounded-[16px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)] py-[13px] px-[29px] cursor-pointer hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-[7px]">
        <LogoutIcon />
        <p className="text-[20px] text-black opacity-75">
          Log Out
        </p>
      </div>
    </div>
  );
}