// coding round 1 for wipro question(sahil arora youtube channel)

// question 1 var res = [ 1, 3] how to get empty array

// var res  = [ 1, 3];
// for(let i = 0; i<res.length; i++){

//     delete res[i];

// }
// console.log(res); // [undefined, undefined, undefined, undefined]

// question 2 :we have a array using delete method
// removed second element and print the array of length

// var course = ["javascript","python","c++","Java"]
// delete  course[2];
// console.log(course); // [ 'javascript', 'python', undefined, 'Java' ]
// console.log(course.length); // 4

// question 3 : o.p based question

// const res = ["jacket", "t=shirt"]
// res.length = 0
// res[0]
// console.log(res); // []

// question 4: o.p based question

// for(var i =0 ; i<3; i++){
//     console.log=()=>{
//         console.log(i);
//     }
//     setTimeout(log, 100);
// }

// question 5: o.p based question

// console.log("one")

// setTimeout(()=>{
//     console.log("two")
// },0)

// Promise.resolve().then(()=>{
//     console.log("three")
// })

// console.log("four")

// question 6: o.p based question

// function abc(){
//     if(1){
//         var a = 10;
//         let b = 7;
//         const c= 9;
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// abc();

// question 7: o.p based question

// var a = 10
// var b = "10"
// console.log(a == b); // true
// console.log(a === b); // false

// question 8 : o.p based question

// var course = [
//     "javascript", "php", "java"
//     ]
//     delete course[2]
//     console.log(course)

// question 9 : o.p based question

// const cloth = ["jacket", "shirt"]
// cloth.length = 0
// console.log(cloth[0])

// question 10 : o.p based question
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

// question 8: o.p based question

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

// for(let i =0; i<user.length; i++){
//     printAnimal.call(user[i], i)
// }

// Object.entries(user)
// .forEach(([key, value]) => {
//     console.log(`${key(1)}: ${value(1)}`);
// })

// console.log(Object.values(iem));

// add value of two array

// function sumArray(a, b) {
//     var c = [];
//     for (var i = 0; i < Math.max(a.length, b.length); i++) {
//       c.push((a[i] || 0) + (b[i] || 0));
//     }
//     return c;
// }

// console.log(sumArray([1, 2, 5,7],[1, 2])
// )

// string to reverse

// solution 1

// 1.given string -convert into array
// reverse in the array
// turn the array back to string

// const revstring = (str)=>{
//         const arr = str.split("")
//         arr.reverse()
//         str = arr.join("")
//         console.log(str)
// }
// revstring("Ram")

// solution 2
// given string -create empty string
// loop through each charcter
// return the reversed

// (function(str){
//     let reversed = ''
//     for(let character of str)
//     {
//         reversed = character + reversed ;
//     }
//     console.log({reversed_value:reversed})
// } )("Ram")

//  find palindromes

//  reverse the string
// check with the original if they are same

// const palindrome =  (str)=>{
//     const ispalindrome = str.split('').reverse().join('')
//     console.log(str===ispalindrome)
// }
// palindrome("Ram")






