import { useState, useEffect } from "react"
import ProjectDetailModal from "./ProjectDetailModal"
import { AnimatePresence } from "framer-motion"
export default function ProjectCard({ name, description, modules, technologies, image, url }) {
    const [isOpen, setIsOpen] = useState(false)
    const truncatedDescription = description?.slice(0, 45)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
    return (
        <>
            <div className="">
                <h2 className="mb-1"><span className="text-[15px] text-[#5565E8]">
                    <a href={url} target=" _blank">{name}</a></span> {'// _modules'}</h2>
                <div className="border-2 border-custom rounded-lg bg-[#011221]">
                    <div className="flex flex-col">
                        <div className="max-h-[120px] overflow-hidden">
                            <img className="h-auto max-w-full rounded-t-lg" src={image} alt="" />
                        </div>
                        <div className="p-5  border-t-2 border-custom">
                            <p>{truncatedDescription + '...'}</p>
                            <button onClick={() => setIsOpen(true)} className="bg-[#1c2b3a] mt-3 rounded-md px-3 py-1 text-[#FFFFFF]">view-details</button>
                            <a href={url} target=" _blank" className="bg-[#1c2b3a] mt-3 cursor-pointer rounded-md px-3 py-1 ml-2 inline-flex gap-2 items-center  text-[#FFFFFF]">demo <i className="ri-external-link-line"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && <ProjectDetailModal
                    setIsOpen={setIsOpen}
                    url={url}
                    description={description}
                    image={image}
                    modules={modules}
                    technologies={technologies}
                    name={name} />}
            </AnimatePresence>
        </>
    )
}