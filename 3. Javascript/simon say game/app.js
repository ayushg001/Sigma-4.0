let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow","red","green","purple"]
let h2 = document.querySelector('h2');

document.addEventListener( 'keypress' , () =>{
    if( started ==false){
        console.log("game started")
        started = true;
        levelup();
      }
}  );

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( () => {
        btn.classList.remove('flash')
    } , 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( () => {
        btn.classList.remove('userFlash')
    } , 250);
}


function levelup(){
    userSeq =[]
    level++;  //level increase
    h2.innerText =`Level ${level}`;  // level update
    let randIdx = Math.floor(Math.random() * 3); //2
    let randColor = btns[randIdx]; //"yellow
    let randBtn = document.querySelector(`.${randColor}`) //yellow class
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}

function checkAns(idx){

    if ( userSeq[idx] === gameSeq[idx]){
        if ( userSeq.length === gameSeq.length){
            setTimeout(levelup , 1000)
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";    
        }, 100)
        reset();
    }

}

function btnPress(){
    let btn = this;
    // console.log(this)
    userFlash(btn);

    userColor = btn.getAttribute('id');
    console.log(userColor)
    userSeq.push(userColor)
    console.log(userSeq);
    
    // when btn is pressed
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;
}