import { motion } from "framer-motion"
import GameContainer from "../components/snakeGame/GameContainer"

export default function Hero() {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7 }} className="flex h-full relative items-center justify-between gap-20 text-[18px] max-w-[80%] mx-auto">
            <div className="fixed right-[35%] top-[20%] pointer-events-none blur-[120px] sm:blur-[100px]" style={{
                height: '20rem',
                width: '20rem',
                borderRadius: '50%',
                opacity: 0.8,
                background: `radial-gradient(circle at 50% 50%, #43d9ad, rgba(76, 0, 255, 0))`,
            }}></div>
            <div className="fixed right-[10%] top-[33%] sm:top-[27%] blur-[120px] sm:blur-[100px] z-10 pointer-events-none" style={{
                height: '28rem',
                width: '28rem',
                borderRadius: '50%',
                opacity: 0.8,
                background: `radial-gradient(circle at 50% 50%, #4d5bce, rgba(76, 0, 255, 0))`,
            }}></div>


            <div className="w-full lg:h-[85vh] flex items-center">
                <div className="relative md:w-full lg:h-full lg:max-h-[80%] lg:flex lg:flex-col lg:justify-between">
                    <div>
                        <h6 className="text-[#FFFFFF] ">Hello, I am</h6>
                        <h1 className="text-[62px] text-[#FFFFFF] lg:leading-[4rem]">Baaz Cheema</h1>
                        <h4 className="text-[#4D5BCE] md:text-[#43d9ad] text-[32px] lg:text-[24px] mb-5">{'>'}Frontend developer</h4>
                    </div>
                    <div className="relative z-10">
                        <div className="mb-5 mt-20 lg:mt-0">
                            <p className="text-[14px]">{'//'}checkout my resume</p>
                            <p className="text-[14px] "><span className="text-[#4D5BCE]">const</span> <span className="text-[#43d9ad]">resume-link</span> = <a href="https://drive.google.com/file/d/1n2MXwXqs0rOCqDbpKrJ_Nm0-FGfbpVIc/view?usp=sharing" target=" _blank" className="text-[#E99287] underline underline-offset-2">{`"baaz-cheema.pdf"`}</a></p>
                        </div>
                        <div>
                            <p className="text-[14px]">{'//'}find my profile on github</p>
                            <p className="text-[14px] "><span className="text-[#4D5BCE]">const</span> <span className="text-[#43d9ad]">github-link</span> = <a href="https://github.com/Baaz-Cheema" target=" _blank" className="text-[#E99287] underline underline-offset-2">{`"github.com/baaz-cheema"`}</a></p>
                        </div>
                    </div>

                </div>
            </div>

            <GameContainer />

        </motion.section >
    )
}