let input = document.querySelector('input');
input.addEventListener( "keydown" , function(){
    console.log("Code is " , event.code) // w ,a,d,s
    if( event.code == "KeyW"){
        console.log("character moves forward");
    }
    else if( event.code == "KeyS"){
        console.log("character moves Backward");
    }
    else if( event.code == "KeyA"){
        console.log("character moves in Left");
    }
    else if( event.code == "KeyD"){
        console.log("character moves in Right");
    }
})