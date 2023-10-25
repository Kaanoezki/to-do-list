/*
console.log('testlog' );

document.addEventListener('DOMContentLoaded',function(){
    loadTasks();
    document.getElementById('addTask').addEventListener('click',function(){
        var taskName = document.getElementById('taskName').value;
        if (taskName !== ''){
            addTask(taskName);
            document.getElementById('taskName')
        }
    }
}
*/
var contentDiv = document.querySelector("#content");
var introParagraph = contentDiv.querySelector(".intro");
var buttonElement = contentDiv.querySelector("button");
    introParagraph.textContent = "dieser Satz wurde geändert";
    buttonElement.addEventListener("click" ,function(){
        alert("button wurde geändert")
    document.body.style.backgroundColor = "red";
    introParagraph.style.backgroundColor =   introParagraph.style.backgroundColor = "lightblue"
    })