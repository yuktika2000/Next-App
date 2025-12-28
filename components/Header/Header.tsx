"use client";
import { usePathname } from "next/navigation"
export default function Header() {
    const pathname = usePathname();
    return (
        <div className="flex fle- justify-between pt-20 px-4 pb-2">
            <span className="text-[22px]">My<b className="capitalize"> {pathname === "/" ? "Dashboard" :pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}</b></span>
            <div className="flex flex-row items-center gap-4 mr-5">
                <span><b>Your RM: </b>Sanjay Singhania</span>
                <img src="/Primary.svg" alt="Call"/>
                <img src="/Group 398.svg" alt="WhatsApp"/>
            </div>
        </div>
    )
}