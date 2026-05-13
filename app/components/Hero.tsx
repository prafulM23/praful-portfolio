"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const Hero = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="w-11/12 md:w-3/4 m-auto mt-16 p-6 md:p-10 rounded-3xl shadow-lg shadow-cyan-500/20 bg-[#0f172a] text-white">

                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">

                        <p className="text-cyan-400 text-lg font-medium mb-2">
                            MERN Stack Developer
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Hello, I’m{" "}
                            <span className="text-cyan-500">
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

                        {/* Button */}
                        <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">

                            <button
                                onClick={() => setOpen(true)}
                                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold transition duration-300 shadow-lg shadow-cyan-500/30"
                            >
                                Hire Me
                            </button>

                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="relative">

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/30">
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
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

                    <div className="bg-[#0f172a] w-full max-w-md rounded-3xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/20 relative animate-in fade-in zoom-in duration-300">

                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
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

                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                                <p className="text-gray-400 text-sm">
                                    Email
                                </p>
                                <h3 className="text-white font-semibold">
                                    prafulm2310@gmail.com
                                </h3>
                            </div>

                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                                <p className="text-gray-400 text-sm">
                                    Phone
                                </p>
                                <h3 className="text-white font-semibold">
                                    +91 8966840666
                                </h3>
                            </div>

                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
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
        </>
    );
};

export default Hero;