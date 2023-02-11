
let Task = [{
    title:"",
    description:"",
    isReady: false,  
}]
const ToDoForm =document.querySelector("#todo")

ToDoForm.addEventListener("change", event =>{
console.log(event.target.value);
});

ToDoForm.addEventListener("submit", event =>{
    event.preventDefault();
    });
const creatTodo = todo =>{

};