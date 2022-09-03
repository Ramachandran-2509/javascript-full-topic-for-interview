// polyfill for all the methods


    // let car1 = {
    //     color : "red",
    //     company: "ferrari"
    // }

    // function purchasecar(currency, price){
    //     console.log(`I have purchased ${this.company}  ${this.color} car for ${currency} ${price} `)
    // }

// purchasecar.call(car1, "£", 50000000)


// polyfil for call methods

// Function.Prototype.myCall = function(context={}, ...args){
//     if(typeof this !== "function"){
//         throw new Error(this + "Something went wrong")
//     }
    
//     context.fn = this;
//     context.fn(...args)
// }
//  purchasecar.myCall(car1, "£", 50000000)
// purchasecar.call(car1, "£", 50000000)



// apply method using polyfill


// Function.Prototype.myApply = function(context={}, args=[]){
//     if(typeof this !== "function"){
//         throw new Error(this + "Something went wrong")
//     }
//     if(!Array.isArray(args)){
//         throw new Error("Createlist called on non-objec")
//     }
    
//     context.fn = this;
//     context.fn(...args)
// }
 
// purchasecar.myApply(car1, "£", 50000000)



// bind methods for polyfill


// Function.Prototype.mybind = function(context={}, ...args){
//     if(typeof this !== "function"){
//         throw new Error(this + "Something went wrong")
//     }
    
    
//     context.fn = this;
//     return function(...newargs){
//         return context.fn(...args,...newargs)
    
//     }
    

// }
 
// const newfunc= purchasecar.mybind(car1, "£")
// console.log(newfunc(5000000))













// create polyfile for map,filter,reduce



// Array.prototype.mymap = function(cb){
//     let temp = [];
//     for(let i = 0; i < this.length; i++){
//         temp.push(cb(this[i], i, this));
//     }
//     return temp;
// }

// const arr = [1,2,3,4,5,6,7,8,9,10];

//  const newArr = arr.mymap((num)=>{
//      return num * 2
// })
// console.log(newArr);



// Array.prototype.myfilter = function(cb){
//     let temp = [];
//     for(let i = 0; i < this.length; i++){
//         if(cb(this[i], i, this)){
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// }

// const arr = [1,2,3,4,5,6,7,8,9,10];

//  const morethan3 = arr.myfilter((    num)=>{
//     return num > 3
// })
// console.log(morethan3)




// folyfill for Reduce

// Array.prototype.myreduce = function(cb, initialvalue){
//     var accumulator = initialvalue;
//     for(let i=0; i<this.length; i++){
//         accumulator = accumulator ? cb(accumulator, this[i], i ,this) : this[i];
//     }
//     return accumulator;


// }


//  const arr = [1,2,9,6]

// const result = arr.myreduce((acc, curr)=>{
//     return acc + curr
// },0)

// console.log(result);




//  setInterval every time is expired keep on running untill browase close

// console.log("script start")
// setInterval(()=>{
//     console.log("inside setinterval")
// },2000)
// console.log("script end")
