const Social = () => {
    const social = [
        {
            icon: "ri-github-fill w-6 h-6 text-gray-900 dark:text-white",
            href: 'https://github.com/yadavsuraj999'
        },
        {
            icon: "ri-linkedin-fill w-6 h-6 text-[#0077B5]",
            href: 'https://www.linkedin.com/in/yadavsuraj0'
        },
        {
            icon: "ri-instagram-line w-6 h-6 text-[#E1306C]",
            href: "https://www.instagram.com/surajyadav8706/?next=%2F&hl=en"
        },
        {
            icon: "ri-whatsapp-line w-6 h-6 text-[#25D366]",
            href: "https://wa.me/9574242726"  
        },
        {
            icon: "ri-twitter-x-line w-6 h-6 text-gray-900 dark:text-white",
            href: "https://twitter.com/your_username"
        },
    ];

    return (
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {social.map(({ icon, href }, idx) => (
                <a
                    href={href}
                    key={idx}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-3 py-2 bg-white dark:bg-gray-900 rounded-lg hover:scale-110 transform transition-transform duration-300 border border-gray-200 dark:border-gray-800"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <div className="text-xl text-blue-600 dark:text-blue-400">
                        <i className={icon}></i>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Social;
