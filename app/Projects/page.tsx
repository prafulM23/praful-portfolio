const mernProjects = [
    {
        title: "User Authentication System",
        description:
            "Secure authentication system with signup, login, JWT authentication, protected routes, and password encryption.",
        tech: ["React.js", "Express.js", "MongoDB"],
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        live: "https://authenticationsystum.netlify.app/",
        code: "#",
    },
    {
        title: "Flipkart Clone",
        description:
            "E-commerce website inspired by Flipkart with product listing, cart functionality, search, and responsive UI.",
        tech: ["React.js", "Express.js", "MongoDB"],
        image:
            "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop",
        live: "https://ecommerce-flipcart-clone.netlify.app/",
        code: "#",
    },
];

const frontendProjects = [
    {
        title: "Daily News",
        description:
            "News application that fetches real-time headlines using API with category filters and responsive design.",
        tech: ["React.js", "CSS 5"],
        image:
            "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop",
        live: "https://dailynews-portal.netlify.app",
        code: "#",
    },
    {
        title: "Weather App",
        description:
            "Weather forecasting app that shows real-time temperature, humidity, and weather conditions using API integration.",
        tech: ["React.js", "CSS 5"],
        image:
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
        live: "https://stupendous-daffodil-a3c7ce.netlify.app/",
        code: "#",
    },
];

const Projects = () => {
    return (
        <section className="w-11/12 md:w-3/4 m-auto mt-16 text-white">

            {/* Main Heading */}
            <div className="text-center mb-16">
                <p className="text-cyan-400 text-lg font-medium">
                    My Work
                </p>

                <h1 className="text-4xl md:text-5xl font-bold mt-2">
                    Featured{" "}
                    <span className="text-cyan-500">
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

                <h2 className="text-3xl font-bold mb-8">
                    <span className="text-cyan-500">MERN</span> Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {mernProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#0f172a] rounded-2xl overflow-hidden border border-cyan-500/10 shadow-lg shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-44 object-cover hover:scale-110 transition duration-500"
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
                                            className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400"
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
                                        className="flex-1 text-center px-3 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-sm font-semibold transition"
                                    >
                                        Live
                                    </a>

                                    <a
                                        href={project.code}
                                        target="_blank"
                                        className="flex-1 text-center px-3 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg text-sm font-semibold transition"
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

                <h2 className="text-3xl font-bold mb-8">
                    <span className="text-cyan-500">Frontend</span> Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {frontendProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#0f172a] rounded-2xl overflow-hidden border border-cyan-500/10 shadow-lg shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-44 object-cover hover:scale-110 transition duration-500"
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
                                            className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400"
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
                                        className="flex-1 text-center px-3 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-sm font-semibold transition"
                                    >
                                        Live
                                    </a>

                                    <a
                                        href={project.code}
                                        target="_blank"
                                        className="flex-1 text-center px-3 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg text-sm font-semibold transition"
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
    );
};

export default Projects;