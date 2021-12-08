//Part 1

let isThereABingo = false;
let lastNumChecked = undefined;

const checkNum = (num, x) => {
    if(num[0] == bingoNumbers[x]) {
        num[1] = 1;
    }
}

const checkRow = (row, x) => {
    for(let i = 0; i < 5; i++) {
        checkNum(row[i], x);
    }
}

const checkCard = (card, x) => {
    for(let i = 0; i < 5; i++) {
        checkRow(card[i], x);
    }
}

const checkArray = (array, x) => {
    for(let i = 0; i < array.length; i++) {
        checkCard(array[i], x);
    }
}

const checkRowForBingo = row => {
    if(row[0][1] === 1 && row[1][1] === 1 && row[2][1] === 1 && row[3][1] === 1 && row[4][1] === 1) {
        console.log('We got a bingo!');
        isThereABingo = true;
    }
}

const checkColForBingo = col => {
    if(col[0][0][1] === 1 && col[1][0][1] === 1 && col[2][0][1] === 1 && col[3][0][1] === 1 && col[4][0][1] === 1) {
        console.log('We got a bingo!');
        isThereABingo = true;
    }
}

const checkCardForBingo = card => {
    for(let i = 0; i < 5; i++) {
        checkRowForBingo(card[i]);
    }
}

const checkArrayForBingo = array => {
    for(let i = 0; i < array.length; i++) {
        checkCardForBingo(array[i]);
        checkColForBingo(array[i]);
        if(isThereABingo === true) {
            return winningCard = array[i];
        }
    }
}
        
const playBingo = (numArray) => {
    for(let i = 0; i < bingoNumbers.length; i++) {
        checkArray(numArray, i);
        checkArrayForBingo(numArray);
        if(isThereABingo === true) {
            lastNumChecked = bingoNumbers[i];
            break;
        }
    }
}

playBingo(bingoCards);
console.log(winningCard);

let score = 0;

const calcNumScore = num => {
    if(num[1] === 0) {
        score += num[0];
    }
}

const calcRowScore = row => {
    for(let i = 0; i < 5; i++) {
        calcNumScore(row[i]);
    }
}

const calcCardScore = card => {
    for(let i = 0; i < 5; i++) {
        calcRowScore(card[i]);
    }
    console.log(lastNumChecked)
    console.log(score)
    console.log(score * lastNumChecked)
}

calcCardScore(winningCard);
