import { motion } from "framer-motion"

export default function Sidebar() {
    return (
        <motion.div className='fixed bottom-[2.5rem] rotate-90 -left-20 flex items-center gap-[6rem] md:hidden' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}>
            <div className='-rotate-90 flex flex-col items-center justify-center gap-3'>
                <a href="https://www.linkedin.com/in/baaz-cheema-ab0935212/"
                    target="_blank ">
                    <motion.i whileHover={{ y: -3 }} className='bx bxl-linkedin text-4xl text-slate-300  hover:text-amber-400'></motion.i>
                </a>
                <a href="https://github.com/Baaz-Cheema"
                    target="_blank ">
                    <motion.i whileHover={{ y: -3 }} className='bx bxl-github text-4xl text-slate-300 hover:text-amber-400'></motion.i>
                </a>
                <a href="https://wa.me/923236333123" target='_blank '>
                    <motion.i whileHover={{ y: -3 }} className=' bx bxl-whatsapp text-4xl text-slate-300  hover:text-amber-400'></motion.i>
                </a>
                <a href="mailto:chrisbahadur1@gmail.com">
                    <motion.i whileHover={{ y: -3 }} className=' bx bx-envelope text-4xl text-slate-300  hover:text-amber-400'></motion.i>
                </a>
            </div>
            <div className='h-[1px] w-40 bg-slate-200 '> </div>
        </motion.div>
    )
}