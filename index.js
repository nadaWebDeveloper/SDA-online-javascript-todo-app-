const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const editForm = document.querySelector("#editForm");
const editInput = document.querySelector("#editInput");
const cancelEdit = document.querySelector("#cancelBtn");
const searchForm = document.querySelector("#serchForm"); 
const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#back input");
const taskCounter = document.querySelector("#tasks");
const error = document.getElementById("MessageError");
const countTask = document.querySelector("count-task");


let oldInputValue;



const saveTodo = (text) =>
{
   todoList.style.display = "block";
   const todo = document.createElement("div");
   todo.classList.add("todo");

   const todoTitle = document.createElement("h3");
   todoTitle.innerText = text ;
   todo.appendChild(todoTitle);

   const doneBtn = document.createElement("input");
   doneBtn.setAttribute("type", "checkbox");
   doneBtn.classList.add("fishTodo");
   todo.appendChild(doneBtn);

   const editBtn = document.createElement("button");
   editBtn.classList.add("editTodo");
   editBtn.innerHTML = "Edit";
   todo.appendChild(editBtn);

   const removeBtn = document.createElement("button");
   removeBtn.classList.add("removeTodo");
   removeBtn.innerHTML = "Delete";
   todo.appendChild(removeBtn);

   todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();

}


const toggleForm = () =>
{
   searchForm.classList.toggle("hide");
   todoForm.classList.toggle("hide");
   todoList.classList.toggle("hide");
   taskCounter.classList.toggle("hide");
   editForm.classList.toggle("hide");
}



const updateTodo = (text) =>
{
    const todos = document.querySelectorAll("todo");

    todos.forEach((todo) => 
    {
      let todoTitle = todo.querySelector("h3");
      console.log(`${todoTitle} ,${text}`);

      if(todoTitle.innerText === oldInputValue)
      {
         todoTitle.innerText = text ;
      
      }
    });
}




todoForm.addEventListener("submit", (e) => 
{

e.preventDefault();
const inputValue = todoInput.value;
todoInput.value = "";


if(inputValue)
{
   saveTodo(inputValue);
   console.log("Added to ToDo List");

}
else
{
   setTimeout(() => {
    error.style.display = "block";
      }, 100);
  return ;
}

});







document.addEventListener("click" , (e) => 
{

const targetEl = e.target;
const parentEl = targetEl.closest("div");
let todoTitle;

if(parentEl && parentEl.querySelector("h3"))
{
   todoTitle = parentEl.querySelector("h3").innerText;
}


if(targetEl.classList.contains("fishTodo"))
{
   parentEl.classList.toggle("done");
}

if(targetEl.classList.contains("removeTodo"))
{
   parentEl.remove();
}

if(targetEl.classList.contains("editTodo"))
{
   toggleForm();
   console.log("the same text")

   editInput.value = todoTitle;
   oldInputValue = todoTitle;

}

});




cancelEdit.addEventListener("click", (e) => 
{
e.preventDefault();
console.log("cancel edit")

toggleForm();

});




editForm.addEventListener("submit", (e) =>
{
   e.preventDefault();
   const editInputValue = editInput.value;

   if(editInputValue)
   {
      updateTodo(editInputValue);
      console.log("changed");
      toggleForm();
   }
   else
   {
      toggleForm();
     console.log("canceled");
   }
})





























// let taskCount = 0;

// const displayCount = (taskCount) =>
// {
//     countTask.innerText =  taskCount;
// }




// const addNewTask = () =>
// {
//     const taskName = taskInput.value.trim();
//     error.style.display = "none";


//     if(!taskName)
//     {
//        setTimeout(() => {
//         error.style.display = "block";
//        }, 200);
//        return;
//     }
//  const task = `
//     <div class="task">
//     <input type="checkbox" class="taskCheck">
//     <span class="taskName">${taskName}</span>
//     <button class="edit"></button>
//     <button class="delete"></button>
//     </div>
//  `

//  taskCounter.insertAdjacentHTML("beforeend",task)

// }


// addBtn.addEventListener("click", addNewTask() );





































// const TODO = ["nada","raghad","shatha","hyugy","kiujjjj"];





// const addList = (listInput) =>
// {
//   TODO.push(listInput);  
//   return TODO; 
// }







// const deleteList = (deleteElement) =>
// {
//     for (let i = 0; i < TODO.length; i++) {
//         if (TODO[i] === deleteElement) {
//             let spliced = TODO.splice(i, 1);
//             console.log(`Remaining elements[ ${TODO} ]`);
//         }
//     }
// }





// const  createNewCheckboxt = (name, value) =>
// {
//     let checkbox = document.createElement("INPUT");
//     checkbox.setAttribute("type", "checkbox");
//     checkbox.setAttribute("value", value);
//     checkbox.setAttribute("name", name);

//     document.body.appendChild(checkbox);
//     return checkbox;
// }





// document.getElementById("submit-btn").addEventListener("submit", function () {

//     const listInput = document.getElementById("in-list").value;
//     // const newList = addList(listInput);
//     TODO.push(listInput); 
//     document.getElementById("div1").innerHTML =`${TODO}`;

// });












// // //TO ADD TAG ELEMENT (INPUT:CHECKBOX) TO HTML USING JS
// // const check = document.createElement("INPUT");
// // check.setAttribute("type", "checkbox");
// // const element = document.getElementById("div1")
// // element.appendChild(check);







// // document.getElementById("submit-btn").addEventListener("click", function () {
// //   let text = document.getElementById("in-list").value;
// //   console.log(text);

// //   if (text.length <= 10) {
// //     let cutFirst = text.substr(0, 1);
// //     let upper = cutFirst.toUpperCase();
// //     let cutAll = text.slice(-9);
// //     let lower = cutAll.toLowerCase();
// //     let connect = upper.concat("", lower);

// //     let replace = connect.replace(/a/g, "o");
// //     let revers = replace.split("").reverse().join("");

// //     let result = (document.getElementById(
// //       "result"
// //     ).innerHTML = `${padStar}\n${replace}\n${revers}`);
// //     console.log(result);
// //   } else {
// //     let cut = text.substring(0, 10);
// //     document.getElementById(
// //       "result"
// //     ).innerHTML = `should not be name long out of 10\n [${cut}]`;
// //   }
// // });
