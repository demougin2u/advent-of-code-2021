const fs = require('fs')
const path = require('path')

const textInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
const formattedInput = textInput.split('\n').map(line => {
    const [moveType, value] = line.split(' ')
    return { type: moveType, value: parseInt(value) }
})

/** PART I */
const partOne = input => {
    const res = input.reduce(
        (acc, move) => ({
            x: acc.x + (move.type === 'forward' ? move.value : 0),
            depth: acc.depth + (move.type === 'down' ? move.value : move.type === 'up' ? (move.value * -1) : 0)
        }),
        { x: 0, depth: 0 }
    )

    return res.x * res.depth
}

console.log(partOne(formattedInput))



/**  PART II */
const partTwo = input => {
    const res = input.reduce(
        (acc, move) => {
            switch(move.type) {
                case "forward": return {...acc, x: acc.x + move.value, depth: acc.depth + move.value * acc.aim }
                case "up": return { ...acc, aim: acc.aim - move.value }
                case "down": return { ...acc, aim: acc.aim + move.value }
            }
        },
        { depth: 0, aim: 0, x: 0 }
    )
    return res.x * res.depth
}

console.log(partTwo(formattedInput));