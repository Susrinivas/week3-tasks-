//Rotate an array by k times and return the rotated array
let arr = [2,4,3,8,45,3,9,5];
const arrayrotation = function(arr1,k){
    for(let i = 0; i < k; i++){
        arr1.unshift(arr1.pop());
    }
    return arr1;
}
console.log(arrayrotation(arr,4));