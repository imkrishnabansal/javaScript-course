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

// ques- no is random or not 
const arr = [3, "4", 5, "6", 7, "8", 9, 10, 11, "12"];
let r = Math.floor(Math.random() * arr.length);
console.log(typeof(arr[r]));


//  Scopes 
    //   1. global scopes=>variable/function which are crested directly in nthe js file 
    //  2.block Scopes
    //  3. closure(lexical)

    // Functions ==> to reuse thr set of statement we need to perform multiple times
    // how to call a function ==> name(); ,name.call();

// function name(){
//     console.log("hi");

// }
// name();

function sum(x,y,z){
    console.log(x-y-z);
}
sum(5,"6",7);
function fun(x,y){
    return x+y;
}
const result = (fun("4",5))
console.log(result);
console.log(typeof(result));

// fdefault parameters
function fun(x,y,z=5){
    return x+y+z;
}
console.log(fun(5,7))
// arrow function
const arrow = ()=>{
    return "arrow function"
}
let ans = arrow();
console.log(ans)