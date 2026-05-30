"use client"

const mernProjects = [
    {
        title: "MERN Authentication System",
        description:
            "Full-stack authentication application featuring user registration, login, email OTP verification, JWT authentication, password reset, and protected routes.",
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Nodemailer"
        ],
        image: "/projects/mernAuth.png",
        live: "https://authenticationsystum.netlify.app/",
        code: "https://github.com/prafulM23/userAuthentication",
    },

    {
        title: "Flipkart Clone (MERN)",
        description:
            "E-commerce web application with product catalog, cart management, search functionality, responsive UI, and backend API integration.",
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Axios"
        ],
        image: "/projects/flipkart.png",
        live: "https://ecommerce-flipcart-clone.netlify.app/",
        code: "https://github.com/prafulM23/frontend-flipkart-clone",
    },

    {
        title: "Next.js Authentication System",
        description:
            "Modern authentication system built with Next.js, TypeScript, Prisma, PostgreSQL, JWT authentication, protected routes, and secure user management.",
        tech: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "JWT"
        ],
        image: "/projects/nextAuth.png",
        live: "https://next-auth-system-aww8.vercel.app/",
        code: "https://github.com/prafulM23/next-auth-system",
    },
];

const frontendProjects = [
    {
        title: "News Portal App",
        description:
            "Responsive news application that fetches real-time headlines through API integration with category-based filtering and search functionality.",
        tech: [
            "React.js",
            "News API",
            "CSS3"
        ],
        image: "/projects/news.png",
        live: "https://dailynews-portal.netlify.app",
        code: "https://github.com/prafulM23/daily-news-project",
    },

    {
        title: "Weather Forecast App",
        description:
            "Real-time weather application displaying temperature, humidity, wind speed, and weather conditions using external API integration.",
        tech: [
            "React.js",
            "Weather API",
            "CSS3"
        ],
        image: "/projects/weather.png",
        live: "https://stupendous-daffodil-a3c7ce.netlify.app/",
        code: "https://github.com/prafulM23/weather-app",
    },
];

const Projects = () => {
    return (
        <>
            <section className="w-11/12 md:w-3/4 m-auto mt-16 text-white overflow-hidden">

                {/* Main Heading */}
                <div className="text-center mb-16 animate-fadeIn">

                    <p className="text-cyan-400 text-lg font-medium tracking-widest uppercase animate-pulse">
                        My Work
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mt-2">
                        Featured{" "}
                        <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.7)]">
                            Projects
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
                        Here are some of my MERN Stack and Frontend projects
                        built using modern technologies.
                    </p>

                </div>

                {/* MERN Projects */}
                <div className="mb-20">

                    <h2 className="text-3xl font-bold mb-8 animate-slideLeft">
                        <span className="text-cyan-500">MERN</span> Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {mernProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-[#0f172a] rounded-2xl overflow-hidden border border-cyan-500/10 shadow-lg shadow-cyan-500/10 hover:-translate-y-3 hover:shadow-cyan-500/30 transition-all duration-500 animate-card"
                            >

                                {/* Image */}
                                <div className="overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-44 object-cover hover:scale-110 transition duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">

                                    <h3 className="text-xl font-bold">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mt-3 text-sm leading-6">
                                        {project.description}
                                    </p>

                                    {/* Tech */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.map((item, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3 mt-5">

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="flex-1 text-center px-3 py-2 bg-cyan-500 hover:bg-cyan-600 hover:scale-105 rounded-lg text-sm font-semibold transition-all duration-300"
                                        >
                                            Live
                                        </a>

                                        <a
                                            href={project.code}
                                            target="_blank"
                                            className="flex-1 text-center px-3 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:scale-105 rounded-lg text-sm font-semibold transition-all duration-300"
                                        >
                                            Code
                                        </a>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Frontend Projects */}
                <div>

                    <h2 className="text-3xl font-bold mb-8 animate-slideRight">
                        <span className="text-cyan-500">Frontend</span> Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {frontendProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-[#0f172a] rounded-2xl overflow-hidden border border-cyan-500/10 shadow-lg shadow-cyan-500/10 hover:-translate-y-3 hover:shadow-cyan-500/30 transition-all duration-500 animate-card"
                            >

                                {/* Image */}
                                <div className="overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-44 object-cover hover:scale-110 transition duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">

                                    <h3 className="text-xl font-bold">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mt-3 text-sm leading-6">
                                        {project.description}
                                    </p>

                                    {/* Tech */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.map((item, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3 mt-5">

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="flex-1 text-center px-3 py-2 bg-cyan-500 hover:bg-cyan-600 hover:scale-105 rounded-lg text-sm font-semibold transition-all duration-300"
                                        >
                                            Live
                                        </a>

                                        <a
                                            href={project.code}
                                            target="_blank"
                                            className="flex-1 text-center px-3 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:scale-105 rounded-lg text-sm font-semibold transition-all duration-300"
                                        >
                                            Code
                                        </a>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* Animations */}
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

                @keyframes slideLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes cardAnimation {
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

                .animate-slideLeft {
                    animation: slideLeft 1s ease;
                }

                .animate-slideRight {
                    animation: slideRight 1s ease;
                }

                .animate-card {
                    animation: cardAnimation 1s ease;
                }
            `}</style>
        </>
    );
};

export default Projects;