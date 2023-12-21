import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className=' w-full flex justify-center bg-[#1E1E1E] '>
      <main className='relative w-full flex flex-col'>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
