// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e)=>{
//     console.log(e);
//     console.log(e.type)
// }
// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a =25;
//     a++;
//     console.log(a);
// }
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
// });
// let div = document.querySelector("div")
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked1");
// });
// const h1 = ()=>{
//     console.log("button was clicked2");
// }
// btn1.addEventListener("click",h1);
// btn1.removeEventListener("click",h1);
let modebtn = document.querySelector("#mode");
let currmode = "light";

modebtn.addEventListener("mouseover",()=>{
    if(currmode=="light"){
        currmode ="dark";
        document.querySelector("body").style.backgroundColor = "Black"
    }
    else{
        currmode ="light";
          document.querySelector("body").style.backgroundColor = "white"
    }
    console.log(currmode);
})
