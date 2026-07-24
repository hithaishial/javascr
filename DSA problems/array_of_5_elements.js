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

function printSumAtEvenIndexes(){
    let marks = [56, 89, 91, 44, 74, 75, 14, 34, 63]

    let sum = 0;
    
    for(let i = 0; i < marks.length; i++){

        if(i % 2 === 0){

            sum += marks[i];
        }
    }

    console.log("The sum of elements at even indexes is: ", sum)
}

function printSumAtOddIndexes(){

    let importantDatesOfTheMonth = [2, 5, 7, 10, 13, 14, 18, 21, 26, 29, 31]

    let sum = 0;

    for(let i = 0; i < importantDatesOfTheMonth.length; i++){

        if(i % 2 === 1){

            sum += importantDatesOfTheMonth[i];
        }
    }

    console.log("The sum of elements at odd indexes is: ", sum);
}

printArray();
reverseTheArray();
printEvenIndexes();
printOddIndexes();
printSumAtEvenIndexes();
printSumAtOddIndexes();
