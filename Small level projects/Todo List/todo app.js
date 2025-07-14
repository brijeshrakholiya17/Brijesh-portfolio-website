let btn = document.querySelector('button');
let task = document.querySelector('input');
let list = document.querySelector('ul');

btn.addEventListener('click',function(e) {
    
    let new_task = document.createElement('li');
    let delbtn = document.createElement('button');
    new_task.innerText = task.value + ' ';
    delbtn.innerText = 'Delete';
    delbtn.classList.add('delete');
    new_task.appendChild(delbtn);
    list.appendChild(new_task);
    task.value = '';
    console.log("New task added");
    
});

list.addEventListener('click',function(event) {
    if(event.target.nodeName == 'BUTTON'){
        let list_item = event.target.parentElement;
        list_item.remove();
        
    }
});