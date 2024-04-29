import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { motion } from 'framer-motion';
export default function CodeSnippet({ codeStr }) {
    return (
        <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-[12px] mb-5">
            <div className="flex items-center gap-2 w-full">
                <div className="rounded-full w-10 h-10 shrink-0 overflow-hidden">
                    <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNvZGV8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div className="w-full">
                    <div className="flex justify-between">
                        <h3 className="font-bold text-[#4D5BCE]">@Baaz-cheema</h3>
                        <div className="flex gap-2">
                            <span className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] "><i className="ri-chat-smile-2-fill"></i>details</span>
                            <span className="flex items-center px-2 gap-1  hover:text-[#FFFFFF] lg:hidden"><i className="ri-star-fill"></i>stars</span>
                        </div>
                    </div>
                    <p>created 12/1/23</p>
                </div>
            </div>
            <div className="border-2 border-custom rounded-xl mt-3 pb-3 px-3 overflow-auto  custom-scroll bg-[#01080E]">
                <SyntaxHighlighter
                    className='custom-scroll'
                    language="javascript"
                    style={rainbow}
                    customStyle={{ background: 'transparent' }} // Set background to transparent
                >
                    {codeStr}
                </SyntaxHighlighter>
            </div>

        </motion.div>
    )
}