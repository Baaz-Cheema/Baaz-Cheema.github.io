import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { AnimatePresence } from "framer-motion"


export default function Navbar({ scrollTo }) {
    const [scrolled, setScrolled] = useState(false)
    // const [prevScrollY, setPrevScrollY] = useState(false)
    // const [show, setShow] = useState(false) to hide the navbar. cant implement this with the current navmenu styles...

    // useEffect(() => {
    //     if (window.scrollY > prevScrollY) {
    //         setShow(true)
    //         setPrevScrollY(window.scrollY)
    //     }
    //     setShow(false)

    // }, [prevScrollY])
    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            if (scrollPosition > 5) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className={`w-full z-20 top-0 fixed ${scrolled && 'scrolled'}`}>
            <nav className={`flex  justify-between box-border items-center w-9/12 mx-auto lg:w-full lg:px-5  bg-slate-800 bg-opacity-95 md:py-2`}>
                <h1 onClick={scrollToTop} className="text-2xl cursor-pointer py-2 w-12 flex items-center justify-center text-amber-300 md:w-10 md:h-10 font-mono h hover:scale-105 transition-transform ">B</h1>

                <Hamburger scrollTo={scrollTo} />

                <div className="flex py-4 md:hidden items-center gap-5">
                    <li onClick={() => scrollTo('about')} className="list-none px-3 text-slate-300 hover:text-amber-400 cursor-pointer">About</li>
                    <li onClick={() => scrollTo('projects')} className="list-none px-3 text-slate-300  hover:text-amber-400 cursor-pointer">Projects</li>
                    <li onClick={() => scrollTo('contact')} className="list-none px-3 text-slate-300  hover:text-amber-400 cursor-pointer">Contact</li>
                </div>
            </nav>
        </div>
    )
}



function Hamburger({ scrollTo }) {
    const [open, setOpen] = useState(false)
    const menuRef = useRef()
    useEffect(() => {
        function handler(e) {
            if (!menuRef.current?.contains(e.target) && !e.target.closest('.hamburger')) {//used the closest method here. it goes up the DOM tree and finds the closest ancestor with the identifier u give it. 
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [open])

    function handleOnClick(section) {
        scrollTo(section);
        setOpen(false);
    }

    return (
        <>
            <motion.div onClick={() => setOpen(!open)} initial={{ x: 0 }} animate={{ x: open ? '-3px' : 0 }} transition={{ duration: .5 }} className="flex-col justify-center hidden md:flex z-30 mr-2 hamburger">
                <motion.div initial={{ x: 0, y: 0 }} animate={{ rotate: open ? '45deg' : 0, x: open ? '3px' : 0, y: open ? '10.9px' : 0 }} transition={{ duration: .5 }} className="h-[2.5px] w-6 m-[3px] bg-slate-300 rounded"></motion.div>
                <motion.div animate={{ scaleX: open ? 0 : 1, opacity: open ? 0 : 1 }} transition={{ duration: .2 }} className="h-[2px] w-6 m-[3px] bg-slate-300 rounded"></motion.div>
                <motion.div initial={{ x: 0, y: 0 }} animate={{ rotate: open ? '-45deg' : 0, x: open ? '3px' : 0, y: open ? '-6px' : 0 }} transition={{ duration: .5 }} className="h-[2px] w-6 m-[3px] bg-slate-300 rounded"></motion.div>
            </motion.div>
            <AnimatePresence>
                {open && <motion.div ref={menuRef} initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: 150 }} transition={{ type: 'just' }} className="fixed bg-slate-800 bg-opacity-95 flex flex-col justify-center right-0 top-0 bottom-0 h-screen z-20 items-center overflow-hidden">
                    <li onClick={() => handleOnClick('projects')} className="m-5 my-3 text-slate-300 font-mono hover:text-amber-400 list-none" >Projects</li>
                    <li onClick={() => handleOnClick('about')} className="m-5 my-3 text-slate-300 font-mono hover:text-amber-400 list-none" >About</li>
                    <li onClick={() => handleOnClick('contact')} className="m-5 my-3 text-slate-300 font-mono hover:text-amber-400 list-none">Contact</li>
                    <a className="m-5 my-3 text-slate-300 font-mono hover:text-amber-400" href="https://drive.google.com/file/d/169k0EK2u0rmDB-BHzleTdHagFefi02Xr/view" target="_blank ">Resume</a>
                    <a href="https://www.linkedin.com/in/baaz-cheema-ab0935212/"
                        target="_blank "><motion.i whileHover={{ y: -3 }} className=' m-5 my-2 bx bxl-linkedin text-4xl text-slate-300  hover:text-amber-400'></motion.i></a>
                    <a href="https://github.com/Baaz-Cheema"
                        target="_blank "> <motion.i whileHover={{ y: -3 }} className=' m-5 my-2 bx bxl-github text-4xl text-slate-300 hover:text-amber-400'></motion.i>
                    </a>
                    <a href="https://wa.me/923236333123" target='_blank '>
                        <motion.i whileHover={{ y: -3 }} className=' m-5 my-2 bx bxl-whatsapp text-4xl text-slate-300  hover:text-amber-400'></motion.i>
                    </a>
                    <a href="mailto:chrisbahadur1@gmail.com">
                        <motion.i whileHover={{ y: -3 }} className=' m-5 my-2 bx bx-envelope text-4xl text-slate-300  hover:text-amber-400'></motion.i>
                    </a>
                </motion.div>
                }
            </AnimatePresence>
        </>
    )
}
