import { motion } from "framer-motion"
import { images } from "./utils/utils"
export default function Techstack({ delayVal }) {
    return <div className='flex items-center md:flex-col mt-10 lg:mt-0 md:mt-5'>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delayVal ? delayVal : 0 }} className='md:mb-10 text-slate-300 border-r-2 border-amber-400 whitespace-nowrap pr-5 text-xl font-semibold md:border-b-2 md:pr-0 md:border-r-0 md:pb-3 '>Tech stack</motion.p>
        <motion.div
            variants={{
                animate: { transition: { staggerChildren: .2, delayChildren: delayVal ? delayVal : 0 } }
            }}
            initial='initial'
            whileInView="animate"
            viewport={{ once: true }}
            className='flex w-6/12 ml-7 lg:ml-0 items-center flex-wrap gap-5 gap-y-4 justify-evenly  lg:w-full xs:grid xs:grid-cols-3 xs:place-items-center xs:gap-x-0 xs:gap-y-10'>
            {images.map((a, i) => {
                return <motion.div
                    key={i}
                    id="skill"
                    className={`${a.className}`}
                    variants={{
                        initial: { scale: 0 },
                        animate: { scale: 1 }
                    }}

                >
                    <motion.img className="" whileHover={{ scale: 1.1 }} src={a.src} alt="" />
                </motion.div>
            })}
        </motion.div>
    </div>
}