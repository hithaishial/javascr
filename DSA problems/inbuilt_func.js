function addFromLast(){

    let prices = [199, 129, 599]
    prices.push(349);
    prices.push(1599);
    console.log(prices);
}

function removeFromLast(){

    let fruits = ["appple", "banana", "cherry", "grapes", "mango"]
    fruits.pop();
    fruits.pop();
    console.log(fruits);
}

function addFromStart(){

    let colors = ["red", "pink", "blue", "black"]
    colors.unshift("white");
    console.log(colors);
}

function removeFromStart(){

    let primeNumbers = [1, 3, 7, 11, 13, 17, 19, 23]
    primeNumbers.shift();
    primeNumbers.shift();
    console.log(primeNumbers);
}

addFromLast();
removeFromLast();
addFromStart();
removeFromStart();