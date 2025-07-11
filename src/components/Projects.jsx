import Navdetail from "./Navdetail";

const Projects = () => {
  const project = [
    {
      title: "NotesNeo",
      description:
        "Built this because I was tired of hunting for notes everywhere! A platform where students can actually find and share quality notes by subject. No more 'does anyone have notes?' in group chats 😄",
      image: "/images/vision-ideas-creative-project-selection-600nw-2000850218.webp",
      github: "https://github.com/yourusername/notesneo",
      live: "https://notesneo.app",
      icon: "ri-github-fill",
      icon2: "ri-share-circle-line"
    },
    {
      title: "TaskMate",
      description:
        "A clean, minimal task manager app to help you stay productive and focused. Add, delete, and mark tasks as complete — built with React and localStorage.",
      image: "/images/vision-ideas-creative-project-selection-600nw-2000850218.webp",
      github: "https://github.com/yourusername/taskmate",
      live: "https://taskmate.app",
      icon: "ri-github-fill",
      icon2: "ri-share-circle-line"
    },
    {
      title: "WeatherScope",
      description:
        "Check real-time weather updates anywhere in the world with WeatherScope. Made with OpenWeatherMap API and responsive design for all devices.",
      image: "/images/vision-ideas-creative-project-selection-600nw-2000850218.webp",
      github: "https://github.com/yourusername/weatherscope",
      live: "https://weatherscope.app",
      icon: "ri-github-fill",
      icon2: "ri-share-circle-line"
    }
  ];

  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60">
      <section>
        <div className="container mx-auto px-8">
          <div className="mb-10 relative">
            <Navdetail
              title={"Projects"}
              des={"My code babies — they're not perfect, but they're mine and I love them"}
            />
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {project.map((item, index) => (
              <div key={index} className="group relative h-full">
                <div className="relative h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-blue-500/10">
                  <div className="relative overflow-hidden p-4 pb-0">
                    <a href={item.live} target="_blank" rel="noopener noreferrer">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </a>
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <div className="flex gap-3">
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                        >
                          <i className={`${item.icon} text-xl text-gray-800 dark:text-white`}></i>
                        </a>
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                        >
                          <i className={`${item.icon2} text-xl text-gray-800 dark:text-white`}></i>
                        </a>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
