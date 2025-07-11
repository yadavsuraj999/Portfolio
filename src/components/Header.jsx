import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#github", label: "GitHub" },
    // { href: "#hackerrank", label: "Hackerrank" },
    // { href: "#badges", label: "Badges" },
    { href: "#blogs", label: "Blogs" },
    // { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#education", label: "Education" },
  ];

  return (
    <div>
      <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md outline outline-1 outline-green-600">
        <div className="flex items-center justify-between h-12 px-4">
          <div className="cursor-pointer">
            <img src="/images/logo.avif" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-5 items-center relative">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 hover:text-white dark:text-white dark:hover:text-white"
            >
              Request a Project
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-3 py-1 rounded-lg transition-all duration-500 ease-in-out bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <i
                className={`ri-menu-line text-xl text-green-500 transform transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90 scale-110" : ""
                  }`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white/95 dark:bg-gray-900/95 rounded-b-xl shadow-lg ${isOpen
              ? "max-h-[1000px] opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
            }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-sm text-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 hover:text-white dark:text-white dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Request a Project
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
