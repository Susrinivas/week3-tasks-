//Return all the prime numbers in an array 

let num = [2,4,1,3,5,9,34,53];

console.log(num.filter(item => {
    for(var i = 2; i < item; i++){
        if(item%i == 0){
            break;
        }
        return item;
    }
}))