import { motion } from "framer-motion"

export default function About(props) {
    return (
        <section className="mb-48 lg:mb-32 font-inter" ref={props.aboutRef} >
            <div className="flex items-center mb-10">
                <h1 className=' text-3xl font-semibold text-amber-300 whitespace-nowrap hidden lg:block '>About me</h1>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ transformOrigin: "left" }} className=" bg-amber-400 w-64 h-[1.5px] ml-10 hidden lg:block">
                </motion.div>
            </div>

            <motion.div className='flex justify-between lg:flex-col items-center h-96 lg:h-auto relative'>
                <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0, }} transition={{ delay: .6, duration: .7 }}
                    className=' bg-gray-200 w-1/2 h-full md:w-full relative -z-10 lg:w-9/12'>
                    <img className="object-cover h-full w-full " src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </motion.div>
                <motion.div viewport={{ once: true }} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0, }} transition={{ delay: .6, duration: .7 }} className='w-1/2 pl-10 lg:w-full h-full lg:pl-0'>
                    <div className="flex items-center">
                        <h1 className=' text-3xl font-semibold text-amber-300 whitespace-nowrap lg:text-center lg:mt-10 lg:hidden'>About <span className="">me</span>  </h1>
                        <motion.div initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: .8 }}
                            style={{ transformOrigin: "left" }} className=" bg-amber-400 w-64 h-[1.5px] ml-10 lg:hidden">
                        </motion.div>
                    </div>

                    <div className="w-11/12 lg:w-10/12 lg:mx-auto md:w-full">
                        <p className='mt-6 leading-6 text-l md:leading-6 text-slate-400'>
                            As a self-taught web developer, I love to tackle challenges with code and see each project as a new adventure.
                            At the age of 25, I have dedicated myself to the exciting world of web development and have embarked on a journey of constant learning and growth eager to bring my creativity and problem-solving skills to new opportunities.
                        </p>

                        <p className='mt-5 leading-6 text-l md:leading-6 text-slate-400'>
                            I pay great attention to detail in the development of my projects, and usually go for a minimalistic design. My ultimate goal is to create software that is both user-friendly and impactful in achieving visions.
                        </p>

                        <p className=' mt-5 leading-6 text-l md:leading-6 text-slate-400'>
                            When I am not coding, I am either gaming or at the gym.
                        </p>
                    </div>

                </motion.div>
            </motion.div>
        </section>
    )
}