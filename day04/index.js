var data = require('fs').readFileSync('day04/input.txt', 'utf8')
data = data.trim().split('\n')

//Part 1
dataPt1 = data.map(s => s.split(' ')).filter(s => new Set(s).size == s.length)
console.log('Part 1:', dataPt1.length) //477

//Part 2
dataPt2 = data.map(s => s.split(' ').map(s => s.split('').sort().join(''))).filter(s => new Set(s).size == s.length)
console.log('Part 2:', dataPt2.length) //167