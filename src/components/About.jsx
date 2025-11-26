
import Navdetail from "./Navdetail"

const About = () => {
    const aboutSection = [
        {
            icon: "ri-user-line",
            title: "Who I AM",
            description: [
                "A full-stack developer having interest in software engineering.",
                "Enjoy solving problems and building scalable applications.",
                "Always learning new technologies to improve my skills.",
            ],
            color: "bg-blue-600",
        },
        {
            icon: "ri-code-s-slash-fill",
            title: "What I Do",
            description: [
                "Develop high-performance web apps using modern tech stacks.",
                "Solve algorithmic problems and optimize code efficiency.",
                "Contribute to open-source and follow industry trends.",
            ],
            color: "bg-purple-600",
        },
        {
            icon: "ri-focus-2-line",
            title: "My Goals",
            description: [
                "Build tech products that solve real-world challenges at scale.",
                "Advance as a full-stack developer with modern frameworks.",
                "Grow the dev community through open-source contributions.",
            ],
            color: "bg-green-600",
        },
        {
            icon: "ri-lightbulb-flash-line",
            title: "My Philosophy",
            description: [
                "Technology should simplify lives, not complicate them.",
                "Great software solves problems, not just writes code.",
                "Continuous learning keeps you ahead in tech.",
            ],
            color: "bg-orange-600",
        },
    ]

    return (
        <div>
            <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 ">
                <section id="about">
                    <div className="container mx-auto px-6">
                        <div className="mb-10 relative">
                            
                        </div><Navdetail title={"About Me"} des={"Passionate developer building innovative solutions and solving real-world problems."}/>
                        <div className="max-w-5xl mx-auto mb-10 text-center">
                            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                Hey there! <span className="inline-block origin-[70%_70%] animate-pulse">👋</span> I'm {" "}
                                <span className="text-blue-600 font-semibold">
                                    Suraj Yadav
                                </span>
                                , a Red and white student with a strong interest in full-stack web development. I enjoy building practical and scalable applications that make a real impact. Some of my projects include a Lab Management System, Advanced To-Do Web App, and an Employee Management System. I’m skilled in React, Redux, Node.js, and Javascript, and I’m always eager to learn new technologies, improve my problem-solving skills on platforms like HackerRank, and explore AI-driven solutions.
                            </p>
                            <div className="mt-6 flex justify-center">
                                <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                                    🚀 I like to build products and solve problems
                                </span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                            {aboutSection.map(({ icon, title, description, color }) => {
                                return (
                                    <div className="relative group" key={title}>
                                        <div className={`absolute inset-0 ${color} bg-blue-600 rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}></div>
                                        <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                                            <div className="flex items-center mb-4 space-x-4">
                                                <div className={`px-4 py-3 ${color} rounded-lg flex items-center justify-center`}>
                                                    <i className={`${icon} text-white text-xl`}></i>
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                                    {title}
                                                </h3>
                                            </div>
                                            <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                                                {description.map((point, index) => {
                                                    return (
                                                        <li key={index}>{point}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About