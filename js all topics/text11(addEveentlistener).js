

          // it's full of queryselector methods 




// const headings = document.querySelectorAll('a');

// When we access all the a tag we can use querySelectorAll method.and 
// we can use forEach or for in  method to loop through the array.

// for(let heading of headings) {
// heading.getAttribute('href');
// heading.setAttribute('href', 'https://www.google.com');
// console.log(heading);
// }

// when we target the particular a tahe using querySelector 
// we can use getAttribute method to get the href attribute.

// const headings1 = document.querySelector('a');
// heading1.getAttribute('href');
// heading1.setAttribute('href', 'https://www.google.com');
// console.log(heading1);





// const headline = document.querySelector('#main-heading');
// const headline1 = document.getElementById('main-heading');
// console.log(headline);

// we can create element using document and create classname and id
// we can create two method for classnam and Ifd


// Example 1 : using className and id

// const newli= document.createElement("h1")
// newli.innerHTML = "Hello World";
// newli.className = "hello";
// newli.id = "hello";
// headline1.append(newli);
// console.log(headline1);


// Example 2 : using createElement and id and className

// const newli1= document.createElement("h1")
// newli1.innerHTML = "Hello World";
// newli1.setAttribute("id", "hello");
// newli1.setAttribute ("class", "hello");
// headline1.append(newli1);
// console.log(headline1);





// now we can play with buttons

// const button  = document.querySelector(".btn-headline");

// button.addEventListener("click", (e) => {
//     button.innerHTML = "Everything will be change";
//     button.style.backgroundColor = "Aqua";
// })


// now we can play with form todo

// const todoform = document.querySelector(".form-todo");
// const todoInput= document.querySelector(".form-todo input[type='text']");
// const todolist = document.querySelector(".todo-list");


// todoform.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const newtodotext = todoInput.value;
//     const newli = document.createElement("li");
//     newli.innerHTML =`<span class="text">${newtodotext}</span>
//     <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//           </div> `;

//     todolist.append(newli);
//     todoInput.value = "";

// })


// todolist.addEventListener("click", (e)=>{
//     if(e.target.classList.contains("remove")){
//         const targetedli = e.target.parentElement.parentElement;
//         targetedli.remove();
//     }
//     if(e.target.classList.contains("done")){
//         const liSpan = e.target.parentElement.previousElementSibling;
//         liSpan.style.textDecoration = "line-through";
//     }
// })


// color generator task;

// const mainButton = document.querySelector("button");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");

// function randomcolorgenerator(){
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomcolor = `rgb(${red}, ${green}, ${blue})`
//     return randomcolor;

// }

// mainButton.addEventListener("click",()=>{
//     const randomcolor = randomcolorgenerator();
//     body.style.backgroundColor = randomcolor;
//     currentColor.innerHTML = randomcolor;
// })


// color contnues showing when we click the buttons 
// everything will be stopped and showing rgb(0, 0, 0) number

//  const mainButton = document.querySelector("button");
//  const body = document.body;

//  const k = setInterval(() => {
//     const red = Math.floor(Math.random() * 256);
//    const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const rgb = `rgb(${red}, ${green}, ${blue})`
//     body.style.backgroundColor = rgb;
//  })

//  mainButton.addEventListener("click",()=>{
//     clearInterval(k);
//     button.textContent = body.style.background;

//  })



//  when we want add extra classes and change backgroundColor 
// using add method and ('bg-dark');

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');


// when we change h1 tag color and added border color the below for example
// const mainHeading = document.querySelector("h2");
// console.log(mainHeading.style);
// mainHeading.style.backgroundColor = "aqua";
// mainHeading.style.border = "20px solid orange";




// Add new HTML elements to page 


// innerHTML to add html element
// 
// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)
// todoList.innerHTML = "<li>New Todo 2 </li>";
// console.log(todoList.innerHTML)


// when you should use it , when you should not
// todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>')


// using after method 

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);
// console.log(todoList);



// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

//  const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>");
// todoList.insertAdjacentHTML("beforeend", "<li>learn JavaScript </li>");


// when we click the button it shoe the  hello all

// const button = document.querySelector(".btn-headline");

// button.addEventListener("click", () => {
//     console.log("god here from me ")
// })


// using settimeout method to show the hello all
// button.addEventListener("click", () => {
    
//     console.log("god here from me ")
//     setTimeout(()=>{
//         console.log("hello all")
//     },2000)
// })


// mainButton.addEventListener("mouseleave", () => {
//     console.log("mouseleave event ocurred!!!");
//   });
  