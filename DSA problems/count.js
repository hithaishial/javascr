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

function searchForNumber(){

    let num = [12, 10, 37, 8475, 38, 901, 645, 77, 23]

    searchNumber = 901;

    for(let i = 0; i < num.length; i++){

        if(searchNumber == num[i]){

            console.log("the index of the search number is: ", i);
        }
    }
}

function countOfReccuringElements(){

    let colors = ["red", "green", "blue", "green", "pink", "red", "pink", "black", "pink", "red", "pink"]
    let reccuringElement = "pink";
    let count = 0;

    for(let i = 0; i < colors.length; i++){

        if(reccuringElement === colors[i]){

            count++;
        }
    }

    console.log("The no.of times the selected element recurring is: ", count);
}

countEvenNumbers();
countOddNumbers();
searchForNumber();
countOfReccuringElements();