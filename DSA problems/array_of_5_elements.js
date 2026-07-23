function printArray(){

    let numbers = [78, 64, 55, 999, 75]

    for(let i = 0; i < numbers.length; i++){
    console.log("array elements are: ", numbers[i]);
    }

}

function reverseTheArray(){

    let numbers = [78, 64, 55, 999, 75]

    for(let i = (numbers.length - 1); i > 0; i--){
        console.log("reversed array is: ", numbers[i]);
    }
}

function printEvenIndexes() {
    let userRoles = ["admin", "editor", "subscriber", "guest"]

    for (let i = 0; i < userRoles.length; i++) {
        if (i % 2 === 0) {
            console.log("the element at even index " + i + " is: ", userRoles[i]);
        }
    }
}

function printOddIndexes() {
    let answerKey = [true, false, false, true, true]

    for (let i = 0; i < answerKey.length; i++) {
        if (i % 2 !== 0) {
            console.log("the element at odd index " + i + " is: ", answerKey[i]);
        }
    }
}

printArray();
reverseTheArray();
printEvenIndexes();
printOddIndexes();
