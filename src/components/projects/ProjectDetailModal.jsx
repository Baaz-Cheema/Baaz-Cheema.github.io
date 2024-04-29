import { motion } from "framer-motion"
import { createPortal } from "react-dom"
export default function ProjectDetailModal({ setIsOpen, description, technologies, modules, name, image, url }) {
    return (
        createPortal(<>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                exit={{ opacity: 0 }}
                style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0, 0, 0, 0.70)' }}
                className='fixed z-40 top-0 bottom-0 right-0 left-0'
                onClick={() => setIsOpen(false)}
            />
            <motion.dialog
                open
                initial={{ scale: .9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .9, opacity: 0 }}
                transition={{ type: "spring", duration: .5 }}
                className='bg-[#011627] rounded-lg border-2 font-fira text-[#607B96]  border-custom fixed top-0 bottom-0 z-50 flex flex-col w-[30rem] h-[33rem]  sm:w-[95%] sm:h-[37rem] overflow-auto custom-scroll drop-shadow-2xl'>
                <div className="py-4 px-5">
                    <h3 className="font-semibold mb-2">Project <span className="text-[#FFFFFF]">{name}</span> _details</h3>
                    <a href={url} target=" _blank" className="overflow-hidden mb-2">
                        <img className="h-auto object-cover" src={image} alt="" />
                    </a>
                    <p className="my-6">{description}</p>
                    <div className="mb-2">
                        <h3 className="font-semibold text-[#FFFFFF] mb-1">tech stack:</h3>
                        {technologies.map((a, i) => <li key={i} className="">{a}</li>)}
                    </div>
                  

                </div>
            </motion.dialog >

        </>, document.getElementById('modal'))
    )
}