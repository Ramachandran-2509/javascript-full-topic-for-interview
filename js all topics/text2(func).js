// 
// function all basic level and advanced level questions in interview


//  q1: what is function declaration or statement or definition?

// function declaration is a statement that declares a function.


    // function square(num){
    //     return num * num;
    // }
    // console.log(square(2)); // 4


// q2: what is function expression?   

// function expression is a statement that evaluates to a function.


    // const square = function(num){
    //     return num * num;
    // }
    // console.log(square(2)); // 4 


 // q3: what is first class function?

// first class function is a function that can be passed 
// as an argument to another function, 
// and can be returned by another function.
 
//  function square(num){
//     return num * num;
// }

// function result(func){
//     console.log("square is: " + func(6));

// }
// result(square); // square is: 36


// q / what is higher order function?

// higher order function is a function 
// that takes another function as an argument or returns a function.

// const doubleFunc = function(x){
//     return x*2;
//   }
//   const doubleUp = doubleFunc;
//   console.log('Double',doubleUp(50)); 



// q4: what is IIFE?
// IIFE is an anonymous function that is executed immediately

//  (function(){ 
//      console.log("hello");
//  })();

//q5: IIFE - o/p based question

// (function(x){
//     return (function(y){
//         console.log(x);
//     })(2);
// })(8);


// Functions in Javascript

// Q6-Function Scope

// var num1=20,
//   num2=3,
//   name="Roadside Coder";
// function multiply(){
//   return num1 * num2;
// }
//  console.log(multiply());// Returns 60 

// a nested function

// function multiply1(){
//     var num1 =40,
//         num2 =3;

//     function add(){
//      let name = "Roadside Coder";
//         return name + "scored " +  (num1 + num2);
//     }
//     return add();

// }
// console.log(multiply1()); // Returns "Roadside Coder scored 43"


// q7: function scope - o/p based question

// for(let i=0; i<5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },i * 1000)
// }

// q8: function Hoisting

//  function hoisting(){
//         console.log("hello");
        
//  }
//     hoisting(); // hello



// Q9-Function Hoisting-O/ PBased Question

// var x = 21;
// var fun=function(){
//   console.log(x);
//   var x = 20;
// };
// fun();  // undefined

// q10 : params vs arguments

// function square(num){ // parameter
//     return num * num;
// }
// console.log(square(2)); // arugment



// spread operator example

// function add(num1, num2 ){
//     return num1 + num2
// }

// const arr = [1,2,];
// console.log(add(...arr)); // spread operator 

//  rest operator example

// function add(...nums){ // rest operator
//     return nums.reduce((a,b)=>a+b);
// }
// console.log(add(1,2,3,4,5,6)); // 15


// function add1(...nums){ // rest operator
//     return nums[0] + nums[1]+ nums[2] + nums[3]+ nums[4];
// }

// const arr1 = [1,2,3,4,5];
// console.log(add1(...arr1)) // 15



// q11: rest operator - o/p based question

// const fn = (a, x, y, ...nums) => {
//     console.log(a, x, y, nums);
// }
// console.log(fn(1,2,3,4,5,6));  // 1 2 3 [4, 5, 6]



// q12: callback function
// call back function is a 
// function that is passed to another function as an argument.


// function k(name){
//     console.log(`hello ${name}`);
// }

// function result(o){
//     var name = prompt("Enter your name");
//     o(name);
// }
// result(k); // hello









 // Q 13: arrow function example

//  arrow function vs normal function

// 1-syntax
    // function  add(num1, num2){
    //     return num1 + num2;
    // }
    //     add(1,2); // 3

 // 2-syntax
 
// const add1 = (num1, num2) => {
//     return num1 + num2;
// }
//     console.log(add1(1,2)); // 3


//  2.difference is Implicit "return" keyword

// const add12 = (num1, num2) => num1 + num2;
// console.log(add12(1,2)); // 3

// 3 .arguments

// function fn(){
// console.log(arguments);
// }

// fn(1,3,2); it's shows 1,3,2

// const  fnArr = ()=>{
// console.log(arguments)};

// fnArr(1,3,2); //  it's  shows error because of arguments is not defined


// 4.this keyword


// let user = {
//     username:"Roadside Coder",
//     rc1:()=>{
//       console.log("Subscribe to"+this.username);
//     },
//     rc2(){
  
//       console.log("Subscribe to"+this.username);
//     }
  
//   }  
//   user.rc1();   
//   user.rc2();  