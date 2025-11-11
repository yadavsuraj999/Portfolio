import Navdetail from "./Navdetail";

const Projects = () => {
  const project = [
    {
      title: "Lab-Management-System",
      description:
        "A web-based application for managing computer labs. It allows administrators to assign PCs to students and perform full CRUD operations on student and system data. The project includes a dashboard that provides an overview of lab details such as assigned systems, available PCs, and student information.",
      image: "/images/Project1.png",
      github: "https://github.com/yadavsuraj999/Pr-lab-management-system",
      live: "https://pr-lab-management-system.vercel.app",
      icon: "ri-github-fill",
      icon2: "ri-share-circle-line"
    },
    {
      title: "To-Do-List",
      description:
        "A web-based application developed using React and Redux Thunk that allows multiple users to register and manage their personal task lists. It supports complete CRUD operations for adding, updating, deleting, and tracking tasks. The system includes secure authentication, a responsive interface, and real-time state management for a smooth and efficient user experience.",
      image: "/images/Project2.png",
      github: "https://github.com/yadavsuraj999/Pr-to-do-firebase",
      live: "https://pr-to-do-firebase.vercel.app",
      icon: "ri-github-fill",
      icon2: "ri-share-circle-line"
    },
    {
      title: "Employee-Management-System",
      description:
        "A web-based application built with React that manages employee details, departments, and salary records. It supports full CRUD operations and provides sorting features based on employee name and department, offering an organized and efficient way to handle workforce information and improve administrative tasks.",
      image: "/images/Project3.png",
      github: "https://github.com/yadavsuraj999/project-student-management-react",
      live: "https://project-student-management-react.vercel.app/",
      icon: "ri-github-fill",
      icon2: "ri-share-circle-line"
    }
  ];

  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60">
      <section id="projects">
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
