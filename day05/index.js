var data = require('fs').readFileSync('day05/input.txt', 'utf8')
data = data.trim().split('\n').map(Number)


//Part 1
dataPt1 = data.map(s => s)
let position = 0
let steps = 0
while (position >= 0 && position < dataPt1.length) {
    dataPt1[position]++
    position = position + dataPt1[position] - 1
    steps++
}
console.log('Part 1:', steps); //364539

//Part 2
dataPt2 = data.map(s => s)
position = 0
steps = 0
while (position >= 0 && position < dataPt2.length) {
    if(dataPt2[position]>=3){
        dataPt2[position]--
        position = position + dataPt2[position] + 1
    }else {
        dataPt2[position]++
        position = position + dataPt2[position] - 1
    }
    steps++
}
console.log('Part 2:', steps); //27477714