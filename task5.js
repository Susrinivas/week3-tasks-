// Return all the palindromes in an array 
let numarr = [123,121,242,247,'mom'];

console.log(numarr.filter(item => {

    it = item.toString();
    for(var i = 0; i < it.length/2 ; i++){

        if(it[i] !== it[it.length-i-1]){
             break;
        }
        return item;
    }
}));

// let arr = ['vasu','mam','mom','bixib'];

// console.log(arr.filter(item => {
//     if(item.split('').reverse().join('') === item){
//         return item;
//     }
// }));



// using recursion
// function reverseString(str) {
//     return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
//   }
//   reverseString("hello");