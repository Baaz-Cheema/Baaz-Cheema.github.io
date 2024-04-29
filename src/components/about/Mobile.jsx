import { motion } from "framer-motion"
import CodeSnippet from "./CodeSnippet"
import ActiveFile from "./ActiveFile"
import { useState } from "react"
import { files } from "../../util/professionalInfo"
import Folder from "./Folder"
import Tab from "./Tab"

export default function Mobile() {
    const [activeFilePath, setActiveFilePath] = useState({ folder: 'experience', file: 'axiom-world' })
    const fileContent = files[activeFilePath.folder].filter(a => activeFilePath.file === a.name)[0]

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[14px] hidden lg:flex flex-col">
            <h2 className="text-[16px] text-[#FFFFFF] my-5 px-5 ">_about-me</h2>
            <Tab title={'professional-info'} openByDefault={true}>
                <div className="w-full pb-2 px-3 text-[16px]">
                    <Folder folderName={'experience'} color={'text-[#E99287]'} setActiveFilePath={setActiveFilePath} activeFilePath={activeFilePath} />
                    <Folder folderName={'skills'} color={'text-[#43D9AD]'} setActiveFilePath={setActiveFilePath} activeFilePath={activeFilePath} />
                    <Folder folderName={'personal-info'} color={'text-[#4D5BCE]'} setActiveFilePath={setActiveFilePath} activeFilePath={activeFilePath} />
                </div>
            </Tab>
            <Tab title={'contacts'}>
                <div className="text-[16px] px-5">
                    <a href="mailto:f.ashraf2656@gmail.com" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] mt-1 mb-1"><i className="ri-mail-fill"></i>f.ashraf2656@gmail.com</a>
                    <a href="https://wa.me/923117831326" target=" _blank" className="flex items-center px-2 gap-1  hover:text-[#FFFFFF]"><i className="ri-phone-fill "></i>+923117831326</a>
                </div>
            </Tab>

            <div className="w-full">
                <ActiveFile activeFilePath={activeFilePath} content={fileContent.content} skills={fileContent?.skills} fileName={fileContent.name} />
                <div className="flex-1 w-full  flex flex-col">
                    <div className="py-4 px-5">
                        <p className="mb-7 lg:text-[#FFFFFF] lg:text-[16px]">{'//'} Code snippet showcase:</p>
                        <CodeSnippet codeStr={`def factorial(n):
if n == 0:
    return 1
else:
    return n * factorial(n-1)

num = 5
print(f"The factorial of {num} is {factorial(num)}")
`} />
                        <CodeSnippet codeStr={`def factorial(n):
if n == 0:
    return 1
else:
    return n * factorial(n-1)

num = 5
print(f"The factorial of {num} is {factorial(num)}")
`} />
                    </div>

                </div>

            </div>
        </motion.section>
    )
}