// Arrays
// when we use var we use one value at a times
// var myFrind = ['krishna','lakahn','aryan','sakshi','anuj','harshu','divyanshi'];
// for(var i = 0;i<myFrind.length;i++){
//     console.log(myFrind[i]);
// for(let elements in myFrind){ //for in loop
    // for(let elements of myFrind){ //for of loop
    // console.log(elements);
// }
// console.log(myFrind[myFrind.length-1]);
// console.log(myFrind.length)
//  for Each loop
// var myFrind = ['krishna','lakahn','aryan','sakshi','anuj','harshu','divyanshi'];
// myFrind.forEach(function(element,index,array){ // with the help  of for each loop we get all the  things like index no ,element name and array also; 
//     // We can not use 'break' statement in for each loop
//     console.log(element + " index " + index + " " + array); 

// });


//SEARCHING AND FILTER IN AN ARRAY;
// indexof method
// push method ......
//with the help of push method we can insert an element in an array
const animal = ['risha','arjun','hari'];
const count =  animal.push('chicken' , 'krishi'); //used to add data  onen or more  at one time but at last and returns the new length of the array 
console.log(animal);
console.log(count);

//unshift method 
// as same as push but the diifrence is,with the help of this we add date at starting 
const animals = ['risha','arjun','hari'];
const counts =  animals.unshift('chicken' , 'krishi');
console.log(animals);
console.log(counts);

//pop() method 
// it removes the last Element and change the length of the array 
const plants = ['mango' ,'orange','guava' , 'guseberry'];
console.log(plants);
console.log(plants.pop());
console.log(plants);
//shift() method 
//as same as pop but add the data in first position
const plant = ['mango' ,'orange','guava' , 'guseberry'];
console.log(plant);
console.log(plant.shift());
console.log(plant);

//Splice() method
const mnths = [ 'jan' ,'feb','march','june' ,'july'];
const newMnths = mnths.splice(mnths.length,0,"dec");
console.log(mnths);