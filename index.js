//Part 1

const getNumOfIncreases = array => {
    let numOfLarger = 0;
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] < array[i + 1]) {
            numOfLarger++;
        };
    };
    return numOfLarger;
};

console.log(getNumOfIncreases(arrayOfNumbers));

//Part 2

const getNumOfIncreases3 = array => {
    let numOfLarger = 0;
    for(let i = 0; i < array.length; i++) {
        let x = array[i] + array[i + 1] + array[i + 2];
        let y = array[i + 1] + array[i + 2] + array[i + 3]
        if(x < y) {
            numOfLarger++;
        };
    };
    return numOfLarger;
};

console.log(getNumOfIncreases3(arrayOfNumbers));