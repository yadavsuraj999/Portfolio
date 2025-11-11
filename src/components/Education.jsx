import Navdetail from "./Navdetail"

const Education = () => {

    const education = [
        {
            title: "12th Science",
            name: "Gurukrupa Vidhya Sankul",
            date: "2018 - 2020"
        },
        {
            title: "Full Stack Developer",
            name: "Red & White Skill Education",
            date: "2024 - ongoing"
        },
    ]

    return (
        <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 ">
            <section id="education">
                <div className="container mx-auto px-8">
                    <div className="mb-10 relative ">
                        <Navdetail
                            title={"Education"}
                            des={"Where I learned theory and then forgot half of it while learning to actually code"}
                        />
                    </div>
                    <div className="max-w-5xl mx-auto space-y-10">
                        {education.map((edu, idx) => {
                            return (
                                <div key={idx} className="relative group bg-white dark:bg-gray-900 p-4 sm:p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                                    <div className="relative z-10 flex items-start gap-6">
                                        <div className="p-3 sm:p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                            <i className="ri-graduation-cap-fill text-blue-500 text-2xl"></i>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                                {edu.title}
                                            </h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                {edu.name}
                                            </p>
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
                                                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                                    <i className="ri-calendar-line text-blue-500 text-1xl"></i>
                                                    <span className="text-sm">
                                                        {edu.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="absolute left-[38px] bottom-0 w-[2px] h-10 bg-blue-300 dark:bg-blue-700 transform translate-y-full"></div> */}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education