import Navdetail from "./Navdetail"

const Contact = () => {
    return (
        <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 ">
            <section id="contact">
                <div className="container mx-auto px-4">
                    <div className="mb-10 relative ">
                        <Navdetail title={"Get In Touch"} des={"Got a cool project idea? Want to collaborate? Or just want to say hi? Drop me a line!"} />
                    </div>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                                Let's Connect
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Whether you've got a crazy project idea, want to collaborate on something awesome, or just want to chat about tech over coffee ☕ - I'm all ears! And yes, this actually goes straight to my inbox, not some random void like other contact forms.
                            </p>
                            <div className="space-y-4">
                                <a href="https://mail.google.com/mail/u/0/?to=yadavsuraj8425@gmail.com&fs=1&tf=cm" target="_blank" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                    <i className="ri-mail-line text-3xl"></i>
                                    <span>
                                        yadavsuraj8425@gmail.com
                                    </span>
                                </a>
                                <a href="https://github.com/yadavsuraj999" target="_blank" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                    <i className="ri-github-line text-3xl"></i>
                                    <span>
                                        github.com/yadavsuraj999
                                    </span>
                                </a>
                                <a href="https://www.linkedin.com/in/yadavsuraj0/" target="_blank" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                    <i className="ri-linkedin-fill text-3xl"></i>
                                    <span>
                                        linkedin.com/in/yadavsuraj0
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block font-medium mb-2">
                                        Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                            <i className="ri-user-3-line text-1xl"></i>
                                        </div>
                                        <input type="text" id="name" placeholder="Enter Your Name" className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block font-medium mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                            <i className="ri-mail-line text-1xl"></i>
                                        </div>
                                        <input type="email" id="email" placeholder="Enter Your Name" className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block font-medium mb-2">Message</label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3 text-gray-400">
                                            <i className="ri-message-2-line text-1xl"></i>
                                        </div>
                                        <textarea name="text" id="message" className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none" placeholder="Enter Your Message"></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact