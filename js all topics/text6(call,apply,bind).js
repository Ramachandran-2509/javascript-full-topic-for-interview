// call,apply,bind method functions 

// let obj = {
//     name : "Ramachandran",
//     age : 24
    

// }

// function printfullname(qualification){
//     return "Hello " + this.name+ " your age " + this.age + " and your qualification " + qualification

// }
// console.log(printfullname.call(obj, "BCA"))
// console.log(printfullname.apply(obj, ["BCA"]))
// const res =  printfullname.bind(obj, "BCA")
// console.log(res())




// question 1 : o.p based question

// const person = {
//     name: "Ram"
// }

// function say(age){
//     return `${this.name} is ${this.age}`
// }
// console.log(say.call(person, 24))
// console.log(say.bind(person, 24))



// question 2 : o.p based question


// const age = 10;

// const person = {
//     name:"Ram",
//     age:20,
//     getAge:function(){
//         return this.age
//     },

// };

// var person2 = { age:24 };
// console.log(person.getAge.call(person2));


// question 3 : o.p based question


// question 4 : call printAnimal such that it prints all animal in object

// const  animals = [
//     {species: "lion", name:"king"},
//     {species: "whale", name:"queen"},
// ];

// function printAnimal(i){
//     this.print = function(){
//         console.log("$" + i + " " + this.species+ ": "+ this.name)
//     }
//     this.print()
// }

// for(let i =0; i<animals.length; i++){
//     printAnimal.call(animals[i], i)
// }


// question 5 :  append an array to another array1

// const array = ["a","c"]
// const element = [1, 2, 5,7]


// array.push.apply(array, element)
// console.log(array)


// coding question for interview

// function sumArray(a, b, k) {
//     var c = [];
//     for (var i = 0; i < Math.max(a.length, b.length, k.length); i++) {
//       c.push((a[i] || 0) + (b[i] || 0) + (k[i] || 0) );
//     }
//     return c;
// }
    

// console.log(sumArray([1, 2, 5,7, 90],[1, 2, 8, 9], [7, 9])
// )



// question 6 : using apply to to find min and max in array

// loop based algorithm

// const numbers = [5, 6, 2, 3, 7]


// const res  = numbers.reduce((max, curr)=>{
//     if(curr > max){
//         max=curr
//     }
//     return max

// },0)
// console.log(res)


// console.log(Math.max.apply(null, numbers))


// question 7 :Bound function


// function f(){
//     console.log(this)
// }

// let user = {
//     g: f.bind(null)
// }

// user.g()


// question 8 : bind chaining


// function checkpassword(success, failed){
//     let password = prompt("password?", "")
//     if(password =="Roadside") success();
//     else failed()
// }

// const user =  {
//     name : "Ram",

//     loginsuccessfull(){
//         console.log(`${this.name} logged in`)
//     },
    
//     loginfailed(){
//         console.log(`${this.name} fail to login`)
//     },
// };

// checkpassword(user.loginsuccessfull.bind(user), user.loginfailed.bind(user))



// question 9 ; o/ p based question

// function checkpassword(ok, fail){
//     let password = prompt("password?", "")
//     if(password =="Roadside") ok();
//     else fail()
// }

// const user =  {
//     name : "Ram",

//     login(result){
//         console.log(this.name + (result ? " login successfull" : " login failed"))
//     }
// };
// checkpassword(user.login.bind(user, true), user.login.bind(user, false))




// question 10 :  Explicit Bind with arrow function

// arrow function this keyed it's represent window  not local object.
// it's majotr different in arrow function

// const age = 58;

// const person = {
//     name : "Ram",
//     age: 25,
//     getArrow : ()=>console.log(this.age),
//     getAge: function() {
//         console.log(this.age)
//     }
// }

// var person2 = { age: 24}
// person.getArrow.call(person2)
// person.getAge.call(person2)




