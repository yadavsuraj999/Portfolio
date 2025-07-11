import Navdetail from "./Navdetail"

const Contact = () => {
  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 ">
        <section>
            <div className="container mx-auto px-4">
                <div className="mb-10 relative ">
                        <Navdetail title={"Get In Touch"} des={"Got a cool project idea? Want to collaborate? Or just want to say hi? Drop me a line!"}/>
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
                                <i class="ri-mail-line text-3xl"></i>
                            <span>
                                yadavsuraj8425@gmail.com
                            </span>
                            </a>
                            <a href="https://github.com/yadavsuraj999" target="_blank" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                <i class="ri-github-line text-3xl"></i>
                            <span>
                                github.com/yadavsuraj999
                            </span>
                            </a>
                            <a href="https://www.linkedin.com/in/yadavsuraj0/" target="_blank" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                <i class="ri-linkedin-fill text-3xl"></i>
                            <span>
                                linkedin.com/in/yadavsuraj0
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact