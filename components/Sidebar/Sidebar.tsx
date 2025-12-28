"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function Sidebar() {
    const menu_items = [
    { id: "dashboard", img: "/dashboard-icon.svg", href: "/" },
    { id: "portfolio", img: "/Group 23.svg", href: "/portfolio" },
    { id: "cashflow", img: "/Vector.svg", href: "/cashflow" },
    { id: "account", img: "/money-bag.svg", href: "/account" },
  ];
  const pathname = usePathname();

  useEffect(()=>{
    console.log(pathname)
  },[pathname])

    return (
        <div className="pt-18 pb-4 bg-[#002C59] text-white w-18">
            {menu_items.map((menu)=>(
                <Link className={`p-3 mb-2 flex gap-10 justify-center ${pathname === menu.href ? "bg-white":""}`} href={menu.href} key={menu.id}>
                    <img src={pathname === menu.href ? `blue-${menu.img.slice(1)}`:menu.img}/>
                </Link>
            ))}
        </div>
    )
}