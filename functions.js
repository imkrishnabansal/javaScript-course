// functions in js
// definition  of function
// before we use we need to define a function
// A function  definition is also called a function declaration and statement also;consist of function keyword followed by;
//The name of the function and .the list of the parameteres to the function,enclosed in paranthesis and seprated by commas
//The javaScript statement that defines the function enclosed in curly brackets.{......}.
//Calling a function 
// our function will execute when we call it
// function sum(a,b){ //here a,b is func. parametres
//     var answer = a+b;
//     console.log(answer);
// } 
// sum(); //and here there is no arguments
// sum(20,30); //here 20 and 30 are the arguments
// sum(50,50);
// Diffrence b/w function parametre vs arguments
// function parametre are the name listed in the functions definition
// functions para. are the  real values passed in the function
//WHY FUNCTIONS???
// you can reuse Code . once we define the code u csn use many times
//you can use the same code wirth the diffrent arguments
//functions without name is called anonymous function
//put a variable in to function is called function expression

//how to  convert a function in to fat arrow function
const sume = () => {
    let a = 5; b = 6;
    let sume = a+b;
    // console.log("the sum of two numbers is " + sume);
    return `the sum of two munbers is ${sume}`;
}
console.log(sume());