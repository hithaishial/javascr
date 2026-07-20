let numbers = [39, 98, 654, 16, 82]
let smallest = numbers[0];

for(let i=1; i<numbers.length; i++){

    if(smallest < numbers[i]){
        smallest = numbers[i];
    }

}

console.log("the smallest element is: ", smallest);