import Navdetail from "./Navdetail"

const Skills = () => {
    return (
        <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 ">
            <section>
                <div className="container mx-auto px-6">
                    <Navdetail title={"Skill"} des={"A modern tech stack designed for impact, efficiency, and scale."} />
                    <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
                        <a href="" className="group relative flex flex-col items-center p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl 
        before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-transparent before:to-[var(--glow-color,rgba(255,255,255,0))] before:opacity-0 before:blur-lg before:transition-all before:duration-500 hover:before:opacity-50">
            

                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills