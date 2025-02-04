 let button = document.querySelectorAll('button');

 function sayhello(){
    console.log("hello ! ")
 }

 for( btn of button){
    btn.onclick = sayhello;
    btn.onmouseenter =  function(){
        console.log("you entered a button")
    }
 }