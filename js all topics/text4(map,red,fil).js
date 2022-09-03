// map, filter,reduce
// map

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const newArr = arr.map((num)=>{
//     return num * 3
// })
// console.log(newArr);


// filter

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const morethan3 = arr.filter((num)=>{
//     return num > 3
// })
// console.log(morethan3);


// reduce

// const arr = [1,2,9,6]

// const result = arr.reduce((acc, curr)=>{
//     return acc + curr
// },0)

// console.log(result);







// folyfill for map

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


// folyfill for filter


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

//  const morethan3 = arr.myfilter((num)=>{
//     return num > 3
// })
// console.log(morethan3);


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



// q1 ; map vs forEach

// const arr = [1,3,6,7]

// const resultmap = arr.map((num)=>{
//     return num * 2
// })

// const resultforeach = arr.forEach((num, i)=>{
//     arr[i] =  num + 2
// })

// console.log(resultmap, resultforeach, arr);



// q2: // map,filter and reduceO/PBased Questions
// Question1 ;  return only name of student in captial

let students=[
    {name:"Piyush",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"Kaushal",rollNumber:16,marks:35},
    {name:"Dilpreet",rollNumber:7,marks:55},
  ];

    // const result = students.map((student)=>{
    //     return student.name.toUpperCase();
    // })
    // console.log(result);

// question2 : return only details of those who scored more than 60


// const result =  students.filter((student)=>{
//     return student.marks > 60;
// })
// console.log(result);

// question3 : more than 60 marks students roll number greater than 15

// const result = students.filter((student)=>{
//     return student.marks > 60 && student.rollNumber > 15;
// })
// console.log(result);


// question  4 : return total marks of all students

// const result = students.reduce((acc, curr)=>{
//     return acc + curr.marks;
// },0)
// console.log(result);


// question 5 :  return only name of students who scored more than 60


// const result = students.filter((student)=>{
//     return student.marks >60
// }).map((student)=>{
//     return student.name
// })
// console.log(result);


// question 6 : return total marks of all students who scored more than 60..
//              after 20 marks have been added to those who scored less than 60


// const result = students.map((student)=>{
//     if(student.marks < 60){
//         student.marks += 20;
//     }
//     return student
// }).filter((student)=>{
//     return student.marks > 60
// }).reduce((acc, curr)=>{
//     return acc + curr.marks
// },0)
      
// console.log(result);






// the below took from akshay saini namaste javascript example

 const users = [
    { firstname: 'Piyush', lastname: 'Kumar', age: 21 },
    { firstname: 'Jenny', lastname: 'Kumar', age: 19 },
    { firstname: 'Kaushal', lastname: 'Kumar', age: 17 },
    { firstname: 'Dilpreet', lastname: 'Kumar', age: 21 },

];


// question 1 : outpt based question { 17:1, 19:1, 21:2 }

// const result = users.reduce((acc, curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age]
//     }
//     else{
//         acc[curr.age] = 1
//     }
//     return acc


// },{})
// console.log(result);


// question 2 : those whose age less than 20 and  get users firstname only

// const result = users .filter((user)=>{
//     return user.age < 20
// }).map((users)=>{
//     return users.firstname
// })
// console.log(result);

// // using reduce

// const resullt = users.reduce((acc, curr)=>{
//     if(curr.age<20){
//         acc.push(curr.firstname)
//     }
//     return acc
// },[]);
// console.log(resullt);
