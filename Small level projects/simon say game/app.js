let gameseq = [];
let playerseq = [];

let btns = ["red","yellow","green","blue"];

let start = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress',restart = function() {
    if(start == false){
        console.log('Game Started');
        start = true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

function User_flash(btn){
    btn.classList.add('Userflash');
    setTimeout(function(){
        btn.classList.remove('Userflash');
    },250);
}

function levelup(){
    level++;
    h2.innerText = `Level ${level}`;

    let randind = Math.floor(Math.random()*4);
    let randcolor = btns[randind];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);
}

function check() {
     let idx = level-1;
     if(playerseq[idx]==gameseq[idx]){
        if(playerseq.length == gameseq.length){
            levelup();
        }
     }
     else{
        h2.innerText = `Game Over! press any key to start\nYour Final Score is ${level}`;
        reset();
     }
}

function btnpress() {
    User_flash(this);
    usercolor = this.getAttribute("id");
    playerseq.push(usercolor);
    check();
        
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener('click',btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    playerseq = [];
    level = 0;

}