//Part 1

const determineLocation1 = (array) => {
    let horizontalPosition = 0
    let depthPosition = 0
    for(let i = 0; i < array.length; i++) {
        if (array[i][0] === "forward") {
            horizontalPosition += array[i][1]
        } else if (array[i][0] === "down") {
            depthPosition += array[i][1]
        } else if (array[i][0] === "up") {
            depthPosition -= array[i][1]
        }
    }
    console.log('Horizontal Position is ' + horizontalPosition);
    console.log('Depth is ' + depthPosition);
    console.log(horizontalPosition * depthPosition);
}

determineLocation1(subMovement)

//Part 2

const determineLocation2 = (array) => {
    let horizontalPosition = 0
    let depthPosition = 0
    let aim = 0
    for(let i = 0; i < array.length; i++) {
        if (array[i][0] === "forward") {
            horizontalPosition += array[i][1]
            depthPosition += aim * array[i][1]
        } else if (array[i][0] === "down") {
            aim += array[i][1]
        } else if (array[i][0] === "up") {
            aim -= array[i][1]
        }
    }
    console.log('Horizontal Position is ' + horizontalPosition);
    console.log('Depth is ' + depthPosition);
    console.log('Aim is ' + aim);
    console.log(horizontalPosition * depthPosition);
}

determineLocation2(subMovement)