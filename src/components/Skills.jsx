import Navdetail from "./Navdetail";

const skills = [
    {
        name: "HTML",
        logo: "/images/html5-original.svg",
        bgColor: "rgba(227, 79, 38, 0.1)",
    },
    {
        name: "CSS",
        logo: "/images/css3-plain.svg",
        bgColor: "rgba(38, 77, 228, 0.1)",
    },
    {
        name: "JavaScript",
        logo: "/images/javascript-plain.svg",
        bgColor: "rgba(247, 223, 30, 0.1)",
    },
    {
        name: "React",
        logo: "/images/react-original.svg",
        bgColor: "rgba(97, 219, 251, 0.1)",
    },
    {
        name: "TailwindCSS",
        logo: "/images/tailwindcss-original.svg",
        bgColor: "rgba(56, 189, 248, 0.1)",
    },
    {
        name: "Redux",
        logo: "/images/redux-original.svg",
        bgColor: "rgba(118, 74, 188, 0.1)",
    },
    // {
    //     name: "Node.js",
    //     logo: "/images/nodejs-plain.svg",
    //     bgColor: "rgba(100, 181, 135, 0.1)",
    // },
    // {
    //     name: "ExpressJS",
    //     logo: "/images/express-original.svg",
    //     bgColor: "rgba(64, 64, 64, 0.1)",
    // },
    // {
    //     name: "MongoDB",
    //     logo: "/images/mongodb-plain.svg",
    //     bgColor: "rgba(71, 171, 106, 0.1)",
    // },
    {
        name: "C++",
        logo: "/images/cplusplus-plain.svg",
        bgColor: "rgba(0, 122, 204, 0.1)",
    },
    {
        name: "VS Code",
        logo: "/images/vscode-original.svg",
        bgColor: "rgba(0, 122, 204, 0.1)",
    },
    {
        name: "Git",
        logo: "/images/git-plain.svg",
        bgColor: "rgba(240, 80, 51, 0.1)",
    },
    {
        name: "GitHub",
        logo: "https://img.icons8.com/m_sharp/200/FFFFFF/github.png",
        bgColor: "rgba(36, 41, 46, 0.1)",
    },
    {
        name: "Vite",
        logo: "/images/Vite.js.svg",
        bgColor: "rgba(255, 215, 0, 0.1)",
    },
    {
        name: "Vercel",
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png",
        bgColor: "rgba(0, 0, 0, 0.05)",
    },
];

const Skills = () => {
    return (
        <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60">
            <section>
                <div className="container mx-auto px-6">
                    <div className="mb-10 relative ">
                        <Navdetail
                            title={"Skill"}
                            des={"A modern tech stack designed for impact, efficiency, and scale."}
                        />

                    </div>
                    <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-transparent before:to-[var(--glow-color,rgba(255,255,255,0))] before:opacity-0 before:blur-lg before:transition-all before:duration-500 hover:before:opacity-50"
                            >
                                <div
                                    className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: skill.bgColor }}
                                >
                                    <img src={skill.logo} alt={skill.name} width={60} />
                                </div>
                                <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
