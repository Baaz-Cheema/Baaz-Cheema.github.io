

export default function BottomNavbar() {
    return (
        <section className="text-[13px] lg:text-[14px] flex justify-between border-t-2 border-custom lg:h-[60px]">
            <div className="flex items-center lg:justify-between lg:w-full">
                <a className="border-r-2 h-full py-1 px-5 border-custom  flex items-center lg:border-none">
                    find me in:
                </a>
                <div className="flex h-full lg:border-l-2 lg:border-custom">
                    <a href="https://www.linkedin.com/in/baaz-cheema-ab0935212/" target=" _blank" className={`h-full flex items-center py-1 px-3 border-r-2 border-custom  hover:bg-[#1e2d3d74] hover:text-[#FFFFFF]`}><i className="ri-linkedin-fill text-2xl lg:text-4xl"></i>
                    </a>
                    <a href='https://www.codewars.com/users/BaazCheema' target=" _blank" className={`h-full flex py-1 items-center px-3  border-r-2 border-custom  hover:bg-[#1e2d3d74] hover:text-[#FFFFFF]`}><i className="ri-code-box-fill text-2xl lg:text-4xl"></i></a>
                    <a href="https://github.com/Baaz-Cheema" target=" _blank" className={`h-full py-1 flex items-center px-3  border-r-2 border-custom lg:border-none  hover:bg-[#1e2d3d74] hover:text-[#FFFFFF]`}><i className="ri-github-fill text-2xl lg:text-4xl"></i></a>
                </div>
            </div>
            <a href="https://github.com/Baaz-Cheema" target=" _blank" className={`h-full flex items-center px-3 py-1 lg:hidden border-l-2 border-custom  hover:bg-[#1e2d3d74] hover:text-[#FFFFFF] `}> @baaz-cheema</a>
        </section >
    )
}