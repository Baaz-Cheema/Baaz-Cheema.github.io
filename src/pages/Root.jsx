import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import BottomNavbar from "../components/bottomNavbar";
export default function Root() {
    return (
        <div className="w-full h-full rounded-lg bg-[#011627] border-2 text-[#607B96] border-custom font-fira flex flex-col justify-between">
            <MainNavbar />
            <Outlet />
            <BottomNavbar />
        </div>
    )
}