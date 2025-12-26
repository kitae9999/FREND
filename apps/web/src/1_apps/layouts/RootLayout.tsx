import { Gnb } from "@/4_shared/ui/layout/Gnb";
import { SideBar } from "@/4_shared/ui/layout/SideBar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-[#0F0F1E] ">
      <Gnb />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};
