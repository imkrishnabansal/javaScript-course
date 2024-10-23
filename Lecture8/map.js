// Map
// it returns new modifie d array
let arr = [
    { name: "John", age: 25 },
    { name: "Jane", age: 22 }
];

let newArr = arr.map((ele) => {
    return {
        newName: ele.name
        + "Doe",  // Concatenates "Doe" to each element's name
        newAge: ele.age + 10        // Adds 10 to each element's age
    };
});
console.log(newArr);

let a = [1,2,3,4,5,6,7,8];
let cubes = a.map((ele)=>{
    return ele**3
})
console.log(cubes)

function helper(x){
    return x%2;
}
let odd = a.filter((helper)); //filter always gives boolean either true or false
function filterOverview(arr,fun){
    let ans =[];
    for(let ele of arr){
        if(fun(ele)){
            ans.push(ele);
        }
    }
    return ans
}
console.log(odd)
let even = a.filter((ele)=>{ //arrow function means create a function
    return !(ele%2);

})
console.log(even);

let qstin = ["htis","is","si","sh","sit","isskss","sssisis","not","shis","s"];
const filtered = qstin.filter((ele)=>{
    return ele.includes("is") || ele.includes("k");
})
console.log(filtered)
//reduce to do an arithmatic array

a = [1,2,3,4,5,6,7,8];
let sum = a.reduce((accum,ele)=>{
    return accum * ele
},1);
console.log(sum);
let products = [
    {
        name: "coffee",
        mfg: "22/10/2024",
        exp: "24/10/2025",
        price: 500,
    },
    {
        name: "coffee",
        mfg: "22/10/2024",
        exp: "24/10/2025",
        price: 600,
    },
    {
        name: "coffee dark",
        mfg: "22/10/2024",
        exp: "24/10/2025",
        price: 900,
    },
    {
        name: "coffee",
        mfg: "22/10/2024",
        exp: "24/10/2025",
        price: 300,
    },
];

const totalbill = products.reduce((accum, ele) => {
    return accum + ele.price;
}, 0);

console.log(totalbill);
const foundele = products.find((ele)=>{
    return ele.price === 500;
})
console.log(foundele)
