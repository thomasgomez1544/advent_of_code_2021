//Part 1

let gammaRate = [];
let epsilonRate = [];

const buildGamma = array => {
    let one = 0;
    let zero = 0;
    for(let i = 0; i < array[0].length; i++) {
        array.map((num) => num[i]).forEach(element => {
            if(element == 1) {
                one++;
            } else {
                zero++;
            }
        })
        if(one > zero) {
            gammaRate.push('1');
            one = 0;
            zero = 0;
        } else {
            gammaRate.push('0');
            one = 0;
            zero = 0;
        }
    }
    gammaRate = gammaRate.join('');
    gammaRate = parseInt(gammaRate, 2);
    console.log(`Gamma rate is ${gammaRate}`);
}

const buildEpsilon = array => {
    let one = 0;
    let zero = 0;
    for(let i = 0; i < array[0].length; i++) {
        array.map((num) => num[i]).forEach(element => {
            if(element == 1) {
                one++;
            } else {
                zero++;
            }
        })
        if(one < zero) {
            epsilonRate.push('1');
            one = 0;
            zero = 0;
        } else {
            epsilonRate.push('0');
            one = 0;
            zero = 0;
        }
    }
    epsilonRate = epsilonRate.join('');
    epsilonRate = parseInt(epsilonRate, 2);
    console.log(`Epsilon rate is ${epsilonRate}`);
}

buildGamma(binaryReport);
buildEpsilon(binaryReport)

powerConsumption = gammaRate * epsilonRate;
console.log(`Power Consumption is ${powerConsumption}`);

//Part 2

const buildOxygenReport = array => {
    let tempArray = array
    let oneArray = [];
    let zeroArray = [];
    let x = 0
    let i = 0
    while(tempArray.length > 1) {
        tempArray.map((num) => num[i]).forEach(element => {
            if(element == 1) {
                oneArray.push(tempArray[x]);
                x++;
            } else {
                zeroArray.push(tempArray[x]);
                x++;
            }
        })
        if(oneArray.length >= zeroArray.length) {
            tempArray = oneArray
        } else {
            tempArray = zeroArray
        }
        zeroArray = []
        oneArray = []
        i++
        x = 0
    }
    return parseInt(tempArray, 2)
}

const buildCO2Report = array => {
    let tempArray = array
    let oneArray = [];
    let zeroArray = [];
    let x = 0
    let i = 0
    while(tempArray.length > 1) {
        tempArray.map((num) => num[i]).forEach(element => {
            if(element == 1) {
                oneArray.push(tempArray[x]);
                x++;
            } else {
                zeroArray.push(tempArray[x]);
                x++;
            }
        })
        if(oneArray.length < zeroArray.length) {
            tempArray = oneArray
        } else {
            tempArray = zeroArray
        }
        zeroArray = []
        oneArray = []
        i++
        x = 0
    }
    return parseInt(tempArray, 2)
}

buildOxygenReport(binaryReport)
buildCO2Report(binaryReport)
lifeSupportRating = buildOxygenReport(binaryReport) * buildCO2Report(binaryReport)

console.log(`Oxygen generator rating is ${buildOxygenReport(binaryReport)}`);
console.log(`CO2 scrubber rating is ${buildCO2Report(binaryReport)}`);
console.log(`Life support rating is ${lifeSupportRating}`);
