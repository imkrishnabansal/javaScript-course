// 
// let a =10;

// if(a==10&&a<=20&&!a){ // compare only digits of we ==  double equals
//     console.log("true");
// }
// else{
//     console.log("false")
// }
// let a = prompt("Please enter a number:");
// let result = (isNaN(a)) ? "Not a number" : (a < 0 ? "Negative" : (a>0?"Positive":"Zero"));
// console.log(result)

// no is random or not 
const arr = [3, "4", 5, "6", 7, "8", 9, 10, 11, "12"];
let r = Math.floor(Math.random() * arr.length);
console.log(typeof(arr[r]));
