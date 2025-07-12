import Social from "./Social"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8 relative">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap gap-4 justify-center"></div>
          <Social />
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            <p className="pb-2">
              © 2025 Suraj Yadav. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-2">
                Built With
                 <img src="/images/react-original (1).svg" alt="" className="w-6 h-6"/>
                  Using
                  <img src="/images/Vite.js.svg" alt="" className="w-6 h-6"/>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer