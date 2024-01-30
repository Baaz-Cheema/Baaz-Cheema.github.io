import './App.css'
import Navbar from './components/Navbar'

import HeroSection from './components/HeroSection'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { useRef } from 'react'
import Techstack from './components/Techstack'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'





const img = new Image(); //for image preloading. 
img.src = "https://lh3.googleusercontent.com/pw/ABLVV84X8J3GhO9FIiHsAsu91Ul8eOJjO_UBEqD1gjE1iQnqVekZbu39_qwVZv-FGjjaKvxDE5Ui4YBbEgIMhib_SJmZepSYNMFbjlALf6pWujHfDSrr09K5=w2400"


function App() {
  const aboutRef = useRef()
  const heroRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()
  function scrollTo(ref) {
    if (ref === 'about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (ref === 'projects') {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (ref === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

  }
  return (
    <div className='relative'>
      <Navbar scrollTo={scrollTo} />
      <div className='w-9/12 lg:w-8/12 md:w-11/12 mx-auto'>
        <motion.div className='fixed rotate-90 bottom-36 -right-28 group flex items-center md:hidden' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}>
          <a href="mailto:chrisbahadur1@gmail.com" className=''>
            <h1 className=' text-slate-200 group-hover:text-amber-400 font-mono mr-5'>chrisbahadur@gmail.com</h1>
          </a>
          <div className='h-[1px] w-40 bg-slate-200 group-hover:bg-amber-400'>  </div>
        </motion.div>
        <Sidebar />
        <HeroSection heroRef={heroRef} />
        {/* <div className='hidden lg:block'>
          <Techstack />
        </div> */}
        <Portfolio projectsRef={projectsRef} />
        <About aboutRef={aboutRef} />
        <Contact contactRef={contactRef} />
        <div className='text-center mb-5'>
          <p className='text-center text-slate-400 font-inter'>Developed by yours truly, 2024</p>
        </div>
      </div>
    </div>
  )
}

export default App
