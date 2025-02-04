let form = document.querySelector("form");

form.addEventListener("submit" , function(event){
    event.preventDefault();

   
})

let user = document.querySelector('#user');

user.addEventListener( "change" , function(){
    console.log("CHANGE EVENT")
    console.log(`Final value is ${this.value}`);
})

user.addEventListener( "input" , function(){
    console.log("INPUT EVENT")
    console.log(`Final value is ${this.value}`);
})