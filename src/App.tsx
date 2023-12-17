import About from './components/About '
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects '
import Skills from './components/Skills'

function App() {

  return (
    <main className='w-full border h-full flex flex-col bg-[#1E1E1E]'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
