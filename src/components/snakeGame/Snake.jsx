import { useRef, useEffect, useState } from "react"
import { } from "./snakeUtil"
import {
    moveFoodToNewPosition,
    addBodySegment,
    equalPositions,
    isGameOver,
    getHeadPosition
} from "./snakeUtil"



export default function Snake({ gameStatus, setGameStatus, setFood, gameRef }) {
    const inputDirection = useRef({ x: 0, y: -1 }) //using useRef instead of useState to avoid closure issues and asynchronous behavior
    const lastInputDirection = useRef({ x: 0, y: 0 })
    const food = useRef({ x: 11, y: 7 })
    const [snakeBody, setSnakeBody] = useState([
        { x: 11, y: 11 },
        { x: 11, y: 12 },
        { x: 11, y: 13 },
        { x: 11, y: 14 },
        { x: 11, y: 15 },
        { x: 11, y: 16 },
        { x: 12, y: 16 },
        { x: 13, y: 16 },
        { x: 14, y: 16 },
        { x: 15, y: 16 },
        { x: 16, y: 16 },
        { x: 16, y: 17 },
        { x: 16, y: 18 },
        { x: 16, y: 19 },
        { x: 16, y: 20 },
    ])

    let lastRenderTime = 0
    const snakeSpeed = useRef(20)
    function main(time) {
        if (gameRef.current === 'gameover') {
            setGameStatus('gameover')
        }
        if (gameRef.current === 'gameover' || gameRef.current === 'victory') return
        //call main function and pass it the time value. 
        window.requestAnimationFrame(main)
        //calculate time passed in seconds
        const secondsSinceLastRender = (time - lastRenderTime) / 1000
        // delay to make sure lastRenderTime is only updated every .5 seconds instead of 0.06 ms
        if (secondsSinceLastRender < 1 / snakeSpeed.current) return
        lastRenderTime = time
        if (time > 0) {
            updateSnakePosition()
            lastInputDirection.current = inputDirection.current //saving the last input here
        }
    }

    //a simple concept of asynchornous updates cost me 4 hours. update was called in a row. but since the base array is the same.
    // i was changing and updating the same array over and over again without it changing.
    // update() was being batched together
    function updateSnakePosition() {
        setSnakeBody((prev) => {
            let newArr = []
            //move the head of the snake in some direction
            newArr.unshift({
                x: prev[0].x + inputDirection.current.x,
                y: prev[0].y + inputDirection.current.y
            })
            //if snake intersected or got out of bounds
            if (isGameOver(newArr[0], prev)) {
                gameRef.current = 'gameover'
                return prev
            }
            //select the 2nd last element. and replace each element position with the one above it
            for (let i = prev.length - 2; i >= 0; i--) {
                //last element position = 2nd last element position and so on
                newArr[i + 1] = { ...prev[i] }
            }
            return newArr
        })
    }
    //useEffect responsible for initialisng game
    useEffect(() => {
        if (gameStatus === 'start') {
            main()
            window.addEventListener('keydown', (e) => {
                const { current: lastInput } = lastInputDirection
                switch (e.key) {
                    case 'ArrowUp':
                        //if the snake is moving in some y direction, dont input y
                        if (lastInput.y !== 0) break
                        inputDirection.current = { x: 0, y: - 1 }
                        break
                    case 'ArrowDown':
                        if (lastInput.y !== 0) break
                        inputDirection.current = { x: 0, y: 1 }
                        break
                    case 'ArrowLeft':
                        //if the snake is moving in some x direction, dont input x
                        if (lastInput.x !== 0) break
                        inputDirection.current = { x: -1, y: 0 }
                        break
                    case 'ArrowRight':
                        if (lastInput.x !== 0) break
                        inputDirection.current = { x: 1, y: 0 }
                        break
                }
            })
        }
    }, [gameStatus])

    //useEffect responsible for setting food location, increasing snake length and speed
    useEffect(() => {
        const snakeHead = snakeBody[0]
        //if snake eats a food
        if (equalPositions(snakeHead, food.current)) {
            moveFoodToNewPosition(food, setFood)
            addBodySegment(setSnakeBody)
            //increment snake speed
            snakeSpeed.current += 1
        }
    }, [snakeBody])


    return (
        <>
            {snakeBody.length > 0 && snakeBody.map((a, i) => <div style={{ gridColumnStart: a.x, gridRowStart: a.y, opacity: 1 - i * .06 / (1 + snakeBody.length * 0.02) }} key={i} className={`bg-[#43DA9D] ${i === 0 && getHeadPosition(inputDirection.current)}`} />)}
            <div style={{ gridColumnStart: food.current.x, gridRowStart: food.current.y }} className="bg-[#43DA9D] rounded-[50%] shadow-[0__0px_10px_rgb(67,217,173)]" />
        </>

    )
}