let evenNumbers = [2, 4, 6, 8, 10, 12]
let sum = 0;


    for(let i = 0; i< evenNumbers.length; i++){

    sum += evenNumbers[i] ;
}

console.log("the sum of array elements is: ", sum);

function average(){

    console.log("the average of all elements is: ", sum/evenNumbers.length)
}

average();