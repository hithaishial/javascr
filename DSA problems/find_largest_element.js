let oddNumbers = [75, 31, 89, 43, 29]
let largest = oddNumbers[0];

for(let i = 1; i < oddNumbers.length; i++){

    if(oddNumbers[i]> largest){

        largest = oddNumbers[i];
    }
}

console.log("the largest element is: ", largest);