var data = require('fs').readFileSync('day06/input.txt', 'utf8')
data = data.match(/\d+/g).map(Number)

//data = [0, 2, 7, 0]

let seenBefore = []

function redistribute(s) {
    let data = s.map(s => s)
    max = Math.max(...data)
    indexOfMax = data.indexOf(max)

    data[indexOfMax] = 0
    let position = indexOfMax
    for (let i = 0; i < max; i++) {
        let newPosition = position + 1 == data.length ? 0 : position + 1
        data[newPosition]++
        position = newPosition
    }
    return data
}

//Part 1
seenBefore.push(data.join())
let cycles = 0
while (cycles == seenBefore.length - 1) {
    data = redistribute(data)
    seenBefore.push(data.join())
    seenBefore = [...new Set(seenBefore)]
    cycles++
}
console.log('Part 1:', cycles) //14029

//Part 2
const stateToFind = data.join()
cycles = 1
data = redistribute(data)
while (data.join() != stateToFind) {
    data = redistribute(data)
    cycles++
}
console.log('Part 2:', cycles) //2765