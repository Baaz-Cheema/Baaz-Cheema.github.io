import { motion } from "framer-motion"

export default function About(props) {
    return (
        <section className="mb-48" ref={props.aboutRef} >
            <h1 className=' text-2xl font-bold font-mono text-amber-300 uppercase header mb-10  hidden lg:block '>About <span className="">me</span>  </h1>
            <motion.div className='flex justify-between lg:flex-col items-center h-96 md:h-80 relative'>
                <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0, }} transition={{ delay: .6, duration: .7 }}
                    className=' bg-gray-200 w-1/2 h-full  lg:w-full relative -z-10'>
                    <img className="object-cover max-h-full w-full" src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </motion.div>
                <motion.div viewport={{ once: true }} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0, }} transition={{ delay: .6, duration: .7 }} className='w-1/2 pl-10 lg:w-full h-full lg:pl-0'>
                    <h1 className=' text-2xl font-bold font-mono text-amber-300 uppercase header lg:text-center lg:mt-10 lg:hidden'>About <span className="">me</span>  </h1>
                    <div className="mb-auto w-11/12 lg:w-full ">
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