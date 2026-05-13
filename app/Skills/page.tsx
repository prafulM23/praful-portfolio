const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",

];

const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "REST API",
    "JWT Auth",

];

const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Netlify",
    "Vercel",
];

const Skills = () => {
    return (
        <section className="w-11/12 md:w-3/4 m-auto mt-16 text-white">

            {/* Heading */}
            <div className="text-center mb-16">

                <p className="text-cyan-400 text-lg font-medium">
                    My Expertise
                </p>

                <h1 className="text-4xl md:text-5xl font-bold mt-2">
                    My{" "}
                    <span className="text-cyan-500">
                        Skills
                    </span>
                </h1>

                <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
                    Here are the technologies and tools I use to build
                    modern, responsive, and scalable web applications.
                </p>

            </div>

            {/* Skills Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Frontend */}
                <div className="bg-[#0f172a] rounded-3xl p-6 border border-cyan-500/10 shadow-lg shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300">

                    <h2 className="text-2xl font-bold mb-6">
                        <span className="text-cyan-500">
                            Frontend
                        </span>{" "}
                        Skills
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {frontendSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 text-sm hover:bg-cyan-500 hover:text-white transition"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                </div>

                {/* Backend */}
                <div className="bg-[#0f172a] rounded-3xl p-6 border border-cyan-500/10 shadow-lg shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300">

                    <h2 className="text-2xl font-bold mb-6">
                        <span className="text-cyan-500">
                            Backend
                        </span>{" "}
                        Skills
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {backendSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 text-sm hover:bg-cyan-500 hover:text-white transition"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                </div>

                {/* Tools */}
                <div className="bg-[#0f172a] rounded-3xl p-6 border border-cyan-500/10 shadow-lg shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300">

                    <h2 className="text-2xl font-bold mb-6">
                        <span className="text-cyan-500">
                            Tools
                        </span>{" "}
                        & Platforms
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {tools.map((tool, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 text-sm hover:bg-cyan-500 hover:text-white transition"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Skills;