  
//    const todoform = doucment.querySelector("form-todo")
//    const todoInput = document.querySelector("form-todo input(type='text')")
//    const todolist = document.querySelector("todo-list")
   
//    todoform.addEventListener("submit", (e)=>{
//    	e.preventDefault()
//     const newtodotext = todoInput.value;
//     const newli= document.querySelector("li")
//     newli.innerHTMl = `<span class="text">${newtodotext}</span>
//     <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//           </div> `;
   
//    todolist.append(newli)
//    todoInput.value=""
   
//    })
//    todolist.addEventListener("click", (e)=>{
//    	if(e.target.classList.contains("remove")){
//     const targetedli = e.target.parentElement.parentElement;
//     targetedli.remove();
//     }
//     if(e.target.classList.contains("done")){
//     	const lispan = e.target.parentElement.previoussiblings;
//       lispan.style.textDecoration = "line-through"
//     }
    
//    })
   
   
   
//    const button = document.queryselector("button")
//    const body = document.body;
//    const currentColor = document.querySelector("current-color")
   
   
//    function randomColorGenerator(){
//    const red = Math.floor(Math.random()*256)
//    const blue = Math.floor(Math.random()*256)
//    const green = Math.floor(Math.random()*256)
//    const randomColor = `rgb(${red},${blue},${green}`
//    return randomColor;
   
   
//    }
   
   
//    button.addEventListerner("click", ()=>{
//    	const randomColor= randomColorGenerator();
// 		body.style.background = randomColor
//     currentColor.textContent = randomColor
//    })
   
   
   
   
//  const mainButton = document.querySelector("button");
//   const body = document.body;
  
//     const k = setInterval(() => {
//      const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//      const blue = Math.floor(Math.random() * 256);
//      const rgb = `rgb(${red}, ${green}, ${blue})`
//      body.style.backgroundColor = rgb;
// })

// mainButton.addEventListener("submit",()=>{
// clearInterval(k)
// button.textContent=body.style.background
// })