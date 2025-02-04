let button = document.querySelectorAll('button');

function sayhello(){
   console.log("hello ! ")
}

function sayname(){
    console.log("ayush ")
 }

for( btn of button){
//    btn.onclick = sayhello;
   btn.addEventListener("click" , sayhello);
   btn.addEventListener("click" , sayname);
   btn.addEventListener("dblclick" , function () {
    console.log("you double click")
   })
}