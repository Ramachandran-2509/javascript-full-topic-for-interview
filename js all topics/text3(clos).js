// closure is a technique to create a function
// that has access to the variables and parameters
// of the outer function,

// function outer(){
//     var a = 10;
//     function inner(){
//         var b = 10
//         console.log(a+b);
//     }
//     return inner;
// }
// var inner = outer();
// inner();

// function a(){
//     var a=10
//     function b(){
//         var b=10
//         function c(){
//             var c=100
//             console.log(`${a}${b}${c}`);
//         }

//         c()
//     }
//     b()
// }

// a()



//  question 1 : what is be logged to console?

// let count = 0;
// (function outer(){
//     if(count===0){
//         let count = 1
//         console.log(count);
//     }
//     console.log(count)
// })()

// question 2 : what a function that would allow you to do this

// function createBase(num){
//     return function(innernumber){
//         console.log(innernumber+num);
//     }
// }
    
// var addsix =  createBase(6);
// addsix(10); // 16
// addsix(21); // 27

// Round 2
// question 1 : time optimzation

// function find(index){
//     let a = []
//     for(let i=0; i<=1000000; i++){
//         a[i] = i * i;
//     }
//     console.log(a[index]);
// }

// console.time("6")
// find(10); // 100
// console.timeEnd("6") //
// console.time("50")
// find(50); // 2500
// console.timeEnd("50") //

// second method reduce time optimzation

// function find() {
//   let a = [];
//   for (let i = 0; i <= 1000000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }

// console.time("6")
// find(10); // 100
// console.timeEnd("6") //
// console.time("50")
// find(50); // 2500
// console.timeEnd("50") //

// round 2
// question 2 : Block scope and sEtTimeout

// using var is function scope or global scope

// function a(){
// for(var i = 0; i<10; i++){
//     setTimeout(function  (){
//         console.log(i);
//     } , i * 1000)
// }
// }
// a();

// using let is block scope

// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();


// using var we can print 0,1,2 using closure

// for(var i = 0; i<3; i++){
//     function x(i){
//     setTimeout(function log(){
//         console.log(i);
//     } , i * 1000)
//     }
//     x(i);
// }


// question 5 :  how would you use a closure to create 
//  a private counter?

// function outer(){
//     var _counter = 0;

//     function add(increment){
//         _counter += increment;
//     }

//     function retrieve(){
//         return "counter = " + _counter;
//     }

//     return {
//          add,
//         retrieve,
//     }


// }
// var counter = outer();
// counter.add(10);
// counter.add(20);
// console.log(counter.retrieve()); // counter = 30


// question 6 : what is module pattern

// var module = (function(){
//     function privateMethod(){
//         console.log("private method");
//     }

//     return{
//         publicMethod: function(){
//             console.log("public method");
//         }
//     }
// })

// module.publicMethod(); // public method
// module.privateMethod(); // error


// question 7 : make this run only once


// let view;

// function Likethisvideo(){
//     let count= 0;

//     return function (){
//         if(count>0){
//             console .log("you have already liked this video");
//         }
//         else{
//             let view = "begginers Js with Ram";
//             console.log("subscribe to " + view);
//             count++;
//         }
//     }
    
// }

// const k = Likethisvideo();
// k();
// k();
// k();
// k();


// question 8 :once to polyfil


// function once(func, content){
//     let ran;

//     return function(){
//         if(func){
//             ran = func.apply(content || this, arguments);
//             func = null;
//         }
//         return ran;
//     }
// }

// const hello = once(()=>
//     console.log("hello"));

// hello() 
// hello()
// hello()


// question 9 : memoize polyfill


// question 10: difference between closure and scope

// closure are functions that have access to the 
// variables and parameters of the outer function

// scope is the area of a program 
// where variables can be defined


