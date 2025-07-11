import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navdetail from "./Navdetail";

const Blogs = () => {
    const blogs = [
        {
            img: "/images/git.webp",
            para: "How to Disconnect a Cloned GitHub Repository and Make It Yours",
            decs: "Ever cloned a GitHub repo (maybe a boilerplate or a cool open-source project) but wanted to make it your own — with fresh Git history and no",
            link: "Read More →"
        },
        {
            img: "/images/hook.webp",
            para: "How to Disconnect a Cloned GitHub Repository and Make It Yours",
            decs: "Ever cloned a GitHub repo (maybe a boilerplate or a cool open-source project) but wanted to make it your own — with fresh Git history and no",
            link: "Read More →"
        },
        {
            img: "/images/github.webp",
            para: "How to Disconnect a Cloned GitHub Repository and Make It Yours",
            decs: "Ever cloned a GitHub repo (maybe a boilerplate or a cool open-source project) but wanted to make it your own — with fresh Git history and no",
            link: "Read More →"
        }
    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>
                    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60">
                        <section>
                            <div className="container mx-auto px-8">
                                <div className="mb-10 relative">
                                    <Navdetail
                                        title={"Blogs"}
                                        des={"I write about the cool stuff I discover while coding - maybe you'll find it useful too!"}
                                    />
                                </div>
                                <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {blogs.map((blog, idx) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            className="group block overflow-hidden rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 bg-white dark:bg-gray-900 hover:shadow-xl"
                                        >
                                            <div className="p-3 pt-4 pb-0 overflow-hidden rounded-lg">
                                                <img
                                                    src={blog.img}
                                                    alt="Blog preview"
                                                    className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                                />
                                            </div>
                                            <div className="p-5 pt-4">
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                                                    {blog.para}
                                                </h3>
                                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                                                    {blog.decs}
                                                </p>
                                            </div>
                                            <div className="px-5 pb-4">
                                                <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                                                    {blog.link}
                                                </span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>} />

            </Routes>
        </BrowserRouter>
    );
};

export default Blogs;
