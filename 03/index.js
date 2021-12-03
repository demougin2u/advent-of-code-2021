const fs = require('fs')
const path = require('path')

const textInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
const formattedInput = textInput.split('\n').map(l => l.split(''))

/** PART I */
const partOne = input => {
    let gamma = 0

    for(let i = 0; i < input[0].length; i++) {
        if (input.filter(line => line[i] === '1').length > (input.length / 2)) {
            gamma += Math.pow(2, i)
        }
    }

    const epsilon = (Math.pow(2, input[0].length) - 1) ^ gamma;
    return gamma * epsilon;
}

console.log(partOne(formattedInput))



/**  PART II */
const partTwo = input => 0

console.log(partTwo(formattedInput));