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
//button selector 
var contentDiv = document.querySelector("#content");
var introParagraph = contentDiv.querySelector(".intro");
var buttonElement = contentDiv.querySelector("button");
    introParagraph.textContent = "dieser Satz wurde geändert";
    buttonElement.addEventListener("click" ,function(){
        alert("button wurde geändert")

    introParagraph.style.backgroundColor =   introParagraph.style.backgroundColor = "lightblue"
    })

    //mouseovereffect
    var mouseOverEffect = function() {
//path finder
document.body.style.backgroundImage = "(../assets/UI--tablet--website.jpg)"
var currentPath = window.location.pathname;
console.log (currentPath);
var parentPath = currentPath + "/..";       
// change background
var changeBackgroundButton = document.querySelector("#backgroundchanger");
// on click log + change
changeBackgroundButton.addEventListener("click", function() {
   
    var bodyElement = document.body;
    bodyElement.style.backgroundColor = "lightblue";
    if(bodyElement.style.backgroundColor = "lightblue;"){

    console.log ("background changed");}})}
//mouse hover function
var mouseHoverEffect = document.getElementById("mouseHoverEffect");
if(
mouseHoverEffect.addEventListener("mouseover",function(){
    mouseHoverEffect.style.backgroundColor ="lightblue"
    mouseHoverEffect.textContent = "mouse hover!";
}));
else (mouseHoverEffect.addEventListener("mouseout",function(){
    mouseHoverEffect.style.backgroundColor ="white";
    mouseHoverEffect.textContent = "mouse hover over";
}));
