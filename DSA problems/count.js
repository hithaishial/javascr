let numbers2 = [87, 98, 1008, 334, 278, 645, 7, 890]

function countEvenNumbers(){

    let count = 0;
    
    for(let i =0; i < numbers2.length; i++){

    if(numbers2[i] % 2 == 0){

        count++;

    }
}

console.log("the count of even numbers is: ", count);

}

function countOddNumbers(){

    let count = 0;

    for(let i = 0; i < numbers2.length; i++){

        if(numbers2[i] % 2 == 1){

            count++;
        }
    }

    console.log("the count of odd numbers is: ", count);
}

countEvenNumbers();
countOddNumbers();