var num = 1;

function b1_onclick() {
    var mainDiv = document.getElementById('contentDiv');
    var currentContentInput = document.getElementById('en');
    var currentContent = currentContentInput.value.trim();
    
    if (currentContent !== '') {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'thanh2');
        
        var newSpan = document.createElement('span');
        newSpan.textContent = currentContent;
        newSpan.id = 'sp';
        
        var newButton = document.createElement('button');
        newButton.type = 'button';
        newButton.id = 'but2';
        newButton.className = 'bx bx-x';
        newButton.onclick = function(){
            mainDiv.removeChild(newDiv);
            removeFromLocalStorage(currentContent);
        };
        
        newDiv.appendChild(newSpan);
        newDiv.appendChild(newButton);
        mainDiv.appendChild(newDiv);
        
        // Lưu trữ nội dung vào localStorage
        saveToLocalStorage(currentContent);
    }
    else {
        alert("You must write something!");
    }
    
    currentContentInput.value = '';
}

// Hàm lưu trữ nội dung vào localStorage
function saveToLocalStorage(task) {
    let items = localStorage.getItem('myTasks');
    let tasks = [];
    if (items !== null) {
        tasks = JSON.parse(items);
    }
    tasks.push({task: task});
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

// Hàm tải lại nội dung từ localStorage
function loadFromLocalStorage() {
    let items = localStorage.getItem('myTasks');
    if(items !== null) {
        var tasks = JSON.parse(items);
        tasks.forEach(function(taskObj){
            createNewElement(taskObj.task);
        });
    }
}

// Hàm tải lại nội dung từ localStorage khi trang được tải
window.onload = function() {
    loadFromLocalStorage();
}

// Hàm tạo mới phần tử từ dữ liệu trong localStorage
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

// Hàm xóa mục khỏi localStorage
function removeFromLocalStorage(task) {
    let items = localStorage.getItem('myTasks');
    if (items !== null) {
        var tasks = JSON.parse(items);
        tasks = tasks.filter(function(taskObj) {
            return taskObj.task !== task;
        });
        localStorage.setItem('myTasks', JSON.stringify(tasks));
    }
}
