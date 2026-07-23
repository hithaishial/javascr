let numbers = [87, 98, 1008, 334, 278, 645, 7, 890]

let count = 0;

function countEvenNumbers(){

    for(let i =0; i < numbers.length; i++){

    if(numbers[i]%2 == 0){

        count++;

    }
}

console.log("the count of even numbers is: ", count);

}

function countOddNumbers(){

    for(let i = 0; i < numbers.length; i++){

        if(number[i] % 2 != 0){

            count++;
        }
    }

    console.log("the count of odd numbers is: ", count);
}

countEvenNumbers();
countOddNumbers();