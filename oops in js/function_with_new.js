function person(name,age){
    this.name = name;
    this.age = age;
    return 10;
}
let p = new person('Harry potter',20)
let p2 = new person('john doe',30)
console.log('p ='+ JSON.stringify(p))
console.log(p)
console.log(p2)
console.log('p2 =' + JSON.stringify(p2))