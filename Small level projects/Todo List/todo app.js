//USING SIMPLE JAVASCRIPT

// let todo = [];
// let user_choice = prompt("SELECT your choice(list,add,delete,quit) : ");
// user_wants = user_choice.toUpperCase();

// while(true){
//     if(user_wants=="EXIT"){
//         console.log("Quitting the app");
//         break;
//     }

//     if(user_wants=="LIST"){
//         console.log("---------------------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i," ",todo[i]);
//         }
//         console.log("---------------------");
//     }

//     else if(user_wants=="ADD"){
//         let new_task = prompt("Enter new task : ");
//         todo.push(new_task);
//         console.log("Task added");
//     }

//     else if(user_wants=="DELETE"){
//         let task_delete = prompt("Enter task number to delete : ");
//         todo.splice(task_delete,1);
//         console.log("task deleted");
//     }

//     else{
//         console.log("Wrong request entered")
//     }

//     let user_choice = prompt("SELECT your choice(list,add,delete,quit) : ");
//     user_wants = user_choice.toUpperCase();
// }

//USING DOM

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

// let delbtn = document.querySelectorAll('.delete');
// for(delbtns of delbtn){
//     delbtns.addEventListener('click',function() {  
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

    



