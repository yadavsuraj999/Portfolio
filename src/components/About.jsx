const About = () => {
    const aboutSection = [
        {
            icon: '<i class="ri-user-line"></i>',
            title: "Who I AM",
            description: [
                "A full-stack developer having interest in software engineering.",
                "Enjoy solving problems and building scalable applications.",
                "Always learning new technologies to improve my skills.",
            ],
            color: "bg-blue-600",
        }
    ]

    return (
        <div>
            <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 ">
                <section id="about">
                    <div className="container mx-auto px-6">
                        <div className="mb-10 relative">
                            <div className="flex flex-col text-center items-center">
                                <h2 className="relative group">
                                    <span class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 dark:from-blue-500 dark:via-white dark:to-blue-500 bg-clip-text text-transparent leading-tight tracking-tight">
                                        About Me
                                    </span>
                                </h2>
                                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl font-medium">
                                    Passionate developer building innovative solutions and solving real-world problems.
                                </p>
                                <div class="flex items-center space-x-2 mt-2">
                                    <div class="h-px w-16 bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-400 to-transparent"></div>
                                    <div class="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 opacity-80"></div>
                                    <div class="w-1 h-1 rounded-full bg-gray-600 dark:bg-gray-300 opacity-60"></div>
                                    <div class="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 opacity-80"></div>
                                    <div class="h-px w-16 bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-400 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-5xl mx-auto mb-10 text-center">
                            <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                Hey there! 👋 I'm
                                <span class="text-blue-600 font-semibold">
                                    Suraj Yadav
                                </span>
                                , a final-year B.Tech Computer Science Engineering student passionate about building full-stack web applications that solve real-world problems. I've created projects like NotesNeo for study notes, NeoCode for coding practice, and NeoCompiler for online code editing. With skills in React, Next.js, TypeScript, Node.js, and Java, I love exploring new technologies, solving DSA problems on LeetCode, and working on AI-powered solutions.
                            </p>
                            <div class="mt-6 flex justify-center">
                                <span class="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                                    🚀 I like to build products and solve problems
                                </span>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About