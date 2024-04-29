function getRandomNum(val) {
    return Math.floor(Math.random() * val) + 1
}
export function equalPositions(val1, val2) {
    return val1.x === val2.x && val1.y === val2.y
}

export function moveFoodToNewPosition(food, setFood) {
    food.current = { x: getRandomNum(24), y: getRandomNum(35) }
    //decrement the available food
    setFood(prev => prev - 1)
    //add a new body part for each food eaten

}

export function addBodySegment(setSnakeBody) {
    setSnakeBody((prev) => {
        let newArr = [...prev]
        newArr.push({ x: prev[prev.length - 1].x, y: prev[prev.length - 1].y })
        return newArr
    })
}

export function isGameOver(snakeHead, snakeBody) {
    return isSnakeIntersected(snakeHead, snakeBody) || isSnakeOutOfBounds(snakeHead)
}
function isSnakeOutOfBounds(snakeHead) {
    if (snakeHead.x > 24 || snakeHead.x < 1 || snakeHead.y > 36 || snakeHead.y < 1) {
        return true
    }
}

function isSnakeIntersected(snakeHead, snakeBody) {
    if (snakeBody.some((a, i) => i !== 0 && equalPositions(snakeHead, a))) {
        return true
    }
}

export function getHeadPosition(pos) {
    if (pos.x === 0 && pos.y === -1) {
        return 'rounded-t';
    } else if (pos.x === 0 && pos.y === 1) {
        return 'rounded-b';
    } else if (pos.x === -1 && pos.y === 0) {
        return 'rounded-l';
    } else if (pos.x === 1 && pos.y === 0) {
        return 'rounded-r';
    }
}


