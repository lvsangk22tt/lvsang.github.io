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
        };
        newDiv.appendChild(newSpan);
        newDiv.appendChild(newButton);
        mainDiv.appendChild(newDiv);
    }
    else {
        alert("You must write something!");
    }
    currentContentInput.value = '';
}
