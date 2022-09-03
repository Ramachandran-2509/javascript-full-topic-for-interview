



// promise

// const bucket = ["coffee", "chips", "salt", "vegetables", "rice"];
// const firedrice = new Promise((resolve, reject) => {
//   if (
//     bucket.includes("vegetables") &&
//     bucket.includes("salt") &&
//     bucket.includes("rice")
//   ) {
//     resolve( "friedrice" );
//   } else {
//     reject(new Error("Something went wrong"));
//   }
// });

// firedrice
//   .then((value) => {
//     console.log("eat",value);
//   })
//   .catch(() => {
//     console.log("error");
//   });





// using function promise using and chaining promise

//   function friedRicePromise(){
//     const bucket = ["coffee", "chips", "salt", "vegetables", "rice"];
//     return new Promise((resolve, reject)=>{
//         if (
//             bucket.includes("vegetables") &&
//             bucket.includes("salt") &&
//             bucket.includes("rice")
//           ) {
//             resolve( "friedrice" );
//           } else {
//             reject(new Error("Something went wrong"));
//           }
//     })
//   }

//   friedRicePromise()
//   .then((value) => {
//     console.log(value);
//     value += "bracket"
//     return value
//   }).then((value)=>{
//     console.log(value)
//     value += "bravo"
//     return value
//   }).then((value)=>{
//     console.log(value)
//   })

//   .catch(() => {
//     console.log("error");
//   });




// function using setTimeout

//   function friedRicePromise(){
//     const bucket = ["coffee", "chips", "salt", "vegetables", "rice"];
//     return new Promise((resolve, reject)=>{
//         const value= false;
//         setTimeout(()=>{
//             if(value){
//                 resolve("everything going good")
//             }else{
//                 reject("error occur")
//             }
//         },2000)
//     })
//   }

//   friedRicePromise()
//   .then((value) => {
//     console.log(value);
//     return value
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//  function changeText(element, text, color, time){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(element){
//                 element.textContent = text
//                 element.style.color = color
//                 resolve()
//             }
//             else{
//                 reject("something went wrong")
//             }
//         },time)
        
//     })
//  } 

//  changeText(headimg1, "one", "red", 1000)