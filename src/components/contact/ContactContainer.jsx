import ContactForm from "./ContactForm"
import { useState } from "react"
export default function ContactContainer() {
    const [data, setData] = useState({ name: '', email: '', message: '' })
    function handleChange(e) {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const today = new Date(); // Get the current date

    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <div className="flex flex-1 lg:flex-col">
            <div className="flex-1 w-1/2 h-full lg:w-full flex flex-col border-r-2 lg:border-none border-custom">
                <div className="border-b-2 border-custom lg:hidden" >
                    <h2 className="flex items-center  justify-between max-w-[12rem]  px-2  border-r-2 border-custom py-1">
                        contact-me.py <i className="ri-close-line text-xl text-[#FFFFFF]"></i></h2>
                </div>
                <div className="py-4 px-5 overflow-auto custom-scroll">
                    <p className="mb-10 lg:hidden lg:text-[#FFFFFF]">{'//'} send me a message</p>
                    <ContactForm handleChange={handleChange} name={data.name} email={data.email} message={data.message} />
                </div>
            </div>
            <div className="flex-1 w-1/2 items-center lg:hidden border-custom flex flex-col overflow-auto scroll-none">
                <div className="border-b-2 border-custom lg:border-none self-start w-full">
                    <h2 className="flex items-center opacity-0  w-fit  border-custom py-1">
                        {<i className="ri-close-line text-xl text-[#607B96] hover:text-[#FFFFFF]"></i>}
                    </h2>
                </div>
                <div className="px-5 py-4 pt-20 flex-1 text-[16px] h-full max-w-[30rem] break-words">
                    <p className="mb-3"><span className="text-[#c98bdf] ">const </span><span className="text-[#5565e8]">button </span>= <span className="text-[#5565e8]">document</span><span className="text-yellow-200">.querySelector</span>(<span className="text-[#E99287]">{`'#submitBtn'`}</span>) </p>
                    <div className="mb-3"><span className="text-[#c98bdf] ">const </span><span className="text-[#5565e8]">message </span>= {'{'}
                        <p className="pl-10 "><span className="text-[#5565e8]">name: </span> <span className="text-[#E99287]">{`'${data.name}'`}</span>,</p>
                        <p className="pl-10"><span className="text-[#5565e8]">email: </span> <span className="text-[#E99287]">{`'${data.email}'`}</span>,</p>
                        <p className="pl-10"><span className="text-[#5565e8]">message: </span> <span className="text-[#E99287]">{`'${data.message}'`}</span>,</p>
                        <p className="pl-10"><span className="text-[#5565e8]">date: </span> <span className="text-[#E99287]">{`'${formattedDate}'`}</span>,</p>
                        {'}'}</div>
                    <p><span className="text-[#5565e8]">button</span><span className="text-yellow-200">.addEventListener</span>(<span className="text-[#E99287]">{`'click'`}</span>), {'()'} <span className="text-[#c98bdf]">{'=>'} </span>
                        {'{'} <span className="text-[#5565e8]">form</span><span className="text-yellow-200">.send</span>(<span className="text-[#5565e8]">message</span>) {'})'}
                    </p>
                </div>
            </div>
        </div>
    )
}