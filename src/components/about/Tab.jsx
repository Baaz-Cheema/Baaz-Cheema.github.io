import { useState } from "react"

export default function Tab({ children, title, openByDefault }) {
    const [isOpen, setIsOpen] = useState(openByDefault)
    return (
        <>
            <h2 onClick={() => setIsOpen(!isOpen)} className="flex items-center mb-1 bg-[#1e2d3d] text-[#FFFFFF] px-5 py-1"><i className={`ri-arrow-right-s-fill text-xl transition-transform duration-100 ${isOpen ? 'rotate-90' : 'rotate-0'}`}></i>{title}</h2>
            {isOpen && children}
        </>
    )
}