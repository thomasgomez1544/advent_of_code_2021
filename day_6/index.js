//Part 1

let days = 80

const func = array => {
    for(x = 0; x < days; x++) {
        for(i = 0; i < array.length; i++) {
            if(array[i] == 0) {
                array[i] = 6
                array.push(9)
            } else {
                array[i] -= 1;
            }
        }
    }
}

func(arrayOfFish)
console.log(arrayOfFish.length);

//Part 2

let countArray =[0,0,0,0,0,0,0,0,0];

days = 256

const pushIntoCountArray = array => {
    array.forEach(element => countArray[element] += 1);
}

pushIntoCountArray(arrayOfFish);

const runDay = array => {
    array.push(array[0]);
    array[7] += array[0];
    array = array.slice(1);
    return array;
}
for(i = 0; i < days; i++) {
    countArray.push(countArray[0]);
    countArray[7] += countArray[0];
    countArray = countArray.slice(1);
}

let totalFish = 0

countArray.forEach(element => totalFish += element)

console.log(totalFish)
