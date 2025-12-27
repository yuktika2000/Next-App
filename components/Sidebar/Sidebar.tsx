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
        <div className="pt-7 pb-4 bg-[#002C59] text-white w-20">
            {menu_items.map((menu)=>(
                <Link className={`p-4 flex justify-center ${pathname === menu.href ? "bg-white":""}`} href={menu.href} key={menu.id}>
                    <img src={menu.img}/>
                </Link>
            ))}
        </div>
    )
}