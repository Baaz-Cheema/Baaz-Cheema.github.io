import { motion } from "framer-motion"


export default function Portfolio(props) {

    return (
        <motion.section
            ref={props.projectsRef}
            className="mt-30 lg:mt-48 mb-44 md:mt-20 md:mb-28">
            <div className="flex items-center">
                <motion.h1 className="text-3xl font-bold text-amber-300 uppercase inline-block">Portfolio</motion.h1>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ transformOrigin: "left" }} className="inline-block bg-amber-400 w-64 h-[1.5px] ml-10">

                </motion.div>
            </div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .7 }}

                className='flex justify-between mt-10  lg:flex-col items-center'>
                <motion.div className='drop-shadow-lg bg-gray-200 w-1/2 h-96 overflow-hidden pfbox lg:w-9/12 md:w-full sm:h-72'>

                </motion.div>
                <div className='w-1/2 h-full relative pl-10 flex flex-col justify-between lg:pl-0 lg:w-full items-center'>
                    <h1 className=" text-center text-xs tracking-wide font-mono text-red-500 lg:mt-10 ">featured project</h1>
                    <h1 className=' text-2xl font-semibold text-slate-200  flex items-center justify-center'>Almari Store</h1>
                    <p className='text-slate-400 mt-6 leading-7 text-l text-center  lg:w-10/12 md:w-full'>
                        This is a fully responsive e-commerce site with a variety of features. It includes a product-rich store page, integrated cart, and account page with customizable settings. Also includes a product search function for easy navigation. All designed to work smoothly on any device.
                    </p>
                    <div className="flex justify-center mt-5 pb-3 flex-wrap">
                        <p className="font-mono py-1 px-3 text-slate-200 text-xs">Redux</p>
                        <p className="font-mono py-1 px-3 text-slate-200 text-xs">React router</p>
                        <p className="font-mono py-1 px-3 text-slate-200 text-xs">Vanilla CSS</p>
                        <p className="font-mono py-1 px-3 text-slate-200 text-xs">Framer-motion</p>
                        <p className="font-mono py-1 px-3 text-slate-200 text-xs">Bootstrap</p>
                    </div>
                    <div className="flex justify-center mt-auto ">
                        <motion.a
                            initial={false}
                            whileHover={{
                                y: -2,
                                boxShadow: '0px 0.5em 0.5em -0.4em rgb(252, 211, 77)',
                                borderColor: 'rgb(252, 211, 77)',
                                color: 'rgb(252, 211, 77)'
                            }}
                            className="text-slate-200 flex font-mono px-5 py-2 mr-2 items-center pointer border-red-500 border" href="https://github.com/Baaz-Cheema/E-Commerce-Front-End" target="_blank"><i className='bx bxl-github text-2xl pr-1' ></i>Code</motion.a>
                        <motion.a
                            initial={false}
                            whileHover={{
                                y: -2,
                                boxShadow: '0px 0.5em 0.5em -0.4em rgb(252, 211, 77)',
                                borderColor: 'rgb(252, 211, 77)',
                                color: 'rgb(252, 211, 77)'
                            }}
                            className="text-slate-200 font-mono flex px-5 py-2 ml-2 items-center pointer  border-red-500 border" href="https://almari.netlify.app/" target="_blank"><i className='bx bx-link-external text-2xl pr-1' ></i>Demo</motion.a>
                    </div>
                    <div>
                    </div>
                </div>
            </motion.div>


            <motion.div className='flex flex-row-reverse justify-between mt-32 lg:flex-col items-center'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .7 }}>
                <motion.div className=' bg-gray-200 w-1/2 h-96 overflow-hidden pfbox-2 lg:w-9/12 md:w-full sm:h-72 drop-shadow-lg shadow-amber-400'>

                </motion.div>
                <div className='w-1/2 h-full relative pr-10 flex flex-col justify-between lg:pr-0 lg:w-full items-center'>
                    <h1 className=" text-center text-xs tracking-wide font-mono text-red-500 lg:mt-10 ">featured project</h1>
                    <h1 className=' text-2xl font-semibold text-slate-200  flex items-center justify-center'>FitnessX Gym</h1>
                    <p className='text-slate-400 mt-6 leading-7 text-l text-center  lg:w-10/12 md:w-full'>
                        This is a responsive and interactive gym website with six unique pages, enriched with smooth animations. It includes a functional shop page, all designed following a Figma template using Tailwind CSS.
                    </p>
                    <div className="flex justify-center mt-5 pb-3 flex-wrap">
                        <p className="font-mono py-1 px-3 text-slate-200 text-xs">Redux</p>
                        <p className="font-mono py-1 px-3 text-slate-200 text-xs">React router</p>
                        <p className="font-mono py-1 px-3 text-slate-200 text-xs">Tailwind CSS</p>
                        <p className="font-mono py-1 px-3 text-slate-200 text-xs">Framer-motion</p>
                    </div>
                    <div className="flex justify-center mt-auto ">
                        <motion.a
                            initial={false}
                            whileHover={{
                                y: -2,
                                boxShadow: '0px 0.5em 0.5em -0.4em rgb(252, 211, 77)',
                                borderColor: 'rgb(252, 211, 77)',
                                color: 'rgb(252, 211, 77)'
                            }}
                            className="text-slate-200 font-mono flex px-5 py-2 mr-2 items-center pointer border-red-500 border" href="https://github.com/Baaz-Cheema/FitnessX" target="_blank"><i className='bx bxl-github text-2xl pr-1' ></i>Code</motion.a>
                        <motion.a
                            initial={false}
                            whileHover={{
                                y: -2,
                                boxShadow: '0px 0.5em 0.5em -0.4em rgb(252, 211, 77)',
                                borderColor: 'rgb(252, 211, 77)',
                                color: 'rgb(252, 211, 77)'
                            }}
                            className="text-slate-200 font-mono flex px-5 py-2 ml-2 items-center pointer  border-red-500 border" href="https://fitnessxgym.netlify.app/" target="_blank"><i className='bx bx-link-external text-2xl pr-1' ></i>Demo</motion.a>
                    </div>
                    <div>
                    </div>
                </div>
            </motion.div>
        </motion.section >
    )
}