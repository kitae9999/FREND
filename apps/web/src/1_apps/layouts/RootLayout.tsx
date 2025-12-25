import { Gnb } from "@/4_shared/ui/Gnb"
import { Outlet } from "react-router-dom"

export const RootLayout = () => {
    return(
        <>
            <Gnb/>
            <Outlet/>
        </>
    )
}