let arr1 = [2,4,1,89,34,33];
let arr2 =[3,46,13,66,46,45];
(function (arr1,arr2) {
    let c = arr1.concat(arr2).sort((arr1,arr2) => arr1-arr2)
  console.log(c);
    let len = c.length/2;
   console.log(len);
    if((c.length)%2 == 0){
       console.log(Math.floor((c[len]+c[len-1])/2));
}else{
  console.log((c[Math.floor(len)]));
}
})(arr1,arr2);
