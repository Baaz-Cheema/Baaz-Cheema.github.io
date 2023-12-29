import { motion } from "framer-motion"

import { useRef, useEffect } from "react"
import Typed from "typed.js"
import Techstack from "./Techstack";

export default function HeroSection() {

    const el = useRef()
    useEffect(() => {
        // Initialize Typed.js after a delay
        const timer = setTimeout(() => {
            const typed = new Typed(el.current, {
                strings: ["I develop front-end.", 'I design UIs.', "I solve problems."],
                typeSpeed: 50,
                backSpeed: 50,
                loop: true,
                backDelay: 3000,
                smartBackspace: true,
            });

            return () => {
                typed.destroy(); //settimeout returns typed so it can be destroyde
            };
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <section className="h-screen flex items-center">
            <div>
                <div className='flex lg:flex-col-reverse items-center md:mt-14'>
                    <div className='w-1/2 lg:w-full'>
                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="font-mono text-l text-slate-400">Hi, my name is</motion.h1>
                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className='sm:text-5xl pb-2 mb-2 text-slate-200 font-semibold shadow-sm text-6xl whitespace-nowrap'>Baaz Cheema.</motion.h1>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }} className="mb-5">
                            <motion.h1 ref={el} id="bef" className="-z-10  inline  text-amber-300 pb-2  shadow-sm font-mono text-3xl sm:text-2xl"></motion.h1>
                        </motion.div>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className='  sm:text-lg text-slate-400 inline-block text-xl'>I am an aspiring react developer based in Gujrat, Pakistan. I enjoy learning new technologies and building user-friendly interfaces.</motion.p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }} className='mt-6'>
                            <a href="https://www.linkedin.com/in/baaz-cheema-ab0935212/"
                                target="_blank ">
                                <motion.i whileHover={{ y: -3 }} className='bx bxl-linkedin text-4xl text-slate-300 mr-5 hover:text-amber-400'></motion.i>
                            </a>
                            <a href="https://github.com/Baaz-Cheema"
                                target="_blank ">
                                <motion.i whileHover={{ y: -3 }} className='bx bxl-github text-4xl text-slate-300 hover:text-amber-400'></motion.i>
                            </a>
                        </motion.div>
                    </div>
                    <motion.div initial={{ scale: 1.1, opacity: 0 }} transition={{ duration: .7 }} animate={{ scale: 1, opacity: 1 }} className="relative w-1/2 lg:w-10/12 lg:mb-10   flex justify-center pl-20 lg:pl-0 lg:justify-center -z-10">
                        <img className="w-96" src="https://lh3.googleusercontent.com/pw/ABLVV845uZXojlt3kIcDoedfyEuQKn_v_3XNuh_Mjrf4QS4uAEFUrp9WJn4IS1FPo1zdquBhswX8a5OoPbT6o_HNPFIX_BKNUfovrzi3zpwfpdRXd1IF6_8M=w2400" alt="" />
                    </motion.div>
                    <div>
                    </div>
                </div>
                <motion.div className="lg:hidden">
                    <Techstack delayVal={1.5} />
                </motion.div>
            </div>
        </section >
    )
}