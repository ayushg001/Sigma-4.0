// let button = document.querySelector('button');

// // let window = document.querySelector('window');

// button.addEventListener('mouseout' , function(){
//     console.log('mouse leaves')
// })

// window.addEventListener('scroll' , function(){
//     console.log('page is being scrolled')
// })

// window.addEventListener('load' , function(){
//     console.log('page is being scrolled')
// })

let body = document.querySelector('body')
let button = document.createElement('button')
body.appendChild(button);
button.innerText = "click me";
button.addEventListener("click" , () => {
    button.style.backgroundColor = 'green'
})

let input = document.querySelector('#name');
let heading = document.querySelector('h2');
input.addEventListener('input' , () => {
    let inputvalue = input.value;
    let filteredValue = inputvalue.replace(/[^a-zA-Z\s]/g, '');
input.value = filteredValue // user ccan not see 3u384'/,;[]
    heading.innerText = filteredValue;
})

