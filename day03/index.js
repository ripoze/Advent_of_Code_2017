function createSpiral_part1(max) {
    const sqrtMax = Math.ceil(Math.sqrt(max)) + 1
    let spiral = new Array(sqrtMax).fill(0).map(arr => new Array(sqrtMax).fill(0))
    let nextCoordinate = [Math.round(sqrtMax / 2) - 1, Math.round(sqrtMax / 2) - 1]
    let direction = 1 //1=right, 2=up, 3=left, 4=down
    for (let i = 1; i <= max; i++) {
        spiral[nextCoordinate[0]][nextCoordinate[1]] = i
        switch (direction) {
            case 1:
                nextCoordinate[1]++
                if (spiral[nextCoordinate[0] - 1][nextCoordinate[1]] == 0) direction = 2
                break
            case 2:
                nextCoordinate[0]--
                if (spiral[nextCoordinate[0]][nextCoordinate[1] - 1] == 0) direction = 3
                break
            case 3:
                nextCoordinate[1]--
                if (spiral[nextCoordinate[0] + 1][nextCoordinate[1]] == 0) direction = 4
                break
            case 4:
                nextCoordinate[0]++
                if (spiral[nextCoordinate[0]][nextCoordinate[1] + 1] == 0) direction = 1
                break
        }
    }
    return spiral
}

function createSpiral_part2(max) {
    const sqrtMax = Math.ceil(Math.sqrt(max)) + 2
    let spiral = new Array(sqrtMax).fill(0).map(arr => new Array(sqrtMax).fill(0))
    let nextCoordinate = [Math.round(sqrtMax / 2) - 1, Math.round(sqrtMax / 2) - 1]
    let direction = 1 //1=right, 2=up, 3=left, 4=down
    for (let i = 1; i <= max; i++) {
        let newValue = spiral[nextCoordinate[0]][nextCoordinate[1] - 1] +
            spiral[nextCoordinate[0]][nextCoordinate[1] + 1] +
            spiral[nextCoordinate[0] + 1][nextCoordinate[1] - 1] +
            spiral[nextCoordinate[0] + 1][nextCoordinate[1]] +
            spiral[nextCoordinate[0] + 1][nextCoordinate[1] + 1] +
            spiral[nextCoordinate[0] - 1][nextCoordinate[1] - 1] +
            spiral[nextCoordinate[0] - 1][nextCoordinate[1]] +
            spiral[nextCoordinate[0] - 1][nextCoordinate[1] + 1]

        spiral[nextCoordinate[0]][nextCoordinate[1]] = i == 1 ? 1 : newValue
        if (newValue > max) return newValue
        switch (direction) {
            case 1:
                nextCoordinate[1]++
                if (spiral[nextCoordinate[0] - 1][nextCoordinate[1]] == 0) direction = 2
                break
            case 2:
                nextCoordinate[0]--
                if (spiral[nextCoordinate[0]][nextCoordinate[1] - 1] == 0) direction = 3
                break
            case 3:
                nextCoordinate[1]--
                if (spiral[nextCoordinate[0] + 1][nextCoordinate[1]] == 0) direction = 4
                break
            case 4:
                nextCoordinate[0]++
                if (spiral[nextCoordinate[0]][nextCoordinate[1] + 1] == 0) direction = 1
                break
        }
    }
    return 0
}

function manhattanDistance(spiral, number) {
    let coordinates, center
    for (let x = 0; x < spiral.length; x++) {
        for (let y = 0; y < spiral[0].length; y++) {
            if (spiral[x][y] == number) coordinates = [x, y]
            if (spiral[x][y] == 1) center = [x, y]
        }
    }
    let distance = Math.abs(coordinates[0] - center[0]) + Math.abs(coordinates[1] - center[1])
    return distance
}

//Part 1
let spiral = createSpiral_part1(325489)
let part1 = manhattanDistance(spiral, 325489)
console.log(part1) //552

//Part2
let part2 = createSpiral_part2(325489)
console.log(part2); //330785

