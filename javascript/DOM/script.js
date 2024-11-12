// DOM (document object model) --> TO change the running html code
// Selector ==> it is used to acces to code 
// 1. getelmentbyID, getelementsbyclassname,getelementsbyTagName,queryselector,queryselectorAll-->NodeLIst
h1 = document.getElementById("head");
// console.log(h1);
const parabyclass = document.getElementsByClassName("para");
console.log(parabyclass);

const parabytag = document.getElementsByTagName("P");
// console.log(parabytag)


//QUERY SELECTOR
const h1byquery = document.querySelectorAll(".para")
// console.log(h1byquery)

//how to read different properties of tag 
console.log(h1.innerText);
console.log(h1.innerHTML);
console.log(h1.textContent); //it is not ignores white spaces
console.log(h1.outerHTML);

//Attributes
console.log(h1.id); //it returns id of h1;
console.log(h1.className);
console.log(h1.classList)
console.log(h1.getAttribute("id"));
console.log(h1.children);
console.log(h1.previousElementSibling);
h1.innerText = "changed by js"
console.log(h1);
h1.classList.add("cl-4");
// h1.classList.remove("cl-4");
h1.classList.toggle("cl-1"); //remove if present 
h1.classList.toggle("cl-1");//add if not present
h1.setAttribute("name","headingbyjs"); // if i want to overright the attribute then we use the set attribute also used to create a attribute 
const h3 = document.createElement("h3")
h3.innerHTML = "<span>this is a krishna</span>"
h3.className = "Head2"
console.log(h3);


//SEND ELEMENT TO HTML
// const container  = document.getElementById("container");
// container.append("mnbgvfcds"); //push only one element 
// container.appendChild(h3);
// console.log(container);
// container.prepend(h3)


//event listner ==> t attach an event to an element 
const btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    console.log(e)
    console.log(e.target)

})




