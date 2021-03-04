//Convert all the strings to title caps in a string array 

let strarray = ['vasu','reshma','srinu','koti'];

console.log(strarray.map(item => item.charAt(0).toUpperCase() + item.slice(1)));