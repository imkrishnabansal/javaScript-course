async function hello(){
    console.log("hello");
}



// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }
// console.log("fetching data1....")
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data2....");
//     let P2 =asyncFunc2();
//     P2.then((res)=>{});
// })




// const getpromise  = ()=>{
// return new Promise ((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("success");
//     // reject("some error")
// });
// };
// let promise  = getpromise();
// promise.then((res)=>{
//     console.log("fullfilled",res)
// });
// promise.catch((err)=>{
//     console.log('rejected',err)
// })
// function getdata(dataId,getnextData){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Data',dataId);
//         resolve("success")
//         if(getnextData){
//             getnextData();
//         }

//     },2000);
// });
// }
// //callback hell it is a nested callback hell  to solve this we use promises
// getdata(1,()=>{
//     getdata(2);
// getdata(2,()=>{
//     getdata(3);
// });
// })
