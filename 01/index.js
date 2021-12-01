const fs = require('fs')
const path = require('path')

const textInput = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
const formattedInput = textInput.split('\n').map(i => parseInt(i))

const partOne = input => formattedInput.reduce(
    (acc, value) => {
        if (acc.old === null) {
            return { old: value, numberOfIncrease: 0 }
        }

        return { old: value, numberOfIncrease: acc.numberOfIncrease + (acc.old < value ? 1 : 0) }
    }, { old: null, numberOfIncrease: 0 }
).numberOfIncrease

console.log(partOne(formattedInput))