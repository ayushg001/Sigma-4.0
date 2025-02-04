let input = document.createElement('input')
let button = document.createElement('button')
let body = document.querySelector('body');
body.appendChild(input);
body.appendChild(button);
button.innerText = "Click me";

input.placeholder = "username";
button.setAttribute('id' , 'btn');



// let btn = document.querySelector('btn');
// btn.classList.add("btns");
// btn.style.

let head = document.createElement('h1');
body.appendChild(head)
head.innerHTML = "<u>DOM Practice</u>";
head.style.color = "purple";

let para = document.createElement('p');
para.innerHTML = " Apna College<b> Sigma </b> Practice"
body.appendChild(para)