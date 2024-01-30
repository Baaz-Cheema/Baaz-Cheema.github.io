import { motion } from "framer-motion"

export default function Contact({ contactRef }) {

    return (
        <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            ref={contactRef}
            className="flex font-inter justify-center flex-col items-center mb-32"
        >
            <h1 className="text-slate-200 text-5xl font-bold">Get In Touch</h1>
            <p className="my-10 w-1/2 text-slate-400 sm:w-10/12 text-center">
                Currently looking for opportunities. Send me a message and i will get back to you ASAP.
            </p>
            <div className="sm:text-center sm:flex sm:items-center sm:flex-col">
                <a href="https://wa.me/923236333123" target='_blank '>
                    <motion.button initial={false}
                        whileHover={{
                            y: -5,
                            boxShadow: '0px 0.5em 0.5em -0.4em rgb(252, 211, 77)',
                            borderColor: 'rgb(252, 211, 77)',
                            color: 'rgb(252, 211, 77)'
                        }}
                        className="py-3 mr-3 text-slate-200 px-10 border-red-500 border-2 font-mono inline-flex items-center sm:mr-0 sm:mb-3">
                        <i className='bx bxl-whatsapp mr-1 text-xl'></i> Say Hello
                    </motion.button>
                </a>
                <a href="mailto:chrisbahadur1@gmail.com">
                    <motion.button
                        whileHover={{
                            y: -5,
                            boxShadow: '0px 0.5em 0.5em -0.4em rgb(252, 211, 77)',
                            borderColor: 'rgb(252, 211, 77)',
                            color: 'rgb(252, 211, 77)'
                        }}
                        className="py-3 text-slate-200 px-10 border-red-500 border-2 font-mono inline-flex items-center">
                        <i className='bx bx-envelope mr-1 text-xl' ></i> Say Hello
                    </motion.button>
                </a>
            </div>
        </motion.section>
    )
}