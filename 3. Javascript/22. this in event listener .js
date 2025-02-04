let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

function main(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click" , main)

h1.addEventListener("click" , main)

h3.addEventListener("click" , main)

p.addEventListener("click" , main)