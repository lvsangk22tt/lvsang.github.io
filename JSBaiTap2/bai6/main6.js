var NumOfRow=1;
function Button1_onclick()
{
    NumOfRow++;
    var mainDiv=document.getElementById('MainDiv');
    var newDiv=document.createElement('div');
    newDiv.setAttribute('id','innerDiv'+NumOfRow);
    var newSpan=document.createElement('span');
    newSpan.innerHTML="Enter Your Mail Address ";
    var newTextBox=document.createElement('input');
    newTextBox.type='text';
    newTextBox.setAttribute('id','txtAddr'+NumOfRow);
    var newButton=document.createElement('input');
    newButton.type='button';
    newButton.value='Remove';
    newButton.id='btn'+NumOfRow;
    newButton.onclick=function RemoveEntry() { var
    mainDiv=document.getElementById('MainDiv');
    mainDiv.removeChild(this.parentNode);
}
newDiv.appendChild(newSpan);
newDiv.appendChild(newTextBox);
newDiv.appendChild(newButton);
mainDiv.appendChild(newDiv);
}