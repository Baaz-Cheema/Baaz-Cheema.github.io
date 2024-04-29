import Tab from "../components/about/Tab"
import ContactContainer from "../components/contact/ContactContainer"
import { motion } from "framer-motion"
export default function Contact() {
    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex text-[14px] lg:flex-col h-full overflow-auto">
                <h2 className="text-[16px] text-[#FFFFFF] my-5 px-5 hidden  lg:block">_contact-me</h2>
                <div className="border-r-2 border-custom w-[18.6rem] h-full lg:hidden">
                    <h2 className="flex items-center px-2 border-b-2 border-custom text-[#FFFFFF] py-1"><i className="ri-arrow-down-s-fill text-xl"></i>contacts</h2>
                    <a href="mailto:f.ashraf2656@gmail.com" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] mt-3 mb-1 pl-3"><i className="ri-mail-fill"></i>f.ashraf2656@gmail.com</a>
                    <a href="https://wa.me/923117831326" target=" _blank" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] pl-3"><i className="ri-phone-fill "></i>+923117831326</a>
                    <h2 className="flex items-center px-2 border-y-2 mt-3 border-custom text-[#FFFFFF] py-1 "><i className="ri-arrow-down-s-fill text-xl"></i>find-me-also-in</h2>
                    <a href="https://www.codewars.com/users/faaani" target=" _blank" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] mt-3 mb-1 pl-3"><i className="ri-external-link-line"></i>Code wars</a>
                    <a href="" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] pl-3"><i className="ri-external-link-line"></i>Youtube Channel</a>
                </div>
                <div className="hidden lg:block">
                    <Tab title={'contacts'}>
                        <div className="text-[16px] px-5 mb-2">
                            <a href="mailto:f.ashraf2656@gmail.com" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] mt-1 mb-1"><i className="ri-mail-fill"></i>f.ashraf2656@gmail.com</a>
                            <a href="https://wa.me/923117831326" target=" _blank" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF]"><i className="ri-phone-fill "></i>+923117831326</a>
                        </div>
                    </Tab>
                    <Tab title={'find-me-also'}>
                        <div className="text-[16px] px-5 py-1">
                            <a href="https://www.codewars.com/users/faaani" target=" _blank" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] mb-1 pl-3"><i className="ri-external-link-line"></i>Code wars</a>
                            <span className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] pl-3"><i className="ri-external-link-line"></i>Youtube Channel</span>
                        </div>
                    </Tab>
                </div>
                <ContactContainer />
            </motion.section>
        </>
    )
}