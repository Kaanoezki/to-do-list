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