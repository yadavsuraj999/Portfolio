import GitHubCalendar from "react-github-calendar";
import Navdetail from "./Navdetail";

const GitHub = () => {
    return (
        <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60">
            <section>
                <div className="container mx-auto max-w-6xl px-8">
                    <div className="mb-10 relative">
                        <Navdetail
                            title={"GitHub Contributions"}
                            des={"My GitHub is where I code and commit - check out my streak and repos I'm proud of"}
                        />
                    </div>
                    <div className="mb-10 flex flex-col items-center">
                        <div className="w-full p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
                            <GitHubCalendar
                                username="yadavsuraj999"
                                blockSize={14.6}
                                blockMargin={5}
                                colorScheme="light"
                                theme={{
                                    light: ["#afb8c2", "#60a5fa", "#1a53e6", "#1c3dff", "#1c3dff"]
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg">
                        <div className="flex items-center space-x-4">
                            <img src="/images/images.png" alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-600" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Suraj Yadav
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    @decodewithsuraj
                                </p>
                            </div>
                        </div>
                        <p className="hidden md:block text-gray-700 dark:text-gray-300 flex-1 text-center md:text-left mx-6">
                            A passionate devploper who likes to build products and solveing problems in tech field.
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
                            <a href="https://github.com/yadavsuraj999" className="w-full md:w-auto text-center flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all mt-3 md:mt-0">
                                <i className="ri-github-fill"></i>
                                View Profile
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GitHub;
