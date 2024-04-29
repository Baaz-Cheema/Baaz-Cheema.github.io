import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
export default function MainNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const navbar = useRef()
    function isActive(path) {
        return location.pathname === path
    }
    useEffect(() => {
        if (!isOpen) {
            return
        }
        function handler(e) {
            if (!navbar.current?.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler)
        return () => document.removeEventListener('click', handler)
    }, [isOpen])

    function handle(e) {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }
    const anim = {
        hidden: {
            y: -30, opacity: 0
        },
        show: { y: 0, opacity: 1, transition: { staggerChildren: 0.13 } }
    }
    const item = {
        hidden: {
            x: 20, opacity: 0
        },
        show: {
            x: 0, opacity: 1
        }

    }
    return (
        <section className="text-[13px] lg:text-[16px] relative items-center flex justify-between border-b-2 border-custom" >
            <div className="flex items-center h-[45px] lg:h-[60px]">
                <Link to={'/'} className="border-r-2 h-full px-5 border-custom w-[18.6rem] lg:border-none lg:w-auto flex items-center hover:bg-[#1e2d3d74] hover:text-[#FFFFFF]">
                    baaz-cheema
                </Link>
                <Link to={'/'} className={`h-full flex items-center px-7 lg:hidden border-r-2 border-custom ${isActive('/') && 'border-b-[3.3px] border-b-[#FEA55F] text-[#FFFFFF]'} hover:bg-[#1e2d3d74] hover:text-[#FFFFFF]`}>_hello</Link>
                <Link to={'/about'} className={`h-full flex items-center lg:hidden px-7  border-r-2 border-custom ${isActive('/about') && 'border-b-[3.3px] border-b-[#FEA55F] text-[#FFFFFF]'} hover:bg-[#1e2d3d74] hover:text-[#FFFFFF]`}>_about-me</Link>
                <Link to={'/projects'} className={`h-full flex items-center lg:hidden px-7  border-r-2 border-custom ${isActive('/projects') && 'border-b-[3.3px] border-b-[#FEA55F] text-[#FFFFFF]'} hover:bg-[#1e2d3d74] hover:text-[#FFFFFF]`}>_projects</Link>
            </div>
            <Link to={'/contact'} className={`h-full flex items-center px-7 lg:hidden  border-l-2 border-custom ${isActive('/contact') && 'border-b-[3.3px] border-b-[#FEA55F] text-[#FFFFFF]'} hover:bg-[#1e2d3d74] hover:text-[#FFFFFF]`}>_contact-me</Link>
            <div onClick={handle} className="hidden lg:flex h-full items-center pr-5">
                <i className={`ri-${isOpen ? 'close' : 'menu'}-line ${isOpen ? 'text-4xl -mr-1' : 'text-3xl'}`}></i>
            </div>
            <AnimatePresence>
                {
                    isOpen && <motion.div ref={navbar} variants={anim} initial='hidden' animate='show' exit='hidden' className="absolute bg-[#011627] w-full flex flex-col top-full z-10 overflow-hidden shadow-2xl shadow-black">
                        <motion.div variants={item} exit={{ x: 0 }} className="w-full border-y-2 border-custom">
                            <Link onClick={() => setIsOpen(false)} to={'/'} className={`px-5 py-4 block ${isActive('/') && 'text-[#FFFFFF]'}`}>_hello</Link >
                        </motion.div>
                        <motion.div variants={item} exit={{ x: 0 }} className=" w-full border-b-2 border-custom">
                            <Link onClick={() => setIsOpen(false)} to={'/projects'} className={`px-5 py-4 block ${isActive('/projects') && 'text-[#FFFFFF]'}`}>_projects</Link >
                        </motion.div>
                        <motion.div variants={item} exit={{ x: 0 }} className=" w-full border-b-2 border-custom">
                            <Link onClick={() => setIsOpen(false)} to={'/about'} className={`px-5 py-4 block ${isActive('/about') && 'text-[#FFFFFF]'}`}>_about-me</Link >
                        </motion.div>
                        <motion.div variants={item} exit={{ x: 0 }} className=" w-full border-b-2 border-custom">
                            <Link onClick={() => setIsOpen(false)} to={'/contact'} className={`block px-5 py-4 ${isActive('/contact') && 'text-[#FFFFFF]'}`}>_contact-me</Link >
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>

        </section>
    )
}