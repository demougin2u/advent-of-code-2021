const fs = require('fs')
const path = require('path')

const textInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
const formattedInput = textInput.split('\n').map(i => parseInt(i))


/** PART I */
const partOne = input => input.reduce(
    (acc, value) => {
        if (acc.old === null) {
            return { old: value, numberOfIncrease: 0 }
        }

        return { old: value, numberOfIncrease: acc.numberOfIncrease + (acc.old < value ? 1 : 0) }
    }, { old: null, numberOfIncrease: 0 }
).numberOfIncrease

console.log(partOne(formattedInput))



/**  PART II */
const partTwo = input => partOne(input.reduce(
    (acc, value, index, values) => {
        if (index + 2 >= values.length) return acc;
        const res = value + values[index + 1] + values[index + 2];
        return [...acc, res];
    }, []
))

console.log(partTwo(formattedInput));