// console.log("start");
// const promise = new Promise((resolve, reject) => { // 'Promise' should be capitalized
//     setTimeout(()=>{
//         console.log("object");
//     let num = Math.random() * 10;
//     if (num > 5) {
//         resolve(num);
//     } else {
//         reject(num);
//     }
// },3000);
// });
// promise // calling the function
//     .then(result => console.log("Resolved with:", result))
//     .catch(error => console.log("Rejected with:", error));
//     console.log(promise)
// console.log("end");



//how to call api's
// await to wait the next line of the code  to exectute before its block of code 
const first = async () => {
    let res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    let data = await res.json();
    console.log(data);
    // it made our work easy rather than promises
};
first();
