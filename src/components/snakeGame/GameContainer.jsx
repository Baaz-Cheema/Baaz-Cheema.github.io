import { motion } from "framer-motion"
import Snake from "./Snake"
import { useEffect, useState, useRef } from "react"
export default function GameContainer() {
    const [gameStatus, setGameStatus] = useState('normal') //check if i really need this here...
    const gameRef = useRef(gameStatus)
    const [food, setFood] = useState(10)
    const [reset, setReset] = useState(false)

    function resetGame() {
        setReset(prev => !prev)
        setGameStatus('normal')
        gameRef.current = 'normal'
        setFood(10)
    }
    useEffect(() => {
        if (food === 0) {
            setGameStatus('victory')
            gameRef.current = 'victory'
        }
    }, [food])
    return <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} style={{ background: 'linear-gradient(180deg,#237b6d,rgba(67,217,173,.13))' }} className=" h-[370px] rounded-xl w-[420px] shrink-0 lg:hidden relative z-10 border border-black">
        <span className="w-4 h-4 absolute top-2 left-2 rounded-full bg-[#1f6e62] opacity-50 flex shadow-lg border border-gray-500 shadow-black items-center justify-center">
            <i className="ri-close-line text-emerald-900 text-sm"></i>
        </span>
        <span className="w-4 h-4 absolute top-2 right-2 rounded-full bg-[#1f6e62] opacity-50 flex shadow-lg border border-gray-500 shadow-black items-center justify-center">
            <i className="ri-close-line text-emerald-900 text-sm"></i>
        </span>
        <span className="w-4 h-4 absolute bottom-2 left-2 rounded-full bg-[#1f6e62] opacity-50 flex shadow-lg border border-gray-500 shadow-black items-center justify-center">
            <i className="ri-close-line text-emerald-900 text-sm"></i>
        </span>
        <span className="w-4 h-4 absolute bottom-2 right-2 rounded-full bg-[#1f6e62] opacity-50 flex shadow-lg border border-gray-500 shadow-black items-center justify-center">
            <i className="ri-close-line text-emerald-900 text-sm"></i>
        </span>

        <div className="flex gap-2 w-full h-full px-6 py-5">
            <div className="w-[60%] overflow-auto relative grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(36,1fr)] h-full bg-[#011627f0] shadow-[inset_0_0_10px_#00000071] opacity-85 rounded-xl">
                <Snake key={reset} gameRef={gameRef} gameStatus={gameStatus} setGameStatus={setGameStatus} setFood={setFood} />
                {gameStatus === 'normal' && <button onClick={() => setGameStatus('start')} className="absolute bg-[#FEA55F] text-[12px] px-3 py-1 rounded bottom-[20%] left-[26.5%] border border-black text-black">start-game</button>}
                {gameStatus === 'gameover' && <div className="absolute bg-[#010e19] px-3 bottom-[25%] w-full text-[#43DA9D] text-center py-2 text-lg ">GAME OVER</div>}
                {gameStatus === 'gameover' && <div className="flex justify-center absolute w-full bottom-[12%]"><button onClick={resetGame} className="px-3 hover:text-[#FFFFFF] text-center py-2 text-[14px]">Try again</button></div>}
                {gameStatus === 'victory' && <div className="absolute bg-[#010e19] px-3 bottom-[25%] w-full text-[#43DA9D] text-center py-2 text-lg ">WELL DONE</div>}
                {gameStatus === 'victory' && <div className="flex justify-center absolute w-full bottom-[12%]"><button onClick={resetGame} className="px-3 hover:text-[#FFFFFF] text-center py-2 text-[14px]">Play Again</button></div>}

            </div>
            <div className="flex-col h-full py-1 flex text-white text-xs">
                <div className="bg-[#011423] bg-opacity-15 rounded-lg p-3">
                    <p>{'//'} use keyboard</p>
                    <p className="whitespace-nowrap">{'//'} arrows to play</p>
                    <div className="grid grid-cols-3 gap-1 mt-3">
                        <div className="col-span-1"></div>
                        <div className="bg-[#010C15] h-6 w-full rounded flex justify-center items-center">
                            <i className="ri-arrow-up-s-fill text-lg"></i>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="bg-[#010C15] h-6 w-full rounded flex justify-center items-center">
                            <i className="ri-arrow-left-s-fill text-lg"></i>
                        </div>
                        <div className="bg-[#010C15] h-6 w-full rounded flex justify-center items-center">
                            <i className="ri-arrow-down-s-fill text-lg"></i>
                        </div>

                        <div className="bg-[#010C15] h-6 w-full rounded flex justify-center items-center">
                            <i className="ri-arrow-right-s-fill text-lg"></i>
                        </div>
                    </div>

                </div>
                <div className="mx-auto mt-8 pl-3 flex flex-col w-full justify-center">
                    <p>{'//'} food left</p>
                    <div className="grid grid-cols-5 gap-y-5 mt-5">
                        {new Array(10).fill().map((a, i) => <div key={i} className={`bg-[#43DA9D] rounded-[50%] shadow-[0__0px_10px_rgb(67,217,173)] h-[8px] w-[8px] ${i >= food && 'opacity-20'}`} />)}
                    </div>

                </div>
            </div>
        </div>


    </motion.div>
}