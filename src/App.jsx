import './App.css'
import Navbar from './components/Navbar'

import HeroSection from './components/HeroSection'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { useRef } from 'react'
import Techstack from './components/Techstack'

function App() {
  const aboutRef = useRef()
  const heroRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()
  function scrollTo(ref) {
    if (ref === 'about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (ref === 'projects') {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (ref === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

  }
  return (
    <div className='relative'>
      <Navbar scrollTo={scrollTo} />
      <div className='w-10/12 lg:w-10/12 mx-auto '>
        <div className='fixed rotate-90 bottom-36 -right-36  flex items-center md:hidden'>
          <h1 className=' text-slate-200 font-mono mr-5'>chrisbahadur@gmail.com</h1>
          <div className='h-[1px] w-40 bg-slate-200'>  </div>
        </div>
        <HeroSection heroRef={heroRef} />
        <div className='hidden lg:block'>
          <Techstack />
        </div>
        <Portfolio projectsRef={projectsRef} />
        <About aboutRef={aboutRef} />
        <Contact contactRef={contactRef} />
        <div className='text-center mb-5'>
          <p className='text-center text-slate-400 font-mono'>Developed by yours truly, 2024</p>
        </div>
      </div>
    </div>
  )
}

export default App
