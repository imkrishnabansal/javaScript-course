// var myName = "krishna bansal";
// var myAge = 34;
// var iAmk = true;
// console.log(iAmk);
// console.log(typeof(iAmk));
// console.log(myAge);
// console.log(myName);
// console.log(typeof(myAge));
// console.log(20-"10"); // this is a bug bcz its answer will be 4
// console.log("Vinod" - "thapa");  //it will print a not a number
// difference b/w null and undefined??
// var iAmUseless = null; // here it is a null  it is a object so "it's a another bug in js"
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));
// var iAmStandBy;
// console.log(iAmStandBy); //if value is not assign then it will be the undefined  it is also a data type
// What is NAN ???
// if we subtact two strings then it give a NaN.and it is a property of global object
// var PhoneNum = 67594903334;
// console.log(PhoneNum);
// console.log(isNaN(PhoneNum));
// var Name = "krishna";
// console.log(isNan(Name));
// //experssion and operators 
// there are six type of operators
// assighnment
// arithmatic 
// comparison
// logical
// string
// console.log(3**3);
// var a = 5;
// var b = 6;
// var c = b;
// b = a;
// a = c;
//     console.log(a,b);
//Swap two number without using third variable 
// var a = 5;
// var b = 6;
// a = a+b; //11
// b = a-b; //b = 5
// a = a-b; //a = 6
// console.log(a,b);

// check a year is leap year or not
var a  = 1900;
if((a%4==0&&a%400==0)||(a%100!=0)){
    console.log("this year is leap yr " + a);
}
else{
    console.log("Not a leap yr");
}
