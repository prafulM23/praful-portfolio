"use client"

import Link from "next/link";

const About = () => {
    return (
        <>
            <section className="w-11/12 md:w-3/4 m-auto mt-16 p-6 md:p-10 rounded-3xl shadow-lg shadow-cyan-500/20 bg-[#0f172a] text-white overflow-hidden">

                <div className="flex flex-col md:flex-row items-center gap-10">

                    <div className="flex-1 text-center md:text-left animate-fadeIn">

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            About{" "}
                            <span className="text-cyan-500 drop-shadow-[0_0_12px_rgba(6,182,212,0.7)]">
                                Me
                            </span>
                        </h1>

                        {/* Intro */}
                        <p className="text-gray-300 leading-8 text-lg">
                            Hi, I’m{" "}
                            <span className="text-cyan-400 font-semibold">
                                Praful Malviya
                            </span>,
                            a passionate MERN Stack Developer who loves building
                            modern, responsive, and scalable web applications.
                        </p>

                        <p className="text-gray-400 leading-8 mt-4">
                            I specialize in creating clean frontend UI using
                            React.js, Next.js, Tailwind CSS, and powerful backend
                            systems using Node.js, Express.js, MongoDB, Prisma,
                            and PostgreSQL.
                        </p>

                        <p className="text-gray-400 leading-8 mt-4">
                            I enjoy solving real-world problems through code and
                            continuously learning new technologies to improve my
                            development skills.
                        </p>

                        {/* Education Section */}
                        <div className="mt-10">

                            <h2 className="text-2xl font-bold mb-5">
                                <span className="text-cyan-500">
                                    Education
                                </span>
                            </h2>

                            <div className="space-y-6">

                                {/* Bachelor Degree */}
                                <div className="border border-cyan-500/20 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 animate-slideUp">

                                    <h3 className="text-xl font-semibold text-white">
                                        Bachelor’s Degree in Industrial Microbiology
                                    </h3>

                                    <p className="text-cyan-400 mt-1">
                                        Vikram University Ujjain, Madhya Pradesh • 2024
                                    </p>

                                    <p className="text-gray-400 mt-4 leading-7">
                                        Completed graduation in Industrial Microbiology
                                        with strong analytical and problem-solving
                                        skills that enhanced logical thinking and
                                        technical understanding.
                                    </p>

                                </div>

                                {/* MERN Diploma */}
                                <div className="border border-cyan-500/20 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 animate-slideUp delay-300">

                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                        <div>
                                            <h3 className="text-xl font-semibold text-white">
                                                MERN Stack Diploma
                                            </h3>

                                            <p className="text-cyan-400 mt-1">
                                                Full Stack Web Development
                                            </p>
                                        </div>

                                        {/* Certificate Button */}
                                        <Link href={"https://drive.google.com/file/d/1qWmSbGHrhN5H3OcyjMZcWTO9NqtTL8-4/view?usp=drive_link"}>
                                            <button className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 hover:scale-105 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20">
                                                View Certificate
                                            </button>
                                        </Link>

                                    </div>

                                    <p className="text-gray-400 mt-4 leading-7">
                                        Completed a professional MERN Stack Development
                                        diploma focused on frontend and backend
                                        technologies, REST APIs, authentication,
                                        database management, and scalable full-stack
                                        applications.
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-3 mt-5">

                                        {[
                                            "HTML5",
                                            "CSS3",
                                            "JavaScript",
                                            "React.js",
                                            "Node.js",
                                            "Express.js",
                                            "MongoDB",
                                        ].map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 text-sm hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                                            >
                                                {tech}
                                            </span>
                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 1s ease;
                }

                .animate-slideUp {
                    animation: slideUp 1s ease;
                }

                .delay-300 {
                    animation-delay: 0.3s;
                }
            `}</style>
        </>
    );
};

export default About;