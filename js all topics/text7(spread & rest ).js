
// rest operator 
//  are used to collect the remaining arguments into an array.

// rest operator using function 

// function multiplyAll(...args) {
//     let result = 1;
//     for (let arg of args){
//       result *= arg;
//     }
//     return result;
//   }
//   console.log(multiplyAll(1)); // 1
//   console.log(multiplyAll(1, 2)); // 2
//   console.log(multiplyAll(1, 2, 3)); // 6




// rest operator using function
// function welcomeSite(siteName, bookName, ...bookTitles) {
//     console.log(' Welcome to ' + siteName + '’s ' + bookName + ' book' ); // Welcome to W3Docs’s JS book
    // the rest go into bookTitles array
    // console.log(bookTitles[0]); // Arrays
    // console.log(bookTitles[1]); // Functions
    // console.log(bookTitles.length); // 2
//   }
//   welcomeSite("W3Docs", "JS", "Arrays", "Functions");



// spread operator are
// used to split an array into single arguments.


// let arr = [6, 8, 2];
// console.log(...arr)


// let arr1 = [2, -3, 5, 4];
// let arr2 = [9, 2, -7, 2]; 
// console.log(...arr1, ...arr2)

// let arr1 = [2, -3, 5, 4];
// let arr2 = [9, 2, -7, 2]; 
// console.log(Math.max(...arr1, ...arr2)); // 9


// merged array using spread operator

// let arr = [5, 4, 9];
// let arr2 = [6, 8, 12]; 
// let merged = [1, ...arr, 3, ...arr2];
// console.log(merged); // [1, 5, 4, 9, 3, 6, 8, 12]


// using string with spread operator

// let o = {
//     fullname: "Ram",
//     age: 25
// }


// console.log(JSON.stringify(o))


// let str = "W3Docs";    

// console.log([...str])
// ["W", "3", "D", "o", "c", "s"]


