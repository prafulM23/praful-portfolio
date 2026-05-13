"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const Hero = () => {

    const [open, setOpen] = useState(false);

    // Disable Background Scroll
    useEffect(() => {

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [open]);

    return (
        <>
            <section className="w-11/12 md:w-3/4 m-auto mt-16 p-6 md:p-10 rounded-3xl shadow-lg shadow-cyan-500/20 bg-[#0f172a] text-white overflow-hidden">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left animate-fadeInUp">
                        <p className="text-cyan-400 text-lg font-medium mb-2 tracking-widest uppercase animate-pulse">
                            MERN Stack Developer
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Hello, I’m{" "}
                            <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.7)]">
                                Praful Malviya
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg leading-8 mt-6 max-w-2xl">
                            Passionate MERN Stack Developer focused on building
                            modern, responsive, and user-friendly web applications.
                            I love creating clean UI designs, scalable backend
                            systems, and full-stack projects using React, Next.js,
                            Node.js, Express, and MongoDB.
                        </p>
                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                            <button
                                onClick={() => setOpen(true)}
                                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 hover:scale-105 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30"
                            >
                                Hire Me
                            </button>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="relative animate-float">
                        {/* Animated Glow */}
                        <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full animate-pulse"></div>
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/40 hover:scale-105 transition duration-500">
                            <Image
                                src="/photo1.jpg"
                                alt="Profile Image"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Popup Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn">
                    <div className="bg-[#0f172a] w-full max-w-md rounded-3xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/20 relative animate-popup">
                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                        >
                            <X size={24} />
                        </button>
                        {/* Heading */}
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Contact{" "}
                            <span className="text-cyan-500">
                                Me
                            </span>
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Feel free to contact me for projects,
                            collaborations, or freelance work.
                        </p>
                        {/* Contact Info */}
                        <div className="space-y-4">

                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 hover:scale-105 transition duration-300">
                                <p className="text-gray-400 text-sm">
                                    Email
                                </p>
                                <h3 className="text-white font-semibold">
                                    prafulm2310@gmail.com
                                </h3>
                            </div>
                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 hover:scale-105 transition duration-300">
                                <p className="text-gray-400 text-sm">
                                    Phone
                                </p>
                                <h3 className="text-white font-semibold">
                                    +91 8966840666
                                </h3>
                            </div>
                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 hover:scale-105 transition duration-300">
                                <p className="text-gray-400 text-sm">
                                    Location
                                </p>
                                <h3 className="text-white font-semibold">
                                    Indore, Madhya Pradesh
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-12px);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes popup {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 1s ease;
                }

                .animate-popup {
                    animation: popup 0.3s ease;
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease;
                }
            `}</style>
        </>
    );
};

export default Hero;