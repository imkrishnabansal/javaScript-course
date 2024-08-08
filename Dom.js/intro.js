// let div = document.querySelector("div")
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name)
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","123"))


// insert element
// let newbtn = document.createElement("Button");
// newbtn.innerText = "Click me";
// console.log(newbtn);
// let div =document.querySelector("div")
// if i want to access my  btn after the paragraph then i will use para in place of div
// let p = document.querySelector("p");
// // p.append(newbtn);
// div.append(newbtn); //add btn in end
// div.prepend(newbtn); //add btn in start 
// div.before(newbtn); //add btn before the div 
// div.after(newbtn); // add btn after the div
// let newheading = document.createElement("h1");
// newheading.innerHTML = "<i>hi,i am a new!</i>";
// document.querySelector("body").prepend(newheading);
let btn = document.createElement("button");
btn.innerText = "click here!";
btn.style.color = "white";
btn.style.backgroundColor = "red";
document.querySelector("body").prepend(btn);
let para =document.querySelector("p");
para.getAttribute("class","newclass");
console.log(para);