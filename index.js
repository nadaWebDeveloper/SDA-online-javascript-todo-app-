const addBtn = document.querySelector("#id-btn");
const taskInput = document.querySelector("#back input");
const taskCounter = document.querySelector("#tasks");
const error = document.getElementById("MessageError");
const countTask = document.querySelector("count-task");

let taskCount = 0;

const displayCount = (taskCount) =>
{
    countTask.innerText =  taskCount;
}




const addNewTask = () =>
{
    const taskName = taskInput.value.trim();
    error.style.display = "none";


    if(!taskName)
    {
       setTimeout(() => {
        error.style.display = "block";
       }, 200);
       return;
    }
 const task = `
    <div class="task">
    <input type="checkbox" class="taskCheck">
    <span class="taskName">${taskName}</span>
    <button class="edit"></button>
    <button class="delete"></button>
    </div>
 `

 taskCounter.insertAdjacentHTML("beforeend",task)

}


addBtn.addEventListener("click", addNewTask() );





































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
