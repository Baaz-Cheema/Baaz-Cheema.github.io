import ProjectCard from "../components/projects/ProjectCard"
import Tab from "../components/about/Tab"
import { projects } from "../util/projects"
import { useState } from "react"
import { motion } from "framer-motion"
export default function Projects() {
    const [isSelected, setIsSelected] = useState([])
    let tech = ["Vanilla CSS", "HTML", "JavaScript", "RESTful API", 'Tailwind CSS',  'Charts JS', 'Bootstrap']
    function filter(e) {
        if (e.target.checked) {
            setIsSelected(prev => [...prev, e.target.name])
        } else {
            setIsSelected(prev => prev.filter(a => a !== e.target.name))
        }
    }
    let filteredProjects = projects.filter(project =>
        project.technologies.some(tech =>
            isSelected.includes(tech)))

    const currentArr = filteredProjects.length > 0 ? filteredProjects : projects

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex text-[14px] lg:flex-col h-full overflow-hidden scroll-none">
            <h2 className="text-[16px] text-[#FFFFFF] my-5 px-5 hidden  lg:block">_projects</h2>
            <div className="border-r-2 border-custom w-[18.6rem] h-full lg:hidden">
                <h2 className="flex items-center px-2 border-b-2 border-custom text-[#FFFFFF] py-1"><i className="ri-arrow-down-s-fill text-xl"></i>projects</h2>
                {tech.map((a, i) =>
                    <div key={a} className="pl-3 flex mt-2 gap-4 items-center">
                        <input onChange={filter} className="hover:outline" type="checkbox" name={a} id="" />
                        <span className={` hover:text-[#FFFFFF] pt-1 ${isSelected.includes(a) && 'text-[#FFFFFF]'}`}>{a}</span>
                    </div>)}
            </div>
            <div className="hidden lg:block">
                <Tab title={'projects'}>
                    <div className="text-[16px] px-5 mb-3">
                        {tech.map((a, i) =>
                            <div key={a} className="pl-3 flex mt-2 gap-4 items-center">
                                <input onChange={filter} className="hover:outline" defaultChecked={isSelected.includes(a)} type="checkbox" name={a} id="" />
                                <span className={` hover:text-[#FFFFFF] pt-1 ${isSelected.includes(a) && 'text-[#FFFFFF]'}`}>{a}</span>
                            </div>)}
                    </div>
                </Tab>
                <div className="py-4 px-5">
                    <p className="mb-7 pr-2 lg:text-[#FFFFFF] lg:text-[16px] inline">{'//'} Projects:</p>
                    {filteredProjects.length > 0 ? isSelected.map((a, i) => <span className="mr-2" key={i}>{a + '; '}</span>) : 'all.py'}
                </div>

            </div>
            <div className="flex flex-1">
                <div className="flex-1 h-full w-full flex flex-col ">
                    <div className="border-b-2 border-custom lg:hidden w-full" >
                        <h2 className="flex items-center justify-between w-fit  px-2  border-r-2 border-custom py-1">
                            {filteredProjects.length > 0 ? isSelected.map((a, i) => <span className="mr-2" key={i}>{a + '; '}</span>) : 'all.py'} <i className="ri-close-line text-xl pl-5"></i></h2>
                    </div>
                    <div className="py-12 lg:pt-2 px-5 max-w-[85%]  gap-5 mx-auto grid gap-y-5 grid-cols-3 xl:grid-cols-2 md:grid-cols-1 md:max-w-full overflow-auto custom-scroll">
                        {currentArr.map((a) =>
                            <ProjectCard key={a.name}
                                name={a.name}
                                image={a.image}
                                url={a.url}
                                description={a.description}
                                technologies={a.technologies}
                                modules={a.modules} />)}
                    </div>
                </div>
            </div>

        </motion.section>
    )
}