import { motion } from "framer-motion"
import Folder from "./Folder"
import CodeSnippet from "./CodeSnippet"
import ActiveFile from "./ActiveFile"
import { useState } from "react"
import { files } from "../../util/professionalInfo"
import Tab from "./Tab"

export default function Desktop() {
    const [activeFilePath, setActiveFilePath] = useState({ folder: 'skills', file: 'tech-stack' })
    const fileContent = files[activeFilePath.folder].filter(a => activeFilePath.file === a.name)[0]

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex h-full overflow-hidden text-[14px] lg:flex-col">
            <h2 className="text-[16px] text-[#FFFFFF] my-5 px-5 hidden  lg:block">_about-me</h2>
            <div className="border-r-2 border-custom h-full flex flex-col items-center gap-2 pt-2 text-2xl w-[3.6rem] lg:hidden">
                <i className="ri-terminal-box-fill opacity-50 hover:opacity-100"></i>
                <i className="ri-user-5-fill opacity-50 hover:opacity-100"></i>
            </div>
            <div className="border-r-2 border-custom w-[15rem] lg:hidden">
                <h2 className="flex items-center px-2 border-b-2 border-custom text-[#FFFFFF] py-1"><i className="ri-arrow-down-s-fill text-xl"></i>professional-info</h2>
                <div className="w-full border-b-2 border-custom py-2">
                    <Folder folderName={'skills'} color={'text-[#43D9AD]'} setActiveFilePath={setActiveFilePath} activeFilePath={activeFilePath} />
                    <Folder folderName={'personal-info'} color={'text-[#4D5BCE]'} setActiveFilePath={setActiveFilePath} activeFilePath={activeFilePath} />
                </div>
                <h2 className="flex items-center px-2 border-b-2 border-custom text-[#FFFFFF] py-1"><i className="ri-arrow-down-s-fill text-xl"></i>contacts</h2>
                <a href="mailto:bcheema.dev@gmail.com" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] mt-3 mb-1"><i className="ri-mail-fill"></i>bcheema.dev@gmail.com</a>
                <a href="https://wa.me/923236333123" target=" _blank" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF]"><i className="ri-phone-fill "></i>+923236333123</a>
            </div>
            {/* mobile */}
            <div className="hidden lg:block">
                <Tab title={'professional-info'} openByDefault={true}>
                    <div className="w-full pb-2 px-3 text-[16px]">
                        <Folder folderName={'skills'} color={'text-[#43D9AD]'} setActiveFilePath={setActiveFilePath} activeFilePath={activeFilePath} />
                        <Folder folderName={'personal-info'} color={'text-[#4D5BCE]'} setActiveFilePath={setActiveFilePath} activeFilePath={activeFilePath} />
                    </div>
                </Tab>
                <Tab title={'contacts'}>
                    <div className="text-[16px] px-5">
                        <a href="mailto:bcheema.dev@gmail.com" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] mt-1 mb-1"><i className="ri-mail-fill"></i>bcheema.dev@gmail.com</a>
                        <a href="https://wa.me/923236333123" target=" _blank" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF]"><i className="ri-phone-fill "></i>+923236333123</a>
                    </div>
                </Tab>
            </div>



            {/* file view when open */}

            <div className="flex flex-1 lg:flex-col">
                <ActiveFile activeFilePath={activeFilePath} content={fileContent.content} skills={fileContent?.skills} fileName={fileContent.name} />
                <div className="flex-1 w-1/2 h-full flex flex-col lg:w-full">
                    <div className="border-b-2 border-custom lg:border-none">
                        <h2 className="flex items-center justify-between w-[15rem] opacity-0 px-2  border-r-2 border-custom py-1 lg:hidden">
                            hello  <i className="ri-close-line text-xl text-[#FFFFFF]"></i></h2>
                    </div>
                    <div className="py-4 px-5 overflow-auto custom-scroll">
                        <p className="mb-7 lg:text-[#FFFFFF] lg:text-[16px]">{'//'} Code snippet showcase:</p>
                        <CodeSnippet codeStr={`
function isPalindrome(str) {
    let regex = /[a-zA-Z0-9]/g
    let matched = str.match(regex)
    let reversedStr = matched.slice().reverse()
    return matched.join('').toLowerCase() === reversedStr.join('').toLowerCase();
}
`} />
                        <CodeSnippet codeStr={`
function submitOrder() {
    if (amount > 0 || budget === 0) {
        setOrderComplete(true)
        dispatch(portfolioSliceActions.addTransaction(
            transaction
        ))
        dispatch(portfolioSliceActions.addCoinToPortfolio(
            {
                name,
                symbol,
                image,
                filled: (budget / 100 * amount),
                get amount() {
                    return (this.filled / price);
                }
            }
        ))
        dispatch(portfolioSliceActions.subtractBudget((budget / 100 * amount)))
    }
}
`} />

                    </div>

                </div>

            </div>
        </motion.section>
    )
}