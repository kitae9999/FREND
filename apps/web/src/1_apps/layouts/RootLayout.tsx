import { Gnb } from "@/4_shared/ui/Gnb"
import { Outlet } from "react-router-dom"

export const RootLayout = () => {
    return (
      <div className="min-h-screen bg-[#0F0F1E] ">
        <Gnb />
        <Outlet />
      </div>
    );
}