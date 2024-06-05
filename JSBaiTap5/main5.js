function b1_onclick() {
    var currentContentInput = document.getElementById('en');
    var currentContent = currentContentInput.value.trim();
    
    if (currentContent !== '') {
        createNewElement(currentContent);
        saveToLocalStorage(currentContent);
    }
    else {
        alert("You must write something!");
    }
    
    currentContentInput.value = '';
}

function createNewElement(task) {
    var mainDiv = document.getElementById('contentDiv');
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'thanh2');
    
    var newSpan = document.createElement('span');
    newSpan.textContent = task;
    newSpan.id = 'sp';
    
    var newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.id = 'but2';
    newButton.className = 'bx bx-x';
    newButton.onclick = function(){
        mainDiv.removeChild(newDiv);
        removeFromLocalStorage(task);
    };
    
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newButton);
    mainDiv.appendChild(newDiv);
}

function saveToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    tasks.push({ task: task });
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

function loadFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    tasks.forEach(function(taskObj) {
        createNewElement(taskObj.task);
    });
}

window.onload = loadFromLocalStorage;

function removeFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    tasks = tasks.filter(taskObj => taskObj.task !== task);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}
