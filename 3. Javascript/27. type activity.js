let form =  document.querySelector('form');

let text =  document.querySelector('#text');
let para = document.querySelector('p')

text.addEventListener('input' , function(){
     console.log(this.value);
    para.innerText = this.value;
})