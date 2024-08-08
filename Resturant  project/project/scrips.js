// const searchicon1 = document.querySelector('#searchicon1');
// const srchicon1 = document.querySelector('#searchicon1');
// const search1 = document.querySelector('#searchinput1');

// searchicon1.addEventListener('click',function(){
//     search1.style.display = 'flex';
//     searchicon1.style.display = 'none';
// })
window.onload = function() {
    let newtask = document.getElementById('newtask');
    let addtask = document.getElementById('addtask');
    let todolist = document.getElementById('todolist');

    addtask.onclick = function() {
        if (newtask.value.trim() !== "") { // Check for non-empty input
            let li = document.createElement('li');
            let xbtn = document.createElement('button')
            xbtn.innerText = ' \u00D7';
            xbtn.onclick = function(event){
           event.target.parentElement.remove();
            }
          let upbtn = document.createElement('button')
          upbtn.innerText = 'Top';
          upbtn.onclick = function(event){
        event.target.parentElement.parentElement.insertbefore(
                event.target.parentElement,event.target.parentElement.previousElementsibling
            )
          }
            let taskspan  = document.createElement('span')
            
        taskspan.innerText = newtask.value
           
            li.appendChild(xbtn)
            li.appendChild(taskspan)
            li.appendChild(upbtn)
            todolist.appendChild(li);
            
            newtask.value = ""; // Clear the input field
            newtask.focus(); // Focus on the input field
        }
    
    }
}