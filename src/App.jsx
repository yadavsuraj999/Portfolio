import Header from "./components/Header"
import 'remixicon/fonts/remixicon.css'
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import GitHub from "./components/GitHub"


const App = () => {
  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 'opacity-0' 'opacity-100`}>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <GitHub/>
    </div>
  )
}

export default App