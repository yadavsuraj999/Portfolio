import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    const roles = [
        "Full-Stack Developer",
        "DSA Enthusiast",
        "Problem Solver",
        "Content Creator",
        "Tech Innovator",
        "Lifelong Learner",
    ];

    return (
        <>
            <section
                id="home"
                className="min-h-screen flex items-center justify-center relative  overflow-hidden bg-grid-pattern"
            >

                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-100/60 to-blue-50/60 dark:from-black dark:via-gray-950/60 dark:to-slate-950/60">
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="container mx-auto px-10 py-16 relative z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
                            <div className="space-y-2">
                                <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
                                    Hey! <span className="inline-block origin-[70%_70%] animate-wave">👋</span> I'm
                                </div>
                                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                                    Suraj Yadav
                                </h1>
                                <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                                    I'm a{" "}
                                    <span className="text-blue-500 dark:text-blue-400 font-semibold">
                                        <Typewriter
                                            words={roles}
                                            loop
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={80}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative order-1 md:order-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                            <img
                                src="/images/images.png"
                                alt="Deepak Modi"
                                className="relative w-full max-w-lg mx-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
                        <a href="#about" className="p-2 text-gray-600 dark:text-gray-300 text-2xl">
                            <i className="ri-arrow-down-line"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
