"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/Projects" },
        { name: "About", path: "/About" },
        { name: "Skills", path: "/Skills" },
    ];

    return (
        <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-[#020617]/70">

            <nav className="w-11/12 md:w-3/4 m-auto mt-4 px-6 py-4 rounded-2xl border border-cyan-500/20 bg-[#0f172a] shadow-lg shadow-cyan-500/10">

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Logo */}
                    <Link href={"/"}>
                        <h1 className="text-2xl font-bold text-white cursor-pointer">
                            Praful{" "}
                            <span className="text-cyan-500">
                                Malviya
                            </span>
                        </h1>
                    </Link>

                    {/* Nav Links */}
                    <ul className="flex flex-wrap justify-center gap-3 md:gap-5">

                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.path}>

                                <li
                                    className={`px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer font-medium
                                        
                                    ${pathname === link.path
                                            ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                                            : "text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                                        }`}
                                >
                                    {link.name}
                                </li>

                            </Link>
                        ))}

                    </ul>

                </div>

            </nav>

        </header>
    );
}